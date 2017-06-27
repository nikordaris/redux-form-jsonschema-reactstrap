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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwicHJvcHMiLCJzaG93RmVlZGJhY2siLCJ1bmRlZmluZWQiLCJuYW1lIiwic3R5bGVzIiwicmVxdWlyZWQiLCJUYWciLCJ0YWciLCJzY2hlbWEiLCJ0b29sdGlwUHJvcHMiLCJwbGFjZW1lbnQiLCJsYWJlbFByb3BzIiwiTGFiZWxUYWciLCJyZXF1aXJlZENvbG9yIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5wdXQiLCJjaGlsZHJlbiIsInJlc3QiLCJsYWJlbCIsImxhYmVsSWQiLCJpbnB1dFN0YXRlIiwiZ2V0SW5wdXRTdGF0ZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJjaGlsZCIsImlkIiwic3RhdGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU1BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLE9BQW5COztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWNBLEtBQUtDLE9BQW5CO0FBQUEsQ0FBckI7O0lBRXFCQyxTOzs7Ozs7Ozs7OztvQ0F5Qkg7QUFBQSxtQkFDaUIsS0FBS0MsS0FEdEI7QUFBQSxVQUNOSCxJQURNLFVBQ05BLElBRE07QUFBQSxVQUNBSSxZQURBLFVBQ0FBLFlBREE7OztBQUdkLFVBQUlBLGFBQWEsS0FBS0QsS0FBbEIsQ0FBSixFQUE4QjtBQUM1QixZQUFJLENBQUMsQ0FBQyxpQkFBSUgsSUFBSixFQUFVLE9BQVYsQ0FBTixFQUEwQjtBQUN4QixpQkFBTyxRQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUksQ0FBQyxDQUFDLGlCQUFJQSxJQUFKLEVBQVUsU0FBVixDQUFOLEVBQTRCO0FBQ2pDLGlCQUFPLFNBQVA7QUFDRCxTQUZNLE1BRUE7QUFDTCxpQkFBTyxTQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSyxTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG9CQWtCSCxLQUFLRixLQWxCRjtBQUFBLFVBRUxHLElBRkssV0FFTEEsSUFGSztBQUFBLFVBR0xDLE1BSEssV0FHTEEsTUFISztBQUFBLFVBSUxDLFFBSkssV0FJTEEsUUFKSztBQUFBLFVBS0FDLEdBTEEsV0FLTEMsR0FMSztBQUFBLFVBTUxDLE1BTkssV0FNTEEsTUFOSztBQUFBLHlDQU9MQyxZQVBLO0FBQUEsdURBT1dDLFNBUFg7QUFBQSxVQU9XQSxTQVBYLHlDQU91QixPQVB2QjtBQUFBLFVBT21DRCxZQVBuQztBQUFBLHVDQVFMRSxVQVJLO0FBQUEscURBU0hKLEdBVEc7QUFBQSxVQVNFSyxRQVRGO0FBQUEscURBVUhDLGFBVkc7QUFBQSxVQVVIQSxhQVZHLHlDQVVhLEtBVmI7QUFBQSxVQVdBRixVQVhBO0FBQUEsVUFhTFYsWUFiSyxXQWFMQSxZQWJLO0FBQUEsaUNBY0xKLElBZEs7QUFBQSxVQWNHaUIsS0FkSCxnQkFjR0EsS0FkSDtBQUFBLFVBY1VDLE9BZFYsZ0JBY1VBLE9BZFY7QUFBQSxVQWVMQyxLQWZLLFdBZUxBLEtBZks7QUFBQSxVQWdCTEMsUUFoQkssV0FnQkxBLFFBaEJLO0FBQUEsVUFpQkZDLElBakJFOztBQW1CUCxVQUFNQyxRQUFRLGlCQUFJWCxNQUFKLEVBQVliLFVBQVosQ0FBZDtBQUNBLFVBQU15QixVQUFhakIsSUFBYixXQUFOO0FBQ0EsVUFBTWtCLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUNBLGFBQ0U7QUFBQyxXQUFEO0FBQUEscUJBQVNKLElBQVQsSUFBZSxPQUFPRyxVQUF0QjtBQUNFO0FBQUMsa0JBQUQ7QUFBQSxxQkFBVSxJQUFJRCxPQUFkLEVBQXVCLE9BQUtqQixJQUE1QixJQUFzQ1EsVUFBdEM7QUFDR04sc0JBQVk7QUFBQTtBQUFBLGNBQU0sT0FBTyxFQUFFa0IsT0FBT1YsYUFBVCxFQUFiO0FBQUE7QUFBQSxXQURmO0FBRUdNO0FBRkgsU0FERjtBQU1HWCxlQUFPZ0IsV0FBUCxJQUNDO0FBQUE7QUFBQTtBQUNFLG9CQUFRSixPQURWO0FBRUUsdUJBQVdWO0FBRmIsYUFHTUQsWUFITjtBQUtHRCxpQkFBT2dCO0FBTFYsU0FQSjtBQWVHLHdCQUFTQyxHQUFULENBQWFSLFFBQWIsRUFBdUI7QUFBQSxpQkFDdEIseUJBQWFTLEtBQWIsYUFBc0JDLElBQUl4QixJQUExQixFQUFnQ3lCLE9BQU9QLFVBQXZDLElBQXNESCxJQUF0RCxFQURzQjtBQUFBLFNBQXZCLENBZkg7QUFtQkdHLHNCQUNDO0FBQUE7QUFBQSxZQUFjLElBQU9sQixJQUFQLGNBQWQ7QUFDR1csbUJBQVNDO0FBRFo7QUFwQkosT0FERjtBQTBCRDs7Ozs7O0FBekZrQmhCLFMsQ0FDWjhCLFksR0FBZTtBQUNwQnhCLFlBQVUsS0FEVTtBQUVwQkUsNEJBRm9CO0FBR3BCSSxjQUFZLEVBSFE7QUFJcEJWLGdCQUFjTCxZQUpNO0FBS3BCYSxnQkFBYztBQUxNLEM7a0JBREhWLFMiLCJmaWxlIjoiRm9ybUZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFVuY29udHJvbGxlZFRvb2x0aXAsXG4gIExhYmVsLFxuICBGb3JtRmVlZGJhY2ssXG4gIEZvcm1Hcm91cFxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IExBQkVMX1BST1AgPSAndGl0bGUnO1xuXG5jb25zdCBERUZBVUxUX1NIT1cgPSAoeyBtZXRhIH0pID0+IG1ldGEudG91Y2hlZDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdGFnOiBGb3JtR3JvdXAsXG4gICAgbGFiZWxQcm9wczoge30sXG4gICAgc2hvd0ZlZWRiYWNrOiBERUZBVUxUX1NIT1csXG4gICAgdG9vbHRpcFByb3BzOiB7fVxuICB9O1xuICBwcm9wczoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzY2hlbWE6IHsgW3N0cmluZ106IGFueSB9LFxuICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgIHRhZzogc3RyaW5nLFxuICAgIHNob3dGZWVkYmFjazogU2hvd0ZlZWRiYWNrVHlwZSxcbiAgICBsYWJlbFByb3BzOiB7XG4gICAgICB0YWc6IHN0cmluZyxcbiAgICAgIHJlcXVpcmVkQ29sb3I6IHN0cmluZ1xuICAgIH0sXG4gICAgdG9vbHRpcFByb3BzOiB7XG4gICAgICBwbGFjZW1lbnQ6IHN0cmluZ1xuICAgIH0sXG4gICAgbWV0YTogeyBbc3RyaW5nXTogYW55IH0sXG4gICAgY2hpbGRyZW46IFJlYWN0LkVsZW1lbnQ8Kj4gfCBbUmVhY3QuRWxlbWVudDwqPl1cbiAgfTtcblxuICBnZXRJbnB1dFN0YXRlKCkge1xuICAgIGNvbnN0IHsgbWV0YSwgc2hvd0ZlZWRiYWNrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHNob3dGZWVkYmFjayh0aGlzLnByb3BzKSkge1xuICAgICAgaWYgKCEhZ2V0KG1ldGEsICdlcnJvcicpKSB7XG4gICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICAgIH0gZWxzZSBpZiAoISFnZXQobWV0YSwgJ3dhcm5pbmcnKSkge1xuICAgICAgICByZXR1cm4gJ3dhcm5pbmcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHlsZXMsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHRhZzogVGFnLFxuICAgICAgc2NoZW1hLFxuICAgICAgdG9vbHRpcFByb3BzOiB7IHBsYWNlbWVudCA9ICdyaWdodCcsIC4uLnRvb2x0aXBQcm9wcyB9LFxuICAgICAgbGFiZWxQcm9wczoge1xuICAgICAgICB0YWc6IExhYmVsVGFnID0gTGFiZWwsXG4gICAgICAgIHJlcXVpcmVkQ29sb3IgPSAncmVkJyxcbiAgICAgICAgLi4ubGFiZWxQcm9wc1xuICAgICAgfSxcbiAgICAgIHNob3dGZWVkYmFjayxcbiAgICAgIG1ldGE6IHsgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgIGlucHV0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWwgPSBnZXQoc2NoZW1hLCBMQUJFTF9QUk9QKTtcbiAgICBjb25zdCBsYWJlbElkID0gYCR7bmFtZX0tbGFiZWxgO1xuICAgIGNvbnN0IGlucHV0U3RhdGUgPSB0aGlzLmdldElucHV0U3RhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhZyB7Li4ucmVzdH0gY29sb3I9e2lucHV0U3RhdGV9PlxuICAgICAgICA8TGFiZWxUYWcgaWQ9e2xhYmVsSWR9IGZvcj17bmFtZX0gey4uLmxhYmVsUHJvcHN9PlxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogcmVxdWlyZWRDb2xvciB9fT4qPC9zcGFuPn1cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvTGFiZWxUYWc+XG5cbiAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICB0YXJnZXQ9e2xhYmVsSWR9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgICAgIHsuLi50b29sdGlwUHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+fVxuXG4gICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+XG4gICAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7IGlkOiBuYW1lLCBzdGF0ZTogaW5wdXRTdGF0ZSwgLi4ucmVzdCB9KVxuICAgICAgICApfVxuXG4gICAgICAgIHtpbnB1dFN0YXRlICYmXG4gICAgICAgICAgPEZvcm1GZWVkYmFjayBpZD17YCR7bmFtZX0tZmVlZGJhY2tgfT5cbiAgICAgICAgICAgIHtlcnJvciB8fCB3YXJuaW5nfVxuICAgICAgICAgIDwvRm9ybUZlZWRiYWNrPn1cbiAgICAgIDwvVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==