'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 50%;\n    display: inline;   \n    margin-left: 120px;\n    \n'], ['\n    width: 50%;\n    display: inline;   \n    margin-left: 120px;\n    \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        display: inline;\n        margin: 0 auto;\n  float: right;\n  margin-right:40px;\n'], ['\n        display: inline;\n        margin: 0 auto;\n  float: right;\n  margin-right:40px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTweetEmbed = require('react-tweet-embed');

var _reactTweetEmbed2 = _interopRequireDefault(_reactTweetEmbed);

var _pipeline = require('./../../../img/pipeline.svg');

var _pipeline2 = _interopRequireDefault(_pipeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.section(_templateObject);

var Wrapper2 = _styledComponents2.default.section(_templateObject2);

var ids = ['591308288739962881', '676030743609520128', '713012045214531584', '713807872388440069', '746415333741756418', '618519604109910016', '626063571294789632', '635971671388758016', '652640965543469056', '656278153455935489', '686714833031409664', '689460736150536193', '702663500171071488', '707785411574276096', '710618609026863104', '755254730301906944', '763539571564908544', '768637302096572417', '771533273470111744', '794948357718278146', '798804047130218497', '829814635125628928', '836972674878353409', '630076278956273666', '771173941150822400', '684102835567497216', '689457750917550082', '818873124951379969', '835226570340061184', '662592633173377024', '674299165229363200', '697776029683863553', '709130908532666368', '768823065010634752', '627979709117239298', '813901237015969793', "839711534544740353", "839978595753873409", "839827612331569152", "839744761661538304", "839990867419095040", "840204477701468162", "840193824613912576", "840146020390453248", "840123660048388097", "840171492767911936", "840106670445404160", "840523476628824064", "840469290268688384", "840489058866458624", "840380895714508800", "840481156067971072"];

var Pipeline = function (_React$Component) {
    _inherits(Pipeline, _React$Component);

    function Pipeline(props) {
        _classCallCheck(this, Pipeline);

        var _this = _possibleConstructorReturn(this, (Pipeline.__proto__ || Object.getPrototypeOf(Pipeline)).call(this, props));

        var comments = [];
        _this.state = {
            value: comments ? comments : 'Please help us dissect some other tweets so that our model can learn!',
            // comments: comments,
            choice: ids[Math.floor(Math.random() * ids.length)]
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Pipeline, [{
        key: 'Tweet',
        value: function Tweet(choice) {
            return _react2.default.createElement(_reactTweetEmbed2.default, {
                id: choice,
                options: {
                    theme: 'dark',
                    cards: 'hidden'
                } });
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
            this.setState({ value: this.state.value.concat(this.element.value), choice: choice });
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
                    _react2.default.createElement('img', { src: _pipeline2.default, alt: 'pipe' })
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
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Previously Answered:'
                        ),
                        this.state.value.map(function (i) {
                            return _react2.default.createElement(
                                'div',
                                null,
                                i
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Pipeline;
}(_react2.default.Component);

exports.default = Pipeline;