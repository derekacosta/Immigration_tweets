'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = _styledComponents2.default.footer.withConfig({
    displayName: 'Footer',
    componentId: 'zr1e80-0'
})(['margin:0 auto;width:70%;@media (max-width:900px){width:90%;}']);

var Text = _styledComponents2.default.p.withConfig({
    displayName: 'Footer__Text',
    componentId: 'zr1e80-1'
})(['color:#777;font-weight:30;margin:5px 0 30px;', ''], function (props) {
    return props.small && (0, _styledComponents.css)(['font-size:13px;']);
});

var MainList = _styledComponents2.default.ul.withConfig({
    displayName: 'Footer__MainList',
    componentId: 'zr1e80-2'
})(['display:flex;flex-wrap:wrap;margin:0;padding:0;font-weight:50;li{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;flex:none;width:25%;list-style:none;margin:0 0 16px;padding-right:12px;min-width:100px;font-size:13px;a{text-decoration:none;span{color:#777;&:hover{text-decoration:underline;}}}}']);

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