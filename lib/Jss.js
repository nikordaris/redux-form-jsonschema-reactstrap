'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectSheet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jss = (0, _jss.create)();
jss.setup((0, _jssPresetDefault2.default)());

exports.default = jss;
var injectSheet = function injectSheet(styles) {
  return function (WrappedComponent) {
    var StyledComponent = function (_Component) {
      _inherits(StyledComponent, _Component);

      function StyledComponent(props) {
        _classCallCheck(this, StyledComponent);

        var _this = _possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call(this, props));

        _this.state = { sheet: undefined, classes: undefined };
        return _this;
      }

      _createClass(StyledComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var componentStyles = this.props.styles;
          var nextComponentStyles = nextProps.styles;


          if (componentStyles !== nextComponentStyles) {
            this.updateSheets((0, _lodash.merge)({}, styles, nextComponentStyles), nextProps);
          } else if (this.state.sheet) {
            this.state.sheet.update(nextProps);
          }
        }
      }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
          var componentStyles = this.props.styles;

          this.updateSheets((0, _lodash.merge)({}, styles, componentStyles), this.props);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.state.sheet) {
            this.state.sheet.detach();
          }
        }
      }, {
        key: 'updateSheets',
        value: function updateSheets(styles, props) {
          var sheet = jss.createStyleSheet(styles).attach();
          if (this.state.sheet) {
            this.state.sheet.detach();
          }

          sheet.update(props);
          this.setState({ sheet: sheet, classes: sheet.classes });
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              styles = _props.styles,
              rest = _objectWithoutProperties(_props, ['styles']);

          return _react2.default.createElement(WrappedComponent, _extends({}, rest, {
            classes: this.state.classes,
            sheet: this.state.sheet
          }));
        }
      }]);

      return StyledComponent;
    }(_react.Component);

    return StyledComponent;
  };
};
exports.injectSheet = injectSheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Kc3MuanMiXSwibmFtZXMiOlsianNzIiwic2V0dXAiLCJpbmplY3RTaGVldCIsIlN0eWxlZENvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJzaGVldCIsInVuZGVmaW5lZCIsImNsYXNzZXMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnRTdHlsZXMiLCJzdHlsZXMiLCJuZXh0Q29tcG9uZW50U3R5bGVzIiwidXBkYXRlU2hlZXRzIiwidXBkYXRlIiwiZGV0YWNoIiwiY3JlYXRlU3R5bGVTaGVldCIsImF0dGFjaCIsInNldFN0YXRlIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sa0JBQVo7QUFDQUEsSUFBSUMsS0FBSixDQUFVLGlDQUFWOztrQkFFZUQsRztBQUVSLElBQU1FLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQVUsNEJBQW9CO0FBQUEsUUFDakRDLGVBRGlEO0FBQUE7O0FBRXJELCtCQUFZQyxLQUFaLEVBQXdCO0FBQUE7O0FBQUEsc0lBQ2hCQSxLQURnQjs7QUFFdEIsY0FBS0MsS0FBTCxHQUFhLEVBQUVDLE9BQU9DLFNBQVQsRUFBb0JDLFNBQVNELFNBQTdCLEVBQWI7QUFGc0I7QUFHdkI7O0FBTG9EO0FBQUE7QUFBQSxrREFPM0JFLFNBUDJCLEVBT1g7QUFBQSxjQUN4QkMsZUFEd0IsR0FDSixLQUFLTixLQURELENBQ2hDTyxNQURnQztBQUFBLGNBRXhCQyxtQkFGd0IsR0FFQUgsU0FGQSxDQUVoQ0UsTUFGZ0M7OztBQUl4QyxjQUFJRCxvQkFBb0JFLG1CQUF4QixFQUE2QztBQUMzQyxpQkFBS0MsWUFBTCxDQUFrQixtQkFBTSxFQUFOLEVBQVVGLE1BQVYsRUFBa0JDLG1CQUFsQixDQUFsQixFQUEwREgsU0FBMUQ7QUFDRCxXQUZELE1BRU8sSUFBSSxLQUFLSixLQUFMLENBQVdDLEtBQWYsRUFBc0I7QUFDM0IsaUJBQUtELEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlEsTUFBakIsQ0FBd0JMLFNBQXhCO0FBQ0Q7QUFDRjtBQWhCb0Q7QUFBQTtBQUFBLDZDQWtCaEM7QUFBQSxjQUNIQyxlQURHLEdBQ2lCLEtBQUtOLEtBRHRCLENBQ1hPLE1BRFc7O0FBRW5CLGVBQUtFLFlBQUwsQ0FBa0IsbUJBQU0sRUFBTixFQUFVRixNQUFWLEVBQWtCRCxlQUFsQixDQUFsQixFQUFzRCxLQUFLTixLQUEzRDtBQUNEO0FBckJvRDtBQUFBO0FBQUEsK0NBdUI5QjtBQUNyQixjQUFJLEtBQUtDLEtBQUwsQ0FBV0MsS0FBZixFQUFzQjtBQUNwQixpQkFBS0QsS0FBTCxDQUFXQyxLQUFYLENBQWlCUyxNQUFqQjtBQUNEO0FBQ0Y7QUEzQm9EO0FBQUE7QUFBQSxxQ0E2QnhDSixNQTdCd0MsRUE2QjNCUCxLQTdCMkIsRUE2QmY7QUFDcEMsY0FBTUUsUUFBUU4sSUFBSWdCLGdCQUFKLENBQXFCTCxNQUFyQixFQUE2Qk0sTUFBN0IsRUFBZDtBQUNBLGNBQUksS0FBS1osS0FBTCxDQUFXQyxLQUFmLEVBQXNCO0FBQ3BCLGlCQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJTLE1BQWpCO0FBQ0Q7O0FBRURULGdCQUFNUSxNQUFOLENBQWFWLEtBQWI7QUFDQSxlQUFLYyxRQUFMLENBQWMsRUFBRVosWUFBRixFQUFTRSxTQUFTRixNQUFNRSxPQUF4QixFQUFkO0FBQ0Q7QUFyQ29EO0FBQUE7QUFBQSxpQ0F1QzVDO0FBQUEsdUJBQ3FCLEtBQUtKLEtBRDFCO0FBQUEsY0FDQ08sTUFERCxVQUNDQSxNQUREO0FBQUEsY0FDWVEsSUFEWjs7QUFFUCxpQkFDRSw4QkFBQyxnQkFBRCxlQUNNQSxJQUROO0FBRUUscUJBQVMsS0FBS2QsS0FBTCxDQUFXRyxPQUZ0QjtBQUdFLG1CQUFPLEtBQUtILEtBQUwsQ0FBV0M7QUFIcEIsYUFERjtBQU9EO0FBaERvRDs7QUFBQTtBQUFBOztBQW1EdkQsV0FBT0gsZUFBUDtBQUNELEdBcEQwQjtBQUFBLENBQXBCIiwiZmlsZSI6Ikpzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IHByZXNldCBmcm9tICdqc3MtcHJlc2V0LWRlZmF1bHQnO1xuXG5jb25zdCBqc3MgPSBjcmVhdGUoKTtcbmpzcy5zZXR1cChwcmVzZXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGpzcztcblxuZXhwb3J0IGNvbnN0IGluamVjdFNoZWV0ID0gc3R5bGVzID0+IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjbGFzcyBTdHlsZWRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IHNoZWV0OiB1bmRlZmluZWQsIGNsYXNzZXM6IHVuZGVmaW5lZCB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgIGNvbnN0IHsgc3R5bGVzOiBjb21wb25lbnRTdHlsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHN0eWxlczogbmV4dENvbXBvbmVudFN0eWxlcyB9ID0gbmV4dFByb3BzO1xuXG4gICAgICBpZiAoY29tcG9uZW50U3R5bGVzICE9PSBuZXh0Q29tcG9uZW50U3R5bGVzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2hlZXRzKG1lcmdlKHt9LCBzdHlsZXMsIG5leHRDb21wb25lbnRTdHlsZXMpLCBuZXh0UHJvcHMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNoZWV0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2hlZXQudXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdHlsZXM6IGNvbXBvbmVudFN0eWxlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMudXBkYXRlU2hlZXRzKG1lcmdlKHt9LCBzdHlsZXMsIGNvbXBvbmVudFN0eWxlcyksIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hlZXQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zaGVldC5kZXRhY2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTaGVldHMoc3R5bGVzOiBhbnksIHByb3BzOiBhbnkpIHtcbiAgICAgIGNvbnN0IHNoZWV0ID0ganNzLmNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzKS5hdHRhY2goKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNoZWV0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2hlZXQuZGV0YWNoKCk7XG4gICAgICB9XG5cbiAgICAgIHNoZWV0LnVwZGF0ZShwcm9wcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hlZXQsIGNsYXNzZXM6IHNoZWV0LmNsYXNzZXMgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdHlsZXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGNsYXNzZXM9e3RoaXMuc3RhdGUuY2xhc3Nlc31cbiAgICAgICAgICBzaGVldD17dGhpcy5zdGF0ZS5zaGVldH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0eWxlZENvbXBvbmVudDtcbn07XG4iXX0=