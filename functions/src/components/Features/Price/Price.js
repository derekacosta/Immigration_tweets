'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    width: 60%;\n    padding-top: 20px;\n    margin: 0 auto;\n    margin-top: 2em;\n'], ['\n    width: 60%;\n    padding-top: 20px;\n    margin: 0 auto;\n    margin-top: 2em;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    list-style-type:none;\n'], ['\n    list-style-type:none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.section(_templateObject);

var UL = _styledComponents2.default.ul(_templateObject2);

var Price = function Price() {
    return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
            UL,
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            background: 'white',
                            color: '#999',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    'Bonilla, Y. & Rosa, J. (2015) #Ferguson: Digital protest, hashtag ethnography, and the racial politics of social media in the United States. American Ethnologist, 42, 4\u201317.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            color: '#999',
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    '>Burnor, E. (2005). Under the Fence: US-Mexican Immigration Issues. Harvard International Review, 27 (2), 8-9.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            color: '#999',
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    '>Chiluwa, I. & Ikufor, P. (2005). \'War against our Children\': Stance and evaluation in #BringBackOurGirls campaign discourse on Twitter and Facebook. Discourse and Society, 26, 267\u2013296.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            color: '#999',
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    '>Evans, H., Cordova, V., & Sipole, S. (2014). Twitter Style: An Analysis of How House Candidates Used Twitter in Their 2012 Campaigns. PS: Political Science and Politics, 47(2), 454-462.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            color: '#999',
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    '>Fuchs, C. (2018). Trumpology: Donald Trump\u2019s Ideology. In Digital Demagogue:Authoritarian Capitalism in the Age of Trump and Twitter (pp. 165-196). London: Pluto Press.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            color: '#999',
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    '>Jim\xE9nez, T. (2007). Weighing the Costs and Benefits of Mexican Immigration: The Mexican-American Perspective. Social Science Quarterly, 88(3), 599-618.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    {
                        style: {
                            padding: 10,
                            margin: 10,
                            color: '#999',
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        } },
                    '>Prier, J. (2017). Commanding the Trend: Social Media as Information Warfare. Strategic Studies Quarterly, 11(4), 50-85.'
                )
            )
        )
    );
};

exports.default = Price;