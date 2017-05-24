'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStrap = require('react-strap');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LABEL_PROP = 'meta.form.label';

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
          id = _props.id,
          styles = _props.styles,
          required = _props.required,
          Tag = _props.tag,
          schema = _props.schema,
          _props$tooltipProps = _props.tooltipProps,
          _props$tooltipProps$p = _props$tooltipProps.placement,
          placement = _props$tooltipProps$p === undefined ? 'right' : _props$tooltipProps$p,
          tooltipProps = _props$tooltipProps.tooltipProps,
          _props$labelProps = _props.labelProps,
          _props$labelProps$tag = _props$labelProps.tag,
          LabelTag = _props$labelProps$tag === undefined ? _reactStrap.Label : _props$labelProps$tag,
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
          rest = _objectWithoutProperties(_props, ['id', 'styles', 'required', 'tag', 'schema', 'tooltipProps', 'labelProps', 'errorProps', 'warningProps', 'meta', 'input']);

      var label = (0, _lodash.get)(schema, LABEL_PROP);
      var labelId = id + '-label';
      return _react2.default.createElement(
        Tag,
        rest,
        schema.description && _react2.default.createElement(
          _reactStrap.UncontrolledTooltip,
          _extends({
            target: labelId,
            placement: placement
          }, tooltipProps),
          schema.description
        ),
        _react2.default.createElement(
          LabelTag,
          _extends({ id: labelId, 'for': id }, labelProps),
          required && _react2.default.createElement(
            'span',
            { style: { color: requiredColor } },
            '*'
          ),
          label
        ),
        _react2.default.children(function (child) {
          return _react2.default.cloneElement(child, _extends({ input: input, id: id, schema: schema }, rest));
        }),
        showError(this.props) && error && _react2.default.createElement(
          ErrorTag,
          _extends({ id: id + '-error' }, errorProps),
          error
        ),
        showWarning(this.props) && warning && _react2.default.createElement(
          WarningTag,
          _extends({ id: id + '-warning' }, warningProps),
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