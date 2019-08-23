"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theme = require("./theme");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeProvider = function ThemeProvider(props) {
  return _react["default"].createElement(ThemeProvider, {
    theme: props.theme
  }, props.children);
};

ThemeProvider.defaultProps = {
  theme: _theme.theme
};
var _default = ThemeProvider;
exports["default"] = _default;