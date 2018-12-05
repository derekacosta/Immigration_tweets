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

var _reactCssGrid = require('react-css-grid');

var _reactCssGrid2 = _interopRequireDefault(_reactCssGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.section.withConfig({
    displayName: 'Watch__Wrapper',
    componentId: 'sc-1moil4x-0'
})(['width:80%;margin:0 auto;padding-top:20px;@media (max-width:900px){width:100%;}']);

var Wrapper2 = _styledComponents2.default.section.withConfig({
    displayName: 'Watch__Wrapper2',
    componentId: 'sc-1moil4x-1'
})(['width:10%;margin:0 auto;@media (max-width:900px){width:100%;}']);
var Wrapper3 = _styledComponents2.default.section.withConfig({
    displayName: 'Watch__Wrapper3',
    componentId: 'sc-1moil4x-2'
})(['width:10%;margin:0 auto;@media (max-width:900px){width:100%;}']);

var Column = _styledComponents2.default.div.withConfig({
    displayName: 'Watch__Column',
    componentId: 'sc-1moil4x-3'
})(['display:block;', ' @media (max-width:1200px){text-align:center;}'], function (props) {
    return props.center && (0, _styledComponents.css)(['text-align:center;']);
});

var H2 = _styledComponents2.default.h2.withConfig({
    displayName: 'Watch__H2',
    componentId: 'sc-1moil4x-4'
})(['font-size:22px;color:black;padding-right:1em;font-weight:200;margin:2em 0 20px;', ''], function (props) {
    return props.inline && (0, _styledComponents.css)(['display:inline-flex;']);
});

var JoinButton3 = _styledComponents2.default.button.withConfig({
    displayName: 'Watch__JoinButton3',
    componentId: 'sc-1moil4x-5'
})(['font-size:14px;letter-spacing:1.9px;font-weight:100;margin:0.5em 0.5em 0.5em 1.7em;padding:16px 1.5em;color:black;background-color:#e50914;cursor:pointer;text-decoration:none;vertical-align:middle;font-family:Arial,sans-serif;border-radius:2px;user-select:none;text-align:center;border:0;&:hover{background-color:#E53935;}', ' ', ''], function (props) {
    return props.column && (0, _styledComponents.css)(['flex-basis:0;flex-grow:1;flex-shrink:1;']);
}, function (props) {
    return props.narrow && (0, _styledComponents.css)(['flex:none;']);
});

var H3 = _styledComponents2.default.h3.withConfig({
    displayName: 'Watch__H3',
    componentId: 'sc-1moil4x-6'
})(['color:black;text-align:center;']);

var Des = _styledComponents2.default.p.withConfig({
    displayName: 'Watch__Des',
    componentId: 'sc-1moil4x-7'
})(['color:#999;text-align:justify;font-size:16px;']);

var Tweet = _styledComponents2.default.div.withConfig({
    displayName: 'Watch__Tweet',
    componentId: 'sc-1moil4x-8'
})(['']);

var Caption = _styledComponents2.default.p.withConfig({
    displayName: 'Watch__Caption',
    componentId: 'sc-1moil4x-9'
})(['color:#999;text-align:center;font-size:16px;direction:ltr;font-weight:50;']);

var watchContent = function watchContent() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Wrapper2, null),
        _react2.default.createElement(
            Wrapper,
            null,
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Des,
                        null,
                        'The first idea Trump introduces is \u201Cthe American worker\u201D, and in the next clause, he follows the first idea with another idea: \u201Cillegals\u201D. In terms of the contrast shown between the two ideas, the logic of this tweet makes sense for the most part. Although of course, in different countries, the definition of a national varies, hence could stir further debate regarding the logic of the tweet itself. Here Trump is implying that \u201Cillegals\u201D are NOT \u201CAmericans\u201D and that \u201CAmerican workers\u201D cannot be \u201Cillegals\u201D, attempting to show a clear connection between legitimacy and legality, a belief held commonly by many people in the world. Also notice the all uppercase initial of each word in \u201CLet\u2019s Make America Great Again\u201D for further rhetorical and stylistic emphasis.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '591308288739962881', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .1'
                    ),
                    ' '
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    '                    ',
                    _react2.default.createElement(_reactTweetEmbed2.default, { id: '698303565232623616', options: { theme: 'dark', cards: 'hidden' } }),
                    '  ',
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .2'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Des,
                        null,
                        'The tweet above displays a case of the second setting. In the second setting, he groups the two ideas together, and they are often linked with the conjunction \u201Cand\u201D. In the first sentence, there are two ideas: \u201Cillegal immigration\u201D and \u201Cprotect our borders\u201D. There are two readings of this sentence in terms of interpreting the meaning. The first interpretation would imply that \u201Cillegal immigration\u201D and \u201Cprotect our borders\u201D are two parallel ideas that are of equal importance and not to be manifested in any particular sequential order. The other interpretation calls for a causal relationship between the two ideas, meaning that in order to \u201Cprotect our borders\u201D, we must first \u201Cend illegal immigration\u201D. I would say that the second reading is more reasonable and closer to Trump\u2019s initial intent, for it would be saying that the first idea is entailed within the larger theme of the second. it would also add content to his message and would slightly increase the level of sophistication. The same two possible versions of interpretation can be applied to the second sentence, where the two ideas are \u201CSAFE\u201D and \u201CGREAT\u201D. It is entirely possible that Trump intents \u201CGREAT\u201D to be a bigger and a more all-encompassing theme than \u201CSAFE\u201D. And again, notice the all caps this time.'
                    )
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    ' ',
                    _react2.default.createElement(
                        Des,
                        null,
                        'This is a slightly different example. Here, the two ideas are \u201Chow often I am right\u201D and \u201Ccriticized by media\u201D, which can be paraphrased to \u201Cregular truth sayer\u201D and \u201Cpersecuted and victimized\u201D. These two ideas, strictly standing by themselves, do not hold that much pertinence in terms of each other. That is, telling the truth all the time does not necessarily lead to being persecuted by popular opinion. People who tell the truth can also receive validation from others, and in fact it is an equally valid possibility. Perhaps what Trump is trying to convey here (rather implicitly) is that, because of his already existing negative reputation among the media, he is not treated fairly and represented accurately in public. Nevertheless, because of the relatively weak connection between the two ideas in this tweet, it is probably not as assertive or convincing.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '713012045214531584', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .3'
                    ),
                    ' '
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    '                     ',
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '713807872388440069', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .4'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Des,
                        null,
                        'This example is kind of similar to example 2. The two ideas here are \u201Cstrengthened military\u201D and \u201Cstrong borders\u201D. Notice how in both of these examples the second idea has something to do with the border. Therefore, if we use the second version of interpretation introduced in example 2, combining the two tweets, we can paraphrase them together into something like: \u201CIn order to protect our borders and make them strong, we need to strengthen our military and end illegal immigration.\u201D In this new constructed Trump-like tweet, we have created a clause with two ideas within them, \u201Cstrengthen our military\u201D and \u201Cend illegal immigration\u201D. I know this may be a bit confusing, but there are two ways to interpret this clause as well. The first interpretation implies that the two ideas are of equal importance and they should be completed in no particular order; the second interpretation calls for the use of military force for ending illegal immigration. Now, none of the two ways of interpretation make too much sense, and therefore could be subjected to further criticism. I wanted to combine example 4 and 2 to show how different Trump tweets could interact with each other and complement/damage each other\u2019s validity. Interestingly, the dynamic of the two ideas can be found to be present in other sources as well, some of them related to Trump, while others more independent.'
                    )
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    '                                ',
                    _react2.default.createElement(
                        Des,
                        null,
                        'The tweet above was posted by the New York Times. It is highly pertinent to Trump, as the title paraphrases the central idea of one of Trump\u2019s TV ads. We can see a clear declaration of two ideas here: \u201Cstop illegal immigration\u201D and \u201Cdefeat ISIS\u201D. These two ideas have little meaningful overlap between them. However, here it is implied that Trump believes that stopping illegal immigration and the defeat of ISIS are in complementary position, suggesting that the completion of one can effectively assist the other.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '684102835567497216', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .5'
                    )
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    '                               ',
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '771533273470111744', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .6'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Des,
                        null,
                        'The above tweet was posted by Fox News restating a tweet of Mary Ann Mendoza. The aim of this tweet is to attack the point of view of someone on the opposite end of the political spectrum. Here, \u201Cillegals\u201D and \u201Crefugees\u201D are deemed to be almost equivalent. This disposition disregards the origin and the proper use of the respective terminologies. The term \u201Cillegals\u201D refers to those that do not have legal status in one place, while \u201Crefugees\u201D are people who are displaced forcefully. The two terms are based in completely different contexts, and therefore it is questionable what the intent of the statement is. And then, Mendoza sets up the contrast between \u201Cillegals and refugees\u201D and \u201CAmericans\u201D, further advocating for the grouping of these totally different identities. Below is another tweet by Fox News that shows a similar dynamic.'
                    )
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    '                           ',
                    _react2.default.createElement(
                        Des,
                        null,
                        'This is very similar to example 5. What is different here is that the statement does not seem to group \u201Cillegal aliens\u201D and \u201Crefugees\u201D into a single category. By placing \u201Cnot\u201D in front of each term, it shows more clearly that these two ideas are largely independent from each other. '
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '794948357718278146', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .7'
                    ),
                    ' '
                )
            ),
            _react2.default.createElement(
                _reactCssGrid2.default,
                {
                    gap: 100 },
                _react2.default.createElement(
                    'div',
                    null,
                    '                                 ',
                    _react2.default.createElement(
                        Tweet,
                        null,
                        ' ',
                        _react2.default.createElement(_reactTweetEmbed2.default, { id: '755254730301906944', options: { theme: 'dark', cards: 'hidden' } }),
                        ' '
                    ),
                    _react2.default.createElement(
                        Caption,
                        null,
                        'Fig .8'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Des,
                        null,
                        ' Another Fox News retweet.I want to focus on the ideas of \u201Cterrorists\u201D and \u201Cillegals\u201D. In this case, both \u201Cterrorists\u201D and \u201Cillegals\u201D have negative connotations. However, \u201Cterrorist\u201D is a much stronger and more powerful idea in the context of this sentence as a whole. Because this sentence talks about threats to the US, \u201Cterrorist\u201D appears as a more direct potential threat to national security. The word \u201Cillegal\u201D does not have that connotation originally, but having been put together with another idea, which is more powerful and immediate, the intensity of the its own meaning increases.'
                    ),
                    ' '
                )
            )
        ),
        _react2.default.createElement(Wrapper3, null)
    );
};

exports.default = watchContent;