"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = function Label(_ref) {
  var className = _ref.className,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      children = _ref.children;
  return _react["default"].createElement("label", {
    className: "gz-label ".concat(className),
    onClick: onClick
  }, children);
};

var _default = Label;
exports["default"] = _default;