import React from 'react';

import styled from 'styled-components';

const Section = styled.section `
    color: white;
    margin: 0 3%;
    position: absolute;
    top: 35%;
    font-size: 1.8vw;
    @media (max-width: 1000px) {
        top: 55%;
        font-size: 1.9vw;
    }
    @media (max-width: 800px) {
        top: 60%;
        font-size: 3.2vw;
        margin: 0 4em;
        text-align: center;
    }
`;

const Title = styled.h1 `
    font-size: 3em;
    margin: 0 0 0.2em;
    font-weight: 700;
`;

const Subtitle = styled.p `
    margin: 0 0 0.5em;
    font-weight: 300;
`;

const pitch = () => {
    return (
        <Section>
            <Title>What do tweets
                <br/>
                teach us about
                <br/>
                US immgration?</Title>
            <Subtitle>BIGOTRY STOPS HERE.</Subtitle>
        </Section>
    )
}

export default pitch;