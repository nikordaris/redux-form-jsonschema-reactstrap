'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorInputField = exports.NumberInputField = exports.DateInputField = exports.FileInputField = exports.PasswordInputField = exports.EmailInputField = exports.InputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ajv = require('ajv');

var _ajv2 = _interopRequireDefault(_ajv);

var _reduxForm = require('redux-form');

var _reactstrap = require('reactstrap');

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputFormField = function (_Component) {
  _inherits(InputFormField, _Component);

  function InputFormField() {
    _classCallCheck(this, InputFormField);

    return _possibleConstructorReturn(this, (InputFormField.__proto__ || Object.getPrototypeOf(InputFormField)).apply(this, arguments));
  }

  _createClass(InputFormField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          styles = _props.styles,
          input = _props.input,
          rest = _objectWithoutProperties(_props, ['id', 'styles', 'input']);

      return _react2.default.createElement(
        _FormField2.default,
        _extends({ id: id }, rest),
        _react2.default.createElement(_reactstrap.Input, _extends({}, input, rest))
      );
    }
  }]);

  return InputFormField;
}(_react.Component);

var InputField = exports.InputField = function (_Component2) {
  _inherits(InputField, _Component2);

  function InputField() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args))), _this2), _this2.validate = function (value, allValues, props) {
      var schema = _this2.props.schema;

      var ajv = new _ajv2.default();
      return ajv.validate(schema, value);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(InputField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, _extends({}, this.props, {
        component: InputFormField,
        validate: this.validate
      }));
    }
  }]);

  return InputField;
}(_react.Component);

InputField.defaultProps = {
  type: 'text'
};


var createInputField = function createInputField(options) {
  return function (_Component3) {
    _inherits(_class, _Component3);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(InputField, _extends({}, this.props, options));
      }
    }]);

    return _class;
  }(_react.Component);
};

var EmailInputField = exports.EmailInputField = createInputField({ type: 'email' });
var PasswordInputField = exports.PasswordInputField = createInputField({ type: 'password' });
var FileInputField = exports.FileInputField = createInputField({ type: 'file' });
var DateInputField = exports.DateInputField = createInputField({ type: 'date' });
var NumberInputField = exports.NumberInputField = createInputField({ type: 'number' });
var ColorInputField = exports.ColorInputField = createInputField({ type: 'color' });
exports.default = createInputField;