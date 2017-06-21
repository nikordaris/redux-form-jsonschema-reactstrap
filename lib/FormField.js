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
    key: 'renderTooltip',
    value: function renderTooltip(labelId, schema, tooltipProps) {
      var placement = tooltipProps.placement,
          rest = _objectWithoutProperties(tooltipProps, ['placement']);

      return _react2.default.createElement(
        _reactstrap.UncontrolledTooltip,
        _extends({ target: labelId, placement: placement }, rest),
        schema.description
      );
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
          rest = _objectWithoutProperties(_props2, ['name', 'styles', 'required', 'tag', 'schema', 'tooltipProps', 'labelProps', 'showFeedback', 'meta', 'input']);

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
        _react.Children.map(function (child) {
          return (0, _react.cloneElement)(child, _extends({ input: input, id: name, schema: schema }, rest));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiTEFCRUxfUFJPUCIsIkRFRkFVTFRfU0hPVyIsIm1ldGEiLCJ0b3VjaGVkIiwiRm9ybUZpZWxkIiwicHJvcHMiLCJzaG93RmVlZGJhY2siLCJ1bmRlZmluZWQiLCJsYWJlbElkIiwic2NoZW1hIiwidG9vbHRpcFByb3BzIiwicGxhY2VtZW50IiwicmVzdCIsImRlc2NyaXB0aW9uIiwibmFtZSIsInN0eWxlcyIsInJlcXVpcmVkIiwiVGFnIiwidGFnIiwibGFiZWxQcm9wcyIsIkxhYmVsVGFnIiwicmVxdWlyZWRDb2xvciIsImVycm9yIiwid2FybmluZyIsImlucHV0IiwibGFiZWwiLCJpbnB1dFN0YXRlIiwiZ2V0SW5wdXRTdGF0ZSIsImNvbG9yIiwibWFwIiwiY2hpbGQiLCJpZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBTUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsT0FBbkI7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsS0FBS0MsT0FBbkI7QUFBQSxDQUFyQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7O29DQXlCSDtBQUFBLG1CQUNpQixLQUFLQyxLQUR0QjtBQUFBLFVBQ05ILElBRE0sVUFDTkEsSUFETTtBQUFBLFVBQ0FJLFlBREEsVUFDQUEsWUFEQTs7O0FBR2QsVUFBSUEsYUFBYSxLQUFLRCxLQUFsQixDQUFKLEVBQThCO0FBQzVCLFlBQUksaUJBQUlILElBQUosRUFBVSxPQUFWLENBQUosRUFBd0I7QUFDdEIsaUJBQU8sUUFBUDtBQUNELFNBRkQsTUFFTyxJQUFJLGlCQUFJQSxJQUFKLEVBQVUsU0FBVixDQUFKLEVBQTBCO0FBQy9CLGlCQUFPLFNBQVA7QUFDRDtBQUNGOztBQUVELGFBQU9LLFNBQVA7QUFDRDs7O2tDQUVhQyxPLEVBQVNDLE0sRUFBUUMsWSxFQUFjO0FBQUEsVUFDbkNDLFNBRG1DLEdBQ1pELFlBRFksQ0FDbkNDLFNBRG1DO0FBQUEsVUFDckJDLElBRHFCLDRCQUNaRixZQURZOztBQUUzQyxhQUNFO0FBQUE7QUFBQSxtQkFBcUIsUUFBUUYsT0FBN0IsRUFBc0MsV0FBV0csU0FBakQsSUFBZ0VDLElBQWhFO0FBQ0dILGVBQU9JO0FBRFYsT0FERjtBQUtEOzs7NkJBRVE7QUFBQSxvQkFpQkgsS0FBS1IsS0FqQkY7QUFBQSxVQUVMUyxJQUZLLFdBRUxBLElBRks7QUFBQSxVQUdMQyxNQUhLLFdBR0xBLE1BSEs7QUFBQSxVQUlMQyxRQUpLLFdBSUxBLFFBSks7QUFBQSxVQUtBQyxHQUxBLFdBS0xDLEdBTEs7QUFBQSxVQU1MVCxNQU5LLFdBTUxBLE1BTks7QUFBQSx5Q0FPTEMsWUFQSztBQUFBLHVEQU9XQyxTQVBYO0FBQUEsVUFPV0EsU0FQWCx5Q0FPdUIsT0FQdkI7QUFBQSxVQU9tQ0QsWUFQbkM7QUFBQSx1Q0FRTFMsVUFSSztBQUFBLHFEQVNIRCxHQVRHO0FBQUEsVUFTRUUsUUFURjtBQUFBLHFEQVVIQyxhQVZHO0FBQUEsVUFVSEEsYUFWRyx5Q0FVYSxLQVZiO0FBQUEsVUFXQUYsVUFYQTtBQUFBLFVBYUxiLFlBYkssV0FhTEEsWUFiSztBQUFBLGlDQWNMSixJQWRLO0FBQUEsVUFjR29CLEtBZEgsZ0JBY0dBLEtBZEg7QUFBQSxVQWNVQyxPQWRWLGdCQWNVQSxPQWRWO0FBQUEsVUFlTEMsS0FmSyxXQWVMQSxLQWZLO0FBQUEsVUFnQkZaLElBaEJFOztBQWtCUCxVQUFNYSxRQUFRLGlCQUFJaEIsTUFBSixFQUFZVCxVQUFaLENBQWQ7QUFDQSxVQUFNUSxVQUFhTSxJQUFiLFdBQU47QUFDQSxVQUFNWSxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxhQUNFO0FBQUMsV0FBRDtBQUFBLHFCQUFTZixJQUFULElBQWUsT0FBT2MsVUFBdEI7QUFDRTtBQUFDLGtCQUFEO0FBQUEscUJBQVUsSUFBSWxCLE9BQWQsRUFBdUIsT0FBS00sSUFBNUIsSUFBc0NLLFVBQXRDO0FBQ0dILHNCQUFZO0FBQUE7QUFBQSxjQUFNLE9BQU8sRUFBRVksT0FBT1AsYUFBVCxFQUFiO0FBQUE7QUFBQSxXQURmO0FBRUdJO0FBRkgsU0FERjtBQU1HaEIsZUFBT0ksV0FBUCxJQUNDO0FBQUE7QUFBQTtBQUNFLG9CQUFRTCxPQURWO0FBRUUsdUJBQVdHO0FBRmIsYUFHTUQsWUFITjtBQUtHRCxpQkFBT0k7QUFMVixTQVBKO0FBZUcsd0JBQVNnQixHQUFULENBQWE7QUFBQSxpQkFDWix5QkFBYUMsS0FBYixhQUFzQk4sWUFBdEIsRUFBNkJPLElBQUlqQixJQUFqQyxFQUF1Q0wsY0FBdkMsSUFBa0RHLElBQWxELEVBRFk7QUFBQSxTQUFiLENBZkg7QUFtQkdjLHNCQUNDO0FBQUE7QUFBQSxZQUFjLElBQU9aLElBQVAsY0FBZDtBQUNHUSxtQkFBU0M7QUFEWjtBQXBCSixPQURGO0FBMEJEOzs7Ozs7QUEvRmtCbkIsUyxDQUNaNEIsWSxHQUFlO0FBQ3BCaEIsWUFBVSxLQURVO0FBRXBCRSw0QkFGb0I7QUFHcEJDLGNBQVksRUFIUTtBQUlwQmIsZ0JBQWNMLFlBSk07QUFLcEJTLGdCQUFjO0FBTE0sQztrQkFESE4sUyIsImZpbGUiOiJGb3JtRmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBTY2hlbWFUeXBlIH0gZnJvbSAncmVkdXgtanNvbnNjaGVtYSc7XG5pbXBvcnQge1xuICBVbmNvbnRyb2xsZWRUb29sdGlwLFxuICBMYWJlbCxcbiAgRm9ybUZlZWRiYWNrLFxuICBGb3JtR3JvdXBcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBnZXQsIGhhcyB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IExBQkVMX1BST1AgPSAndGl0bGUnO1xuXG5jb25zdCBERUZBVUxUX1NIT1cgPSAoeyBtZXRhIH0pID0+IG1ldGEudG91Y2hlZDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdGFnOiBGb3JtR3JvdXAsXG4gICAgbGFiZWxQcm9wczoge30sXG4gICAgc2hvd0ZlZWRiYWNrOiBERUZBVUxUX1NIT1csXG4gICAgdG9vbHRpcFByb3BzOiB7fVxuICB9O1xuICBwcm9wczoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzY2hlbWE6IFNjaGVtYVR5cGUsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgdGFnOiBzdHJpbmcsXG4gICAgc2hvd0ZlZWRiYWNrOiBTaG93RmVlZGJhY2tUeXBlLFxuICAgIGxhYmVsUHJvcHM6IHtcbiAgICAgIHRhZzogc3RyaW5nLFxuICAgICAgcmVxdWlyZWRDb2xvcjogc3RyaW5nXG4gICAgfSxcbiAgICB0b29sdGlwUHJvcHM6IHtcbiAgICAgIHBsYWNlbWVudDogc3RyaW5nXG4gICAgfSxcbiAgICBtZXRhOiB7IFtzdHJpbmddOiBhbnkgfSxcbiAgICBjaGlsZHJlbjogUmVhY3QuRWxlbWVudDwqPiB8IFtSZWFjdC5FbGVtZW50PCo+XVxuICB9O1xuXG4gIGdldElucHV0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBtZXRhLCBzaG93RmVlZGJhY2sgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc2hvd0ZlZWRiYWNrKHRoaXMucHJvcHMpKSB7XG4gICAgICBpZiAoaGFzKG1ldGEsICdlcnJvcicpKSB7XG4gICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICAgIH0gZWxzZSBpZiAoaGFzKG1ldGEsICd3YXJuaW5nJykpIHtcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVuZGVyVG9vbHRpcChsYWJlbElkLCBzY2hlbWEsIHRvb2x0aXBQcm9wcykge1xuICAgIGNvbnN0IHsgcGxhY2VtZW50LCAuLi5yZXN0IH0gPSB0b29sdGlwUHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwIHRhcmdldD17bGFiZWxJZH0gcGxhY2VtZW50PXtwbGFjZW1lbnR9IHsuLi5yZXN0fT5cbiAgICAgICAge3NjaGVtYS5kZXNjcmlwdGlvbn1cbiAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHlsZXMsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHRhZzogVGFnLFxuICAgICAgc2NoZW1hLFxuICAgICAgdG9vbHRpcFByb3BzOiB7IHBsYWNlbWVudCA9ICdyaWdodCcsIC4uLnRvb2x0aXBQcm9wcyB9LFxuICAgICAgbGFiZWxQcm9wczoge1xuICAgICAgICB0YWc6IExhYmVsVGFnID0gTGFiZWwsXG4gICAgICAgIHJlcXVpcmVkQ29sb3IgPSAncmVkJyxcbiAgICAgICAgLi4ubGFiZWxQcm9wc1xuICAgICAgfSxcbiAgICAgIHNob3dGZWVkYmFjayxcbiAgICAgIG1ldGE6IHsgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgIGlucHV0LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsID0gZ2V0KHNjaGVtYSwgTEFCRUxfUFJPUCk7XG4gICAgY29uc3QgbGFiZWxJZCA9IGAke25hbWV9LWxhYmVsYDtcbiAgICBjb25zdCBpbnB1dFN0YXRlID0gdGhpcy5nZXRJbnB1dFN0YXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWcgey4uLnJlc3R9IGNvbG9yPXtpbnB1dFN0YXRlfT5cbiAgICAgICAgPExhYmVsVGFnIGlkPXtsYWJlbElkfSBmb3I9e25hbWV9IHsuLi5sYWJlbFByb3BzfT5cbiAgICAgICAgICB7cmVxdWlyZWQgJiYgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHJlcXVpcmVkQ29sb3IgfX0+Kjwvc3Bhbj59XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L0xhYmVsVGFnPlxuXG4gICAgICAgIHtzY2hlbWEuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgdGFyZ2V0PXtsYWJlbElkfVxuICAgICAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgICAgICB7Li4udG9vbHRpcFByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzY2hlbWEuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPn1cblxuICAgICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkID0+XG4gICAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkLCB7IGlucHV0LCBpZDogbmFtZSwgc2NoZW1hLCAuLi5yZXN0IH0pXG4gICAgICAgICl9XG5cbiAgICAgICAge2lucHV0U3RhdGUgJiZcbiAgICAgICAgICA8Rm9ybUZlZWRiYWNrIGlkPXtgJHtuYW1lfS1mZWVkYmFja2B9PlxuICAgICAgICAgICAge2Vycm9yIHx8IHdhcm5pbmd9XG4gICAgICAgICAgPC9Gb3JtRmVlZGJhY2s+fVxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuIl19