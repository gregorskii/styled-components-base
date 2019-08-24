"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Define our button, but with the use of props.theme this time
var Button = _styledComponents["default"].button.withConfig({
  displayName: "Button",
  componentId: "sc-1v1frjm-0"
})(["color:", ";border:2px solid ", ";background:", ";font-size:1em;margin:1em;padding:0.25em 1em;border-radius:3px;"], function (props) {
  return props.theme.fg;
}, function (props) {
  return props.theme.fg;
}, function (props) {
  return props.theme.bg;
});

var _default = Button;
exports["default"] = _default;