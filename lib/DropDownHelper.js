"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightText = void 0;
var highlightText = function (text, keyword, fontColor, backgroundColor) {
    if (fontColor === void 0) { fontColor = 'white'; }
    if (backgroundColor === void 0) { backgroundColor = 'red'; }
    if (!keyword)
        return text;
    var regex = new RegExp("(".concat(keyword, ")"), 'gi');
    var parts = text.split(regex);
    var listStyle = { 'color': fontColor, 'backgroundColor': backgroundColor };
    return parts.map(function (part, index) {
        return regex.test(part) ? <span key={index} style={listStyle}>{part}</span> : part;
    });
};
exports.highlightText = highlightText;
