"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var _default = (0, _styledComponents.withTheme)(Button);

exports["default"] = _default;