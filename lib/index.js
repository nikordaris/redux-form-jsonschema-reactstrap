'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = exports.createInputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _InputField = require('./InputField');

var inputFields = _interopRequireWildcard(_InputField);

var _FormField2 = require('./FormField');

var _FormField3 = _interopRequireDefault(_FormField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.createInputField = inputFields.default;
exports.FormField = _FormField3.default;

// Named Components Map

exports.default = _extends({}, inputFields);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbnB1dEZpZWxkcyIsImNyZWF0ZUlucHV0RmllbGQiLCJGb3JtRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztJQUFZQSxXOzs7Ozs7Ozs7O1FBRUxDLGdCLEdBRktELFc7UUFHTEUsUzs7QUFFUDs7K0JBRUtGLFciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbnB1dEZpZWxkcyBmcm9tICcuL0lucHV0RmllbGQnO1xuXG5leHBvcnQgY3JlYXRlSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnO1xuZXhwb3J0IEZvcm1GaWVsZCBmcm9tICcuL0Zvcm1GaWVsZCc7XG5cbi8vIE5hbWVkIENvbXBvbmVudHMgTWFwXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmlucHV0RmllbGRzXG59O1xuIl19