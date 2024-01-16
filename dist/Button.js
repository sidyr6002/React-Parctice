"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = function Button(props) {
  var clickFunc = props.clickFunc,
    children = props.children;
  var btnFunc = function btnFunc() {
    clickFunc();
  };
  console.log(props);
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: btnFunc
  }, children);
};
var _default = exports["default"] = Button;