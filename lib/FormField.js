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
    key: 'renderTooltip',
    value: function renderTooltip(labelId, schema, tooltipProps) {
      var placement = tooltipProps.placement,
          rest = _objectWithoutProperties(tooltipProps, ['placement']);

      return _react2.default.createElement(
        _reactstrap.UncontrolledTooltip,
        _extends({
          target: labelId,
          placement: placement
        }, rest),
        schema.description
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          styles = _props.styles,
          required = _props.required,
          Tag = _props.tag,
          schema = _props.schema,
          tooltipProps = _props.tooltipProps,
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
        schema.description && this.renderTooltip(labelId, schema, tooltipProps),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwibGFiZWxJZCIsInNjaGVtYSIsInRvb2x0aXBQcm9wcyIsInBsYWNlbWVudCIsInJlc3QiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwibmFtZSIsInN0eWxlcyIsInJlcXVpcmVkIiwiVGFnIiwidGFnIiwibGFiZWxQcm9wcyIsIkxhYmVsVGFnIiwicmVxdWlyZWRDb2xvciIsImVycm9yUHJvcHMiLCJFcnJvclRhZyIsInNob3ciLCJzaG93RXJyb3IiLCJ3YXJuaW5nUHJvcHMiLCJXYXJuaW5nVGFnIiwic2hvd1dhcm5pbmciLCJlcnJvciIsIndhcm5pbmciLCJpbnB1dCIsImxhYmVsIiwiY29sb3IiLCJyZW5kZXJUb29sdGlwIiwibWFwIiwiY2hpbGQiLCJpZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsT0FBbkI7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsS0FBS0MsT0FBbkI7QUFBQSxDQUFyQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7O2tDQTJCTEMsTyxFQUFTQyxNLEVBQVFDLFksRUFBYztBQUFBLFVBQ25DQyxTQURtQyxHQUNaRCxZQURZLENBQ25DQyxTQURtQztBQUFBLFVBQ3JCQyxJQURxQiw0QkFDWkYsWUFEWTs7QUFFM0MsYUFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBUUYsT0FEVjtBQUVFLHFCQUFXRztBQUZiLFdBR01DLElBSE47QUFLR0gsZUFBT0k7QUFMVixPQURGO0FBU0Q7Ozs2QkFFUTtBQUFBLG1CQTBCSCxLQUFLQyxLQTFCRjtBQUFBLFVBRUxDLElBRkssVUFFTEEsSUFGSztBQUFBLFVBR0xDLE1BSEssVUFHTEEsTUFISztBQUFBLFVBSUxDLFFBSkssVUFJTEEsUUFKSztBQUFBLFVBS0FDLEdBTEEsVUFLTEMsR0FMSztBQUFBLFVBTUxWLE1BTkssVUFNTEEsTUFOSztBQUFBLFVBT0xDLFlBUEssVUFPTEEsWUFQSztBQUFBLHFDQVFMVSxVQVJLO0FBQUEsb0RBU0hELEdBVEc7QUFBQSxVQVNFRSxRQVRGLHlDQVNhLE9BVGI7QUFBQSxvREFVSEMsYUFWRztBQUFBLFVBVUhBLGFBVkcseUNBVWEsS0FWYjtBQUFBLFVBV0FGLFVBWEE7QUFBQSxxQ0FhTEcsVUFiSztBQUFBLG9EQWNISixHQWRHO0FBQUEsVUFjRUssUUFkRix5Q0FjYSxLQWRiO0FBQUEsb0RBZUhDLElBZkc7QUFBQSxVQWVHQyxTQWZILHlDQWVldEIsWUFmZjtBQUFBLFVBZ0JBbUIsVUFoQkE7QUFBQSx1Q0FrQkxJLFlBbEJLO0FBQUEsc0RBbUJIUixHQW5CRztBQUFBLFVBbUJFUyxVQW5CRix5Q0FtQmUsS0FuQmY7QUFBQSxzREFvQkhILElBcEJHO0FBQUEsVUFvQkdJLFdBcEJILHlDQW9CaUJ6QixZQXBCakI7QUFBQSxVQXFCQXVCLFlBckJBO0FBQUEsK0JBdUJMdEIsSUF2Qks7QUFBQSxVQXVCR3lCLEtBdkJILGVBdUJHQSxLQXZCSDtBQUFBLFVBdUJVQyxPQXZCVixlQXVCVUEsT0F2QlY7QUFBQSxVQXdCTEMsS0F4QkssVUF3QkxBLEtBeEJLO0FBQUEsVUF5QkZwQixJQXpCRTs7QUEyQlAsVUFBTXFCLFFBQVEsaUJBQUl4QixNQUFKLEVBQVlOLFVBQVosQ0FBZDtBQUNBLFVBQU1LLFVBQWFPLElBQWIsV0FBTjtBQUNBLGFBQ0U7QUFBQyxXQUFEO0FBQVNILFlBQVQ7QUFDRTtBQUFDLGtCQUFEO0FBQUEscUJBQVUsSUFBSUosT0FBZCxFQUF1QixPQUFLTyxJQUE1QixJQUFzQ0ssVUFBdEM7QUFDR0gsc0JBQVk7QUFBQTtBQUFBLGNBQU0sT0FBTyxFQUFFaUIsT0FBT1osYUFBVCxFQUFiO0FBQUE7QUFBQSxXQURmO0FBRUdXO0FBRkgsU0FERjtBQU1HeEIsZUFBT0ksV0FBUCxJQUFzQixLQUFLc0IsYUFBTCxDQUFtQjNCLE9BQW5CLEVBQTRCQyxNQUE1QixFQUFvQ0MsWUFBcEMsQ0FOekI7QUFRRyx3QkFBUzBCLEdBQVQsQ0FBYTtBQUFBLGlCQUNaLHlCQUFhQyxLQUFiLGFBQXNCTCxZQUF0QixFQUE2Qk0sSUFBSXZCLElBQWpDLEVBQXVDTixjQUF2QyxJQUFrREcsSUFBbEQsRUFEWTtBQUFBLFNBQWIsQ0FSSDtBQVlHYyxrQkFBVSxLQUFLWixLQUFmLEtBQ0NnQixLQURELElBRUM7QUFBQyxrQkFBRDtBQUFBLHFCQUFVLElBQU9mLElBQVAsV0FBVixJQUFtQ1EsVUFBbkM7QUFDR087QUFESCxTQWRKO0FBa0JHRCxvQkFBWSxLQUFLZixLQUFqQixLQUNDaUIsT0FERCxJQUVDO0FBQUMsb0JBQUQ7QUFBQSxxQkFBWSxJQUFPaEIsSUFBUCxhQUFaLElBQXVDWSxZQUF2QztBQUNHSTtBQURIO0FBcEJKLE9BREY7QUEwQkQ7Ozs7OztBQS9Ga0J4QixTLENBQ1pnQyxZLEdBQWU7QUFDcEJ0QixZQUFVLEtBRFU7QUFFcEJFLE9BQUssS0FGZTtBQUdwQkMsY0FBWSxFQUhRO0FBSXBCRyxjQUFZLEVBSlE7QUFLcEJJLGdCQUFjLEVBTE07QUFNcEJqQixnQkFBYztBQU5NLEM7a0JBREhILFMiLCJmaWxlIjoiRm9ybUZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgU2NoZW1hVHlwZSB9IGZyb20gJ3JlZHV4LWpzb25zY2hlbWEnO1xuaW1wb3J0IHsgVW5jb250cm9sbGVkVG9vbHRpcCwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IExBQkVMX1BST1AgPSAndGl0bGUnO1xuXG5jb25zdCBERUZBVUxUX1NIT1cgPSAoeyBtZXRhIH0pID0+IG1ldGEudG91Y2hlZDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdGFnOiAnZGl2JyxcbiAgICBsYWJlbFByb3BzOiB7fSxcbiAgICBlcnJvclByb3BzOiB7fSxcbiAgICB3YXJuaW5nUHJvcHM6IHt9LFxuICAgIHRvb2x0aXBQcm9wczoge31cbiAgfTtcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc2NoZW1hOiBTY2hlbWFUeXBlLFxuICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgIHRhZzogc3RyaW5nLFxuICAgIGVycm9yUHJvcHM6IE1lc3NhZ2VQcm9wc1R5cGUsXG4gICAgd2FybmluZ1Byb3BzOiBNZXNzYWdlUHJvcHNUeXBlLFxuICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgIHRhZzogc3RyaW5nLFxuICAgICAgcmVxdWlyZWRDb2xvcjogc3RyaW5nXG4gICAgfSxcbiAgICB0b29sdGlwUHJvcHM6IHtcbiAgICAgIHBsYWNlbWVudDogc3RyaW5nXG4gICAgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogUmVhY3QuRWxlbWVudDwqPiB8IFtSZWFjdC5FbGVtZW50PCo+XVxuICB9O1xuXG4gIHJlbmRlclRvb2x0aXAobGFiZWxJZCwgc2NoZW1hLCB0b29sdGlwUHJvcHMpIHtcbiAgICBjb25zdCB7IHBsYWNlbWVudCwgLi4ucmVzdCB9ID0gdG9vbHRpcFByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICB0YXJnZXQ9e2xhYmVsSWR9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbn1cbiAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHlsZXMsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHRhZzogVGFnLFxuICAgICAgc2NoZW1hLFxuICAgICAgdG9vbHRpcFByb3BzLFxuICAgICAgbGFiZWxQcm9wczoge1xuICAgICAgICB0YWc6IExhYmVsVGFnID0gJ2xhYmVsJyxcbiAgICAgICAgcmVxdWlyZWRDb2xvciA9ICdyZWQnLFxuICAgICAgICAuLi5sYWJlbFByb3BzXG4gICAgICB9LFxuICAgICAgZXJyb3JQcm9wczoge1xuICAgICAgICB0YWc6IEVycm9yVGFnID0gJ2RpdicsXG4gICAgICAgIHNob3c6IHNob3dFcnJvciA9IERFRkFVTFRfU0hPVyxcbiAgICAgICAgLi4uZXJyb3JQcm9wc1xuICAgICAgfSxcbiAgICAgIHdhcm5pbmdQcm9wczoge1xuICAgICAgICB0YWc6IFdhcm5pbmdUYWcgPSAnZGl2JyxcbiAgICAgICAgc2hvdzogc2hvd1dhcm5pbmcgPSBERUZBVUxUX1NIT1csXG4gICAgICAgIC4uLndhcm5pbmdQcm9wc1xuICAgICAgfSxcbiAgICAgIG1ldGE6IHsgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgIGlucHV0LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsID0gZ2V0KHNjaGVtYSwgTEFCRUxfUFJPUCk7XG4gICAgY29uc3QgbGFiZWxJZCA9IGAke25hbWV9LWxhYmVsYDtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhZyB7Li4ucmVzdH0+XG4gICAgICAgIDxMYWJlbFRhZyBpZD17bGFiZWxJZH0gZm9yPXtuYW1lfSB7Li4ubGFiZWxQcm9wc30+XG4gICAgICAgICAge3JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiByZXF1aXJlZENvbG9yIH19Pio8L3NwYW4+fVxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9MYWJlbFRhZz5cblxuICAgICAgICB7c2NoZW1hLmRlc2NyaXB0aW9uICYmIHRoaXMucmVuZGVyVG9vbHRpcChsYWJlbElkLCBzY2hlbWEsIHRvb2x0aXBQcm9wcyl9XG5cbiAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZCA9PlxuICAgICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwgeyBpbnB1dCwgaWQ6IG5hbWUsIHNjaGVtYSwgLi4ucmVzdCB9KVxuICAgICAgICApfVxuXG4gICAgICAgIHtzaG93RXJyb3IodGhpcy5wcm9wcykgJiZcbiAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgIDxFcnJvclRhZyBpZD17YCR7bmFtZX0tZXJyb3JgfSB7Li4uZXJyb3JQcm9wc30+XG4gICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgPC9FcnJvclRhZz59XG5cbiAgICAgICAge3Nob3dXYXJuaW5nKHRoaXMucHJvcHMpICYmXG4gICAgICAgICAgd2FybmluZyAmJlxuICAgICAgICAgIDxXYXJuaW5nVGFnIGlkPXtgJHtuYW1lfS13YXJuaW5nYH0gey4uLndhcm5pbmdQcm9wc30+XG4gICAgICAgICAgICB7d2FybmluZ31cbiAgICAgICAgICA8L1dhcm5pbmdUYWc+fVxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuIl19