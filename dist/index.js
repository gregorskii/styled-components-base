"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true,
  theme: true,
  ThemeProvider: true
};
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function get() {
    return _theme["default"];
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider["default"];
  }
});

var _Button = _interopRequireDefault(require("./components/Button"));

var _theme = _interopRequireWildcard(require("./theme"));

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

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }