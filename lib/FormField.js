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
    key: 'getInputState',
    value: function getInputState() {
      var _props = this.props,
          meta = _props.meta,
          showFeedback = _props.showFeedback;


      if (showFeedback(this.props)) {
        if ((0, _lodash.has)(meta, 'error')) {
          return 'danger';
        } else if ((0, _lodash.has)(meta, 'warning')) {
          return 'warning';
        }
      }

      return undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          styles = _props2.styles,
          required = _props2.required,
          Tag = _props2.tag,
          schema = _props2.schema,
          _props2$tooltipProps = _props2.tooltipProps,
          _props2$tooltipProps$ = _props2$tooltipProps.placement,
          placement = _props2$tooltipProps$ === undefined ? 'right' : _props2$tooltipProps$,
          tooltipProps = _objectWithoutProperties(_props2$tooltipProps, ['placement']),
          _props2$labelProps = _props2.labelProps,
          _props2$labelProps$ta = _props2$labelProps.tag,
          LabelTag = _props2$labelProps$ta === undefined ? _reactstrap.Label : _props2$labelProps$ta,
          _props2$labelProps$re = _props2$labelProps.requiredColor,
          requiredColor = _props2$labelProps$re === undefined ? 'red' : _props2$labelProps$re,
          labelProps = _objectWithoutProperties(_props2$labelProps, ['tag', 'requiredColor']),
          showFeedback = _props2.showFeedback,
          _props2$meta = _props2.meta,
          error = _props2$meta.error,
          warning = _props2$meta.warning,
          input = _props2.input,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['name', 'styles', 'required', 'tag', 'schema', 'tooltipProps', 'labelProps', 'showFeedback', 'meta', 'input', 'children']);

      var label = (0, _lodash.get)(schema, LABEL_PROP);
      var labelId = name + '-label';
      var inputState = this.getInputState();
      return _react2.default.createElement(
        Tag,
        _extends({}, rest, { color: inputState }),
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
        _react.Children.map(children, function (child) {
          return (0, _react.cloneElement)(child, _extends({ input: input, id: name }, rest));
        }),
        inputState && _react2.default.createElement(
          _reactstrap.FormFeedback,
          { id: name + '-feedback' },
          error || warning
        )
      );
    }
  }]);

  return FormField;
}(_react.Component);

FormField.defaultProps = {
  required: false,
  tag: _reactstrap.FormGroup,
  labelProps: {},
  showFeedback: DEFAULT_SHOW,
  tooltipProps: {}
};
exports.default = FormField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwicHJvcHMiLCJzaG93RmVlZGJhY2siLCJ1bmRlZmluZWQiLCJuYW1lIiwic3R5bGVzIiwicmVxdWlyZWQiLCJUYWciLCJ0YWciLCJzY2hlbWEiLCJ0b29sdGlwUHJvcHMiLCJwbGFjZW1lbnQiLCJsYWJlbFByb3BzIiwiTGFiZWxUYWciLCJyZXF1aXJlZENvbG9yIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5wdXQiLCJjaGlsZHJlbiIsInJlc3QiLCJsYWJlbCIsImxhYmVsSWQiLCJpbnB1dFN0YXRlIiwiZ2V0SW5wdXRTdGF0ZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJjaGlsZCIsImlkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFNQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxPQUFuQjs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjQSxLQUFLQyxPQUFuQjtBQUFBLENBQXJCOztJQUVxQkMsUzs7Ozs7Ozs7Ozs7b0NBeUJIO0FBQUEsbUJBQ2lCLEtBQUtDLEtBRHRCO0FBQUEsVUFDTkgsSUFETSxVQUNOQSxJQURNO0FBQUEsVUFDQUksWUFEQSxVQUNBQSxZQURBOzs7QUFHZCxVQUFJQSxhQUFhLEtBQUtELEtBQWxCLENBQUosRUFBOEI7QUFDNUIsWUFBSSxpQkFBSUgsSUFBSixFQUFVLE9BQVYsQ0FBSixFQUF3QjtBQUN0QixpQkFBTyxRQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUksaUJBQUlBLElBQUosRUFBVSxTQUFWLENBQUosRUFBMEI7QUFDL0IsaUJBQU8sU0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0ssU0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxvQkFrQkgsS0FBS0YsS0FsQkY7QUFBQSxVQUVMRyxJQUZLLFdBRUxBLElBRks7QUFBQSxVQUdMQyxNQUhLLFdBR0xBLE1BSEs7QUFBQSxVQUlMQyxRQUpLLFdBSUxBLFFBSks7QUFBQSxVQUtBQyxHQUxBLFdBS0xDLEdBTEs7QUFBQSxVQU1MQyxNQU5LLFdBTUxBLE1BTks7QUFBQSx5Q0FPTEMsWUFQSztBQUFBLHVEQU9XQyxTQVBYO0FBQUEsVUFPV0EsU0FQWCx5Q0FPdUIsT0FQdkI7QUFBQSxVQU9tQ0QsWUFQbkM7QUFBQSx1Q0FRTEUsVUFSSztBQUFBLHFEQVNISixHQVRHO0FBQUEsVUFTRUssUUFURjtBQUFBLHFEQVVIQyxhQVZHO0FBQUEsVUFVSEEsYUFWRyx5Q0FVYSxLQVZiO0FBQUEsVUFXQUYsVUFYQTtBQUFBLFVBYUxWLFlBYkssV0FhTEEsWUFiSztBQUFBLGlDQWNMSixJQWRLO0FBQUEsVUFjR2lCLEtBZEgsZ0JBY0dBLEtBZEg7QUFBQSxVQWNVQyxPQWRWLGdCQWNVQSxPQWRWO0FBQUEsVUFlTEMsS0FmSyxXQWVMQSxLQWZLO0FBQUEsVUFnQkxDLFFBaEJLLFdBZ0JMQSxRQWhCSztBQUFBLFVBaUJGQyxJQWpCRTs7QUFtQlAsVUFBTUMsUUFBUSxpQkFBSVgsTUFBSixFQUFZYixVQUFaLENBQWQ7QUFDQSxVQUFNeUIsVUFBYWpCLElBQWIsV0FBTjtBQUNBLFVBQU1rQixhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxhQUNFO0FBQUMsV0FBRDtBQUFBLHFCQUFTSixJQUFULElBQWUsT0FBT0csVUFBdEI7QUFDRTtBQUFDLGtCQUFEO0FBQUEscUJBQVUsSUFBSUQsT0FBZCxFQUF1QixPQUFLakIsSUFBNUIsSUFBc0NRLFVBQXRDO0FBQ0dOLHNCQUFZO0FBQUE7QUFBQSxjQUFNLE9BQU8sRUFBRWtCLE9BQU9WLGFBQVQsRUFBYjtBQUFBO0FBQUEsV0FEZjtBQUVHTTtBQUZILFNBREY7QUFNR1gsZUFBT2dCLFdBQVAsSUFDQztBQUFBO0FBQUE7QUFDRSxvQkFBUUosT0FEVjtBQUVFLHVCQUFXVjtBQUZiLGFBR01ELFlBSE47QUFLR0QsaUJBQU9nQjtBQUxWLFNBUEo7QUFlRyx3QkFBU0MsR0FBVCxDQUFhUixRQUFiLEVBQXVCO0FBQUEsaUJBQ3RCLHlCQUFhUyxLQUFiLGFBQXNCVixZQUF0QixFQUE2QlcsSUFBSXhCLElBQWpDLElBQTBDZSxJQUExQyxFQURzQjtBQUFBLFNBQXZCLENBZkg7QUFtQkdHLHNCQUNDO0FBQUE7QUFBQSxZQUFjLElBQU9sQixJQUFQLGNBQWQ7QUFDR1csbUJBQVNDO0FBRFo7QUFwQkosT0FERjtBQTBCRDs7Ozs7O0FBdkZrQmhCLFMsQ0FDWjZCLFksR0FBZTtBQUNwQnZCLFlBQVUsS0FEVTtBQUVwQkUsNEJBRm9CO0FBR3BCSSxjQUFZLEVBSFE7QUFJcEJWLGdCQUFjTCxZQUpNO0FBS3BCYSxnQkFBYztBQUxNLEM7a0JBREhWLFMiLCJmaWxlIjoiRm9ybUZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFVuY29udHJvbGxlZFRvb2x0aXAsXG4gIExhYmVsLFxuICBGb3JtRmVlZGJhY2ssXG4gIEZvcm1Hcm91cFxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGdldCwgaGFzIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgTEFCRUxfUFJPUCA9ICd0aXRsZSc7XG5cbmNvbnN0IERFRkFVTFRfU0hPVyA9ICh7IG1ldGEgfSkgPT4gbWV0YS50b3VjaGVkO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0YWc6IEZvcm1Hcm91cCxcbiAgICBsYWJlbFByb3BzOiB7fSxcbiAgICBzaG93RmVlZGJhY2s6IERFRkFVTFRfU0hPVyxcbiAgICB0b29sdGlwUHJvcHM6IHt9XG4gIH07XG4gIHByb3BzOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNjaGVtYTogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgdGFnOiBzdHJpbmcsXG4gICAgc2hvd0ZlZWRiYWNrOiBTaG93RmVlZGJhY2tUeXBlLFxuICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgIHRhZzogc3RyaW5nLFxuICAgICAgcmVxdWlyZWRDb2xvcjogc3RyaW5nXG4gICAgfSxcbiAgICB0b29sdGlwUHJvcHM6IHtcbiAgICAgIHBsYWNlbWVudDogc3RyaW5nXG4gICAgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogUmVhY3QuRWxlbWVudDwqPiB8IFtSZWFjdC5FbGVtZW50PCo+XVxuICB9O1xuXG4gIGdldElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBtZXRhLCBzaG93RmVlZGJhY2sgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc2hvd0ZlZWRiYWNrKHRoaXMucHJvcHMpKSB7XG4gICAgICBpZiAoaGFzKG1ldGEsICdlcnJvcicpKSB7XG4gICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICAgIH0gZWxzZSBpZiAoaGFzKG1ldGEsICd3YXJuaW5nJykpIHtcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHlsZXMsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHRhZzogVGFnLFxuICAgICAgc2NoZW1hLFxuICAgICAgdG9vbHRpcFByb3BzOiB7IHBsYWNlbWVudCA9ICdyaWdodCcsIC4uLnRvb2x0aXBQcm9wcyB9LFxuICAgICAgbGFiZWxQcm9wczoge1xuICAgICAgICB0YWc6IExhYmVsVGFnID0gTGFiZWwsXG4gICAgICAgIHJlcXVpcmVkQ29sb3IgPSAncmVkJyxcbiAgICAgICAgLi4ubGFiZWxQcm9wc1xuICAgICAgfSxcbiAgICAgIHNob3dGZWVkYmFjayxcbiAgICAgIG1ldGE6IHsgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgIGlucHV0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWwgPSBnZXQoc2NoZW1hLCBMQUJFTF9QUk9QKTtcbiAgICBjb25zdCBsYWJlbElkID0gYCR7bmFtZX0tbGFiZWxgO1xuICAgIGNvbnN0IGlucHV0U3RhdGUgPSB0aGlzLmdldElucHV0U3RhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhZyB7Li4ucmVzdH0gY29sb3I9e2lucHV0U3RhdGV9PlxuICAgICAgICA8TGFiZWxUYWcgaWQ9e2xhYmVsSWR9IGZvcj17bmFtZX0gey4uLmxhYmVsUHJvcHN9PlxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogcmVxdWlyZWRDb2xvciB9fT4qPC9zcGFuPn1cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvTGFiZWxUYWc+XG5cbiAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICB0YXJnZXQ9e2xhYmVsSWR9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgICAgIHsuLi50b29sdGlwUHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+fVxuXG4gICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+XG4gICAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7IGlucHV0LCBpZDogbmFtZSwgLi4ucmVzdCB9KVxuICAgICAgICApfVxuXG4gICAgICAgIHtpbnB1dFN0YXRlICYmXG4gICAgICAgICAgPEZvcm1GZWVkYmFjayBpZD17YCR7bmFtZX0tZmVlZGJhY2tgfT5cbiAgICAgICAgICAgIHtlcnJvciB8fCB3YXJuaW5nfVxuICAgICAgICAgIDwvRm9ybUZlZWRiYWNrPn1cbiAgICAgIDwvVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==