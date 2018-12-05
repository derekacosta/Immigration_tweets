import React from 'react';
import styled from 'styled-components';

import TweetEmbed from 'react-tweet-embed'

const Wrapper = styled.section`
    // width: 70%;
    // margin: 0 auto;
    text-align: center;
`;

let ids = ['591308288739962881', '676030743609520128', '713012045214531584', '713807872388440069', '746415333741756418', '618519604109910016', '626063571294789632', '635971671388758016', '652640965543469056', '656278153455935489', '686714833031409664', '689460736150536193', '702663500171071488', '707785411574276096', '710618609026863104', '755254730301906944', '763539571564908544', '768637302096572417', '771533273470111744', '794948357718278146', '798804047130218497', '829814635125628928', '836972674878353409', '630076278956273666', '771173941150822400', '684102835567497216', '689457750917550082', '818873124951379969', '835226570340061184', '662592633173377024', '674299165229363200', '697776029683863553', '709130908532666368', '768823065010634752', '627979709117239298', '813901237015969793']


const cancelContent = () => {
    let choice1 = ids[Math.floor(Math.random() * ids.length)];
    let choice2 = ids[Math.floor(Math.random() * ids.length)];
    let choice3 = ids[Math.floor(Math.random() * ids.length)];
    let choice4 = ids[Math.floor(Math.random() * ids.length)];
    let choice5 = ids[Math.floor(Math.random() * ids.length)];
    let choice6 = ids[Math.floor(Math.random() * ids.length)]; 
    let choice7 = ids[Math.floor(Math.random() * ids.length)]; 
    let choice8 = ids[Math.floor(Math.random() * ids.length)];  

    return (
        <Wrapper> 
            <br />

            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice1} options={{ theme: 'dark', cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice2} options={{ cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice3} options={{ theme: 'dark' , cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice4} options={{ cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice5} options={{ cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice6} options={{ theme: 'dark', cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice7} options={{ cards: 'hidden' }}/> </div>
            <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>  <TweetEmbed id={choice8} options={{ theme: 'dark', cards: 'hidden' }}/> </div>
        </Wrapper>
    )
}

export default cancelContent;