import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import Grid from "react-css-grid";
import styled from 'styled-components';

const Wrapper = styled.section `
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Wrapper2 = styled.section `
    width: 10%;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 100%;
    }
`;
const Wrapper3 = styled.section `
    width: 10%;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Des = styled.p `
    color: #999;
    // width: 500px !important;
    text-align: justify;
    font-size: 16px;
    // height:0px !important;
`;

const Tweet = styled.div `
    // padding-bottom: 10px;
    // padding-top: -50px;
    // margin-top: -40px;
    // height:0px !important;
    // width: 300px !important;
`;

const Caption = styled.p `
    color: #999;
    text-align: center;
    font-size: 16px;
    direction: ltr;
    font-weight: 50;
`;

const watchContent = () => {
    return (
        <div>
            <Wrapper2></Wrapper2>
            <Wrapper>
                <Grid width={500} gap={100}>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>The
                            first idea Trump introduces is “the American worker”, and in the next clause, he
                            follows the first idea with another idea: “illegals”. In terms of the contrast
                            shown between the two ideas, the logic of this tweet makes sense for the most
                            part. Although of course, in different countries, the definition of a national
                            varies, hence could stir further debate regarding the logic of the tweet itself.
                            Here Trump is implying that “illegals” are NOT “Americans” and that “American
                            workers” cannot be “illegals”, attempting to show a clear connection between
                            legitimacy and legality, a belief held commonly by many people in the world.
                            Also notice the all uppercase initial of each word in “Let’s Make America Great
                            Again” for further rhetorical and stylistic emphasis.
                        </Des>
                    </div>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='591308288739962881'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .1</Caption>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='698303565232623616'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>

                        <Caption>Fig .2</Caption>
                    </div>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>The
                            tweet above displays a case of the second setting. In the second setting, he
                            groups the two ideas together, and they are often linked with the conjunction
                            “and”. In the first sentence, there are two ideas: “illegal immigration” and
                            “protect our borders”. There are two readings of this sentence in terms of
                            interpreting the meaning. The first interpretation would imply that “illegal
                            immigration” and “protect our borders” are two parallel ideas that are of equal
                            importance and not to be manifested in any particular sequential order. The
                            other interpretation calls for a causal relationship between the two ideas,
                            meaning that in order to “protect our borders”, we must first “end illegal
                            immigration”. I would say that the second reading is more reasonable and closer
                            to Trump’s initial intent, for it would be saying that the first idea is
                            entailed within the larger theme of the second. it would also add content to his
                            message and would slightly increase the level of sophistication. The same two
                            possible versions of interpretation can be applied to the second sentence, where
                            the two ideas are “SAFE” and “GREAT”. It is entirely possible that Trump intents
                            “GREAT” to be a bigger and a more all-encompassing theme than “SAFE”. And again,
                            notice the all caps this time.

                        </Des>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>This
                            is a slightly different example. Here, the two ideas are “how often I am right”
                            and “criticized by media”, which can be paraphrased to “regular truth sayer” and
                            “persecuted and victimized”. These two ideas, strictly standing by themselves,
                            do not hold that much pertinence in terms of each other. That is, telling the
                            truth all the time does not necessarily lead to being persecuted by popular
                            opinion. People who tell the truth can also receive validation from others, and
                            in fact it is an equally valid possibility. Perhaps what Trump is trying to
                            convey here (rather implicitly) is that, because of his already existing
                            negative reputation among the media, he is not treated fairly and represented
                            accurately in public. Nevertheless, because of the relatively weak connection
                            between the two ideas in this tweet, it is probably not as assertive or
                            convincing.</Des>
                    </div>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='713012045214531584'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .3</Caption>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='713807872388440069'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .4</Caption>

                    </div>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>This
                            example is kind of similar to example 2. The two ideas here are “strengthened
                            military” and “strong borders”. Notice how in both of these examples the second
                            idea has something to do with the border. Therefore, if we use the second
                            version of interpretation introduced in example 2, combining the two tweets, we
                            can paraphrase them together into something like: “In order to protect our
                            borders and make them strong, we need to strengthen our military and end illegal
                            immigration.” In this new constructed Trump-like tweet, we have created a clause
                            with two ideas within them, “strengthen our military” and “end illegal
                            immigration”. I know this may be a bit confusing, but there are two ways to
                            interpret this clause as well. The first interpretation implies that the two
                            ideas are of equal importance and they should be completed in no particular
                            order; the second interpretation calls for the use of military force for ending
                            illegal immigration. Now, none of the two ways of interpretation make too much
                            sense, and therefore could be subjected to further criticism. I wanted to
                            combine example 4 and 2 to show how different Trump tweets could interact with
                            each other and complement/damage each other’s validity. Interestingly, the
                            dynamic of the two ideas can be found to be present in other sources as well,
                            some of them related to Trump, while others more independent.
                        </Des>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>The
                            tweet above was posted by the New York Times. It is highly pertinent to Trump,
                            as the title paraphrases the central idea of one of Trump’s TV ads. We can see a
                            clear declaration of two ideas here: “stop illegal immigration” and “defeat
                            ISIS”. These two ideas have little meaningful overlap between them. However,
                            here it is implied that Trump believes that stopping illegal immigration and the
                            defeat of ISIS are in complementary position, suggesting that the completion of
                            one can effectively assist the other.</Des>

                    </div>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='684102835567497216'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .5</Caption>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='771533273470111744'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .6</Caption>

                    </div>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>The
                            above tweet was posted by Fox News restating a tweet of Mary Ann Mendoza. The
                            aim of this tweet is to attack the point of view of someone on the opposite end
                            of the political spectrum. Here, “illegals” and “refugees” are deemed to be
                            almost equivalent. This disposition disregards the origin and the proper use of
                            the respective terminologies. The term “illegals” refers to those that do not
                            have legal status in one place, while “refugees” are people who are displaced
                            forcefully. The two terms are based in completely different contexts, and
                            therefore it is questionable what the intent of the statement is. And then,
                            Mendoza sets up the contrast between “illegals and refugees” and “Americans”,
                            further advocating for the grouping of these totally different identities. Below
                            is another tweet by Fox News that shows a similar dynamic.

                        </Des>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>This
                            is very similar to example 5. What is different here is that the statement does
                            not seem to group “illegal aliens” and “refugees” into a single category. By
                            placing “not” in front of each term, it shows more clearly that these two ideas
                            are largely independent from each other.
                        </Des>

                    </div>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='794948357718278146'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .7</Caption>
                    </div>
                </Grid>
                <Grid width={500} gap={100}>
                    <div>
                        <Tweet>
                            <TweetEmbed
                                id='755254730301906944'
                                options={{
                                theme: 'dark',
                                cards: 'hidden'
                            }}/>
                        </Tweet>
                        <Caption>Fig .8</Caption>

                    </div>
                    <div>
                        <Des
                            style={{
                            background: 'white',
                            boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}>
                            Another Fox News retweet.I want to focus on the ideas of “terrorists” and
                            “illegals”. In this case, both “terrorists” and “illegals” have negative
                            connotations. However, “terrorist” is a much stronger and more powerful idea in
                            the context of this sentence as a whole. Because this sentence talks about
                            threats to the US, “terrorist” appears as a more direct potential threat to
                            national security. The word “illegal” does not have that connotation originally,
                            but having been put together with another idea, which is more powerful and
                            immediate, the intensity of the its own meaning increases.

                        </Des>
                    </div>
                </Grid>
            </Wrapper>
            <Wrapper3></Wrapper3>
        </div>
    )
}

export default watchContent;