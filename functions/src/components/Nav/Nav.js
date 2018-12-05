'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _logo = require('./../../img/logo.svg');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = _styledComponents2.default.nav.withConfig({
    displayName: 'Nav',
    componentId: 'sc-1lncf2p-0'
})(['height:90px;font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;img{height:150px;vertical-align:middle;}.logo{display:inline-block;line-height:90px;margin:5% 0 0 3%;}']);

var Button = _styledComponents2.default.button.withConfig({
    displayName: 'Nav__Button',
    componentId: 'sc-1lncf2p-1'
})(['color:white;cursor:pointer;background-color:#e50914;line-height:normal;margin:18px 3% 0 0;padding:7px 17px;font-weight:100;border:transparent;border-radius:3px;font-size:16px;text-decoration:one;', ' &:hover{background-color:#E53935;}'], function (props) {
    return props.right && (0, _styledComponents.css)(['float:right;']);
});

var nav = function nav() {
    return _react2.default.createElement(
        Nav,
        null,
        _react2.default.createElement(
            'a',
            { href: "/", className: 'logo' },
            _react2.default.createElement('img', { src: _logo2.default, alt: 'Netflix Logo' })
        )
    );
};

exports.default = nav;