'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTweetEmbed = require('react-tweet-embed');

var _reactTweetEmbed2 = _interopRequireDefault(_reactTweetEmbed);

var _x = require('react-icons/lib/go/x');

var _x2 = _interopRequireDefault(_x);

var _check = require('react-icons/lib/go/check');

var _check2 = _interopRequireDefault(_check);

var _pipeline = require('./../../../img/pipeline.svg');

var _pipeline2 = _interopRequireDefault(_pipeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.section.withConfig({
    displayName: 'Pipeline__Wrapper',
    componentId: 'sc-18k5x9g-0'
})(['width:50%;display:inline;margin-left:120px;']);

var Wrapper2 = _styledComponents2.default.section.withConfig({
    displayName: 'Pipeline__Wrapper2',
    componentId: 'sc-18k5x9g-1'
})(['display:inline;margin:0 auto;float:right;margin-right:40px;']);

var DivWrapper = _styledComponents2.default.div.withConfig({
    displayName: 'Pipeline__DivWrapper',
    componentId: 'sc-18k5x9g-2'
})(['width:90%;margin:0 auto;@media (max-width:1200px){text-align:center;}']);

var H2 = _styledComponents2.default.h2.withConfig({
    displayName: 'Pipeline__H2',
    componentId: 'sc-18k5x9g-3'
})(['width:65%;font-size:1.5em;color:white;font-weight:200;padding:0 10px;text-align:center;', ''], function (props) {
    return props.inline && (0, _styledComponents.css)(['display:inline-flex;']);
});

var JoinButton4 = _styledComponents2.default.button.withConfig({
    displayName: 'Pipeline__JoinButton4',
    componentId: 'sc-18k5x9g-4'
})(['font-size:14px;letter-spacing:1.9px;font-weight:100;margin:0.5em 0.5em 0.5em 1.7em;padding:18px 20px;color:white;background-color:#e50914;cursor:pointer;text-decoration:none;vertical-align:middle;font-family:Arial,sans-serif;border-radius:2px;user-select:none;text-align:center;border:0;&:hover{background-color:#E53935;}', ''], function (props) {
    return props.narrow && (0, _styledComponents.css)(['flex:none;']);
});

var Table = _styledComponents2.default.table.withConfig({
    displayName: 'Pipeline__Table',
    componentId: 'sc-18k5x9g-5'
})(['width:100%;color:white;font-weight:200;fill:white;margin-top:40px;border-collapse:collapse;thead{border-collapse:collapse;text-transform:uppercase;th{padding:10px;}}tbody{border-collapse:collapse;color:#999;td{text-align:center;padding:11px 20px;&:first-child{text-align:left;}}tr{&:nth-child(2n){background-color:#222;}}}@media (max-width:700px){text-align:center;background-color:transparent;font-size:12px;thead{th{text-align:center;width:35%;}}tbody{td{text-align:center;padding:1em 0;&:first-child{text-align:center;}}tr{&:nth-child(2n){background-color:transparent;}}}.bold{padding:5px 10px;font-size:14px;font-weight:700;}}']);

var ids = ['591308288739962881', '676030743609520128', '713012045214531584', '713807872388440069', '746415333741756418', '618519604109910016', '626063571294789632', '635971671388758016', '652640965543469056', '656278153455935489', '686714833031409664', '689460736150536193', '702663500171071488', '707785411574276096', '710618609026863104', '755254730301906944', '763539571564908544', '768637302096572417', '771533273470111744', '794948357718278146', '798804047130218497', '829814635125628928', '836972674878353409', '630076278956273666', '771173941150822400', '684102835567497216', '689457750917550082', '818873124951379969', '835226570340061184', '662592633173377024', '674299165229363200', '697776029683863553', '709130908532666368', '768823065010634752', '627979709117239298', '813901237015969793', "839711534544740353", "839978595753873409", "839827612331569152", "839744761661538304", "839990867419095040", "840204477701468162", "840193824613912576", "840146020390453248", "840123660048388097", "840171492767911936", "840106670445404160", "840523476628824064", "840469290268688384", "840489058866458624", "840380895714508800", "840481156067971072"];
var choice1 = ids[Math.floor(Math.random() * ids.length)];

var Pipeline = function (_React$Component) {
    _inherits(Pipeline, _React$Component);

    function Pipeline(props) {
        _classCallCheck(this, Pipeline);

        var _this = _possibleConstructorReturn(this, (Pipeline.__proto__ || Object.getPrototypeOf(Pipeline)).call(this, props));

        _this.state = {
            value: 'Please help us dissect some other tweets so that our model can learn!',
            choice: ids[Math.floor(Math.random() * ids.length)]
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Pipeline, [{
        key: 'Tweet',
        value: function Tweet(choice) {
            return _react2.default.createElement(_reactTweetEmbed2.default, { id: choice, options: { theme: 'dark', cards: 'hidden' } });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var choice = ids[Math.floor(Math.random() * ids.length)];
            this.setState({ value: this.element.value, choice: choice });
            alert("Thank you answer has been stored");
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    Wrapper,
                    null,
                    _react2.default.createElement('img', { src: _pipeline2.default })
                ),
                _react2.default.createElement(
                    Wrapper2,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        this.Tweet(this.state.choice),
                        _react2.default.createElement(
                            'form',
                            { onSubmit: this.handleSubmit },
                            _react2.default.createElement(
                                'label',
                                null,
                                _react2.default.createElement('textarea', { type: 'text', ref: function ref(el) {
                                        return _this2.element = el;
                                    } })
                            ),
                            _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.state.value
                        )
                    )
                )
            );
        }
    }]);

    return Pipeline;
}(_react2.default.Component);

exports.default = Pipeline;