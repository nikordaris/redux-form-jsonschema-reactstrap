'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFields = undefined;

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
          classes = _props.classes,
          sheet = _props.sheet,
          options = _props.options,
          input = _props.input,
          type = _props.type,
          children = _props.children,
          schema = _props.schema,
          meta = _props.meta,
          rest = _objectWithoutProperties(_props, ['classes', 'sheet', 'options', 'input', 'type', 'children', 'schema', 'meta']);

      return _react2.default.createElement(
        _reactstrap.Input,
        _extends({
          id: input.name,
          type: type
        }, input, rest, {
          className: classes.input
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
          classes = _props2.classes,
          sheet = _props2.sheet,
          type = _props2.type,
          input = _props2.input,
          schema = _props2.schema,
          meta = _props2.meta,
          options = _props2.options,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['classes', 'sheet', 'type', 'input', 'schema', 'meta', 'options', 'children']);

      return _react2.default.createElement(_reactstrap.Input, _extends({
        className: classes.input,
        id: input.name,
        type: type
      }, input, rest));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          options = _props3.options,
          input = _props3.input,
          schema = _props3.schema,
          type = _props3.type,
          rest = _objectWithoutProperties(_props3, ['options', 'input', 'schema', 'type']);

      return _react2.default.createElement(
        _FormField2.default,
        _extends({ name: input.name, schema: schema }, rest),
        options ? this.renderInputWithChildren() : this.renderInput()
      );
    }
  }]);

  return InputComponent;
}(_react.Component);

InputComponent.defaultProps = {};

var InputField = function (_Component2) {
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
        var _props5 = this.props,
            componentStyles = _props5.styles,
            rest = _objectWithoutProperties(_props5, ['styles']);

        var StyledInputField = (0, _reactJss2.default)((0, _lodash.merge)({}, styles, componentStyles))(InputField);
        return _react2.default.createElement(StyledInputField, _extends({}, rest, options));
      }
    }]);

    return CreatedInputField;
  }(_react.Component);

  return CreatedInputField;
};

var inputFields = exports.inputFields = {
  TextInputField: createInputField({ type: 'text' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJjbGFzc2VzIiwic2hlZXQiLCJpbnB1dCIsInR5cGUiLCJjaGlsZHJlbiIsInNjaGVtYSIsIm1ldGEiLCJyZXN0IiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlckdyb3VwSW5wdXRPcHRpb25zIiwicmVuZGVySW5wdXRXaXRoQ2hpbGRyZW4iLCJyZW5kZXJJbnB1dCIsImRlZmF1bHRQcm9wcyIsIklucHV0RmllbGQiLCJ2YWxpZGF0ZSIsImFsbFZhbHVlcyIsInJlcXVpcmVkIiwiYWp2IiwidW5kZWZpbmVkIiwidGl0bGUiLCJvbmVPZiIsInJlZHVjZSIsInJlc3VsdCIsIm9wdGlvbnNTY2hlbWEiLCJnZXRPcHRpb25zIiwiY29uc3QiLCJ0b29sdGlwIiwiZGVzY3JpcHRpb24iLCJwdXNoIiwiZmlsdGVyIiwiY29tcG9uZW50Iiwib3B0aW9uIiwiZ3JvdXBJdGVtcyIsInZhbHVlcyIsImxlbmd0aCIsImNyZWF0ZUlucHV0RmllbGQiLCJfb3B0aW9ucyIsInN0eWxlcyIsIkNyZWF0ZWRJbnB1dEZpZWxkIiwiY29tcG9uZW50U3R5bGVzIiwiU3R5bGVkSW5wdXRGaWVsZCIsImlucHV0RmllbGRzIiwiVGV4dElucHV0RmllbGQiLCJFbWFpbElucHV0RmllbGQiLCJQYXNzd29yZElucHV0RmllbGQiLCJEYXRlSW5wdXRGaWVsZCIsIkRhdGVUaW1lSW5wdXRGaWVsZCIsIk51bWJlcklucHV0RmllbGQiLCJub3JtYWxpemUiLCJwYXJzZUludCIsIkNvbG9ySW5wdXRGaWVsZCIsImhlaWdodCIsIlNlbGVjdElucHV0RmllbGQiLCJUZXh0QXJlYUlucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7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QlgsaUJBQWlCLEVBQUVsQyxNQUFNLGdCQUFSLEVBQWpCLENBTEs7QUFNekI4QyxvQkFBa0JaLGlCQUFpQjtBQUNqQ2xDLFVBQU0sUUFEMkI7QUFFakMrQyxlQUFXO0FBQUEsYUFBU0MsU0FBUzNELEtBQVQsRUFBZ0IsRUFBaEIsS0FBdUJBLEtBQWhDO0FBQUE7QUFGc0IsR0FBakIsQ0FOTztBQVV6QjRELG1CQUFpQmYsaUJBQWlCO0FBQ2hDbEMsVUFBTSxPQUQwQjtBQUVoQ29DLFlBQVEsRUFBRXJDLE9BQU8sRUFBRW1ELFFBQVEsTUFBVixFQUFUO0FBRndCLEdBQWpCLENBVlE7QUFjekJDLG9CQUFrQmpCLGlCQUFpQixFQUFFbEMsTUFBTSxRQUFSLEVBQWpCLENBZE87QUFlekJvRCxzQkFBb0JsQixpQkFBaUIsRUFBRWxDLE1BQU0sVUFBUixFQUFqQjtBQWZLLENBQXBCOztrQkFrQlFrQyxnQiIsImZpbGUiOiJJbnB1dEZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBzb3J0QnksIGdldCwgaXNFbXB0eSwgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4vRm9ybUZpZWxkJztcblxuY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8KiwgKiwgKj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XG4gIHByb3BzOiB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHNjaGVtYTogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgb3B0aW9ucz86IE9iamVjdFNlbGVjdE9wdGlvbnNUeXBlLFxuICAgIGlucHV0OiB7IG5hbWU6IHN0cmluZyB9LFxuICAgIG1ldGE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIGNoaWxkcmVuOiBbUmVhY3QuRWxlbWVudDwqPl0sXG4gICAgY2xhc3NlczogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgc2hlZXQ6IGFueVxuICB9O1xuXG4gIHJlbmRlcklucHV0T3B0aW9ucyhvcHRpb25zOiBBcnJheTxPcHRpb25UeXBlPiA9IFtdKSB7XG4gICAgcmV0dXJuIHNvcnRCeShvcHRpb25zLCBvID0+IG8ubGFiZWwgfHwgby52YWx1ZSkubWFwKCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGxhYmVsXG4gICAgfSwgaWR4KSA9PiA8b3B0aW9uIGtleT17aWR4fSB2YWx1ZT17dmFsdWV9PntsYWJlbCB8fCB2YWx1ZX08L29wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMob3B0aW9uczogeyBbc3RyaW5nXTogQXJyYXk8T3B0aW9uVHlwZT4gfSA9IHt9KSB7XG4gICAgcmV0dXJuIHNvcnRCeShPYmplY3Qua2V5cyhvcHRpb25zKSkubWFwKChncm91cDogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgPG9wdGdyb3VwIGtleT17aWR4fSBsYWJlbD17Z3JvdXB9PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9uc1tncm91cF0pfVxuICAgICAgPC9vcHRncm91cD5cbiAgICApKTtcbiAgfVxuXG4gIHJlbmRlcklucHV0V2l0aENoaWxkcmVuKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsXG4gICAgICBzaGVldCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHNjaGVtYSxcbiAgICAgIG1ldGEsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGlkPXtpbnB1dC5uYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gZGlzYWJsZWQgZGVmYXVsdFZhbHVlPXt0cnVlfT5TZWxlY3Qge2lucHV0Lm5hbWV9IDwvb3B0aW9uPlxuICAgICAgICB7QXJyYXkuaXNBcnJheShvcHRpb25zKVxuICAgICAgICAgID8gdGhpcy5yZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgICA6IHRoaXMucmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMob3B0aW9ucyl9XG4gICAgICA8L0lucHV0PlxuICAgICk7XG4gIH1cbiAgcmVuZGVySW5wdXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NlcyxcbiAgICAgIHNoZWV0LFxuICAgICAgdHlwZSxcbiAgICAgIGlucHV0LFxuICAgICAgc2NoZW1hLFxuICAgICAgbWV0YSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgaWQ9e2lucHV0Lm5hbWV9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgaW5wdXQsIHNjaGVtYSwgdHlwZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZCBuYW1lPXtpbnB1dC5uYW1lfSBzY2hlbWE9e3NjaGVtYX0gey4uLnJlc3R9PlxuICAgICAgICB7b3B0aW9ucyA/IHRoaXMucmVuZGVySW5wdXRXaXRoQ2hpbGRyZW4oKSA6IHRoaXMucmVuZGVySW5wdXQoKX1cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgSW5wdXRGaWVsZCBleHRlbmRzIENvbXBvbmVudDwqLCAqLCAqPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbXBvbmVudDogSW5wdXRDb21wb25lbnQsXG4gICAgcmVxdWlyZWQ6IGZhbHNlXG4gIH07XG5cbiAgcHJvcHM6IHtcbiAgICBzY2hlbWE6IGFueSxcbiAgICBjb21wb25lbnQ6IGFueSxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgIGNsYXNzZXM6IHsgW3N0cmluZ106IGFueSB9XG4gIH07XG5cbiAgdmFsaWRhdGUgPSAodmFsdWU6IGFueSwgYWxsVmFsdWVzOiBhbnksIHByb3BzOiB7IFtzdHJpbmddOiBhbnkgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2NoZW1hLCByZXF1aXJlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhanYgPSBuZXcgQWp2KCk7XG4gICAgYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgIGlmIChpc0VtcHR5KHZhbHVlKSAmJiByZXF1aXJlZCkge1xuICAgICAgcmV0dXJuICdtaXNzaW5nIHJlcXVpcmVkIGZpZWxkJztcbiAgICB9IGVsc2UgaWYgKCFpc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGdldChhanYsICdlcnJvcnNbMF0ubWVzc2FnZScpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGdldE9wdGlvbnMoc2NoZW1hOiBhbnkpIHtcbiAgICBjb25zdCB7IHRpdGxlOiBncm91cCB9ID0gc2NoZW1hO1xuICAgIGlmIChzY2hlbWEub25lT2YpIHtcbiAgICAgIHJldHVybiBzY2hlbWEub25lT2ZcbiAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBvcHRpb25zU2NoZW1hKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zU2NoZW1hKTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgICBjb25zdDogdmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9vbHRpcFxuICAgICAgICAgIH0gPSBvcHRpb25zU2NoZW1hO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLm9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKVxuICAgICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgbmFtZSwgY29tcG9uZW50LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHNjaGVtYSk7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zLnJlZHVjZSgocmVzdWx0LCB7IGdyb3VwLCAuLi5vcHRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEl0ZW1zID0gcmVzdWx0W2dyb3VwXSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgW2dyb3VwXTogWy4uLmdyb3VwSXRlbXMsIG9wdGlvbl1cbiAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zKTtcbiAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cbiAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVJbnB1dEZpZWxkID0gKF9vcHRpb25zOiBDcmVhdGVJbnB1dE9wdGlvbnNUeXBlKSA9PiB7XG4gIGNvbnN0IHsgc3R5bGVzLCAuLi5vcHRpb25zIH0gPSBfb3B0aW9ucztcbiAgY2xhc3MgQ3JlYXRlZElucHV0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3R5bGVzOiBjb21wb25lbnRTdHlsZXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBTdHlsZWRJbnB1dEZpZWxkID0gaW5qZWN0U2hlZXQobWVyZ2Uoe30sIHN0eWxlcywgY29tcG9uZW50U3R5bGVzKSkoXG4gICAgICAgIElucHV0RmllbGRcbiAgICAgICk7XG4gICAgICByZXR1cm4gPFN0eWxlZElucHV0RmllbGQgey4uLnJlc3R9IHsuLi5vcHRpb25zfSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENyZWF0ZWRJbnB1dEZpZWxkO1xufTtcblxuZXhwb3J0IGNvbnN0IGlucHV0RmllbGRzID0ge1xuICBUZXh0SW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICd0ZXh0JyB9KSxcbiAgRW1haWxJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2VtYWlsJyB9KSxcbiAgUGFzc3dvcmRJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ3Bhc3N3b3JkJyB9KSxcbiAgRGF0ZUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZGF0ZScgfSksXG4gIERhdGVUaW1lSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdkYXRldGltZS1sb2NhbCcgfSksXG4gIE51bWJlcklucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoe1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIG5vcm1hbGl6ZTogdmFsdWUgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSB8fCB2YWx1ZVxuICB9KSxcbiAgQ29sb3JJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHtcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIHN0eWxlczogeyBpbnB1dDogeyBoZWlnaHQ6ICc0MHB4JyB9IH1cbiAgfSksXG4gIFNlbGVjdElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnc2VsZWN0JyB9KSxcbiAgVGV4dEFyZWFJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ3RleHRhcmVhJyB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5wdXRGaWVsZDtcbiJdfQ==