"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fonts = "\n // PUT FONT FACES HERE\n // Project assumes fonts are in the calling application\n";
var reset = "\n  html, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed,\n\tfigure, figcaption, footer, header, hgroup,\n\tmenu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\tarticle, aside, details, figcaption, figure,\n\tfooter, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t}\n\tol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n";
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), reset, fonts);
var _default = GlobalStyle;
exports["default"] = _default;