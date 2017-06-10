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