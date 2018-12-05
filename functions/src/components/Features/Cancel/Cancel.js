'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTweetEmbed = require('react-tweet-embed');

var _reactTweetEmbed2 = _interopRequireDefault(_reactTweetEmbed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.section.withConfig({
    displayName: 'Cancel__Wrapper',
    componentId: 'sc-1mcqylw-0'
})(['text-align:center;']);

var Columns = _styledComponents2.default.div.withConfig({
    displayName: 'Cancel__Columns',
    componentId: 'sc-1mcqylw-1'
})(['display:flex;@media (max-width:900px){flex-direction:column;text-align:center;}']);

var Column = _styledComponents2.default.div.withConfig({
    displayName: 'Cancel__Column',
    componentId: 'sc-1mcqylw-2'
})(['display:block;flex-basis:0;flex-grow:1;flex-shrink:1;img{max-width:100%;}']);

var H2 = _styledComponents2.default.h2.withConfig({
    displayName: 'Cancel__H2',
    componentId: 'sc-1mcqylw-3'
})(['font-size:32px;color:white;font-weight:400;margin:60px 0 20px;@media (max-width:900px){font-size:22px;font-weight:100;}']);

var JoinButton2 = _styledComponents2.default.button.withConfig({
    displayName: 'Cancel__JoinButton2',
    componentId: 'sc-1mcqylw-4'
})(['font-size:14px;letter-spacing:1.9px;font-weight:100;margin:0.5em 0.5em 0.5em 0;padding:18px 20px;color:white;background-color:#e50914;cursor:pointer;text-decoration:none;vertical-align:middle;font-family:Arial,sans-serif;border-radius:2px;user-select:none;text-align:center;border:0;&:hover{background-color:#E53935;}']);

var ids = ['591308288739962881', '676030743609520128', '713012045214531584', '713807872388440069', '746415333741756418', '618519604109910016', '626063571294789632', '635971671388758016', '652640965543469056', '656278153455935489', '686714833031409664', '689460736150536193', '702663500171071488', '707785411574276096', '710618609026863104', '755254730301906944', '763539571564908544', '768637302096572417', '771533273470111744', '794948357718278146', '798804047130218497', '829814635125628928', '836972674878353409', '630076278956273666', '771173941150822400', '684102835567497216', '689457750917550082', '818873124951379969', '835226570340061184', '662592633173377024', '674299165229363200', '697776029683863553', '709130908532666368', '768823065010634752', '627979709117239298', '813901237015969793'];

var cancelContent = function cancelContent() {
    var choice1 = ids[Math.floor(Math.random() * ids.length)];
    var choice2 = ids[Math.floor(Math.random() * ids.length)];
    var choice3 = ids[Math.floor(Math.random() * ids.length)];
    var choice4 = ids[Math.floor(Math.random() * ids.length)];
    var choice5 = ids[Math.floor(Math.random() * ids.length)];
    var choice6 = ids[Math.floor(Math.random() * ids.length)];
    var choice7 = ids[Math.floor(Math.random() * ids.length)];
    var choice8 = ids[Math.floor(Math.random() * ids.length)];

    return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice1, options: { theme: 'dark', cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice2, options: { cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '   ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice3, options: { theme: 'dark', cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice4, options: { cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice5, options: { cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice6, options: { theme: 'dark', cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice7, options: { cards: 'hidden' } }),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'inline-block', width: '20%', padding: '5px' } },
            '  ',
            _react2.default.createElement(_reactTweetEmbed2.default, { id: choice8, options: { theme: 'dark', cards: 'hidden' } }),
            ' '
        )
    );
};

exports.default = cancelContent;