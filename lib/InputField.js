'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFields = undefined;

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

var _Jss = require('./Jss');

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
        return _react2.default.createElement(InputField, _extends({}, this.props, options));
      }
    }]);

    return CreatedInputField;
  }(_react.Component);

  return (0, _Jss.injectSheet)(styles)(CreatedInputField);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJjbGFzc2VzIiwic2hlZXQiLCJpbnB1dCIsInR5cGUiLCJjaGlsZHJlbiIsInNjaGVtYSIsIm1ldGEiLCJyZXN0IiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlckdyb3VwSW5wdXRPcHRpb25zIiwicmVuZGVySW5wdXRXaXRoQ2hpbGRyZW4iLCJyZW5kZXJJbnB1dCIsImRlZmF1bHRQcm9wcyIsIklucHV0RmllbGQiLCJ2YWxpZGF0ZSIsImFsbFZhbHVlcyIsInJlcXVpcmVkIiwiYWp2IiwidW5kZWZpbmVkIiwidGl0bGUiLCJvbmVPZiIsInJlZHVjZSIsInJlc3VsdCIsIm9wdGlvbnNTY2hlbWEiLCJnZXRPcHRpb25zIiwiY29uc3QiLCJ0b29sdGlwIiwiZGVzY3JpcHRpb24iLCJwdXNoIiwiZmlsdGVyIiwiY29tcG9uZW50Iiwib3B0aW9uIiwiZ3JvdXBJdGVtcyIsInZhbHVlcyIsImxlbmd0aCIsImNyZWF0ZUlucHV0RmllbGQiLCJfb3B0aW9ucyIsInN0eWxlcyIsIkNyZWF0ZWRJbnB1dEZpZWxkIiwiaW5wdXRGaWVsZHMiLCJUZXh0SW5wdXRGaWVsZCIsIkVtYWlsSW5wdXRGaWVsZCIsIlBhc3N3b3JkSW5wdXRGaWVsZCIsIkRhdGVJbnB1dEZpZWxkIiwiRGF0ZVRpbWVJbnB1dEZpZWxkIiwiTnVtYmVySW5wdXRGaWVsZCIsIm5vcm1hbGl6ZSIsInBhcnNlSW50IiwiQ29sb3JJbnB1dEZpZWxkIiwiaGVpZ2h0IiwiU2VsZWN0SW5wdXRGaWVsZCIsIlRleHRBcmVhSW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozt5Q0FhZ0Q7QUFBQSxVQUFqQ0MsT0FBaUMsdUVBQUosRUFBSTs7QUFDbEQsYUFBTyxvQkFBT0EsT0FBUCxFQUFnQjtBQUFBLGVBQUtDLEVBQUVDLEtBQUYsSUFBV0QsRUFBRUUsS0FBbEI7QUFBQSxPQUFoQixFQUF5Q0MsR0FBekMsQ0FBNkMsZ0JBR2pEQyxHQUhpRDtBQUFBLFlBQ2xERixLQURrRCxRQUNsREEsS0FEa0Q7QUFBQSxZQUVsREQsS0FGa0QsUUFFbERBLEtBRmtEO0FBQUEsZUFHekM7QUFBQTtBQUFBLFlBQVEsS0FBS0csR0FBYixFQUFrQixPQUFPRixLQUF6QjtBQUFpQ0QsbUJBQVNDO0FBQTFDLFNBSHlDO0FBQUEsT0FBN0MsQ0FBUDtBQUlEOzs7OENBRXNFO0FBQUE7O0FBQUEsVUFBL0NILE9BQStDLHVFQUFKLEVBQUk7O0FBQ3JFLGFBQU8sb0JBQU9NLE9BQU9DLElBQVAsQ0FBWVAsT0FBWixDQUFQLEVBQTZCSSxHQUE3QixDQUFpQyxVQUFDSSxLQUFELEVBQWdCSCxHQUFoQjtBQUFBLGVBQ3RDO0FBQUE7QUFBQSxZQUFVLEtBQUtBLEdBQWYsRUFBb0IsT0FBT0csS0FBM0I7QUFDRyxpQkFBS0Msa0JBQUwsQ0FBd0JULFFBQVFRLEtBQVIsQ0FBeEI7QUFESCxTQURzQztBQUFBLE9BQWpDLENBQVA7QUFLRDs7OzhDQUV5QjtBQUFBLG1CQVdwQixLQUFLRSxLQVhlO0FBQUEsVUFFdEJDLE9BRnNCLFVBRXRCQSxPQUZzQjtBQUFBLFVBR3RCQyxLQUhzQixVQUd0QkEsS0FIc0I7QUFBQSxVQUl0QlosT0FKc0IsVUFJdEJBLE9BSnNCO0FBQUEsVUFLdEJhLEtBTHNCLFVBS3RCQSxLQUxzQjtBQUFBLFVBTXRCQyxJQU5zQixVQU10QkEsSUFOc0I7QUFBQSxVQU90QkMsUUFQc0IsVUFPdEJBLFFBUHNCO0FBQUEsVUFRdEJDLE1BUnNCLFVBUXRCQSxNQVJzQjtBQUFBLFVBU3RCQyxJQVRzQixVQVN0QkEsSUFUc0I7QUFBQSxVQVVuQkMsSUFWbUI7O0FBYXhCLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsY0FBSUwsTUFBTU0sSUFEWjtBQUVFLGdCQUFNTDtBQUZSLFdBR01ELEtBSE4sRUFJTUssSUFKTjtBQUtFLHFCQUFXUCxRQUFRRTtBQUxyQjtBQU9FO0FBQUE7QUFBQSxZQUFRLGNBQVIsRUFBaUIsY0FBYyxJQUEvQjtBQUFBO0FBQTZDQSxnQkFBTU0sSUFBbkQ7QUFBQTtBQUFBLFNBUEY7QUFRR0MsY0FBTUMsT0FBTixDQUFjckIsT0FBZCxJQUNHLEtBQUtTLGtCQUFMLENBQXdCVCxPQUF4QixDQURILEdBRUcsS0FBS3NCLHVCQUFMLENBQTZCdEIsT0FBN0I7QUFWTixPQURGO0FBY0Q7OztrQ0FDYTtBQUFBLG9CQVdSLEtBQUtVLEtBWEc7QUFBQSxVQUVWQyxPQUZVLFdBRVZBLE9BRlU7QUFBQSxVQUdWQyxLQUhVLFdBR1ZBLEtBSFU7QUFBQSxVQUlWRSxJQUpVLFdBSVZBLElBSlU7QUFBQSxVQUtWRCxLQUxVLFdBS1ZBLEtBTFU7QUFBQSxVQU1WRyxNQU5VLFdBTVZBLE1BTlU7QUFBQSxVQU9WQyxJQVBVLFdBT1ZBLElBUFU7QUFBQSxVQVFWakIsT0FSVSxXQVFWQSxPQVJVO0FBQUEsVUFTVmUsUUFUVSxXQVNWQSxRQVRVO0FBQUEsVUFVUEcsSUFWTzs7QUFZWixhQUNFO0FBQ0UsbUJBQVdQLFFBQVFFLEtBRHJCO0FBRUUsWUFBSUEsTUFBTU0sSUFGWjtBQUdFLGNBQU1MO0FBSFIsU0FJTUQsS0FKTixFQUtNSyxJQUxOLEVBREY7QUFTRDs7OzZCQUNRO0FBQUEsb0JBQzJDLEtBQUtSLEtBRGhEO0FBQUEsVUFDQ1YsT0FERCxXQUNDQSxPQUREO0FBQUEsVUFDVWEsS0FEVixXQUNVQSxLQURWO0FBQUEsVUFDaUJHLE1BRGpCLFdBQ2lCQSxNQURqQjtBQUFBLFVBQ3lCRixJQUR6QixXQUN5QkEsSUFEekI7QUFBQSxVQUNrQ0ksSUFEbEM7O0FBRVAsYUFDRTtBQUFBO0FBQUEsbUJBQVcsTUFBTUwsTUFBTU0sSUFBdkIsRUFBNkIsUUFBUUgsTUFBckMsSUFBaURFLElBQWpEO0FBQ0dsQixrQkFBVSxLQUFLdUIsdUJBQUwsRUFBVixHQUEyQyxLQUFLQyxXQUFMO0FBRDlDLE9BREY7QUFLRDs7Ozs7O0FBckZHekIsYyxDQUNHMEIsWSxHQUFlLEU7O0lBdUZsQkMsVTs7Ozs7Ozs7Ozs7Ozs7bU1BZ0JKQyxRLEdBQVcsVUFBQ3hCLEtBQUQsRUFBYXlCLFNBQWIsRUFBNkJsQixLQUE3QixFQUEwRDtBQUFBLHlCQUN0QyxPQUFLQSxLQURpQztBQUFBLFVBQzNETSxNQUQyRCxnQkFDM0RBLE1BRDJEO0FBQUEsVUFDbkRhLFFBRG1ELGdCQUNuREEsUUFEbUQ7O0FBRW5FLFVBQU1DLE1BQU0sbUJBQVo7QUFDQUEsVUFBSUgsUUFBSixDQUFhWCxNQUFiLEVBQXFCYixLQUFyQjtBQUNBLFVBQUkscUJBQVFBLEtBQVIsS0FBa0IwQixRQUF0QixFQUFnQztBQUM5QixlQUFPLHdCQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksQ0FBQyxxQkFBUTFCLEtBQVIsQ0FBTCxFQUFxQjtBQUMxQixlQUFPLGlCQUFJMkIsR0FBSixFQUFTLG1CQUFULENBQVA7QUFDRDtBQUNELGFBQU9DLFNBQVA7QUFDRCxLOzs7OzsrQkFFVWYsTSxFQUFhO0FBQUE7O0FBQUEsVUFDUFIsS0FETyxHQUNHUSxNQURILENBQ2RnQixLQURjOztBQUV0QixVQUFJaEIsT0FBT2lCLEtBQVgsRUFBa0I7QUFDaEIsZUFBT2pCLE9BQU9pQixLQUFQLENBQ0pDLE1BREksQ0FDRyxVQUFDQyxNQUFELEVBQVNDLGFBQVQsRUFBMkI7QUFDakMsY0FBTXBDLFVBQVUsT0FBS3FDLFVBQUwsQ0FBZ0JELGFBQWhCLENBQWhCO0FBRGlDLGNBR3hCbEMsS0FId0IsR0FNN0JrQyxhQU42QixDQUcvQkosS0FIK0I7QUFBQSxjQUl4QjdCLEtBSndCLEdBTTdCaUMsYUFONkIsQ0FJL0JFLEtBSitCO0FBQUEsY0FLbEJDLE9BTGtCLEdBTTdCSCxhQU42QixDQUsvQkksV0FMK0I7OztBQVFqQyxjQUFJeEMsT0FBSixFQUFhO0FBQ1htQyxtQkFBT00sSUFBUCxrQ0FBZXpDLE9BQWY7QUFDRCxXQUZELE1BRU87QUFDTG1DLG1CQUFPTSxJQUFQLENBQVk7QUFDVmpDLDBCQURVO0FBRVZOLDBCQUZVO0FBR1ZDLDBCQUhVO0FBSVZvQztBQUpVLGFBQVo7QUFNRDs7QUFFRCxpQkFBT0osTUFBUDtBQUNELFNBckJJLEVBcUJGLEVBckJFLEVBc0JKTyxNQXRCSSxDQXNCRztBQUFBLGNBQUd2QyxLQUFILFNBQUdBLEtBQUg7QUFBQSxpQkFBZUEsS0FBZjtBQUFBLFNBdEJILENBQVA7QUF1QkQ7QUFDRCxhQUFPNEIsU0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxvQkFDc0MsS0FBS3JCLEtBRDNDO0FBQUEsVUFDQ00sTUFERCxXQUNDQSxNQUREO0FBQUEsVUFDU0csSUFEVCxXQUNTQSxJQURUO0FBQUEsVUFDZXdCLFNBRGYsV0FDZUEsU0FEZjtBQUFBLFVBQzZCekIsSUFEN0I7O0FBRVAsVUFBSWxCLFVBQVUsS0FBS3FDLFVBQUwsQ0FBZ0JyQixNQUFoQixDQUFkO0FBQ0EsVUFBSWhCLE9BQUosRUFBYTtBQUNYQSxrQkFBVUEsUUFBUWtDLE1BQVIsQ0FBZSxVQUFDQyxNQUFELFNBQWtDO0FBQUEsY0FBdkIzQixLQUF1QixTQUF2QkEsS0FBdUI7QUFBQSxjQUFib0MsTUFBYTs7QUFDekQsY0FBTUMsYUFBYVYsT0FBTzNCLEtBQVAsS0FBaUIsRUFBcEM7QUFDQSw4QkFDSzJCLE1BREwsc0JBRUczQixLQUZILCtCQUVlcUMsVUFGZixJQUUyQkQsTUFGM0I7QUFJRCxTQU5TLEVBTVAsRUFOTyxDQUFWOztBQVFBLFlBQU1FLFNBQVN4QyxPQUFPd0MsTUFBUCxDQUFjOUMsT0FBZCxDQUFmO0FBQ0EsWUFBSThDLE9BQU9DLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIvQyxvQkFBVThDLE9BQU8sQ0FBUCxDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUNFO0FBQ0UsY0FBTTNCLElBRFI7QUFFRSxnQkFBUUgsTUFGVjtBQUdFLG1CQUFXMkIsU0FIYjtBQUlFLGlCQUFTM0MsT0FKWDtBQUtFLGtCQUFVLEtBQUsyQjtBQUxqQixTQU1NVCxJQU5OLEVBREY7QUFVRDs7Ozs7O0FBdEZHUSxVLENBQ0dELFksR0FBZTtBQUNwQlgsUUFBTSxNQURjO0FBRXBCNkIsYUFBVzVDLGNBRlM7QUFHcEI4QixZQUFVO0FBSFUsQzs7O0FBd0Z4QixJQUFNbUIsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRCxFQUFzQztBQUFBLE1BQ3JEQyxNQURxRCxHQUM5QkQsUUFEOEIsQ0FDckRDLE1BRHFEO0FBQUEsTUFDMUNsRCxPQUQwQyw0QkFDOUJpRCxRQUQ4Qjs7QUFBQSxNQUV2REUsaUJBRnVEO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFHbEQ7QUFDUCxlQUFPLDhCQUFDLFVBQUQsZUFBZ0IsS0FBS3pDLEtBQXJCLEVBQWdDVixPQUFoQyxFQUFQO0FBQ0Q7QUFMMEQ7O0FBQUE7QUFBQTs7QUFRN0QsU0FBTyxzQkFBWWtELE1BQVosRUFBb0JDLGlCQUFwQixDQUFQO0FBQ0QsQ0FURDs7QUFXTyxJQUFNQyxvQ0FBYztBQUN6QkMsa0JBQWdCTCxpQkFBaUIsRUFBRWxDLE1BQU0sTUFBUixFQUFqQixDQURTO0FBRXpCd0MsbUJBQWlCTixpQkFBaUIsRUFBRWxDLE1BQU0sT0FBUixFQUFqQixDQUZRO0FBR3pCeUMsc0JBQW9CUCxpQkFBaUIsRUFBRWxDLE1BQU0sVUFBUixFQUFqQixDQUhLO0FBSXpCMEMsa0JBQWdCUixpQkFBaUIsRUFBRWxDLE1BQU0sTUFBUixFQUFqQixDQUpTO0FBS3pCMkMsc0JBQW9CVCxpQkFBaUIsRUFBRWxDLE1BQU0sZ0JBQVIsRUFBakIsQ0FMSztBQU16QjRDLG9CQUFrQlYsaUJBQWlCO0FBQ2pDbEMsVUFBTSxRQUQyQjtBQUVqQzZDLGVBQVc7QUFBQSxhQUFTQyxTQUFTekQsS0FBVCxFQUFnQixFQUFoQixLQUF1QkEsS0FBaEM7QUFBQTtBQUZzQixHQUFqQixDQU5PO0FBVXpCMEQsbUJBQWlCYixpQkFBaUI7QUFDaENsQyxVQUFNLE9BRDBCO0FBRWhDb0MsWUFBUSxFQUFFckMsT0FBTyxFQUFFaUQsUUFBUSxNQUFWLEVBQVQ7QUFGd0IsR0FBakIsQ0FWUTtBQWN6QkMsb0JBQWtCZixpQkFBaUIsRUFBRWxDLE1BQU0sUUFBUixFQUFqQixDQWRPO0FBZXpCa0Qsc0JBQW9CaEIsaUJBQWlCLEVBQUVsQyxNQUFNLFVBQVIsRUFBakI7QUFmSyxDQUFwQjs7a0JBa0JRa0MsZ0IiLCJmaWxlIjoiSW5wdXRGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWp2IGZyb20gJ2Fqdic7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHNvcnRCeSwgZ2V0LCBpc0VtcHR5LCBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi9Gb3JtRmllbGQnO1xuaW1wb3J0IHsgaW5qZWN0U2hlZXQgfSBmcm9tICcuL0pzcyc7XG5cbmNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PCosICosICo+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xuICBwcm9wczoge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICBzY2hlbWE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIG9wdGlvbnM/OiBPYmplY3RTZWxlY3RPcHRpb25zVHlwZSxcbiAgICBpbnB1dDogeyBuYW1lOiBzdHJpbmcgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogW1JlYWN0LkVsZW1lbnQ8Kj5dLFxuICAgIGNsYXNzZXM6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIHNoZWV0OiBhbnlcbiAgfTtcblxuICByZW5kZXJJbnB1dE9wdGlvbnMob3B0aW9uczogQXJyYXk8T3B0aW9uVHlwZT4gPSBbXSkge1xuICAgIHJldHVybiBzb3J0Qnkob3B0aW9ucywgbyA9PiBvLmxhYmVsIHx8IG8udmFsdWUpLm1hcCgoe1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbFxuICAgIH0sIGlkeCkgPT4gPG9wdGlvbiBrZXk9e2lkeH0gdmFsdWU9e3ZhbHVlfT57bGFiZWwgfHwgdmFsdWV9PC9vcHRpb24+KTtcbiAgfVxuXG4gIHJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnM6IHsgW3N0cmluZ106IEFycmF5PE9wdGlvblR5cGU+IH0gPSB7fSkge1xuICAgIHJldHVybiBzb3J0QnkoT2JqZWN0LmtleXMob3B0aW9ucykpLm1hcCgoZ3JvdXA6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IChcbiAgICAgIDxvcHRncm91cCBrZXk9e2lkeH0gbGFiZWw9e2dyb3VwfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnNbZ3JvdXBdKX1cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgKSk7XG4gIH1cblxuICByZW5kZXJJbnB1dFdpdGhDaGlsZHJlbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc2VzLFxuICAgICAgc2hlZXQsXG4gICAgICBvcHRpb25zLFxuICAgICAgaW5wdXQsXG4gICAgICB0eXBlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzY2hlbWEsXG4gICAgICBtZXRhLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBpZD17aW5wdXQubmFtZX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgey4uLmlucHV0fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17dHJ1ZX0+U2VsZWN0IHtpbnB1dC5uYW1lfSA8L29wdGlvbj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkob3B0aW9ucylcbiAgICAgICAgICA/IHRoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgICAgOiB0aGlzLnJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnMpfVxuICAgICAgPC9JbnB1dD5cbiAgICApO1xuICB9XG4gIHJlbmRlcklucHV0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsXG4gICAgICBzaGVldCxcbiAgICAgIHR5cGUsXG4gICAgICBpbnB1dCxcbiAgICAgIHNjaGVtYSxcbiAgICAgIG1ldGEsXG4gICAgICBvcHRpb25zLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgIGlkPXtpbnB1dC5uYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIGlucHV0LCBzY2hlbWEsIHR5cGUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRmllbGQgbmFtZT17aW5wdXQubmFtZX0gc2NoZW1hPXtzY2hlbWF9IHsuLi5yZXN0fT5cbiAgICAgICAge29wdGlvbnMgPyB0aGlzLnJlbmRlcklucHV0V2l0aENoaWxkcmVuKCkgOiB0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIElucHV0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQ8KiwgKiwgKj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb21wb25lbnQ6IElucHV0Q29tcG9uZW50LFxuICAgIHJlcXVpcmVkOiBmYWxzZVxuICB9O1xuXG4gIHByb3BzOiB7XG4gICAgc2NoZW1hOiBhbnksXG4gICAgY29tcG9uZW50OiBhbnksXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICByZXF1aXJlZDogYm9vbGVhbixcbiAgICBjbGFzc2VzOiB7IFtzdHJpbmddOiBhbnkgfVxuICB9O1xuXG4gIHZhbGlkYXRlID0gKHZhbHVlOiBhbnksIGFsbFZhbHVlczogYW55LCBwcm9wczogeyBbc3RyaW5nXTogYW55IH0pID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSwgcmVxdWlyZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWp2ID0gbmV3IEFqdigpO1xuICAgIGFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSh2YWx1ZSkgJiYgcmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiAnbWlzc2luZyByZXF1aXJlZCBmaWVsZCc7XG4gICAgfSBlbHNlIGlmICghaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBnZXQoYWp2LCAnZXJyb3JzWzBdLm1lc3NhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBnZXRPcHRpb25zKHNjaGVtYTogYW55KSB7XG4gICAgY29uc3QgeyB0aXRsZTogZ3JvdXAgfSA9IHNjaGVtYTtcbiAgICBpZiAoc2NoZW1hLm9uZU9mKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLm9uZU9mXG4gICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgb3B0aW9uc1NjaGVtYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9uc1NjaGVtYSk7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgICAgY29uc3Q6IHZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvb2x0aXBcbiAgICAgICAgICB9ID0gb3B0aW9uc1NjaGVtYTtcblxuICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi5vcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICBncm91cCxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICB0b29sdGlwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY2hlbWEsIG5hbWUsIGNvbXBvbmVudCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhzY2hlbWEpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgeyBncm91cCwgLi4ub3B0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJdGVtcyA9IHJlc3VsdFtncm91cF0gfHwgW107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIFtncm91cF06IFsuLi5ncm91cEl0ZW1zLCBvcHRpb25dXG4gICAgICAgIH07XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob3B0aW9ucyk7XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcHRpb25zID0gdmFsdWVzWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9IChfb3B0aW9uczogQ3JlYXRlSW5wdXRPcHRpb25zVHlwZSkgPT4ge1xuICBjb25zdCB7IHN0eWxlcywgLi4ub3B0aW9ucyB9ID0gX29wdGlvbnM7XG4gIGNsYXNzIENyZWF0ZWRJbnB1dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50PCosICosICo+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPElucHV0RmllbGQgey4uLnRoaXMucHJvcHN9IHsuLi5vcHRpb25zfSAvPjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5qZWN0U2hlZXQoc3R5bGVzKShDcmVhdGVkSW5wdXRGaWVsZCk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRGaWVsZHMgPSB7XG4gIFRleHRJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ3RleHQnIH0pLFxuICBFbWFpbElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZW1haWwnIH0pLFxuICBQYXNzd29yZElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAncGFzc3dvcmQnIH0pLFxuICBEYXRlSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdkYXRlJyB9KSxcbiAgRGF0ZVRpbWVJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyB9KSxcbiAgTnVtYmVySW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgbm9ybWFsaXplOiB2YWx1ZSA9PiBwYXJzZUludCh2YWx1ZSwgMTApIHx8IHZhbHVlXG4gIH0pLFxuICBDb2xvcklucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoe1xuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgc3R5bGVzOiB7IGlucHV0OiB7IGhlaWdodDogJzQwcHgnIH0gfVxuICB9KSxcbiAgU2VsZWN0SW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdzZWxlY3QnIH0pLFxuICBUZXh0QXJlYUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAndGV4dGFyZWEnIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dEZpZWxkO1xuIl19