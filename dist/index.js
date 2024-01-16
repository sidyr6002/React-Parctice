"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _Div = _interopRequireDefault(require("./Div.js"));
var _Child = _interopRequireDefault(require("./Child.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var el = document.getElementById("app");
var root = (0, _client.createRoot)(el);
var Comb = function Comb() {
  return /*#__PURE__*/_react["default"].createElement(_Div["default"], {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_Child["default"], {
    title: "Today's List"
  }));
};
root.render( /*#__PURE__*/_react["default"].createElement(Comb, null));