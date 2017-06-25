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
        if (!!(0, _lodash.get)(meta, 'error')) {
          return 'danger';
        } else if (!!(0, _lodash.get)(meta, 'warning')) {
          return 'warning';
        } else {
          return 'success';
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
          return (0, _react.cloneElement)(child, _extends({ id: name, state: inputState }, rest));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwicHJvcHMiLCJzaG93RmVlZGJhY2siLCJ1bmRlZmluZWQiLCJuYW1lIiwic3R5bGVzIiwicmVxdWlyZWQiLCJUYWciLCJ0YWciLCJzY2hlbWEiLCJ0b29sdGlwUHJvcHMiLCJwbGFjZW1lbnQiLCJsYWJlbFByb3BzIiwiTGFiZWxUYWciLCJyZXF1aXJlZENvbG9yIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5wdXQiLCJjaGlsZHJlbiIsInJlc3QiLCJsYWJlbCIsImxhYmVsSWQiLCJpbnB1dFN0YXRlIiwiZ2V0SW5wdXRTdGF0ZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJjaGlsZCIsImlkIiwic3RhdGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU1BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLE9BQW5COztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWNBLEtBQUtDLE9BQW5CO0FBQUEsQ0FBckI7O0lBRXFCQyxTOzs7Ozs7Ozs7OztvQ0F5Qkg7QUFBQSxtQkFDaUIsS0FBS0MsS0FEdEI7QUFBQSxVQUNOSCxJQURNLFVBQ05BLElBRE07QUFBQSxVQUNBSSxZQURBLFVBQ0FBLFlBREE7OztBQUdkLFVBQUlBLGFBQWEsS0FBS0QsS0FBbEIsQ0FBSixFQUE4QjtBQUM1QixZQUFJLENBQUMsQ0FBQyxpQkFBSUgsSUFBSixFQUFVLE9BQVYsQ0FBTixFQUEwQjtBQUN4QixpQkFBTyxRQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUksQ0FBQyxDQUFDLGlCQUFJQSxJQUFKLEVBQVUsU0FBVixDQUFOLEVBQTRCO0FBQ2pDLGlCQUFPLFNBQVA7QUFDRCxTQUZNLE1BRUE7QUFDTCxpQkFBTyxTQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSyxTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG9CQWtCSCxLQUFLRixLQWxCRjtBQUFBLFVBRUxHLElBRkssV0FFTEEsSUFGSztBQUFBLFVBR0xDLE1BSEssV0FHTEEsTUFISztBQUFBLFVBSUxDLFFBSkssV0FJTEEsUUFKSztBQUFBLFVBS0FDLEdBTEEsV0FLTEMsR0FMSztBQUFBLFVBTUxDLE1BTkssV0FNTEEsTUFOSztBQUFBLHlDQU9MQyxZQVBLO0FBQUEsdURBT1dDLFNBUFg7QUFBQSxVQU9XQSxTQVBYLHlDQU91QixPQVB2QjtBQUFBLFVBT21DRCxZQVBuQztBQUFBLHVDQVFMRSxVQVJLO0FBQUEscURBU0hKLEdBVEc7QUFBQSxVQVNFSyxRQVRGO0FBQUEscURBVUhDLGFBVkc7QUFBQSxVQVVIQSxhQVZHLHlDQVVhLEtBVmI7QUFBQSxVQVdBRixVQVhBO0FBQUEsVUFhTFYsWUFiSyxXQWFMQSxZQWJLO0FBQUEsaUNBY0xKLElBZEs7QUFBQSxVQWNHaUIsS0FkSCxnQkFjR0EsS0FkSDtBQUFBLFVBY1VDLE9BZFYsZ0JBY1VBLE9BZFY7QUFBQSxVQWVMQyxLQWZLLFdBZUxBLEtBZks7QUFBQSxVQWdCTEMsUUFoQkssV0FnQkxBLFFBaEJLO0FBQUEsVUFpQkZDLElBakJFOztBQW1CUCxVQUFNQyxRQUFRLGlCQUFJWCxNQUFKLEVBQVliLFVBQVosQ0FBZDtBQUNBLFVBQU15QixVQUFhakIsSUFBYixXQUFOO0FBQ0EsVUFBTWtCLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUNBLGFBQ0U7QUFBQyxXQUFEO0FBQUEscUJBQVNKLElBQVQsSUFBZSxPQUFPRyxVQUF0QjtBQUNFO0FBQUMsa0JBQUQ7QUFBQSxxQkFBVSxJQUFJRCxPQUFkLEVBQXVCLE9BQUtqQixJQUE1QixJQUFzQ1EsVUFBdEM7QUFDR04sc0JBQVk7QUFBQTtBQUFBLGNBQU0sT0FBTyxFQUFFa0IsT0FBT1YsYUFBVCxFQUFiO0FBQUE7QUFBQSxXQURmO0FBRUdNO0FBRkgsU0FERjtBQU1HWCxlQUFPZ0IsV0FBUCxJQUNDO0FBQUE7QUFBQTtBQUNFLG9CQUFRSixPQURWO0FBRUUsdUJBQVdWO0FBRmIsYUFHTUQsWUFITjtBQUtHRCxpQkFBT2dCO0FBTFYsU0FQSjtBQWVHLHdCQUFTQyxHQUFULENBQWFSLFFBQWIsRUFBdUI7QUFBQSxpQkFDdEIseUJBQWFTLEtBQWIsYUFBc0JDLElBQUl4QixJQUExQixFQUFnQ3lCLE9BQU9QLFVBQXZDLElBQXNESCxJQUF0RCxFQURzQjtBQUFBLFNBQXZCLENBZkg7QUFtQkdHLHNCQUNDO0FBQUE7QUFBQSxZQUFjLElBQU9sQixJQUFQLGNBQWQ7QUFDR1csbUJBQVNDO0FBRFo7QUFwQkosT0FERjtBQTBCRDs7Ozs7O0FBekZrQmhCLFMsQ0FDWjhCLFksR0FBZTtBQUNwQnhCLFlBQVUsS0FEVTtBQUVwQkUsNEJBRm9CO0FBR3BCSSxjQUFZLEVBSFE7QUFJcEJWLGdCQUFjTCxZQUpNO0FBS3BCYSxnQkFBYztBQUxNLEM7a0JBREhWLFMiLCJmaWxlIjoiRm9ybUZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFVuY29udHJvbGxlZFRvb2x0aXAsXG4gIExhYmVsLFxuICBGb3JtRmVlZGJhY2ssXG4gIEZvcm1Hcm91cFxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGdldCwgaGFzIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgTEFCRUxfUFJPUCA9ICd0aXRsZSc7XG5cbmNvbnN0IERFRkFVTFRfU0hPVyA9ICh7IG1ldGEgfSkgPT4gbWV0YS50b3VjaGVkO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0YWc6IEZvcm1Hcm91cCxcbiAgICBsYWJlbFByb3BzOiB7fSxcbiAgICBzaG93RmVlZGJhY2s6IERFRkFVTFRfU0hPVyxcbiAgICB0b29sdGlwUHJvcHM6IHt9XG4gIH07XG4gIHByb3BzOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNjaGVtYTogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgdGFnOiBzdHJpbmcsXG4gICAgc2hvd0ZlZWRiYWNrOiBTaG93RmVlZGJhY2tUeXBlLFxuICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgIHRhZzogc3RyaW5nLFxuICAgICAgcmVxdWlyZWRDb2xvcjogc3RyaW5nXG4gICAgfSxcbiAgICB0b29sdGlwUHJvcHM6IHtcbiAgICAgIHBsYWNlbWVudDogc3RyaW5nXG4gICAgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogUmVhY3QuRWxlbWVudDwqPiB8IFtSZWFjdC5FbGVtZW50PCo+XVxuICB9O1xuXG4gIGdldElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBtZXRhLCBzaG93RmVlZGJhY2sgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc2hvd0ZlZWRiYWNrKHRoaXMucHJvcHMpKSB7XG4gICAgICBpZiAoISFnZXQobWV0YSwgJ2Vycm9yJykpIHtcbiAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgICAgfSBlbHNlIGlmICghIWdldChtZXRhLCAnd2FybmluZycpKSB7XG4gICAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgdGFnOiBUYWcsXG4gICAgICBzY2hlbWEsXG4gICAgICB0b29sdGlwUHJvcHM6IHsgcGxhY2VtZW50ID0gJ3JpZ2h0JywgLi4udG9vbHRpcFByb3BzIH0sXG4gICAgICBsYWJlbFByb3BzOiB7XG4gICAgICAgIHRhZzogTGFiZWxUYWcgPSBMYWJlbCxcbiAgICAgICAgcmVxdWlyZWRDb2xvciA9ICdyZWQnLFxuICAgICAgICAuLi5sYWJlbFByb3BzXG4gICAgICB9LFxuICAgICAgc2hvd0ZlZWRiYWNrLFxuICAgICAgbWV0YTogeyBlcnJvciwgd2FybmluZyB9LFxuICAgICAgaW5wdXQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsYWJlbCA9IGdldChzY2hlbWEsIExBQkVMX1BST1ApO1xuICAgIGNvbnN0IGxhYmVsSWQgPSBgJHtuYW1lfS1sYWJlbGA7XG4gICAgY29uc3QgaW5wdXRTdGF0ZSA9IHRoaXMuZ2V0SW5wdXRTdGF0ZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8VGFnIHsuLi5yZXN0fSBjb2xvcj17aW5wdXRTdGF0ZX0+XG4gICAgICAgIDxMYWJlbFRhZyBpZD17bGFiZWxJZH0gZm9yPXtuYW1lfSB7Li4ubGFiZWxQcm9wc30+XG4gICAgICAgICAge3JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiByZXF1aXJlZENvbG9yIH19Pio8L3NwYW4+fVxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9MYWJlbFRhZz5cblxuICAgICAgICB7c2NoZW1hLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgIHRhcmdldD17bGFiZWxJZH1cbiAgICAgICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgey4uLnRvb2x0aXBQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2NoZW1hLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD59XG5cbiAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgICBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgaWQ6IG5hbWUsIHN0YXRlOiBpbnB1dFN0YXRlLCAuLi5yZXN0IH0pXG4gICAgICAgICl9XG5cbiAgICAgICAge2lucHV0U3RhdGUgJiZcbiAgICAgICAgICA8Rm9ybUZlZWRiYWNrIGlkPXtgJHtuYW1lfS1mZWVkYmFja2B9PlxuICAgICAgICAgICAge2Vycm9yIHx8IHdhcm5pbmd9XG4gICAgICAgICAgPC9Gb3JtRmVlZGJhY2s+fVxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuIl19