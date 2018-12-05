'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./components/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Features = require('./components/Features/Features');

var _Features2 = _interopRequireDefault(_Features);

var _Footer = require('./components/Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
    return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Features2.default, null),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = App;