'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Cancel = require('./Cancel/Cancel');

var _Cancel2 = _interopRequireDefault(_Cancel);

var _Watch = require('./Watch/Watch');

var _Watch2 = _interopRequireDefault(_Watch);

var _Price = require('./Price/Price');

var _Price2 = _interopRequireDefault(_Price);

var _Pipeline = require('./Pipeline/Pipeline');

var _Pipeline2 = _interopRequireDefault(_Pipeline);

var _paper = require('./../../img/paper.png');

var _paper2 = _interopRequireDefault(_paper);

var _twitter = require('./../../img/twitter.png');

var _twitter2 = _interopRequireDefault(_twitter);

var _data = require('./../../img/data.png');

var _data2 = _interopRequireDefault(_data);

var _pipe = require('./../../img/pipe.png');

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = _styledComponents2.default.div.withConfig({
    displayName: 'Features',
    componentId: 'zkjpis-0'
})(['background-color:#141414;border-bottom:2px solid #3d3d3d;.featureNav{padding:20px 0 0 0;width:80%;cursor:pointer;margin:0 auto;display:flex;}a{text-decoration:none;text-align:center;font-weight:bold;color:#777;height:125px;line-height:20px;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;&:hover{color:white;svg{fill:white;}}h2{margin:10px 0 0;font-size:1em;}svg{fill:#777;}img{height:50px;}.selected{color:white;fill:white;}}@media (max-width:900px){svg{width:100%;height:34px;}}']);

var Wrapper = _styledComponents2.default.div.withConfig({
    displayName: 'Features__Wrapper',
    componentId: 'zkjpis-1'
})(['margin-bottom:120px;']);

// Red Bottom Border on Selected Feature
var Selectedspan = _styledComponents2.default.span.withConfig({
    displayName: 'Features__Selectedspan',
    componentId: 'zkjpis-2'
})(['padding:15px 0 0 0;display:block;border-bottom:5px solid #e50914;@media (max-width:900px){padding:30px 0 0 0;}']);

var features = function (_React$Component) {
    _inherits(features, _React$Component);

    function features(props) {
        _classCallCheck(this, features);

        var _this = _possibleConstructorReturn(this, (features.__proto__ || Object.getPrototypeOf(features)).call(this, props));

        _this.state = {
            // For Mobile Layout 
            // For Content
            // true = hidden
            cancelContent: false,
            watchContent: true,
            priceContent: true,
            pipeline: true
        };
        return _this;
    }
    // method for Mobile view or Desktop

    // make sure to remove the listener
    // when the component is not mounted anymore

    // Toggle Content for 3 Tabs 


    _createClass(features, [{
        key: 'toggleContent',
        value: function toggleContent(e) {
            e.preventDefault();
            this.setState({
                cancelContent: false,
                watchContent: true,
                priceContent: true,
                pipeline: true
            });
        }
    }, {
        key: 'toggleContent2',
        value: function toggleContent2(e) {
            e.preventDefault();
            this.setState({
                cancelContent: true,
                watchContent: false,
                priceContent: true,
                pipeline: true
            });
        }
    }, {
        key: 'toggleContent3',
        value: function toggleContent3(e) {
            e.preventDefault();
            this.setState({
                watchContent: true,
                cancelContent: true,
                priceContent: false,
                pipeline: true
            });
        }
    }, {
        key: 'toggleContent4',
        value: function toggleContent4(e) {
            e.preventDefault();
            this.setState({
                watchContent: true,
                cancelContent: true,
                priceContent: true,
                pipeline: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cancelContent = this.state.cancelContent;
            var watchContent = this.state.watchContent;
            var priceContent = this.state.priceContent;
            var pipeline = this.state.pipeline;
            var width = this.state.width;

            var isMobile = width <= 800;

            if (isMobile) {
                return _react2.default.createElement(
                    Wrapper,
                    null,
                    _react2.default.createElement(
                        Features,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'featureNav' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent(e);
                                    } },
                                _react2.default.createElement('img', { src: _twitter2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !cancelContent ? 'selected' : '' },
                                    'Cancel'
                                ),
                                _react2.default.createElement('br', null),
                                !this.state.cancelContent && _react2.default.createElement(Selectedspan, null)
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent2(e);
                                    } },
                                _react2.default.createElement('img', { src: _data2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !watchContent ? 'selected' : '' },
                                    'Devices'
                                ),
                                _react2.default.createElement('br', null),
                                !this.state.watchContent && _react2.default.createElement(Selectedspan, null)
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent3(e);
                                    } },
                                _react2.default.createElement('img', { src: _paper2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !priceContent ? 'selected' : '' },
                                    'Price'
                                ),
                                _react2.default.createElement('br', null),
                                !this.state.priceContent && _react2.default.createElement(Selectedspan, null)
                            )
                        )
                    ),
                    !this.state.cancelContent && _react2.default.createElement(_Cancel2.default, null),
                    !this.state.watchContent && _react2.default.createElement(_Watch2.default, null),
                    !this.state.priceContent && _react2.default.createElement(_Price2.default, null)
                );
            } else {
                return _react2.default.createElement(
                    Wrapper,
                    null,
                    _react2.default.createElement(
                        Features,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'featureNav' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent(e);
                                    } },
                                _react2.default.createElement('img', { src: _twitter2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !cancelContent ? 'selected' : '' },
                                    'Example Tweets'
                                ),
                                !this.state.cancelContent && _react2.default.createElement(Selectedspan, null)
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent2(e);
                                    } },
                                _react2.default.createElement('img', { src: _data2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !watchContent ? 'selected' : '' },
                                    'Anaylsis'
                                ),
                                _react2.default.createElement('br', null),
                                !this.state.watchContent && _react2.default.createElement(Selectedspan, null)
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent3(e);
                                    } },
                                _react2.default.createElement('img', { src: _paper2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !priceContent ? 'selected' : '' },
                                    'Sources'
                                ),
                                _react2.default.createElement('br', null),
                                !this.state.priceContent && _react2.default.createElement(Selectedspan, null)
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2.toggleContent4(e);
                                    } },
                                _react2.default.createElement('img', { src: _pipe2.default }),
                                _react2.default.createElement(
                                    'h2',
                                    { className: !pipeline ? 'selected' : '' },
                                    'Pipeline'
                                ),
                                _react2.default.createElement('br', null),
                                !this.state.pipeline && _react2.default.createElement(Selectedspan, null)
                            )
                        )
                    ),
                    !this.state.cancelContent && _react2.default.createElement(_Cancel2.default, null),
                    !this.state.watchContent && _react2.default.createElement(_Watch2.default, null),
                    !this.state.priceContent && _react2.default.createElement(_Price2.default, null),
                    !this.state.pipeline && _react2.default.createElement(_Pipeline2.default, null)
                );
            }
        }
    }]);

    return features;
}(_react2.default.Component);

exports.default = features;