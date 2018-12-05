'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _x = require('react-icons/lib/go/x');

var _x2 = _interopRequireDefault(_x);

var _check = require('react-icons/lib/go/check');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.section.withConfig({
    displayName: 'Price__Wrapper',
    componentId: 'sc-1r6qtr0-0'
})(['width:60%;padding-top:20px;margin:0 auto;margin-top:2em;']);

var DivWrapper = _styledComponents2.default.div.withConfig({
    displayName: 'Price__DivWrapper',
    componentId: 'sc-1r6qtr0-1'
})(['width:90%;margin:0 auto;@media (max-width:1200px){text-align:center;}']);

var H2 = _styledComponents2.default.h2.withConfig({
    displayName: 'Price__H2',
    componentId: 'sc-1r6qtr0-2'
})(['width:65%;font-size:1.5em;color:white;font-weight:200;padding:0 10px;text-align:center;', ''], function (props) {
    return props.inline && (0, _styledComponents.css)(['display:inline-flex;']);
});

var JoinButton4 = _styledComponents2.default.button.withConfig({
    displayName: 'Price__JoinButton4',
    componentId: 'sc-1r6qtr0-3'
})(['font-size:14px;letter-spacing:1.9px;font-weight:100;margin:0.5em 0.5em 0.5em 1.7em;padding:18px 20px;color:white;background-color:#e50914;cursor:pointer;text-decoration:none;vertical-align:middle;font-family:Arial,sans-serif;border-radius:2px;user-select:none;text-align:center;border:0;&:hover{background-color:#E53935;}', ''], function (props) {
    return props.narrow && (0, _styledComponents.css)(['flex:none;']);
});

var Table = _styledComponents2.default.table.withConfig({
    displayName: 'Price__Table',
    componentId: 'sc-1r6qtr0-4'
})(['width:100%;color:white;font-weight:200;fill:white;margin-top:40px;border-collapse:collapse;thead{border-collapse:collapse;text-transform:uppercase;th{padding:10px;}}tbody{border-collapse:collapse;color:#999;td{text-align:center;padding:11px 20px;&:first-child{text-align:left;}}tr{&:nth-child(2n){background-color:#222;}}}@media (max-width:700px){text-align:center;background-color:transparent;font-size:12px;thead{th{text-align:center;width:35%;}}tbody{td{text-align:center;padding:1em 0;&:first-child{text-align:center;}}tr{&:nth-child(2n){background-color:transparent;}}}.bold{padding:5px 10px;font-size:14px;font-weight:700;}}']);

var Price = function Price() {
    return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Bonilla, Y. & Rosa, J. (2015) #Ferguson: Digital protest, hashtag ethnography, and the racial politics of social media in the United States. American Ethnologist, 42, 4\u201317.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Burnor, E. (2005). Under the Fence: US-Mexican Immigration Issues. Harvard International Review, 27 (2), 8-9. '
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Chiluwa, I. & Ikufor, P. (2005). \'War against our Children\': Stance and evaluation in #BringBackOurGirls campaign discourse on Twitter and Facebook. Discourse and Society, 26, 267\u2013296.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Evans, H., Cordova, V., & Sipole, S. (2014). Twitter Style: An Analysis of How House Candidates Used Twitter in Their 2012 Campaigns. PS: Political Science and Politics, 47(2), 454-462. '
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Fuchs, C. (2018). Trumpology: Donald Trump\u2019s Ideology. In Digital Demagogue:Authoritarian Capitalism in the Age of Trump and Twitter (pp. 165-196). London: Pluto Press.'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Jim\xE9nez, T. (2007). Weighing the Costs and Benefits of Mexican Immigration: The Mexican-American Perspective. Social Science Quarterly, 88(3), 599-618. '
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Prier, J. (2017). Commanding the Trend: Social Media as Information Warfare. Strategic Studies Quarterly, 11(4), 50-85. '
                )
            )
        )
    );
};

exports.default = Price;