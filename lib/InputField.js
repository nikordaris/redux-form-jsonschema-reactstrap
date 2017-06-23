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
          name = _props.name,
          options = _props.options,
          input = _props.input,
          type = _props.type;


      return _react2.default.createElement(
        _reactstrap.Input,
        _extends({ id: name, type: type }, input),
        Array.isArray(options) ? this.renderInputOptions(options) : this.renderGroupInputOptions(options)
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props2 = this.props,
          name = _props2.name,
          type = _props2.type,
          input = _props2.input;

      return _react2.default.createElement(_reactstrap.Input, _extends({ id: name, type: type }, input));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          name = _props3.name,
          options = _props3.options,
          styles = _props3.styles,
          input = _props3.input,
          schema = _props3.schema,
          type = _props3.type,
          rest = _objectWithoutProperties(_props3, ['name', 'options', 'styles', 'input', 'schema', 'type']);

      return _react2.default.createElement(
        _FormField2.default,
        _extends({ schema: schema }, rest),
        options ? this.renderInputWithChildren() : this.renderInput()
      );
    }
  }]);

  return InputComponent;
}(_react.Component);

InputComponent.defaultProps = {};

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
      ajv.validate(schema, value);
      return (0, _lodash.get)(ajv, 'errors[0].message');
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
  component: InputComponent
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
  FileInputField: createInputField({ type: 'file' }),
  DateInputField: createInputField({ type: 'date' }),
  NumberInputField: createInputField({ type: 'number' }),
  ColorInputField: createInputField({ type: 'color' }),
  SelectInputField: createInputField({ type: 'select' }),
  TextAreaInputField: createInputField({ type: 'textarea' })
};

exports.default = createInputField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJuYW1lIiwiaW5wdXQiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMiLCJzdHlsZXMiLCJzY2hlbWEiLCJyZXN0IiwicmVuZGVySW5wdXRXaXRoQ2hpbGRyZW4iLCJyZW5kZXJJbnB1dCIsImRlZmF1bHRQcm9wcyIsIklucHV0RmllbGQiLCJ2YWxpZGF0ZSIsImFsbFZhbHVlcyIsImFqdiIsInRpdGxlIiwib25lT2YiLCJyZWR1Y2UiLCJyZXN1bHQiLCJvcHRpb25zU2NoZW1hIiwiZ2V0T3B0aW9ucyIsImNvbnN0IiwidG9vbHRpcCIsImRlc2NyaXB0aW9uIiwicHVzaCIsImZpbHRlciIsInVuZGVmaW5lZCIsImNvbXBvbmVudCIsIm9wdGlvbiIsImdyb3VwSXRlbXMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJjcmVhdGVJbnB1dEZpZWxkIiwiQ3JlYXRlZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsIkVtYWlsSW5wdXRGaWVsZCIsIlBhc3N3b3JkSW5wdXRGaWVsZCIsIkZpbGVJbnB1dEZpZWxkIiwiRGF0ZUlucHV0RmllbGQiLCJOdW1iZXJJbnB1dEZpZWxkIiwiQ29sb3JJbnB1dEZpZWxkIiwiU2VsZWN0SW5wdXRGaWVsZCIsIlRleHRBcmVhSW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozt5Q0FZZ0Q7QUFBQSxVQUFqQ0MsT0FBaUMsdUVBQUosRUFBSTs7QUFDbEQsYUFBTyxvQkFBT0EsT0FBUCxFQUFnQjtB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QUFqQixDQVBRO0FBUXpCd0Msb0JBQWtCVCxpQkFBaUIsRUFBRS9CLE1BQU0sUUFBUixFQUFqQixDQVJPO0FBU3pCeUMsc0JBQW9CVixpQkFBaUIsRUFBRS9CLE1BQU0sVUFBUixFQUFqQjtBQVRLLENBQXBCOztrQkFZUStCLGdCIiwiZmlsZSI6IklucHV0RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBzb3J0QnksIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi9Gb3JtRmllbGQnO1xuXG5jbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDwqLCAqLCAqPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHNjaGVtYTogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgb3B0aW9ucz86IE9iamVjdFNlbGVjdE9wdGlvbnNUeXBlLFxuICAgIGlucHV0OiB7IG5hbWU6IHN0cmluZyB9LFxuICAgIHN0eWxlczogeyBbc3R5bGU6IHN0cmluZ106IGFueSB9LFxuICAgIGNoaWxkcmVuOiBbUmVhY3QuRWxlbWVudDwqPl1cbiAgfTtcblxuICByZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9uczogQXJyYXk8T3B0aW9uVHlwZT4gPSBbXSkge1xuICAgIHJldHVybiBzb3J0Qnkob3B0aW9ucywgbyA9PiBvLmxhYmVsIHx8IG8udmFsdWUpLm1hcCgoe1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbFxuICAgIH0sIGlkeCkgPT4gPG9wdGlvbiBrZXk9e2lkeH0gdmFsdWU9e3ZhbHVlfT57bGFiZWwgfHwgdmFsdWV9PC9vcHRpb24+KTtcbiAgfVxuXG4gIHJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnM6IHsgW3N0cmluZ106IEFycmF5PE9wdGlvblR5cGU+IH0gPSB7fSkge1xuICAgIHJldHVybiBzb3J0QnkoT2JqZWN0LmtleXMob3B0aW9ucykpLm1hcCgoZ3JvdXA6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IChcbiAgICAgIDxvcHRncm91cCBrZXk9e2lkeH0gbGFiZWw9e2dyb3VwfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnNbZ3JvdXBdKX1cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgKSk7XG4gIH1cblxuICByZW5kZXJJbnB1dFdpdGhDaGlsZHJlbigpIHtcbiAgICBjb25zdCB7IG5hbWUsIG9wdGlvbnMsIGlucHV0LCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dCBpZD17bmFtZX0gdHlwZT17dHlwZX0gey4uLmlucHV0fT5cbiAgICAgICAge0FycmF5LmlzQXJyYXkob3B0aW9ucylcbiAgICAgICAgICA/IHRoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgICAgOiB0aGlzLnJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnMpfVxuICAgICAgPC9JbnB1dD5cbiAgICApO1xuICB9XG4gIHJlbmRlcklucHV0KCkge1xuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgaW5wdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxJbnB1dCBpZD17bmFtZX0gdHlwZT17dHlwZX0gey4uLmlucHV0fSAvPjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBvcHRpb25zLCBzdHlsZXMsIGlucHV0LCBzY2hlbWEsIHR5cGUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGQgc2NoZW1hPXtzY2hlbWF9IHsuLi5yZXN0fT5cbiAgICAgICAge29wdGlvbnMgPyB0aGlzLnJlbmRlcklucHV0V2l0aENoaWxkcmVuKCkgOiB0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50PCosICosICo+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29tcG9uZW50OiBJbnB1dENvbXBvbmVudFxuICB9O1xuXG4gIHByb3BzOiB7XG4gICAgc2NoZW1hOiBhbnksXG4gICAgY29tcG9uZW50OiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZ1xuICB9O1xuXG4gIHZhbGlkYXRlID0gKHZhbHVlOiBhbnksIGFsbFZhbHVlczogYW55LCBwcm9wczogeyBbc3RyaW5nXTogYW55IH0pID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhanYgPSBuZXcgQWp2KCk7XG4gICAgYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgIHJldHVybiBnZXQoYWp2LCAnZXJyb3JzWzBdLm1lc3NhZ2UnKTtcbiAgfTtcblxuICBnZXRPcHRpb25zKHNjaGVtYTogYW55KSB7XG4gICAgY29uc3QgeyB0aXRsZTogZ3JvdXAgfSA9IHNjaGVtYTtcbiAgICBpZiAoc2NoZW1hLm9uZU9mKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLm9uZU9mXG4gICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgb3B0aW9uc1NjaGVtYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9uc1NjaGVtYSk7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgICAgY29uc3Q6IHZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvb2x0aXBcbiAgICAgICAgICB9ID0gb3B0aW9uc1NjaGVtYTtcblxuICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi5vcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICBncm91cCxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICB0b29sdGlwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY2hlbWEsIG5hbWUsIGNvbXBvbmVudCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhzY2hlbWEpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgeyBncm91cCwgLi4ub3B0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJdGVtcyA9IHJlc3VsdFtncm91cF0gfHwgW107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIFtncm91cF06IFsuLi5ncm91cEl0ZW1zLCBvcHRpb25dXG4gICAgICAgIH07XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob3B0aW9ucyk7XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcHRpb25zID0gdmFsdWVzWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9IChvcHRpb25zOiBDcmVhdGVJbnB1dE9wdGlvbnNUeXBlKSA9PiB7XG4gIGNsYXNzIENyZWF0ZWRJbnB1dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPElucHV0RmllbGQgey4uLnRoaXMucHJvcHN9IHsuLi5vcHRpb25zfSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENyZWF0ZWRJbnB1dEZpZWxkO1xufTtcblxuZXhwb3J0IGNvbnN0IGlucHV0RmllbGRzID0ge1xuICBJbnB1dEZpZWxkLFxuICBFbWFpbElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZW1haWwnIH0pLFxuICBQYXNzd29yZElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAncGFzc3dvcmQnIH0pLFxuICBGaWxlSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdmaWxlJyB9KSxcbiAgRGF0ZUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZGF0ZScgfSksXG4gIE51bWJlcklucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnbnVtYmVyJyB9KSxcbiAgQ29sb3JJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJyB9KSxcbiAgU2VsZWN0SW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdzZWxlY3QnIH0pLFxuICBUZXh0QXJlYUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAndGV4dGFyZWEnIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dEZpZWxkO1xuIl19