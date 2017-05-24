'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = exports.createInputField = undefined;

var _InputField = require('./InputField');

Object.keys(_InputField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputField[key];
    }
  });
});

var _InputField2 = _interopRequireDefault(_InputField);

var _FormField2 = require('./FormField');

var _FormField3 = _interopRequireDefault(_FormField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createInputField = _InputField2.default;
exports.FormField = _FormField3.default;