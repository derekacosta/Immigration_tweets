'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = _styledComponents2.default.section.withConfig({
    displayName: 'Pitch__Section',
    componentId: 'sc-1o6vfm6-0'
})(['color:white;margin:0 3%;position:absolute;top:35%;font-size:1.8vw;@media (max-width:1000px){top:55%;font-size:1.9vw;}@media (max-width:800px){top:60%;font-size:3.2vw;margin:0 4em;text-align:center;}']);

var Title = _styledComponents2.default.h1.withConfig({
    displayName: 'Pitch__Title',
    componentId: 'sc-1o6vfm6-1'
})(['font-size:3em;margin:0 0 0.2em;font-weight:700;']);

var Subtitle = _styledComponents2.default.p.withConfig({
    displayName: 'Pitch__Subtitle',
    componentId: 'sc-1o6vfm6-2'
})(['margin:0 0 0.5em;font-weight:300;']);

var MainJoinButton = _styledComponents2.default.button.withConfig({
    displayName: 'Pitch__MainJoinButton',
    componentId: 'sc-1o6vfm6-3'
})(['font-size:14px;letter-spacing:1.9px;font-weight:100;margin:0.5em 0.5em 0.5em 0;padding:12px 2em;color:white;background-color:#e50914;cursor:pointer;text-decoration:none;vertical-align:middle;font-family:Arial,sans-serif;border-radius:2px;user-select:none;text-align:center;border:0;&:hover{background-color:#E53935;}']);

var pitch = function pitch() {
    return _react2.default.createElement(
        Section,
        null,
        _react2.default.createElement(
            Title,
            null,
            'What do tweets  ',
            _react2.default.createElement('br', null),
            ' teach us about  ',
            _react2.default.createElement('br', null),
            ' US immgration?'
        ),
        _react2.default.createElement(
            Subtitle,
            null,
            'BIGOTRY STOPS HERE.'
        )
    );
};

exports.default = pitch;