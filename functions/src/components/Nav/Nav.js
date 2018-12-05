'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    height: 90px;\n    font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n    /* Netflix logo */\n    img {\n        // width: 250px;\n        height : 150px;\n        // max-height: 150px;\n        vertical-align: middle;\n    }\n    .logo {\n        display: inline-block;\n        line-height: 90px;\n        margin: 5% 0 0 3%;\n    }\n'], ['\n    height: 90px;\n    font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n    /* Netflix logo */\n    img {\n        // width: 250px;\n        height : 150px;\n        // max-height: 150px;\n        vertical-align: middle;\n    }\n    .logo {\n        display: inline-block;\n        line-height: 90px;\n        margin: 5% 0 0 3%;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _logo = require('./../../img/logo.svg');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents2.default.nav(_templateObject);

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