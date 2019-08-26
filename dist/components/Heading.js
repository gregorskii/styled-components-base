"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var H1 = _styledComponents["default"].div.attrs({
  className: "h1"
}).withConfig({
  displayName: "Heading__H1",
  componentId: "sc-19jgbvh-0"
})(["font-size:25px;color:purple;font-family:ITC Avant Garde Gothic Pro;"]);

exports.H1 = H1;