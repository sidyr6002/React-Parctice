"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Div = function Div(props) {
  var children = props.children,
    className = props.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, children);
};
var _default = exports["default"] = Div;