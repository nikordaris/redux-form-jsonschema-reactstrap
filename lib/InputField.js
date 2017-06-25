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
        style: styles.input
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJzdHlsZXMiLCJpbnB1dCIsInR5cGUiLCJjaGlsZHJlbiIsInNjaGVtYSIsIm1ldGEiLCJyZXN0IiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlckdyb3VwSW5wdXRPcHRpb25zIiwic3R5bGUiLCJyZW5kZXJJbnB1dFdpdGhDaGlsZHJlbiIsInJlbmRlcklucHV0IiwiZGVmYXVsdFByb3BzIiwiSW5wdXRGaWVsZCIsInZhbGlkYXRlIiwiYWxsVmFsdWVzIiwiYWp2IiwidGl0bGUiLCJvbmVPZiIsInJlZHVjZSIsInJlc3VsdCIsIm9wdGlvbnNTY2hlbWEiLCJnZXRPcHRpb25zIiwiY29uc3QiLCJ0b29sdGlwIiwiZGVzY3JpcHRpb24iLCJwdXNoIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiY29tcG9uZW50Iiwib3B0aW9uIiwiZ3JvdXBJdGVtcyIsInZhbHVlcyIsImxlbmd0aCIsImNyZWF0ZUlucHV0RmllbGQiLCJDcmVhdGVkSW5wdXRGaWVsZCIsImlucHV0RmllbGRzIiwiRW1haWxJbnB1dEZpZWxkIiwiUGFzc3dvcmRJbnB1dEZpZWxkIiwiRGF0ZUlucHV0RmllbGQiLCJEYXRlVGltZUlucHV0RmllbGQiLCJOdW1iZXJJbnB1dEZpZWxkIiwibm9ybWFsaXplIiwicGFyc2VJbnQiLCJDb2xvcklucHV0RmllbGQiLCJoZWlnaHQiLCJTZWxlY3RJbnB1dEZpZWxkIiwiVGV4dEFyZWFJbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGM7Ozs7Ozs7Ozs7O3lDQWVn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Q3REZ0QsaUJBRHNEO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFFakQ7QUFDUCxlQUFPLDhCQUFDLFVBQUQsZUFBZ0IsS0FBS3RDLEtBQXJCLEVBQWdDVixPQUFoQyxFQUFQO0FBQ0Q7QUFKeUQ7O0FBQUE7QUFBQTs7QUFNNUQsU0FBT2dELGlCQUFQO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNQyxvQ0FBYztBQUN6QnZCLHdCQUR5QjtBQUV6QndCLG1CQUFpQkgsaUJBQWlCLEVBQUVsQyxNQUFNLE9BQVIsRUFBakIsQ0FGUTtBQUd6QnNDLHNCQUFvQkosaUJBQWlCLEVBQUVsQyxNQUFNLFVBQVIsRUFBakIsQ0FISztBQUl6QnVDLGtCQUFnQkwsaUJBQWlCLEVBQUVsQyxNQUFNLE1BQVIsRUFBakIsQ0FKUztBQUt6QndDLHNCQUFvQk4saUJBQWlCLEVBQUVsQyxNQUFNLGdCQUFSLEVBQWpCLENBTEs7QUFNekJ5QyxvQkFBa0JQLGlCQUFpQjtBQUNqQ2xDLFVBQU0sUUFEMkI7QUFFakMwQyxlQUFXO0FBQUEsYUFBU0MsU0FBU3JELEtBQVQsRUFBZ0IsRUFBaEIsS0FBdUJBLEtBQWhDO0FBQUE7QUFGc0IsR0FBakIsQ0FOTztBQVV6QnNELG1CQUFpQlYsaUJBQWlCO0FBQ2hDbEMsVUFBTSxPQUQwQjtBQUVoQ0YsWUFBUSxFQUFFQyxPQUFPLEVBQUU4QyxRQUFRLE1BQVYsRUFBVDtBQUZ3QixHQUFqQixDQVZRO0FBY3pCQyxvQkFBa0JaLGlCQUFpQixFQUFFbEMsTUFBTSxRQUFSLEVBQWpCLENBZE87QUFlekIrQyxzQkFBb0JiLGlCQUFpQixFQUFFbEMsTUFBTSxVQUFSLEVBQWpCO0FBZkssQ0FBcEI7O2tCQWtCUWtDLGdCIiwiZmlsZSI6IklucHV0RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBzb3J0QnksIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi9Gb3JtRmllbGQnO1xuXG5jbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDwqLCAqLCAqPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiB7fVxuICB9O1xuICBwcm9wczoge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICBzY2hlbWE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIG9wdGlvbnM/OiBPYmplY3RTZWxlY3RPcHRpb25zVHlwZSxcbiAgICBpbnB1dDogeyBuYW1lOiBzdHJpbmcgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogW1JlYWN0LkVsZW1lbnQ8Kj5dLFxuICAgIHN0eWxlczogeyBbc3R5bGU6IHN0cmluZ106IGFueSB9LFxuICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfVxuICB9O1xuXG4gIHJlbmRlcklucHV0T3B0aW9ucyhvcHRpb25zOiBBcnJheTxPcHRpb25UeXBlPiA9IFtdKSB7XG4gICAgcmV0dXJuIHNvcnRCeShvcHRpb25zLCBvID0+IG8ubGFiZWwgfHwgby52YWx1ZSkubWFwKCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGxhYmVsXG4gICAgfSwgaWR4KSA9PiA8b3B0aW9uIGtleT17aWR4fSB2YWx1ZT17dmFsdWV9PntsYWJlbCB8fCB2YWx1ZX08L29wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMob3B0aW9uczogeyBbc3RyaW5nXTogQXJyYXk8T3B0aW9uVHlwZT4gfSA9IHt9KSB7XG4gICAgcmV0dXJuIHNvcnRCeShPYmplY3Qua2V5cyhvcHRpb25zKSkubWFwKChncm91cDogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgPG9wdGdyb3VwIGtleT17aWR4fSBsYWJlbD17Z3JvdXB9PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9uc1tncm91cF0pfVxuICAgICAgPC9vcHRncm91cD5cbiAgICApKTtcbiAgfVxuXG4gIHJlbmRlcklucHV0V2l0aENoaWxkcmVuKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHNjaGVtYSxcbiAgICAgIG1ldGEsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGlkPXtpbnB1dC5uYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17dHJ1ZX0+U2VsZWN0IHtpbnB1dC5uYW1lfSA8L29wdGlvbj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkob3B0aW9ucylcbiAgICAgICAgICA/IHRoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgICAgOiB0aGlzLnJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnMpfVxuICAgICAgPC9JbnB1dD5cbiAgICApO1xuICB9XG4gIHJlbmRlcklucHV0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBpbnB1dCxcbiAgICAgIHNjaGVtYSxcbiAgICAgIG1ldGEsXG4gICAgICBvcHRpb25zLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzdHlsZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGlkPXtpbnB1dC5uYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHN0eWxlcywgaW5wdXQsIHNjaGVtYSwgdHlwZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZCBuYW1lPXtpbnB1dC5uYW1lfSBzY2hlbWE9e3NjaGVtYX0gey4uLnJlc3R9PlxuICAgICAgICB7b3B0aW9ucyA/IHRoaXMucmVuZGVySW5wdXRXaXRoQ2hpbGRyZW4oKSA6IHRoaXMucmVuZGVySW5wdXQoKX1cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQ8KiwgKiwgKj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb21wb25lbnQ6IElucHV0Q29tcG9uZW50XG4gIH07XG5cbiAgcHJvcHM6IHtcbiAgICBzY2hlbWE6IGFueSxcbiAgICBjb21wb25lbnQ6IGFueSxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nXG4gIH07XG5cbiAgdmFsaWRhdGUgPSAodmFsdWU6IGFueSwgYWxsVmFsdWVzOiBhbnksIHByb3BzOiB7IFtzdHJpbmddOiBhbnkgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFqdiA9IG5ldyBBanYoKTtcbiAgICBhanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XG4gICAgcmV0dXJuIGdldChhanYsICdlcnJvcnNbMF0ubWVzc2FnZScpO1xuICB9O1xuXG4gIGdldE9wdGlvbnMoc2NoZW1hOiBhbnkpIHtcbiAgICBjb25zdCB7IHRpdGxlOiBncm91cCB9ID0gc2NoZW1hO1xuICAgIGlmIChzY2hlbWEub25lT2YpIHtcbiAgICAgIHJldHVybiBzY2hlbWEub25lT2ZcbiAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBvcHRpb25zU2NoZW1hKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zU2NoZW1hKTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgICBjb25zdDogdmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9vbHRpcFxuICAgICAgICAgIH0gPSBvcHRpb25zU2NoZW1hO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLm9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKVxuICAgICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgbmFtZSwgY29tcG9uZW50LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHNjaGVtYSk7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zLnJlZHVjZSgocmVzdWx0LCB7IGdyb3VwLCAuLi5vcHRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEl0ZW1zID0gcmVzdWx0W2dyb3VwXSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgW2dyb3VwXTogWy4uLmdyb3VwSXRlbXMsIG9wdGlvbl1cbiAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zKTtcbiAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cbiAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVJbnB1dEZpZWxkID0gKG9wdGlvbnM6IENyZWF0ZUlucHV0T3B0aW9uc1R5cGUpID0+IHtcbiAgY2xhc3MgQ3JlYXRlZElucHV0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8SW5wdXRGaWVsZCB7Li4udGhpcy5wcm9wc30gey4uLm9wdGlvbnN9IC8+O1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ3JlYXRlZElucHV0RmllbGQ7XG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRGaWVsZHMgPSB7XG4gIElucHV0RmllbGQsXG4gIEVtYWlsSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdlbWFpbCcgfSksXG4gIFBhc3N3b3JkSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdwYXNzd29yZCcgfSksXG4gIERhdGVJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2RhdGUnIH0pLFxuICBEYXRlVGltZUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnIH0pLFxuICBOdW1iZXJJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBub3JtYWxpemU6IHZhbHVlID0+IHBhcnNlSW50KHZhbHVlLCAxMCkgfHwgdmFsdWVcbiAgfSksXG4gIENvbG9ySW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7XG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBzdHlsZXM6IHsgaW5wdXQ6IHsgaGVpZ2h0OiAnNDBweCcgfSB9XG4gIH0pLFxuICBTZWxlY3RJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ3NlbGVjdCcgfSksXG4gIFRleHRBcmVhSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICd0ZXh0YXJlYScgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUlucHV0RmllbGQ7XG4iXX0=