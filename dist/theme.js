"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invertTheme = exports.base = void 0;
// Define our `fg` and `bg` on the theme
var base = {
  fg: "palevioletred",
  bg: "white"
}; // This theme swaps `fg` and `bg`

exports.base = base;

var invertTheme = function invertTheme(_ref) {
  var fg = _ref.fg,
      bg = _ref.bg;
  return {
    fg: bg,
    bg: fg
  };
};

exports.invertTheme = invertTheme;