'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _Jss = require('./Jss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardWithHeader = function (_Component) {
  _inherits(CardWithHeader, _Component);

  function CardWithHeader() {
    _classCallCheck(this, CardWithHeader);

    return _possibleConstructorReturn(this, (CardWithHeader.__proto__ || Object.getPrototypeOf(CardWithHeader)).apply(this, arguments));
  }

  _createClass(CardWithHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          schema = _props.schema;

      return _react2.default.createElement(
        _reactstrap.Card,
        { className: classes.card },
        _react2.default.createElement(
          _reactstrap.CardHeader,
          { className: classes.header },
          schema.title
        ),
        _react2.default.createElement(
          _reactstrap.CardBlock,
          { className: classes.cardblock },
          children
        )
      );
    }
  }]);

  return CardWithHeader;
}(_react.Component);

exports.default = (0, _Jss.injectSheet)({
  card: { marginBottom: 10 },
  header: { padding: 5, paddingLeft: 10 }
})(CardWithHeader);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmRXaXRoSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwiY2hpbGRyZW4iLCJzY2hlbWEiLCJjYXJkIiwiaGVhZGVyIiwidGl0bGUiLCJjYXJkYmxvY2siLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozs2QkFDSztBQUFBLG1CQUMrQixLQUFLQyxLQURwQztBQUFBLFVBQ0NDLE9BREQsVUFDQ0EsT0FERDtBQUFBLFVBQ1VDLFFBRFYsVUFDVUEsUUFEVjtBQUFBLFVBQ29CQyxNQURwQixVQUNvQkEsTUFEcEI7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFXRixRQUFRRyxJQUF6QjtBQUNFO0FBQUE7QUFBQSxZQUFZLFdBQVdILFFBQVFJLE1BQS9CO0FBQXdDRixpQkFBT0c7QUFBL0MsU0FERjtBQUdFO0FBQUE7QUFBQSxZQUFXLFdBQVdMLFFBQVFNLFNBQTlCO0FBQ0dMO0FBREg7QUFIRixPQURGO0FBU0Q7Ozs7OztrQkFHWSxzQkFBWTtBQUN6QkUsUUFBTSxFQUFFSSxjQUFjLEVBQWhCLEVBRG1CO0FBRXpCSCxVQUFRLEVBQUVJLFNBQVMsQ0FBWCxFQUFjQyxhQUFhLEVBQTNCO0FBRmlCLENBQVosRUFHWlgsY0FIWSxDIiwiZmlsZSI6IkNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJsb2NrLCBDYXJkSGVhZGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBpbmplY3RTaGVldCB9IGZyb20gJy4vSnNzJztcblxuY2xhc3MgQ2FyZFdpdGhIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBjaGlsZHJlbiwgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PntzY2hlbWEudGl0bGV9PC9DYXJkSGVhZGVyPlxuXG4gICAgICAgIDxDYXJkQmxvY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRibG9ja30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NhcmRCbG9jaz5cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdFNoZWV0KHtcbiAgY2FyZDogeyBtYXJnaW5Cb3R0b206IDEwIH0sXG4gIGhlYWRlcjogeyBwYWRkaW5nOiA1LCBwYWRkaW5nTGVmdDogMTAgfVxufSkoQ2FyZFdpdGhIZWFkZXIpO1xuIl19