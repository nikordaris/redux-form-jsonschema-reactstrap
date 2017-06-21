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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50Iiwib3B0aW9ucyIsIm8iLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaWR4IiwiT2JqZWN0Iiwia2V5cyIsImdyb3VwIiwicmVuZGVySW5wdXRPcHRpb25zIiwicHJvcHMiLCJuYW1lIiwic3R5bGVzIiwiaW5wdXQiLCJyZXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMiLCJkZWZhdWx0UHJvcHMiLCJJbnB1dEZpZWxkIiwidmFsaWRhdGUiLCJhbGxWYWx1ZXMiLCJzY2hlbWEiLCJhanYiLCJvbmVPZiIsInRpdGxlIiwiY29uc3QiLCJ0b29sdGlwIiwiZGVzY3JpcHRpb24iLCJmaWx0ZXIiLCJ1bmRlZmluZWQiLCJnZXRPcHRpb25zIiwidHlwZSIsImNvbXBvbmVudCIsImNyZWF0ZUlucHV0RmllbGQiLCJDcmVhdGVkSW5wdXRGaWVsZCIsImlucHV0RmllbGRzIiwiRW1haWxJbnB1dEZpZWxkIiwiUGFzc3dvcmRJbnB1dEZpZWxkIiwiRmlsZUlucHV0RmllbGQiLCJEYXRlSW5wdXRGaWVsZCIsIk51bWJlcklucHV0RmllbGQiLCJDb2xvcklucHV0RmllbGQiLCJTZWxlY3RJbnB1dEZpZWxkIiwiVGV4dEFyZWFJbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7Ozs7Ozs7dUNBYWVDLE8sRUFBNEI7QUFDN0MsYUFBTyxvQkFBT0EsT0FBUCxFQUFnQjtBQUFBLGVBQUtDLEVBQUVDLEtBQUYsSUFBV0QsRUFBRUUsS0FBbEI7QUFBQSxPQUFoQixFQUF5Q0MsR0FBekMsQ0FBNkMsZ0JBR2pEQyxHQUhpRDtBQUFBLFlBQ2xERixLQURrRCxRQUNsREEsS0FEa0Q7QUFBQSxZQUVsREQsS0FGa0QsUUFFbERBLEtBRmtEO0FBQUEsZUFHekM7QUFBQTtBQUFBLFlBQVEsS0FBS0csR0FBYixFQUFrQixPQUFPRixLQUF6QjtBQUFpQ0QsbUJBQVNDO0FBQTFDLFNBSHlDO0FBQUEsT0FBN0MsQ0FBUDtBQUlEOzs7NENBRXVCSCxPLEVBQTBDO0FBQUE7O0FBQ2hFLGFBQU8sb0JBQU9NLE9BQU9DLElBQVAsQ0FBWVAsT0FBWixDQUFQLEVBQTZCSSxHQUE3QixDQUFpQyxVQUFDSSxLQUFELEVBQWdCSCxHQUFoQjtBQUFBLGVBQ3RDO0FBQUE7QUFBQSxZQUFVLEtBQUtBLEdBQWYsRUFBb0IsT0FBT0csS0FBM0I7QUFDRyxpQkFBS0Msa0JBQUwsQ0FBd0JULFFBQVFRLEtBQVIsQ0FBeEI7QUFESCxTQURzQztBQUFBLE9BQWpDLENBQVA7QUFLRDs7OzZCQUVRO0FBQUEsbUJBQzJDLEtBQUtFLEtBRGhEO0FBQUEsVUFDQ0MsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT1gsT0FEUCxVQUNPQSxPQURQO0FBQUEsVUFDZ0JZLE1BRGhCLFVBQ2dCQSxNQURoQjtBQUFBLFVBQ3dCQyxLQUR4QixVQUN3QkEsS0FEeEI7QUFBQSxVQUNrQ0MsSUFEbEM7O0FBRVAsYUFDRTtBQUFBO0FBQWVBLFlBQWY7QUFDRTtBQUFBO0FBQUEscUJBQU8sSUFBSUgsSUFBWCxJQUFxQkUsS0FBckIsRUFBZ0NDLElBQWhDO0FBQ0dDLGdCQUFNQyxPQUFOLENBQWNoQixPQUFkLElBQ0csS0FBS1Msa0JBQUwsQ0FBd0JULE9BQXhCLENBREgsR0FFRyxLQUFLaUIsdUJBQUwsQ0FBNkJqQixPQUE3QjtBQUhOO0FBREYsT0FERjtBQVNEOzs7Ozs7QUF2Q0dELGMsQ0FDR21CLFksR0FBZTtBQUNwQmxCLFdBQVM7QUFEVyxDOztJQXlDWG1CLFUsV0FBQUEsVTs7Ozs7Ozs7Ozs7Ozs7bU1BWVhDLFEsR0FBVyxVQUFDakIsS0FBRCxFQUFha0IsU0FBYixFQUE2QlgsS0FBN0IsRUFBMEQ7QUFBQSxVQUMzRFksTUFEMkQsR0FDaEQsT0FBS1osS0FEMkMsQ0FDM0RZLE1BRDJEOztBQUVuRSxVQUFNQyxNQUFNLG1CQUFaO0FBQ0EsYUFBT0EsSUFBSUgsUUFBSixDQUFhRSxNQUFiLEVBQXFCbkIsS0FBckIsQ0FBUDtBQUNELEs7Ozs7O2lDQUVZO0FBQUEsVUFDSG1CLE1BREcsR0FDUSxLQUFLWixLQURiLENBQ0hZLE1BREc7O0FBRVgsVUFBSUEsT0FBT0UsS0FBWCxFQUFrQjtBQUNoQixlQUFPRixPQUFPRSxLQUFQLENBQ0pwQixHQURJLENBQ0E7QUFBQSxjQUFVRixLQUFWLFNBQUd1QixLQUFIO0FBQUEsY0FBd0J0QixLQUF4QixTQUFpQnVCLEtBQWpCO0FBQUEsY0FBNENDLE9BQTVDLFNBQStCQyxXQUEvQjtBQUFBLGlCQUEyRDtBQUM5RDFCLHdCQUQ4RDtBQUU5REMsd0JBRjhEO0FBRzlEd0I7QUFIOEQsV0FBM0Q7QUFBQSxTQURBLEVBTUpFLE1BTkksQ0FNRztBQUFBLGNBQUcxQixLQUFILFNBQUdBLEtBQUg7QUFBQSxpQkFBZUEsS0FBZjtBQUFBLFNBTkgsQ0FBUDtBQU9EO0FBQ0QsYUFBTzJCLFNBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUNFLGlCQUFTLEtBQUtDLFVBQUwsRUFEWDtBQUVFLGtCQUFVLEtBQUtYO0FBRmpCLFNBR00sS0FBS1YsS0FIWCxFQURGO0FBT0Q7Ozs7OztBQXhDVVMsVSxDQUNKRCxZLEdBQWU7QUFDcEJjLFFBQU0sTUFEYztBQUVwQkMsYUFBV2xDO0FBRlMsQzs7O0FBMEN4QixJQUFNbUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ2xDLE9BQUQsRUFBcUM7QUFBQSxNQUN0RG1DLGlCQURzRDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBRWpEO0FBQ1AsZUFBTyw4QkFBQyxVQUFELGVBQWdCLEtBQUt6QixLQUFyQixFQUFnQ1YsT0FBaEMsRUFBUDtBQUNEO0FBSnlEOztBQUFBO0FBQUE7O0FBTTVELFNBQU9tQyxpQkFBUDtBQUNELENBUEQ7O0FBU08sSUFBTUMsb0NBQWM7QUFDekJDLG1CQUFpQkgsaUJBQWlCLEVBQUVGLE1BQU0sT0FBUixFQUFqQixDQURRO0FBRXpCTSxzQkFBb0JKLGlCQUFpQixFQUFFRixNQUFNLFVBQVIsRUFBakIsQ0FGSztBQUd6Qk8sa0JBQWdCTCxpQkFBaUIsRUFBRUYsTUFBTSxNQUFSLEVBQWpCLENBSFM7QUFJekJRLGtCQUFnQk4saUJBQWlCLEVBQUVGLE1BQU0sTUFBUixFQUFqQixDQUpTO0FBS3pCUyxvQkFBa0JQLGlCQUFpQixFQUFFRixNQUFNLFFBQVIsRUFBakIsQ0FMTztBQU16QlUsbUJBQWlCUixpQkFBaUIsRUFBRUYsTUFBTSxPQUFSLEVBQWpCLENBTlE7QUFPekJXLG9CQUFrQlQsaUJBQWlCLEVBQUVGLE1BQU0sUUFBUixFQUFqQixDQVBPO0FBUXpCWSxzQkFBb0JWLGlCQUFpQixFQUFFRixNQUFNLFVBQVIsRUFBakI7QUFSSyxDQUFwQjs7a0JBV1FFLGdCIiwiZmlsZSI6IklucHV0RmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4vRm9ybUZpZWxkJztcblxuY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8KiwgKiwgKj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdXG4gIH07XG4gIHByb3BzOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBvcHRpb25zOiBPYmplY3RTZWxlY3RPcHRpb25zVHlwZSxcbiAgICBpbnB1dDogeyBuYW1lOiBzdHJpbmcgfSxcbiAgICBzdHlsZXM6IHsgW3N0eWxlOiBzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogW1JlYWN0LkVsZW1lbnQ8Kj5dXG4gIH07XG5cbiAgcmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnM6IEFycmF5PE9wdGlvblR5cGU+KSB7XG4gICAgcmV0dXJuIHNvcnRCeShvcHRpb25zLCBvID0+IG8ubGFiZWwgfHwgby52YWx1ZSkubWFwKCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGxhYmVsXG4gICAgfSwgaWR4KSA9PiA8b3B0aW9uIGtleT17aWR4fSB2YWx1ZT17dmFsdWV9PntsYWJlbCB8fCB2YWx1ZX08L29wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyR3JvdXBJbnB1dE9wdGlvbnMob3B0aW9uczogeyBbc3RyaW5nXTogQXJyYXk8T3B0aW9uVHlwZT4gfSkge1xuICAgIHJldHVybiBzb3J0QnkoT2JqZWN0LmtleXMob3B0aW9ucykpLm1hcCgoZ3JvdXA6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IChcbiAgICAgIDxvcHRncm91cCBrZXk9e2lkeH0gbGFiZWw9e2dyb3VwfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb25zKG9wdGlvbnNbZ3JvdXBdKX1cbiAgICAgIDwvb3B0Z3JvdXA+XG4gICAgKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBvcHRpb25zLCBzdHlsZXMsIGlucHV0LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUZpZWxkIHsuLi5yZXN0fT5cbiAgICAgICAgPElucHV0IGlkPXtuYW1lfSB7Li4uaW5wdXR9IHsuLi5yZXN0fT5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShvcHRpb25zKVxuICAgICAgICAgICAgPyB0aGlzLnJlbmRlcklucHV0T3B0aW9ucyhvcHRpb25zKVxuICAgICAgICAgICAgOiB0aGlzLnJlbmRlckdyb3VwSW5wdXRPcHRpb25zKG9wdGlvbnMpfVxuICAgICAgICA8L0lucHV0PlxuICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBleHRlbmRzIENvbXBvbmVudDwqLCAqLCAqPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbXBvbmVudDogSW5wdXRDb21wb25lbnRcbiAgfTtcblxuICBwcm9wczoge1xuICAgIHNjaGVtYTogYW55LFxuICAgIGNvbXBvbmVudDogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZ1xuICB9O1xuXG4gIHZhbGlkYXRlID0gKHZhbHVlOiBhbnksIGFsbFZhbHVlczogYW55LCBwcm9wczogeyBbc3RyaW5nXTogYW55IH0pID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhanYgPSBuZXcgQWp2KCk7XG4gICAgcmV0dXJuIGFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgfTtcblxuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzY2hlbWEub25lT2YpIHtcbiAgICAgIHJldHVybiBzY2hlbWEub25lT2ZcbiAgICAgICAgLm1hcCgoeyB0aXRsZTogbGFiZWwsIGNvbnN0OiB2YWx1ZSwgZGVzY3JpcHRpb246IHRvb2x0aXAgfSkgPT4gKHtcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB0b29sdGlwXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZpZWxkXG4gICAgICAgIG9wdGlvbnM9e3RoaXMuZ2V0T3B0aW9ucygpfVxuICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9IChvcHRpb25zOiBDcmVhdGVJbnB1dE9wdGlvbnNUeXBlKSA9PiB7XG4gIGNsYXNzIENyZWF0ZWRJbnB1dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPElucHV0RmllbGQgey4uLnRoaXMucHJvcHN9IHsuLi5vcHRpb25zfSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENyZWF0ZWRJbnB1dEZpZWxkO1xufTtcblxuZXhwb3J0IGNvbnN0IGlucHV0RmllbGRzID0ge1xuICBFbWFpbElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZW1haWwnIH0pLFxuICBQYXNzd29yZElucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAncGFzc3dvcmQnIH0pLFxuICBGaWxlSW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdmaWxlJyB9KSxcbiAgRGF0ZUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnZGF0ZScgfSksXG4gIE51bWJlcklucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAnbnVtYmVyJyB9KSxcbiAgQ29sb3JJbnB1dEZpZWxkOiBjcmVhdGVJbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJyB9KSxcbiAgU2VsZWN0SW5wdXRGaWVsZDogY3JlYXRlSW5wdXRGaWVsZCh7IHR5cGU6ICdzZWxlY3QnIH0pLFxuICBUZXh0QXJlYUlucHV0RmllbGQ6IGNyZWF0ZUlucHV0RmllbGQoeyB0eXBlOiAndGV4dGFyZWEnIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dEZpZWxkO1xuIl19