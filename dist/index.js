"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true,
  Hero: true,
  H1: true,
  ThemeProvider: true
};
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "Hero", {
  enumerable: true,
  get: function get() {
    return _Hero["default"];
  }
});
Object.defineProperty(exports, "H1", {
  enumerable: true,
  get: function get() {
    return _Heading.H1;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider["default"];
  }
});

var _Button = _interopRequireDefault(require("./components/Button"));

var _Hero = _interopRequireDefault(require("./components/Hero"));

var _Heading = require("./components/Heading");

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider"));

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }