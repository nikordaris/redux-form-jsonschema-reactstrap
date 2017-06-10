'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaInputField = exports.SelectInputField = exports.ColorInputField = exports.NumberInputField = exports.DateInputField = exports.FileInputField = exports.PasswordInputField = exports.EmailInputField = exports.InputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ajv = require('ajv');

var _ajv2 = _interopRequireDefault(_ajv);

var _reduxForm = require('redux-form');

var _reactstrap = require('reactstrap');

var _lodash = require('lodash');

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputComponent = function (_Component) {
  _inherits(InputComponent, _Component);

  function InputComponent() {
    _classCallCheck(this, InputComponent);

    return _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).apply(this, arguments));
  }

  _createClass(InputComponent, [{
    key: 'renderInputOptions',
    value: function renderInputOptions(options) {
      return (0, _lodash.sortBy)(options, function (o) {
        return o.label || o.value;
      }).map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return _react2.default.createElement(
          'option',
          { value: value },
          label || value
        );
      });
    }
  }, {
    key: 'renderGroupInputOptions',
    value: function renderGroupInputOptions(options) {
      var _this2 = this;

      return (0, _lodash.sortBy)(Object.keys(options)).map(function (group, idx) {
        return _react2.default.createElement(
          'optgroup',
          { key: idx, label: group },
          _this2.renderInputOptions(options[group])
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          options = _props.options,
          styles = _props.styles,
          input = _props.input,
          rest = _objectWithoutProperties(_props, ['name', 'options', 'styles', 'input']);

      return _react2.default.createElement(
        _FormField2.default,
        rest,
        _react2.default.createElement(
          _reactstrap.Input,
          _extends({ id: name }, input, rest),
          Array.isArray(options) ? this.renderInputOptions(options) : this.renderGroupInputOptions(options)
        )
      );
    }
  }]);

  return InputComponent;
}(_react.Component);

InputComponent.defaultProps = {
  options: []
};

var InputField = exports.InputField = function (_Component2) {
  _inherits(InputField, _Component2);

  function InputField() {
    var _ref2;

    var _temp, _this3, _ret;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref2 = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref2, [this].concat(args))), _this3), _this3.validate = function (value, allValues, props) {
      var schema = _this3.props.schema;

      var ajv = new _ajv2.default();
      return ajv.validate(schema, value);
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(InputField, [{
    key: 'getOptions',
    value: function getOptions() {
      var schema = this.props.schema;

      if (schema.oneOf) {
        return schema.oneOf.map(function (_ref3) {
          var label = _ref3.title,
              value = _ref3.const,
              tooltip = _ref3.description;
          return {
            label: label,
            value: value,
            tooltip: tooltip
          };
        }).filter(function (_ref4) {
          var value = _ref4.value;
          return value;
        });
      }
      return undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxForm.Field, _extends({
        options: this.getOptions(),
        validate: this.validate
      }, this.props));
    }
  }]);

  return InputField;
}(_react.Component);

InputField.defaultProps = {
  type: 'text',
  component: InputComponent
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
var SelectInputField = exports.SelectInputField = createInputField({ type: 'select' });
var TextAreaInputField = exports.TextAreaInputField = createInputField({ type: 'textarea' });
exports.default = createInputField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwiaWR4IiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJuYW1lIiwic3R5bGVzIiwiaW5wdXQiLCJyZXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMiLCJkZWZhdWx0UHJvcHMiLCJJbnB1dEZpZWxkIiwidmFsaWRhdGUiLCJhbGxWYWx1ZXMiLCJzY2hlbWEiLCJhanYiLCJvbmVPZiIsInRpdGxlIiwiY29uc3QiLCJ0b29sdGlwIiwiZGVzY3JpcHRpb24iLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJnZXRPcHRpb25zIiwidHlwZSIsImNvbXBvbmVudCIsImNyZWF0ZUlucHV0RmllbGQiLCJFbWFpbElucHV0RmllbGQiLCJQYXNzd29yZElucHV0RmllbGQiLCJGaWxlSW5wdXRGaWVsZCIsIkRhdGVJbnB1dEZpZWxkIiwiTnVtYmVySW5wdXRGaWVsZCIsIkNvbG9ySW5wdXRGaWVsZCIsIlNlbGVjdElucHV0RmllbGQiLCJUZXh0QXJlYUlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozt1Q0FhZUMsTyxFQUE0QjtBQUM3QyxhQUFPLG9CQUFPQSxPQUFQLEVBQWdCO0FBQUEsZUFBS0MsRUFBRUMsS0FBRixJQUFXRCxFQUFFRSxLQUFsQjtBQUFBLE9BQWhCLEVBQXlDQyxHQUF6QyxDQUE2QztBQUFBLFlBQUdELEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVELEtBQVYsUUFBVUEsS0FBVjtBQUFBLGVBQ2xEO0FBQUE7QUFBQSxZQUFRLE9BQU9DLEtBQWY7QUFBdUJELG1CQUFTQztBQUFoQyxT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akIsQ0FBdkI7QUFDQSxJQUFNTSwwQ0FBaUJKLGlCQUFpQixFQUFFRixNQUFNLE1BQVIsRUFBakIsQ0FBdkI7QUFDQSxJQUFNTyw4Q0FBbUJMLGlCQUFpQixFQUFFRixNQUFNLFFBQVIsRUFBakIsQ0FBekI7QUFDQSxJQUFNUSw0Q0FBa0JOLGlCQUFpQixFQUFFRixNQUFNLE9BQVIsRUFBakIsQ0FBeEI7QUFDQSxJQUFNUyw4Q0FBbUJQLGlCQUFpQixFQUFFRixNQUFNLFFBQVIsRUFBakIsQ0FBekI7QUFDQSxJQUFNVSxrREFBcUJSLGlCQUFpQixFQUFFRixNQUFNLFVBQVIsRUFBakIsQ0FBM0I7a0JBQ1FFLGdCIiwiZmlsZSI6IklucHV0RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4vRm9ybUZpZWxkJztcblxuY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8KiwgKiwgKj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdXG4gIH07XG4gIHByb3BzOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBvcHRpb25zOiBPYmplY3RTZWxlY3RPcHRpb25zVHlwZSxcbiAgICBpbnB1dDogeyBuYW1lOiBzdHJpbmcgfSxcbiAgICBzdHlsZXM6IHsgW3N0eWxlOiBzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogW1JlYWN0LkVsZW1lbnQ8Kj5dXG4gIH07XG5cbiAgcmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnM6IEFycmF5PE9wdGlvblR5cGU+KSB7XG4gICAgcmV0dXJuIHNvcnRCeShvcHRpb25zLCBvID0+IG8ubGFiZWwgfHwgby52YWx1ZSkubWFwKCh7IHZhbHVlLCBsYWJlbCB9KSA9PiAoXG4gICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0+e2xhYmVsIHx8IHZhbHVlfTwvb3B0aW9uPlxuICAgICkpO1xuICB9XG5cbiAgcmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMob3B0aW9uczogeyBbc3RyaW5nXTogQXJyYXk8T3B0aW9uVHlwZT4gfSkge1xuICAgIHJldHVybiBzb3J0QnkoT2JqZWN0LmtleXMob3B0aW9ucykpLm1hcCgoZ3JvdXA6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IChcbiAgICAgIDxvcHRncm91cCBrZXk9e2lkeH0gbGFiZWw9e2dyb3VwfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnNbZ3JvdXBdKX1cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBvcHRpb25zLCBzdHlsZXMsIGlucHV0LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkIHsuLi5yZXN0fT5cbiAgICAgICAgPElucHV0IGlkPXtuYW1lfSB7Li4uaW5wdXR9IHsuLi5yZXN0fT5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShvcHRpb25zKVxuICAgICAgICAgICAgPyB0aGlzLnJlbmRlcklucHV0T3B0aW9ucyhvcHRpb25zKVxuICAgICAgICAgICAgOiB0aGlzLnJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnMpfVxuICAgICAgICA8L0lucHV0PlxuICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBleHRlbmRzIENvbXBvbmVudDwqLCAqLCAqPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbXBvbmVudDogSW5wdXRDb21wb25lbnRcbiAgfTtcblxuICBwcm9wczoge1xuICAgIHNjaGVtYTogYW55LFxuICAgIGNvbXBvbmVudDogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZ1xuICB9O1xuXG4gIHZhbGlkYXRlID0gKHZhbHVlOiBhbnksIGFsbFZhbHVlczogYW55LCBwcm9wczogeyBbc3RyaW5nXTogYW55IH0pID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhanYgPSBuZXcgQWp2KCk7XG4gICAgcmV0dXJuIGFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgfTtcblxuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzY2hlbWEub25lT2YpIHtcbiAgICAgIHJldHVybiBzY2hlbWEub25lT2ZcbiAgICAgICAgLm1hcCgoeyB0aXRsZTogbGFiZWwsIGNvbnN0OiB2YWx1ZSwgZGVzY3JpcHRpb246IHRvb2x0aXAgfSkgPT4gKHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB0b29sdGlwXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZpZWxkXG4gICAgICAgIG9wdGlvbnM9e3RoaXMuZ2V0T3B0aW9ucygpfVxuICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9IChvcHRpb25zOiBDcmVhdGVJbnB1dE9wdGlvbnNUeXBlKSA9PiBjbGFzc1xuICBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPElucHV0RmllbGQgey4uLnRoaXMucHJvcHN9IHsuLi5vcHRpb25zfSAvPjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEVtYWlsSW5wdXRGaWVsZCA9IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZW1haWwnIH0pO1xuZXhwb3J0IGNvbnN0IFBhc3N3b3JkSW5wdXRGaWVsZCA9IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAncGFzc3dvcmQnIH0pO1xuZXhwb3J0IGNvbnN0IEZpbGVJbnB1dEZpZWxkID0gY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdmaWxlJyB9KTtcbmV4cG9ydCBjb25zdCBEYXRlSW5wdXRGaWVsZCA9IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZGF0ZScgfSk7XG5leHBvcnQgY29uc3QgTnVtYmVySW5wdXRGaWVsZCA9IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnbnVtYmVyJyB9KTtcbmV4cG9ydCBjb25zdCBDb2xvcklucHV0RmllbGQgPSBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJyB9KTtcbmV4cG9ydCBjb25zdCBTZWxlY3RJbnB1dEZpZWxkID0gY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdzZWxlY3QnIH0pO1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhSW5wdXRGaWVsZCA9IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAndGV4dGFyZWEnIH0pO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5wdXRGaWVsZDtcbiJdfQ==