"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Button from the last section without the interpolations
var Button = _styledComponents["default"].button.withConfig({
  displayName: "Button",
  componentId: "sc-1v1frjm-0"
})(["color:palevioletred;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"]); // A new component based on Button, but with some override styles


var TomatoButton = (0, _styledComponents["default"])(Button).withConfig({
  displayName: "Button__TomatoButton",
  componentId: "sc-1v1frjm-1"
})(["color:tomato;border-color:tomato;"]);
var _default = Button;
exports["default"] = _default;