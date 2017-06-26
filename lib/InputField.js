'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFields = exports.InputField = undefined;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    value: function renderInputOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return (0, _lodash.sortBy)(options, function (o) {
        return o.label || o.value;
      }).map(function (_ref, idx) {
        var value = _ref.value,
            label = _ref.label;
        return _react2.default.createElement(
          'option',
          { key: idx, value: value },
          label || value
        );
      });
    }
  }, {
    key: 'renderGroupInputOptions',
    value: function renderGroupInputOptions() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _lodash.sortBy)(Object.keys(options)).map(function (group, idx) {
        return _react2.default.createElement(
          'optgroup',
          { key: idx, label: group },
          _this2.renderInputOptions(options[group])
        );
      });
    }
  }, {
    key: 'renderInputWithChildren',
    value: function renderInputWithChildren() {
      var _props = this.props,
          styles = _props.styles,
          options = _props.options,
          input = _props.input,
          type = _props.type,
          children = _props.children,
          schema = _props.schema,
          meta = _props.meta,
          rest = _objectWithoutProperties(_props, ['styles', 'options', 'input', 'type', 'children', 'schema', 'meta']);

      return _react2.default.createElement(
        _reactstrap.Input,
        _extends({
          id: input.name,
          type: type
        }, input, rest, {
          style: styles.input
        }),
        _react2.default.createElement(
          'option',
          { disabled: true, defaultValue: true },
          'Select ',
          input.name,
          ' '
        ),
        Array.isArray(options) ? this.renderInputOptions(options) : this.renderGroupInputOptions(options)
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props2 = this.props,
          styles = _props2.styles,
          type = _props2.type,
          input = _props2.input,
          schema = _props2.schema,
          meta = _props2.meta,
          options = _props2.options,
          children = _props2.children,
          style = _props2.style,
          rest = _objectWithoutProperties(_props2, ['styles', 'type', 'input', 'schema', 'meta', 'options', 'children', 'style']);

      return _react2.default.createElement(_reactstrap.Input, _extends({
        id: input.name,
        type: type
      }, input, rest, {
        style: { height: '40px' }
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          options = _props3.options,
          styles = _props3.styles,
          input = _props3.input,
          schema = _props3.schema,
          type = _props3.type,
          rest = _objectWithoutProperties(_props3, ['options', 'styles', 'input', 'schema', 'type']);

      return _react2.default.createElement(
        _FormField2.default,
        _extends({ name: input.name, schema: schema }, rest),
        options ? this.renderInputWithChildren() : this.renderInput()
      );
    }
  }]);

  return InputComponent;
}(_react.Component);

InputComponent.defaultProps = {
  styles: {}
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
      var _this3$props = _this3.props,
          schema = _this3$props.schema,
          required = _this3$props.required;

      var ajv = new _ajv2.default();
      ajv.validate(schema, value);
      if ((0, _lodash.isEmpty)(value) && required) {
        return 'missing required field';
      } else if (!(0, _lodash.isEmpty)(value)) {
        return (0, _lodash.get)(ajv, 'errors[0].message');
      }
      return undefined;
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(InputField, [{
    key: 'getOptions',
    value: function getOptions(schema) {
      var _this4 = this;

      var group = schema.title;

      if (schema.oneOf) {
        return schema.oneOf.reduce(function (result, optionsSchema) {
          var options = _this4.getOptions(optionsSchema);
          var label = optionsSchema.title,
              value = optionsSchema.const,
              tooltip = optionsSchema.description;


          if (options) {
            result.push.apply(result, _toConsumableArray(options));
          } else {
            result.push({
              group: group,
              label: label,
              value: value,
              tooltip: tooltip
            });
          }

          return result;
        }, []).filter(function (_ref3) {
          var value = _ref3.value;
          return value;
        });
      }
      return undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          schema = _props4.schema,
          name = _props4.name,
          component = _props4.component,
          rest = _objectWithoutProperties(_props4, ['schema', 'name', 'component']);

      var options = this.getOptions(schema);
      if (options) {
        options = options.reduce(function (result, _ref4) {
          var group = _ref4.group,
              option = _objectWithoutProperties(_ref4, ['group']);

          var groupItems = result[group] || [];
          return _extends({}, result, _defineProperty({}, group, [].concat(_toConsumableArray(groupItems), [option])));
        }, {});

        var values = Object.values(options);
        if (values.length === 1) {
          options = values[0];
        }
      }

      return _react2.default.createElement(_reduxForm.Field, _extends({
        name: name,
        schema: schema,
        component: component,
        options: options,
        validate: this.validate
      }, rest));
    }
  }]);

  return InputField;
}(_react.Component);

InputField.defaultProps = {
  type: 'text',
  component: InputComponent,
  required: false
};


var createInputField = function createInputField(options) {
  var CreatedInputField = function (_Component3) {
    _inherits(CreatedInputField, _Component3);

    function CreatedInputField() {
      _classCallCheck(this, CreatedInputField);

      return _possibleConstructorReturn(this, (CreatedInputField.__proto__ || Object.getPrototypeOf(CreatedInputField)).apply(this, arguments));
    }

    _createClass(CreatedInputField, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(InputField, _extends({}, this.props, options));
      }
    }]);

    return CreatedInputField;
  }(_react.Component);

  return CreatedInputField;
};

var inputFields = exports.inputFields = {
  InputField: InputField,
  EmailInputField: createInputField({ type: 'email' }),
  PasswordInputField: createInputField({ type: 'password' }),
  DateInputField: createInputField({ type: 'date' }),
  DateTimeInputField: createInputField({ type: 'datetime-local' }),
  NumberInputField: createInputField({
    type: 'number',
    normalize: function normalize(value) {
      return parseInt(value, 10) || value;
    }
  }),
  ColorInputField: createInputField({
    type: 'color',
    styles: { input: { height: '40px' } }
  }),
  SelectInputField: createInputField({ type: 'select' }),
  TextAreaInputField: createInputField({ type: 'textarea' })
};

exports.default = createInputField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJzdHlsZXMiLCJpbnB1dCIsInR5cGUiLCJjaGlsZHJlbiIsInNjaGVtYSIsIm1ldGEiLCJyZXN0IiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlckdyb3VwSW5wdXRPcHRpb25zIiwic3R5bGUiLCJoZWlnaHQiLCJyZW5kZXJJbnB1dFdpdGhDaGlsZHJlbiIsInJlbmRlcklucHV0IiwiZGVmYXVsdFByb3BzIiwiSW5wdXRGaWVsZCIsInZhbGlkYXRlIiwiYWxsVmFsdWVzIiwicmVxdWlyZWQiLCJhanYiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsIm9uZU9mIiwicmVkdWNlIiwicmVzdWx0Iiwib3B0aW9uc1NjaGVtYSIsImdldE9wdGlvbnMiLCJjb25zdCIsInRvb2x0aXAiLCJkZXNjcmlwdGlvbiIsInB1c2giLCJmaWx0ZXIiLCJjb21wb25lbnQiLCJvcHRpb24iLCJncm91cEl0ZW1zIiwidmFsdWVzIiwibGVuZ3RoIiwiY3JlYXRlSW5wdXRGaWVsZCIsIkNyZWF0ZWRJbnB1dEZpZWxkIiwiaW5wdXRGaWVsZHMiLCJFbWFpbElucHV0RmllbGQiLCJQYXNzd29yZElucHV0RmllbGQiLCJEYXRlSW5wdXRGaWVsZCIsIkRhdGVUaW1lSW5wdXRGaWVsZCIsIk51bWJlcklucHV0RmllbGQiLCJub3JtYWxpemUiLCJwYXJzZUludCIsIkNvbG9ySW5wdXRGaWVsZCIsIlNlbGVjdElucHV0RmllbGQiLCJUZXh0QXJlYUlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7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QUFlekJnRCxzQkFBb0JaLGlCQUFpQixFQUFFcEMsTUFBTSxVQUFSLEVBQWpCO0FBZkssQ0FBcEI7O2tCQWtCUW9DLGdCIiwiZmlsZSI6IklucHV0RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBzb3J0QnksIGdldCwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi9Gb3JtRmllbGQnO1xuXG5jbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDwqLCAqLCAqPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiB7fVxuICB9O1xuICBwcm9wczoge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICBzY2hlbWE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIG9wdGlvbnM/OiBPYmplY3RTZWxlY3RPcHRpb25zVHlwZSxcbiAgICBpbnB1dDogeyBuYW1lOiBzdHJpbmcgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogW1JlYWN0LkVsZW1lbnQ8Kj5dLFxuICAgIHN0eWxlczogeyBbc3R5bGU6IHN0cmluZ106IGFueSB9LFxuICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfVxuICB9O1xuXG4gIHJlbmRlcklucHV0T3B0aW9ucyhvcHRpb25zOiBBcnJheTxPcHRpb25UeXBlPiA9IFtdKSB7XG4gICAgcmV0dXJuIHNvcnRCeShvcHRpb25zLCBvID0+IG8ubGFiZWwgfHwgby52YWx1ZSkubWFwKCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGxhYmVsXG4gICAgfSwgaWR4KSA9PiA8b3B0aW9uIGtleT17aWR4fSB2YWx1ZT17dmFsdWV9PntsYWJlbCB8fCB2YWx1ZX08L29wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMob3B0aW9uczogeyBbc3RyaW5nXTogQXJyYXk8T3B0aW9uVHlwZT4gfSA9IHt9KSB7XG4gICAgcmV0dXJuIHNvcnRCeShPYmplY3Qua2V5cyhvcHRpb25zKSkubWFwKChncm91cDogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgPG9wdGdyb3VwIGtleT17aWR4fSBsYWJlbD17Z3JvdXB9PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9uc1tncm91cF0pfVxuICAgICAgPC9vcHRncm91cD5cbiAgICApKTtcbiAgfVxuXG4gIHJlbmRlcklucHV0V2l0aENoaWxkcmVuKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHNjaGVtYSxcbiAgICAgIG1ldGEsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGlkPXtpbnB1dC5uYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17dHJ1ZX0+U2VsZWN0IHtpbnB1dC5uYW1lfSA8L29wdGlvbj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkob3B0aW9ucylcbiAgICAgICAgICA/IHRoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgICAgOiB0aGlzLnJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnMpfVxuICAgICAgPC9JbnB1dD5cbiAgICApO1xuICB9XG4gIHJlbmRlcklucHV0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBpbnB1dCxcbiAgICAgIHNjaGVtYSxcbiAgICAgIG1ldGEsXG4gICAgICBvcHRpb25zLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzdHlsZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGlkPXtpbnB1dC5uYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0MHB4JyB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHN0eWxlcywgaW5wdXQsIHNjaGVtYSwgdHlwZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZCBuYW1lPXtpbnB1dC5uYW1lfSBzY2hlbWE9e3NjaGVtYX0gey4uLnJlc3R9PlxuICAgICAgICB7b3B0aW9ucyA/IHRoaXMucmVuZGVySW5wdXRXaXRoQ2hpbGRyZW4oKSA6IHRoaXMucmVuZGVySW5wdXQoKX1cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQ8KiwgKiwgKj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb21wb25lbnQ6IElucHV0Q29tcG9uZW50LFxuICAgIHJlcXVpcmVkOiBmYWxzZVxuICB9O1xuXG4gIHByb3BzOiB7XG4gICAgc2NoZW1hOiBhbnksXG4gICAgY29tcG9uZW50OiBhbnksXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICByZXF1aXJlZDogYm9vbGVhblxuICB9O1xuXG4gIHZhbGlkYXRlID0gKHZhbHVlOiBhbnksIGFsbFZhbHVlczogYW55LCBwcm9wczogeyBbc3RyaW5nXTogYW55IH0pID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSwgcmVxdWlyZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWp2ID0gbmV3IEFqdigpO1xuICAgIGFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSh2YWx1ZSkgJiYgcmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiAnbWlzc2luZyByZXF1aXJlZCBmaWVsZCc7XG4gICAgfSBlbHNlIGlmICghaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBnZXQoYWp2LCAnZXJyb3JzWzBdLm1lc3NhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBnZXRPcHRpb25zKHNjaGVtYTogYW55KSB7XG4gICAgY29uc3QgeyB0aXRsZTogZ3JvdXAgfSA9IHNjaGVtYTtcbiAgICBpZiAoc2NoZW1hLm9uZU9mKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLm9uZU9mXG4gICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgb3B0aW9uc1NjaGVtYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9uc1NjaGVtYSk7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgICAgY29uc3Q6IHZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvb2x0aXBcbiAgICAgICAgICB9ID0gb3B0aW9uc1NjaGVtYTtcblxuICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi5vcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICBncm91cCxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICB0b29sdGlwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY2hlbWEsIG5hbWUsIGNvbXBvbmVudCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhzY2hlbWEpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgeyBncm91cCwgLi4ub3B0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJdGVtcyA9IHJlc3VsdFtncm91cF0gfHwgW107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIFtncm91cF06IFsuLi5ncm91cEl0ZW1zLCBvcHRpb25dXG4gICAgICAgIH07XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob3B0aW9ucyk7XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcHRpb25zID0gdmFsdWVzWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9IChvcHRpb25zOiBDcmVhdGVJbnB1dE9wdGlvbnNUeXBlKSA9PiB7XG4gIGNsYXNzIENyZWF0ZWRJbnB1dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPElucHV0RmllbGQgey4uLnRoaXMucHJvcHN9IHsuLi5vcHRpb25zfSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENyZWF0ZWRJbnB1dEZpZWxkO1xufTtcblxuZXhwb3J0IGNvbnN0IGlucHV0RmllbGRzID0ge1xuICBJbnB1dEZpZWxkLFxuICBFbWFpbElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZW1haWwnIH0pLFxuICBQYXNzd29yZElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAncGFzc3dvcmQnIH0pLFxuICBEYXRlSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdkYXRlJyB9KSxcbiAgRGF0ZVRpbWVJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyB9KSxcbiAgTnVtYmVySW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgbm9ybWFsaXplOiB2YWx1ZSA9PiBwYXJzZUludCh2YWx1ZSwgMTApIHx8IHZhbHVlXG4gIH0pLFxuICBDb2xvcklucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoe1xuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgc3R5bGVzOiB7IGlucHV0OiB7IGhlaWdodDogJzQwcHgnIH0gfVxuICB9KSxcbiAgU2VsZWN0SW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdzZWxlY3QnIH0pLFxuICBUZXh0QXJlYUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAndGV4dGFyZWEnIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dEZpZWxkO1xuIl19