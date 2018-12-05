'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Pitch = require('./../Section/Pitch/Pitch');

var _Pitch2 = _interopRequireDefault(_Pitch);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bgimg = './../../img/bg.jpg';

var Header = _styledComponents2.default.header.withConfig({
  displayName: 'Header',
  componentId: 'sc-1lxlyc5-0'
})(['background:linear-gradient( to right,rgba(0,0,0,0.75),rgba(0,0,0,0.09) ),url(', ');height:100vh;@media (max-width:1000px){height:90vh;}'], bgimg);

var header = function header() {
  return _react2.default.createElement(
    Header,
    null,
    _react2.default.createElement(_Nav2.default, null),
    _react2.default.createElement(_Pitch2.default, null)
  );
};

exports.default = header;