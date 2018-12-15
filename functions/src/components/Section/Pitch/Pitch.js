'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: white;\n    margin: 0 3%;\n    position: absolute;\n    top: 35%;\n    font-size: 1.8vw;\n    @media (max-width: 1000px) {\n        top: 55%;\n        font-size: 1.9vw;\n    }\n    @media (max-width: 800px) {\n        top: 60%;\n        font-size: 3.2vw;\n        margin: 0 4em;\n        text-align: center;\n    }\n'], ['\n    color: white;\n    margin: 0 3%;\n    position: absolute;\n    top: 35%;\n    font-size: 1.8vw;\n    @media (max-width: 1000px) {\n        top: 55%;\n        font-size: 1.9vw;\n    }\n    @media (max-width: 800px) {\n        top: 60%;\n        font-size: 3.2vw;\n        margin: 0 4em;\n        text-align: center;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 3em;\n    margin: 0 0 0.2em;\n    font-weight: 700;\n'], ['\n    font-size: 3em;\n    margin: 0 0 0.2em;\n    font-weight: 700;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin: 0 0 0.5em;\n    font-weight: 300;\n'], ['\n    margin: 0 0 0.5em;\n    font-weight: 300;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = _styledComponents2.default.section(_templateObject);

var Title = _styledComponents2.default.h1(_templateObject2);

var Subtitle = _styledComponents2.default.p(_templateObject3);

var pitch = function pitch() {
    return _react2.default.createElement(
        Section,
        null,
        _react2.default.createElement(
            Title,
            null,
            'What do tweets',
            _react2.default.createElement('br', null),
            'teach us about',
            _react2.default.createElement('br', null),
            'US immgration?'
        ),
        _react2.default.createElement(
            Subtitle,
            null,
            'BIGOTRY STOPS HERE.'
        )
    );
};

exports.default = pitch;