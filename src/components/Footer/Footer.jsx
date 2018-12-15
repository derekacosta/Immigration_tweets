import React from 'react';
import styled, {css} from 'styled-components';

const Footer = styled.footer `
    margin: 0 auto;
    width: 70%;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const Text = styled.p `
    color: #777;
    font-weight: 30;
    margin: 5px 0 30px;

    ${props => props.small && css `
        font-size: 13px;
    `}
`;

const MainList = styled.ul `
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    font-weight: 50;
    li {
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        /* is 25 */
        flex: none;
        width: 25%;
        /* Styles */
        list-style: none;
        margin: 0 0 16px;
        padding-right: 12px;
        min-width: 100px;
        font-size: 13px;

        a {
            text-decoration: none;
            span {
                color: #777;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const footer = () => {
    return (
        <Footer>
            <Text>Questions? Contact us.</Text>
            <MainList>
                <li>
                    <a href="https://github.com/derekacosta/Immigration_tweets">
                        <span>Github</span>
                    </a>
                </li>
                <li></li>
            </MainList>
            <br/>
            <Text small>a DEKY production</Text>
        </Footer>
    )
}

export default footer;