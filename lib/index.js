'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = exports.createInputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _InputField = require('./InputField');

var _InputField2 = _interopRequireDefault(_InputField);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _FormField2 = require('./FormField');

var _FormField3 = _interopRequireDefault(_FormField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createInputField = _InputField2.default;
exports.FormField = _FormField3.default;

// Named Components Map

exports.default = _extends({}, _InputField.inputFields, { Card: _Card2.default });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVJbnB1dEZpZWxkIiwiRm9ybUZpZWxkIiwiQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztRQUNPQSxnQjtRQUNBQyxTOztBQUVQOzswREFDaUNDLG9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5wdXRGaWVsZHMgfSBmcm9tICcuL0lucHV0RmllbGQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcbmV4cG9ydCBjcmVhdGVJbnB1dEZpZWxkIGZyb20gJy4vSW5wdXRGaWVsZCc7XG5leHBvcnQgRm9ybUZpZWxkIGZyb20gJy4vRm9ybUZpZWxkJztcblxuLy8gTmFtZWQgQ29tcG9uZW50cyBNYXBcbmV4cG9ydCBkZWZhdWx0IHsgLi4uaW5wdXRGaWVsZHMsIENhcmQgfTtcbiJdfQ==