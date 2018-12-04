exports.header = {
    height: '0.5cm',
    contents: function(pageNum, numPages) {
        return ""
    }
}

exports.footer = {
    height: '0.5cm',
    contents: function(pageNum, numPages) {
        return "<div><span style='float:left; font-size: 10px'>Mendix Evaluation Guide (https://mendix.com/evaluation-guide)</span><span style='float:right; font-size: 10px'>" + pageNum + " / " + numPages + "</span></div>"
    }
}
