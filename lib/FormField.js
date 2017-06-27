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
          classes = _props2.classes,
          sheet = _props2.sheet,
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
          rest = _objectWithoutProperties(_props2, ['name', 'classes', 'sheet', 'required', 'tag', 'schema', 'tooltipProps', 'labelProps', 'showFeedback', 'meta', 'input', 'children']);

      var label = (0, _lodash.get)(schema, LABEL_PROP);
      var labelId = name + '-label';
      var inputState = this.getInputState();
      return _react2.default.createElement(
        Tag,
        _extends({}, rest, { color: inputState }),
        _react2.default.createElement(
          LabelTag,
          _extends({
            className: classes.label,
            id: labelId,
            'for': name
          }, labelProps),
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
            className: classes.tooltip,
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
          { className: classes.feedback, id: name + '-feedback' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwicHJvcHMiLCJzaG93RmVlZGJhY2siLCJ1bmRlZmluZWQiLCJuYW1lIiwiY2xhc3NlcyIsInNoZWV0IiwicmVxdWlyZWQiLCJUYWciLCJ0YWciLCJzY2hlbWEiLCJ0b29sdGlwUHJvcHMiLCJwbGFjZW1lbnQiLCJsYWJlbFByb3BzIiwiTGFiZWxUYWciLCJyZXF1aXJlZENvbG9yIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5wdXQiLCJjaGlsZHJlbiIsInJlc3QiLCJsYWJlbCIsImxhYmVsSWQiLCJpbnB1dFN0YXRlIiwiZ2V0SW5wdXRTdGF0ZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJ0b29sdGlwIiwibWFwIiwiY2hpbGQiLCJpZCIsInN0YXRlIiwiZmVlZGJhY2siLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU1BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLE9BQW5COztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWNBLEtBQUtDLE9BQW5CO0FBQUEsQ0FBckI7O0lBRXFCQyxTOzs7Ozs7Ozs7OztvQ0F5Qkg7QUFBQSxtQkFDaUIsS0FBS0MsS0FEdEI7QUFBQSxVQUNOSCxJQURNLFVBQ05BLElBRE07QUFBQSxVQUNBSSxZQURBLFVBQ0FBLFlBREE7OztBQUdkLFVBQUlBLGFBQWEsS0FBS0QsS0FBbEIsQ0FBSixFQUE4QjtBQUM1QixZQUFJLENBQUMsQ0FBQyxpQkFBSUgsSUFBSixFQUFVLE9BQVYsQ0FBTixFQUEwQjtBQUN4QixpQkFBTyxRQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUksQ0FBQyxDQUFDLGlCQUFJQSxJQUFKLEVBQVUsU0FBVixDQUFOLEVBQTRCO0FBQ2pDLGlCQUFPLFNBQVA7QUFDRCxTQUZNLE1BRUE7QUFDTCxpQkFBTyxTQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSyxTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG9CQW1CSCxLQUFLRixLQW5CRjtBQUFBLFVBRUxHLElBRkssV0FFTEEsSUFGSztBQUFBLFVBR0xDLE9BSEssV0FHTEEsT0FISztBQUFBLFVBSUxDLEtBSkssV0FJTEEsS0FKSztBQUFBLFVBS0xDLFFBTEssV0FLTEEsUUFMSztBQUFBLFVBTUFDLEdBTkEsV0FNTEMsR0FOSztBQUFBLFVBT0xDLE1BUEssV0FPTEEsTUFQSztBQUFBLHlDQVFMQyxZQVJLO0FBQUEsdURBUVdDLFNBUlg7QUFBQSxVQVFXQSxTQVJYLHlDQVF1QixPQVJ2QjtBQUFBLFVBUW1DRCxZQVJuQztBQUFBLHVDQVNMRSxVQVRLO0FBQUEscURBVUhKLEdBVkc7QUFBQSxVQVVFSyxRQVZGO0FBQUEscURBV0hDLGFBWEc7QUFBQSxVQVdIQSxhQVhHLHlDQVdhLEtBWGI7QUFBQSxVQVlBRixVQVpBO0FBQUEsVUFjTFgsWUFkSyxXQWNMQSxZQWRLO0FBQUEsaUNBZUxKLElBZks7QUFBQSxVQWVHa0IsS0FmSCxnQkFlR0EsS0FmSDtBQUFBLFVBZVVDLE9BZlYsZ0JBZVVBLE9BZlY7QUFBQSxVQWdCTEMsS0FoQkssV0FnQkxBLEtBaEJLO0FBQUEsVUFpQkxDLFFBakJLLFdBaUJMQSxRQWpCSztBQUFBLFVBa0JGQyxJQWxCRTs7QUFvQlAsVUFBTUMsUUFBUSxpQkFBSVgsTUFBSixFQUFZZCxVQUFaLENBQWQ7QUFDQSxVQUFNMEIsVUFBYWxCLElBQWIsV0FBTjtBQUNBLFVBQU1tQixhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxhQUNFO0FBQUMsV0FBRDtBQUFBLHFCQUFTSixJQUFULElBQWUsT0FBT0csVUFBdEI7QUFDRTtBQUFDLGtCQUFEO0FBQUE7QUFDRSx1QkFBV2xCLFFBQVFnQixLQURyQjtBQUVFLGdCQUFJQyxPQUZOO0FBR0UsbUJBQUtsQjtBQUhQLGFBSU1TLFVBSk47QUFNR04sc0JBQVk7QUFBQTtBQUFBLGNBQU0sT0FBTyxFQUFFa0IsT0FBT1YsYUFBVCxFQUFiO0FBQUE7QUFBQSxXQU5mO0FBT0dNO0FBUEgsU0FERjtBQVdHWCxlQUFPZ0IsV0FBUCxJQUNDO0FBQUE7QUFBQTtBQUNFLHVCQUFXckIsUUFBUXNCLE9BRHJCO0FBRUUsb0JBQVFMLE9BRlY7QUFHRSx1QkFBV1Y7QUFIYixhQUlNRCxZQUpOO0FBTUdELGlCQUFPZ0I7QUFOVixTQVpKO0FBcUJHLHdCQUFTRSxHQUFULENBQWFULFFBQWIsRUFBdUI7QUFBQSxpQkFDdEIseUJBQWFVLEtBQWIsYUFBc0JDLElBQUkxQixJQUExQixFQUFnQzJCLE9BQU9SLFVBQXZDLElBQXNESCxJQUF0RCxFQURzQjtBQUFBLFNBQXZCLENBckJIO0FBeUJHRyxzQkFDQztBQUFBO0FBQUEsWUFBYyxXQUFXbEIsUUFBUTJCLFFBQWpDLEVBQTJDLElBQU81QixJQUFQLGNBQTNDO0FBQ0dZLG1CQUFTQztBQURaO0FBMUJKLE9BREY7QUFnQ0Q7Ozs7OztBQWhHa0JqQixTLENBQ1ppQyxZLEdBQWU7QUFDcEIxQixZQUFVLEtBRFU7QUFFcEJFLDRCQUZvQjtBQUdwQkksY0FBWSxFQUhRO0FBSXBCWCxnQkFBY0wsWUFKTTtBQUtwQmMsZ0JBQWM7QUFMTSxDO2tCQURIWCxTIiwiZmlsZSI6IkZvcm1GaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBVbmNvbnRyb2xsZWRUb29sdGlwLFxuICBMYWJlbCxcbiAgRm9ybUZlZWRiYWNrLFxuICBGb3JtR3JvdXBcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBMQUJFTF9QUk9QID0gJ3RpdGxlJztcblxuY29uc3QgREVGQVVMVF9TSE9XID0gKHsgbWV0YSB9KSA9PiBtZXRhLnRvdWNoZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHRhZzogRm9ybUdyb3VwLFxuICAgIGxhYmVsUHJvcHM6IHt9LFxuICAgIHNob3dGZWVkYmFjazogREVGQVVMVF9TSE9XLFxuICAgIHRvb2x0aXBQcm9wczoge31cbiAgfTtcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc2NoZW1hOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICByZXF1aXJlZDogYm9vbGVhbixcbiAgICB0YWc6IHN0cmluZyxcbiAgICBzaG93RmVlZGJhY2s6IFNob3dGZWVkYmFja1R5cGUsXG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgdGFnOiBzdHJpbmcsXG4gICAgICByZXF1aXJlZENvbG9yOiBzdHJpbmdcbiAgICB9LFxuICAgIHRvb2x0aXBQcm9wczoge1xuICAgICAgcGxhY2VtZW50OiBzdHJpbmdcbiAgICB9LFxuICAgIG1ldGE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIGNoaWxkcmVuOiBSZWFjdC5FbGVtZW50PCo+IHwgW1JlYWN0LkVsZW1lbnQ8Kj5dXG4gIH07XG5cbiAgZ2V0SW5wdXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IG1ldGEsIHNob3dGZWVkYmFjayB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzaG93RmVlZGJhY2sodGhpcy5wcm9wcykpIHtcbiAgICAgIGlmICghIWdldChtZXRhLCAnZXJyb3InKSkge1xuICAgICAgICByZXR1cm4gJ2Rhbmdlcic7XG4gICAgICB9IGVsc2UgaWYgKCEhZ2V0KG1ldGEsICd3YXJuaW5nJykpIHtcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHNoZWV0LFxuICAgICAgcmVxdWlyZWQsXG4gICAgICB0YWc6IFRhZyxcbiAgICAgIHNjaGVtYSxcbiAgICAgIHRvb2x0aXBQcm9wczogeyBwbGFjZW1lbnQgPSAncmlnaHQnLCAuLi50b29sdGlwUHJvcHMgfSxcbiAgICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgICAgdGFnOiBMYWJlbFRhZyA9IExhYmVsLFxuICAgICAgICByZXF1aXJlZENvbG9yID0gJ3JlZCcsXG4gICAgICAgIC4uLmxhYmVsUHJvcHNcbiAgICAgIH0sXG4gICAgICBzaG93RmVlZGJhY2ssXG4gICAgICBtZXRhOiB7IGVycm9yLCB3YXJuaW5nIH0sXG4gICAgICBpbnB1dCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsID0gZ2V0KHNjaGVtYSwgTEFCRUxfUFJPUCk7XG4gICAgY29uc3QgbGFiZWxJZCA9IGAke25hbWV9LWxhYmVsYDtcbiAgICBjb25zdCBpbnB1dFN0YXRlID0gdGhpcy5nZXRJbnB1dFN0YXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWcgey4uLnJlc3R9IGNvbG9yPXtpbnB1dFN0YXRlfT5cbiAgICAgICAgPExhYmVsVGFnXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfVxuICAgICAgICAgIGlkPXtsYWJlbElkfVxuICAgICAgICAgIGZvcj17bmFtZX1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogcmVxdWlyZWRDb2xvciB9fT4qPC9zcGFuPn1cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvTGFiZWxUYWc+XG5cbiAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9vbHRpcH1cbiAgICAgICAgICAgIHRhcmdldD17bGFiZWxJZH1cbiAgICAgICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgey4uLnRvb2x0aXBQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2NoZW1hLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD59XG5cbiAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgICBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgaWQ6IG5hbWUsIHN0YXRlOiBpbnB1dFN0YXRlLCAuLi5yZXN0IH0pXG4gICAgICAgICl9XG5cbiAgICAgICAge2lucHV0U3RhdGUgJiZcbiAgICAgICAgICA8Rm9ybUZlZWRiYWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5mZWVkYmFja30gaWQ9e2Ake25hbWV9LWZlZWRiYWNrYH0+XG4gICAgICAgICAgICB7ZXJyb3IgfHwgd2FybmluZ31cbiAgICAgICAgICA8L0Zvcm1GZWVkYmFjaz59XG4gICAgICA8L1RhZz5cbiAgICApO1xuICB9XG59XG4iXX0=