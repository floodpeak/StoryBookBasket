'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BPCircle = function (_Component) {
  (0, _inherits3.default)(BPCircle, _Component);

  function BPCircle(props, context) {
    (0, _classCallCheck3.default)(this, BPCircle);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BPCircle).call(this, props, context));
  }

  (0, _createClass3.default)(BPCircle, [{
    key: 'getStyle',
    value: function getStyle() {
      return {
        circle: {
          height: '200px',
          width: '200px',
          borderRadius: '50%',
          border: '1px solid gray',
          background: '#4078c0'
        }
      };
    }
  }, {
    key: 'renderStatus',
    value: function renderStatus() {
      var bpText = this.props.bpText;

      var statusText = {
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: '200px'
      };

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, statusText) },
        bpText
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.getStyle();
      // DATA
      var _props = this.props;
      var bpState = _props.bpState;
      var rActions = _props.rActions;
      // Mantra Actions

      var bpEventsHandler = this.props.bpEventsHandler;

      return _react2.default.createElement(
        'div',
        { style: styles.circle, onClick: function onClick() {
            return bpEventsHandler(rActions);
          } },
        this.renderStatus()
      );
    }
  }]);
  return BPCircle;
}(_react.Component);

BPCircle.propTypes = {
  bpState: _react.PropTypes.object.isRequired
};

exports.default = BPCircle;