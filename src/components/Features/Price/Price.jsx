import React, { Component } from 'react';

import styled, {css} from 'styled-components';

import GoX from 'react-icons/lib/go/x';
import GoCheck from 'react-icons/lib/go/check';

const Wrapper = styled.section`
    width: 60%;
    padding-top: 20px;
    margin: 0 auto;
    margin-top: 2em;
`;

const DivWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 1200px) {
        text-align: center;
    }
`;

const H2 = styled.h2`
    width: 65%;
    font-size: 1.5em;
    color: white;
    font-weight: 200;
    padding: 0 10px;
    text-align: center;

    ${props => props.inline && css`
        display: inline-flex;
    `}
`;

const JoinButton4 = styled.button`
    font-size: 14px;
    letter-spacing: 1.9px;
    font-weight: 100;
    margin: 0.5em 0.5em 0.5em 1.7em;
    padding: 18px 20px;
    color: white;
    background-color: #e50914;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    font-family: Arial, sans-serif;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    border: 0;

    &:hover {
        background-color: #E53935;
    }

    ${props => props.narrow && css`
        flex: none;
    `}
`;

const Table = styled.table`
    width: 100%;
    color: white;
    font-weight: 200;
    fill: white;
    margin-top: 40px;
    border-collapse: collapse;
    thead {
        border-collapse: collapse;
        text-transform: uppercase;
        th {
            padding: 10px;
        }
    }
    tbody {
        border-collapse: collapse;
        color: #999;
        td {
            text-align: center;
            padding: 11px 20px;
            &:first-child {
                text-align: left;
            }
        }
        tr {
            &:nth-child(2n) {
                background-color: #222;
            }
        }
    }
    @media (max-width: 700px) {
        text-align: center;
        background-color: transparent;
        font-size: 12px;
        thead {
            th {
                text-align: center;
                width: 35%;
            }
        }
        tbody {
            td {
                text-align: center;
                padding: 1em 0;
                &:first-child {
                    text-align: center;
                }
            }
            tr {
                &:nth-child(2n) {
                    background-color: transparent;
                }
            }
        }
        .bold {
            padding: 5px 10px;
            font-size: 14px;
            font-weight: 700;
        }
    }
`;


const Price = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <p>Bonilla, Y. &amp; Rosa, J. (2015) #Ferguson: Digital protest, hashtag ethnography, and 
    the racial politics of social media in the United States. American Ethnologist, 42, 4–17.</p>
                </li>
                <li>
                    <p>Burnor, E. (2005). Under the Fence: US-Mexican Immigration Issues. Harvard International 
        Review, 27 (2), 8-9. </p>
                </li>  
                <li>
                    <p>Chiluwa, I. &amp; Ikufor, P. (2005). 'War against our Children': Stance and evaluation in 
        #BringBackOurGirls campaign discourse on Twitter and Facebook. Discourse and 
        Society, 26, 267–296.</p>
                </li>
                <li>
                    <p>Evans, H., Cordova, V., &amp; Sipole, S. (2014). Twitter Style: An Analysis of How House 
        Candidates Used Twitter in Their 2012 Campaigns. PS: Political Science and Politics, 
        47(2), 454-462. </p>
        
                </li>
                <li>
                    <p>Fuchs, C. (2018). Trumpology: Donald Trump’s Ideology. In Digital Demagogue:Authoritarian 
        Capitalism in the Age of Trump and Twitter (pp. 165-196). London: Pluto Press. 
    </p>
        
                </li>
                <li>
                    <p>Jiménez, T. (2007). Weighing the Costs and Benefits of Mexican Immigration: The 
        Mexican-American Perspective. Social Science Quarterly, 88(3), 599-618. </p>

                </li>
                <li>
                    <p>Prier, J. (2017). Commanding the Trend: Social Media as Information Warfare. Strategic Studies 
        Quarterly, 11(4), 50-85. </p>

                </li>

            </ul>
        </Wrapper>
    )
}

export default Price;