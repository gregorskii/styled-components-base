"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeroDiv = _styledComponents["default"].div.withConfig({
  displayName: "Hero__HeroDiv",
  componentId: "pgxk45-0"
})(["background-color:black;"]);

var Hero = function Hero() {
  return _react["default"].createElement(HeroDiv, null, "HERO!");
};

var _default = Hero;
exports["default"] = _default;