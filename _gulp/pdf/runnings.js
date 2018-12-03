exports.header = {
    height: '0.5cm',
    contents: function(pageNum, numPages) {
        return ""
    }
}

exports.footer = {
    height: '0.5cm',
    contents: function(pageNum, numPages) {
        return "<div><span style='float:left; font-size: 11px'>Mendix Evaluation Guide (https://mendix.com/evaluation-guide)</span><span style='float:right; font-size: 11px'>" + pageNum + " / " + numPages + "</span></div>"
    }
}
