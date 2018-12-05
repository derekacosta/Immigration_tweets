'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin: 0 auto;\n    width: 70%;\n    @media (max-width: 900px) {\n        width: 90%;\n    }\n'], ['\n    margin: 0 auto;\n    width: 70%;\n    @media (max-width: 900px) {\n        width: 90%;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: #777;\n    font-weight: 30;\n    margin: 5px 0 30px;\n\n    ', '\n'], ['\n    color: #777;\n    font-weight: 30;\n    margin: 5px 0 30px;\n\n    ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        font-size: 13px;\n    '], ['\n        font-size: 13px;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n    font-weight: 50;\n    li {\n        display: block;\n        flex-basis: 0;\n        flex-grow: 1;\n        flex-shrink: 1;\n        /* is 25 */\n        flex: none;\n        width: 25%;\n        /* Styles */\n        list-style: none;\n        margin: 0 0 16px;\n        padding-right: 12px;\n        min-width: 100px;\n        font-size: 13px;\n\n        a {\n            text-decoration: none;\n            span {\n                color: #777;\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n        }\n    }\n'], ['\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n    font-weight: 50;\n    li {\n        display: block;\n        flex-basis: 0;\n        flex-grow: 1;\n        flex-shrink: 1;\n        /* is 25 */\n        flex: none;\n        width: 25%;\n        /* Styles */\n        list-style: none;\n        margin: 0 0 16px;\n        padding-right: 12px;\n        min-width: 100px;\n        font-size: 13px;\n\n        a {\n            text-decoration: none;\n            span {\n                color: #777;\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents2.default.footer(_templateObject);

var Text = _styledComponents2.default.p(_templateObject2, function (props) {
    return props.small && (0, _styledComponents.css)(_templateObject3);
});

var MainList = _styledComponents2.default.ul(_templateObject4);

var footer = function footer() {
    return _react2.default.createElement(
        Footer,
        null,
        _react2.default.createElement(
            Text,
            null,
            'Questions? Contact us.'
        ),
        _react2.default.createElement(
            MainList,
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    { href: 'https://github.com/derekacosta/Immigration_tweets' },
                    _react2.default.createElement(
                        'span',
                        null,
                        'Github'
                    )
                )
            ),
            _react2.default.createElement('li', null)
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            Text,
            { small: true },
            'a DEKY production'
        )
    );
};

exports.default = footer;