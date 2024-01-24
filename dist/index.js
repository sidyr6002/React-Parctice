"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _Morning = _interopRequireDefault(require("./Morning"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var el = document.getElementById("app");
var root = (0, _client.createRoot)(el);
var Comb = function Comb() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Morning["default"], null));
};
root.render( /*#__PURE__*/_react["default"].createElement(Comb, null));