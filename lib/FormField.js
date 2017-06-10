'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LABEL_PROP = 'title';

var DEFAULT_SHOW = function DEFAULT_SHOW(_ref) {
  var meta = _ref.meta;
  return meta.touched;
};

var FormField = function (_Component) {
  _inherits(FormField, _Component);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).apply(this, arguments));
  }

  _createClass(FormField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          styles = _props.styles,
          required = _props.required,
          Tag = _props.tag,
          schema = _props.schema,
          _props$tooltipProps = _props.tooltipProps,
          _props$tooltipProps$p = _props$tooltipProps.placement,
          placement = _props$tooltipProps$p === undefined ? 'right' : _props$tooltipProps$p,
          tooltipProps = _objectWithoutProperties(_props$tooltipProps, ['placement']),
          _props$labelProps = _props.labelProps,
          _props$labelProps$tag = _props$labelProps.tag,
          LabelTag = _props$labelProps$tag === undefined ? 'label' : _props$labelProps$tag,
          _props$labelProps$req = _props$labelProps.requiredColor,
          requiredColor = _props$labelProps$req === undefined ? 'red' : _props$labelProps$req,
          labelProps = _objectWithoutProperties(_props$labelProps, ['tag', 'requiredColor']),
          _props$errorProps = _props.errorProps,
          _props$errorProps$tag = _props$errorProps.tag,
          ErrorTag = _props$errorProps$tag === undefined ? 'div' : _props$errorProps$tag,
          _props$errorProps$sho = _props$errorProps.show,
          showError = _props$errorProps$sho === undefined ? DEFAULT_SHOW : _props$errorProps$sho,
          errorProps = _objectWithoutProperties(_props$errorProps, ['tag', 'show']),
          _props$warningProps = _props.warningProps,
          _props$warningProps$t = _props$warningProps.tag,
          WarningTag = _props$warningProps$t === undefined ? 'div' : _props$warningProps$t,
          _props$warningProps$s = _props$warningProps.show,
          showWarning = _props$warningProps$s === undefined ? DEFAULT_SHOW : _props$warningProps$s,
          warningProps = _objectWithoutProperties(_props$warningProps, ['tag', 'show']),
          _props$meta = _props.meta,
          error = _props$meta.error,
          warning = _props$meta.warning,
          input = _props.input,
          rest = _objectWithoutProperties(_props, ['name', 'styles', 'required', 'tag', 'schema', 'tooltipProps', 'labelProps', 'errorProps', 'warningProps', 'meta', 'input']);

      var label = (0, _lodash.get)(schema, LABEL_PROP);
      var labelId = name + '-label';
      return _react2.default.createElement(
        Tag,
        rest,
        _react2.default.createElement(
          LabelTag,
          _extends({ id: labelId, 'for': name }, labelProps),
          required && _react2.default.createElement(
            'span',
            { style: { color: requiredColor } },
            '*'
          ),
          label
        ),
        schema.description && _react2.default.createElement(
          _reactstrap.UncontrolledTooltip,
          _extends({
            target: labelId,
            placement: placement
          }, tooltipProps),
          schema.description
        ),
        _react.Children.map(function (child) {
          return (0, _react.cloneElement)(child, _extends({ input: input, id: name, schema: schema }, rest));
        }),
        showError(this.props) && error && _react2.default.createElement(
          ErrorTag,
          _extends({ id: name + '-error' }, errorProps),
          error
        ),
        showWarning(this.props) && warning && _react2.default.createElement(
          WarningTag,
          _extends({ id: name + '-warning' }, warningProps),
          warning
        )
      );
    }
  }]);

  return FormField;
}(_react.Component);

FormField.defaultProps = {
  required: false,
  tag: 'div',
  labelProps: {},
  errorProps: {},
  warningProps: {},
  tooltipProps: {}
};
exports.default = FormField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwicHJvcHMiLCJuYW1lIiwic3R5bGVzIiwicmVxdWlyZWQiLCJUYWciLCJ0YWciLCJzY2hlbWEiLCJ0b29sdGlwUHJvcHMiLCJwbGFjZW1lbnQiLCJsYWJlbFByb3BzIiwiTGFiZWxUYWciLCJyZXF1aXJlZENvbG9yIiwiZXJyb3JQcm9wcyIsIkVycm9yVGFnIiwic2hvdyIsInNob3dFcnJvciIsIndhcm5pbmdQcm9wcyIsIldhcm5pbmdUYWciLCJzaG93V2FybmluZyIsImVycm9yIiwid2FybmluZyIsImlucHV0IiwicmVzdCIsImxhYmVsIiwibGFiZWxJZCIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJjaGlsZCIsImlkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxPQUFuQjs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjQSxLQUFLQyxPQUFuQjtBQUFBLENBQXJCOztJQUVxQkMsUzs7Ozs7Ozs7Ozs7NkJBMkJWO0FBQUEsbUJBMEJILEtBQUtDLEtBMUJGO0FBQUEsVUFFTEMsSUFGSyxVQUVMQSxJQUZLO0FBQUEsVUFHTEMsTUFISyxVQUdMQSxNQUhLO0FBQUEsVUFJTEMsUUFKSyxVQUlMQSxRQUpLO0FBQUEsVUFLQUMsR0FMQSxVQUtMQyxHQUxLO0FBQUEsVUFNTEMsTUFOSyxVQU1MQSxNQU5LO0FBQUEsdUNBT0xDLFlBUEs7QUFBQSxzREFPV0MsU0FQWDtBQUFBLFVBT1dBLFNBUFgseUNBT3VCLE9BUHZCO0FBQUEsVUFPbUNELFlBUG5DO0FBQUEscUNBUUxFLFVBUks7QUFBQSxvREFTSEosR0FURztBQUFBLFVBU0VLLFFBVEYseUNBU2EsT0FUYjtBQUFBLG9EQVVIQyxhQVZHO0FBQUEsVUFVSEEsYUFWRyx5Q0FVYSxLQVZiO0FBQUEsVUFXQUYsVUFYQTtBQUFBLHFDQWFMRyxVQWJLO0FBQUEsb0RBY0hQLEdBZEc7QUFBQSxVQWNFUSxRQWRGLHlDQWNhLEtBZGI7QUFBQSxvREFlSEMsSUFmRztBQUFBLFVBZUdDLFNBZkgseUNBZWVuQixZQWZmO0FBQUEsVUFnQkFnQixVQWhCQTtBQUFBLHVDQWtCTEksWUFsQks7QUFBQSxzREFtQkhYLEdBbkJHO0FBQUEsVUFtQkVZLFVBbkJGLHlDQW1CZSxLQW5CZjtBQUFBLHNEQW9CSEgsSUFwQkc7QUFBQSxVQW9CR0ksV0FwQkgseUNBb0JpQnRCLFlBcEJqQjtBQUFBLFVBcUJBb0IsWUFyQkE7QUFBQSwrQkF1QkxuQixJQXZCSztBQUFBLFVBdUJHc0IsS0F2QkgsZUF1QkdBLEtBdkJIO0FBQUEsVUF1QlVDLE9BdkJWLGVBdUJVQSxPQXZCVjtBQUFBLFVBd0JMQyxLQXhCSyxVQXdCTEEsS0F4Qks7QUFBQSxVQXlCRkMsSUF6QkU7O0FBMkJQLFVBQU1DLFFBQVEsaUJBQUlqQixNQUFKLEVBQVlYLFVBQVosQ0FBZDtBQUNBLFVBQU02QixVQUFhdkIsSUFBYixXQUFOO0FBQ0EsYUFDRTtBQUFDLFdBQUQ7QUFBU3FCLFlBQVQ7QUFDRTtBQUFDLGtCQUFEO0FBQUEscUJBQVUsSUFBSUUsT0FBZCxFQUF1QixPQUFLdkIsSUFBNUIsSUFBc0NRLFVBQXRDO0FBQ0dOLHNCQUFZO0FBQUE7QUFBQSxjQUFNLE9BQU8sRUFBRXNCLE9BQU9kLGFBQVQsRUFBYjtBQUFBO0FBQUEsV0FEZjtBQUVHWTtBQUZILFNBREY7QUFNR2pCLGVBQU9vQixXQUFQLElBQ0M7QUFBQTtBQUFBO0FBQ0Usb0JBQVFGLE9BRFY7QUFFRSx1QkFBV2hCO0FBRmIsYUFHTUQsWUFITjtBQUtHRCxpQkFBT29CO0FBTFYsU0FQSjtBQWVHLHdCQUFTQyxHQUFULENBQWE7QUFBQSxpQkFDWix5QkFBYUMsS0FBYixhQUFzQlAsWUFBdEIsRUFBNkJRLElBQUk1QixJQUFqQyxFQUF1Q0ssY0FBdkMsSUFBa0RnQixJQUFsRCxFQURZO0FBQUEsU0FBYixDQWZIO0FBbUJHUCxrQkFBVSxLQUFLZixLQUFmLEtBQ0NtQixLQURELElBRUM7QUFBQyxrQkFBRDtBQUFBLHFCQUFVLElBQU9sQixJQUFQLFdBQVYsSUFBbUNXLFVBQW5DO0FBQ0dPO0FBREgsU0FyQko7QUF5QkdELG9CQUFZLEtBQUtsQixLQUFqQixLQUNDb0IsT0FERCxJQUVDO0FBQUMsb0JBQUQ7QUFBQSxxQkFBWSxJQUFPbkIsSUFBUCxhQUFaLElBQXVDZSxZQUF2QztBQUNHSTtBQURIO0FBM0JKLE9BREY7QUFpQ0Q7Ozs7OztBQXpGa0JyQixTLENBQ1orQixZLEdBQWU7QUFDcEIzQixZQUFVLEtBRFU7QUFFcEJFLE9BQUssS0FGZTtBQUdwQkksY0FBWSxFQUhRO0FBSXBCRyxjQUFZLEVBSlE7QUFLcEJJLGdCQUFjLEVBTE07QUFNcEJULGdCQUFjO0FBTk0sQztrQkFESFIsUyIsImZpbGUiOiJGb3JtRmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBTY2hlbWFUeXBlIH0gZnJvbSAncmVkdXgtanNvbnNjaGVtYSc7XG5pbXBvcnQgeyBVbmNvbnRyb2xsZWRUb29sdGlwLCBMYWJlbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgTEFCRUxfUFJPUCA9ICd0aXRsZSc7XG5cbmNvbnN0IERFRkFVTFRfU0hPVyA9ICh7IG1ldGEgfSkgPT4gbWV0YS50b3VjaGVkO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0YWc6ICdkaXYnLFxuICAgIGxhYmVsUHJvcHM6IHt9LFxuICAgIGVycm9yUHJvcHM6IHt9LFxuICAgIHdhcm5pbmdQcm9wczoge30sXG4gICAgdG9vbHRpcFByb3BzOiB7fVxuICB9O1xuICBwcm9wczoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzY2hlbWE6IFNjaGVtYVR5cGUsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgdGFnOiBzdHJpbmcsXG4gICAgZXJyb3JQcm9wczogTWVzc2FnZVByb3BzVHlwZSxcbiAgICB3YXJuaW5nUHJvcHM6IE1lc3NhZ2VQcm9wc1R5cGUsXG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgdGFnOiBzdHJpbmcsXG4gICAgICByZXF1aXJlZENvbG9yOiBzdHJpbmdcbiAgICB9LFxuICAgIHRvb2x0aXBQcm9wczoge1xuICAgICAgcGxhY2VtZW50OiBzdHJpbmdcbiAgICB9LFxuICAgIG1ldGE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIGNoaWxkcmVuOiBSZWFjdC5FbGVtZW50PCo+IHwgW1JlYWN0LkVsZW1lbnQ8Kj5dXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHlsZXMsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHRhZzogVGFnLFxuICAgICAgc2NoZW1hLFxuICAgICAgdG9vbHRpcFByb3BzOiB7IHBsYWNlbWVudCA9ICdyaWdodCcsIC4uLnRvb2x0aXBQcm9wcyB9LFxuICAgICAgbGFiZWxQcm9wczoge1xuICAgICAgICB0YWc6IExhYmVsVGFnID0gJ2xhYmVsJyxcbiAgICAgICAgcmVxdWlyZWRDb2xvciA9ICdyZWQnLFxuICAgICAgICAuLi5sYWJlbFByb3BzXG4gICAgICB9LFxuICAgICAgZXJyb3JQcm9wczoge1xuICAgICAgICB0YWc6IEVycm9yVGFnID0gJ2RpdicsXG4gICAgICAgIHNob3c6IHNob3dFcnJvciA9IERFRkFVTFRfU0hPVyxcbiAgICAgICAgLi4uZXJyb3JQcm9wc1xuICAgICAgfSxcbiAgICAgIHdhcm5pbmdQcm9wczoge1xuICAgICAgICB0YWc6IFdhcm5pbmdUYWcgPSAnZGl2JyxcbiAgICAgICAgc2hvdzogc2hvd1dhcm5pbmcgPSBERUZBVUxUX1NIT1csXG4gICAgICAgIC4uLndhcm5pbmdQcm9wc1xuICAgICAgfSxcbiAgICAgIG1ldGE6IHsgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgIGlucHV0LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsID0gZ2V0KHNjaGVtYSwgTEFCRUxfUFJPUCk7XG4gICAgY29uc3QgbGFiZWxJZCA9IGAke25hbWV9LWxhYmVsYDtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhZyB7Li4ucmVzdH0+XG4gICAgICAgIDxMYWJlbFRhZyBpZD17bGFiZWxJZH0gZm9yPXtuYW1lfSB7Li4ubGFiZWxQcm9wc30+XG4gICAgICAgICAge3JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiByZXF1aXJlZENvbG9yIH19Pio8L3NwYW4+fVxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9MYWJlbFRhZz5cblxuICAgICAgICB7c2NoZW1hLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgIHRhcmdldD17bGFiZWxJZH1cbiAgICAgICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgey4uLnRvb2x0aXBQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2NoZW1hLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD59XG5cbiAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZCA9PlxuICAgICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwgeyBpbnB1dCwgaWQ6IG5hbWUsIHNjaGVtYSwgLi4ucmVzdCB9KVxuICAgICAgICApfVxuXG4gICAgICAgIHtzaG93RXJyb3IodGhpcy5wcm9wcykgJiZcbiAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgIDxFcnJvclRhZyBpZD17YCR7bmFtZX0tZXJyb3JgfSB7Li4uZXJyb3JQcm9wc30+XG4gICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgPC9FcnJvclRhZz59XG5cbiAgICAgICAge3Nob3dXYXJuaW5nKHRoaXMucHJvcHMpICYmXG4gICAgICAgICAgd2FybmluZyAmJlxuICAgICAgICAgIDxXYXJuaW5nVGFnIGlkPXtgJHtuYW1lfS13YXJuaW5nYH0gey4uLndhcm5pbmdQcm9wc30+XG4gICAgICAgICAgICB7d2FybmluZ31cbiAgICAgICAgICA8L1dhcm5pbmdUYWc+fVxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuIl19