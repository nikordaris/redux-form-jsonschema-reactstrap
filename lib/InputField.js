'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFields = exports.InputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

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


var createInputField = function createInputField(_options) {
  var styles = _options.styles,
      options = _objectWithoutProperties(_options, ['styles']);

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

  return (0, _reactJss2.default)(styles)(CreatedInputField);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJzdHlsZXMiLCJpbnB1dCIsInR5cGUiLCJjaGlsZHJlbiIsInNjaGVtYSIsIm1ldGEiLCJyZXN0IiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlckdyb3VwSW5wdXRPcHRpb25zIiwic3R5bGUiLCJoZWlnaHQiLCJyZW5kZXJJbnB1dFdpdGhDaGlsZHJlbiIsInJlbmRlcklucHV0IiwiZGVmYXVsdFByb3BzIiwiSW5wdXRGaWVsZCIsInZhbGlkYXRlIiwiYWxsVmFsdWVzIiwicmVxdWlyZWQiLCJhanYiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsIm9uZU9mIiwicmVkdWNlIiwicmVzdWx0Iiwib3B0aW9uc1NjaGVtYSIsImdldE9wdGlvbnMiLCJjb25zdCIsInRvb2x0aXAiLCJkZXNjcmlwdGlvbiIsInB1c2giLCJmaWx0ZXIiLCJjb21wb25lbnQiLCJvcHRpb24iLCJncm91cEl0ZW1zIiwidmFsdWVzIiwibGVuZ3RoIiwiY3JlYXRlSW5wdXRGaWVsZCIsIl9vcHRpb25zIiwiQ3JlYXRlZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsIkVtYWlsSW5wdXRGaWVsZCIsIlBhc3N3b3JkSW5wdXRGaWVsZCIsIkRhdGVJbnB1dEZpZWxkIiwiRGF0ZVRpbWVJbnB1dEZpZWxkIiwiTnVtYmVySW5wdXRGaWVsZCIsIm5vcm1hbGl6ZSIsInBhcnNlSW50IiwiQ29sb3JJbnB1dEZpZWxkIiwiU2VsZWN0SW5wdXRGaWVsZCIsIlRleHRBcmVhSW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7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VUFBTSxPQUQwQjtBQUVoQ0YsWUFBUSxFQUFFQyxPQUFPLEVBQUVXLFFBQVEsTUFBVixFQUFUO0FBRndCLEdBQWpCLENBVlE7QUFjekJzQyxvQkFBa0JaLGlCQUFpQixFQUFFcEMsTUFBTSxRQUFSLEVBQWpCLENBZE87QUFlekJpRCxzQkFBb0JiLGlCQUFpQixFQUFFcEMsTUFBTSxVQUFSLEVBQWpCO0FBZkssQ0FBcEI7O2tCQWtCUW9DLGdCIiwiZmlsZSI6IklucHV0RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGluamVjdFNoZWV0IGZyb20gJ3JlYWN0LWpzcyc7XG5pbXBvcnQgQWp2IGZyb20gJ2Fqdic7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHNvcnRCeSwgZ2V0LCBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuL0Zvcm1GaWVsZCc7XG5cbmNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PCosICosICo+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IHt9XG4gIH07XG4gIHByb3BzOiB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHNjaGVtYTogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgb3B0aW9ucz86IE9iamVjdFNlbGVjdE9wdGlvbnNUeXBlLFxuICAgIGlucHV0OiB7IG5hbWU6IHN0cmluZyB9LFxuICAgIG1ldGE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIGNoaWxkcmVuOiBbUmVhY3QuRWxlbWVudDwqPl0sXG4gICAgY2xhc3NlczogeyBbc3RyaW5nXTogYW55IH1cbiAgfTtcblxuICByZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9uczogQXJyYXk8T3B0aW9uVHlwZT4gPSBbXSkge1xuICAgIHJldHVybiBzb3J0Qnkob3B0aW9ucywgbyA9PiBvLmxhYmVsIHx8IG8udmFsdWUpLm1hcCgoe1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbFxuICAgIH0sIGlkeCkgPT4gPG9wdGlvbiBrZXk9e2lkeH0gdmFsdWU9e3ZhbHVlfT57bGFiZWwgfHwgdmFsdWV9PC9vcHRpb24+KTtcbiAgfVxuXG4gIHJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnM6IHsgW3N0cmluZ106IEFycmF5PE9wdGlvblR5cGU+IH0gPSB7fSkge1xuICAgIHJldHVybiBzb3J0QnkoT2JqZWN0LmtleXMob3B0aW9ucykpLm1hcCgoZ3JvdXA6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IChcbiAgICAgIDxvcHRncm91cCBrZXk9e2lkeH0gbGFiZWw9e2dyb3VwfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnNbZ3JvdXBdKX1cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgKSk7XG4gIH1cblxuICByZW5kZXJJbnB1dFdpdGhDaGlsZHJlbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdHlsZXMsXG4gICAgICBvcHRpb25zLFxuICAgICAgaW5wdXQsXG4gICAgICB0eXBlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzY2hlbWEsXG4gICAgICBtZXRhLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBpZD17aW5wdXQubmFtZX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgey4uLmlucHV0fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCBkZWZhdWx0VmFsdWU9e3RydWV9PlNlbGVjdCB7aW5wdXQubmFtZX0gPC9vcHRpb24+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KG9wdGlvbnMpXG4gICAgICAgICAgPyB0aGlzLnJlbmRlcklucHV0T3B0aW9ucyhvcHRpb25zKVxuICAgICAgICAgIDogdGhpcy5yZW5kZXJHcm91cElucHV0T3B0aW9ucyhvcHRpb25zKX1cbiAgICAgIDwvSW5wdXQ+XG4gICAgKTtcbiAgfVxuICByZW5kZXJJbnB1dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdHlsZXMsXG4gICAgICB0eXBlLFxuICAgICAgaW5wdXQsXG4gICAgICBzY2hlbWEsXG4gICAgICBtZXRhLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgc3R5bGUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBpZD17aW5wdXQubmFtZX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgey4uLmlucHV0fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDBweCcgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBzdHlsZXMsIGlucHV0LCBzY2hlbWEsIHR5cGUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGQgbmFtZT17aW5wdXQubmFtZX0gc2NoZW1hPXtzY2hlbWF9IHsuLi5yZXN0fT5cbiAgICAgICAge29wdGlvbnMgPyB0aGlzLnJlbmRlcklucHV0V2l0aENoaWxkcmVuKCkgOiB0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50PCosICosICo+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29tcG9uZW50OiBJbnB1dENvbXBvbmVudCxcbiAgICByZXF1aXJlZDogZmFsc2VcbiAgfTtcblxuICBwcm9wczoge1xuICAgIHNjaGVtYTogYW55LFxuICAgIGNvbXBvbmVudDogYW55LFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgY2xhc3NlczogeyBbc3RyaW5nXTogYW55IH1cbiAgfTtcblxuICB2YWxpZGF0ZSA9ICh2YWx1ZTogYW55LCBhbGxWYWx1ZXM6IGFueSwgcHJvcHM6IHsgW3N0cmluZ106IGFueSB9KSA9PiB7XG4gICAgY29uc3QgeyBzY2hlbWEsIHJlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFqdiA9IG5ldyBBanYoKTtcbiAgICBhanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XG4gICAgaWYgKGlzRW1wdHkodmFsdWUpICYmIHJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gJ21pc3NpbmcgcmVxdWlyZWQgZmllbGQnO1xuICAgIH0gZWxzZSBpZiAoIWlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZ2V0KGFqdiwgJ2Vycm9yc1swXS5tZXNzYWdlJyk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgZ2V0T3B0aW9ucyhzY2hlbWE6IGFueSkge1xuICAgIGNvbnN0IHsgdGl0bGU6IGdyb3VwIH0gPSBzY2hlbWE7XG4gICAgaWYgKHNjaGVtYS5vbmVPZikge1xuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZlxuICAgICAgICAucmVkdWNlKChyZXN1bHQsIG9wdGlvbnNTY2hlbWEpID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKG9wdGlvbnNTY2hlbWEpO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICAgIGNvbnN0OiB2YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0b29sdGlwXG4gICAgICAgICAgfSA9IG9wdGlvbnNTY2hlbWE7XG5cbiAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4ub3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgdG9vbHRpcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgW10pXG4gICAgICAgIC5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NoZW1hLCBuYW1lLCBjb21wb25lbnQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoc2NoZW1hKTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMucmVkdWNlKChyZXN1bHQsIHsgZ3JvdXAsIC4uLm9wdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwSXRlbXMgPSByZXN1bHRbZ3JvdXBdIHx8IFtdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICBbZ3JvdXBdOiBbLi4uZ3JvdXBJdGVtcywgb3B0aW9uXVxuICAgICAgICB9O1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9wdGlvbnMpO1xuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3B0aW9ucyA9IHZhbHVlc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgdmFsaWRhdGU9e3RoaXMudmFsaWRhdGV9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUlucHV0RmllbGQgPSAoX29wdGlvbnM6IENyZWF0ZUlucHV0T3B0aW9uc1R5cGUpID0+IHtcbiAgY29uc3QgeyBzdHlsZXMsIC4uLm9wdGlvbnMgfSA9IF9vcHRpb25zO1xuICBjbGFzcyBDcmVhdGVkSW5wdXRGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxJbnB1dEZpZWxkIHsuLi50aGlzLnByb3BzfSB7Li4ub3B0aW9uc30gLz47XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmplY3RTaGVldChzdHlsZXMpKENyZWF0ZWRJbnB1dEZpZWxkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnB1dEZpZWxkcyA9IHtcbiAgSW5wdXRGaWVsZCxcbiAgRW1haWxJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2VtYWlsJyB9KSxcbiAgUGFzc3dvcmRJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ3Bhc3N3b3JkJyB9KSxcbiAgRGF0ZUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZGF0ZScgfSksXG4gIERhdGVUaW1lSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdkYXRldGltZS1sb2NhbCcgfSksXG4gIE51bWJlcklucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoe1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIG5vcm1hbGl6ZTogdmFsdWUgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSB8fCB2YWx1ZVxuICB9KSxcbiAgQ29sb3JJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHtcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIHN0eWxlczogeyBpbnB1dDogeyBoZWlnaHQ6ICc0MHB4JyB9IH1cbiAgfSksXG4gIFNlbGVjdElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnc2VsZWN0JyB9KSxcbiAgVGV4dEFyZWFJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ3RleHRhcmVhJyB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5wdXRGaWVsZDtcbiJdfQ==