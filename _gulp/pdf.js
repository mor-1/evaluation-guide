const markdownpdf = require('markdown-pdf');
const { getFiles } = require('./helpers');
const split = require('split');
const through = require('through');
const duplexer = require('duplexer');
const Promise = require('bluebird');
const fm = require('front-matter');
const path = require('path');
const promiseLimit = require('promise-limit');
const cheerio = require('cheerio');
const gutil = require('gulp-util');

let built = 0;
let toBuild = 0;
let lastParsed = -1;

const pluginID = gutil.colors.cyan('[PDF]');

function preProcessMd () {
    // Split the input stream by lines
    var splitter = split()

    // Replace occurences of "foo" with "bar"
    var replacer = through(function (data) {
        console.log(data);
      this.queue(data)
    })

    splitter.pipe(replacer)
    return duplexer(splitter, replacer)
}

function preProcessHtml (file) {
    return function () {
        // Split the input stream by lines
        const splitter = split()

        // Replace occurences of "foo" with "bar"
        const replacer = through(function (data) {
            const $ = cheerio.load(data);
            $('a').each(function(i, el) {
                const $el = $(this);
                const text = $el.text();
                const foundHref = $el.attr('href');
                const name = $el.attr('name');
                if (!name && foundHref) {
                    const href = foundHref.trim();
                    if (href.indexOf('http:') !== 0 && href.indexOf('https') !== 0) {
                        const newPath = 'https://mendix.com' + path.join(path.dirname(file.src), href).replace(file.base, '');
                        $el.replaceWith($(`<a href="${newPath}">${text}</a>`));
                    }
                }
            });
            this.queue($('body').html());
        })

        splitter.pipe(replacer)
        return duplexer(splitter, replacer)
    }
}

const frontMatterExtraction = (file) => {
    return md => {
        const oldRender = md.render;

        md.render = (str) => {
            const content = fm(str);

            let body = content.body;
            if (content.attributes && content.attributes.title) {
                body = `# ${content.attributes.title}\n#### URL: [${file.url}](${file.url})\n\n` + content.body;
            }
            body = body.replace(/\{#.*\}/ig, '');
            body = body.replace(/\{\{%.*%\}\}/ig, '');

            return oldRender.call(md, body);
        }
    }
}

const markdownToPDF = file => new Promise((resolve, reject) => {
    const cwd = path.dirname(file.src);
    markdownpdf({
            // preProcessMd,
            preProcessHtml: preProcessHtml(file),
            cwd,
            remarkable: {
                html: true,
                xhtmlOut: false,
                linkify: false,
                breaks: false,
                preset: 'full',
                syntax: [ 'sup', 'sub' ],
                plugins: [
                    frontMatterExtraction(file)
                ]
            },
            cssPath: path.join(__dirname, 'pdf', 'pdf.css'),
            runningsPath: path.join(__dirname, 'pdf', 'runnings.js')
        })
        .from(file.src)
        .to(file.dist, () => {
            built++;
            const perc = Math.floor(100 * (built / toBuild));
            if (perc % 10 === 0 && perc !== lastParsed) {
              lastParsed = perc;
              gutil.log(`${pluginID} PDFs created: ${perc}%`);
            }
            // gutil.log(`${pluginID} Written PDF for ${file.url}`);
            resolve(true);
        })
});

const generatePDF = async (opts) => {

    const allMarkdownFiles = await getFiles(opts.src, '.md');
    const mappedFiles = allMarkdownFiles.map(file => {
        return {
            src: file,
            base: opts.src,
            url: `https://www.mendix.com${file.replace(opts.src, '').replace('.md', '')}`,
            dist: file.replace(opts.src, opts.dist).replace('.md', '.pdf')
        };
    });
    const limit = promiseLimit(10);

    gutil.log(`${pluginID} Writing ${mappedFiles.length} PDFs`);
    toBuild = mappedFiles.length;
    built = 0;

    await Promise.all(mappedFiles.map(file => limit(() => markdownToPDF(file))));

    opts.cb && opts.cb();
}

module.exports = generatePDF;
