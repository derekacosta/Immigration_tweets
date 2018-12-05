import React, { Component } from 'react';

import styled, {css} from 'styled-components';
import TweetEmbed from 'react-tweet-embed';
import GoX from 'react-icons/lib/go/x';
import GoCheck from 'react-icons/lib/go/check';
import pipeline from './../../../img/pipeline.svg'


const Wrapper = styled.section`
    width: 50%;
    display: inline;   
    margin-left: 120px;
    
`;


const Wrapper2 = styled.section`
        display: inline;
        margin: 0 auto;
  float: right;
  margin-right:40px;
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

const ids = ['591308288739962881', '676030743609520128', '713012045214531584', '713807872388440069', '746415333741756418', '618519604109910016', '626063571294789632', '635971671388758016', '652640965543469056', '656278153455935489', '686714833031409664', '689460736150536193', '702663500171071488', '707785411574276096', '710618609026863104', '755254730301906944', '763539571564908544', '768637302096572417', '771533273470111744', '794948357718278146', '798804047130218497', '829814635125628928', '836972674878353409', '630076278956273666', '771173941150822400', '684102835567497216', '689457750917550082', '818873124951379969', '835226570340061184', '662592633173377024', '674299165229363200', '697776029683863553', '709130908532666368', '768823065010634752', '627979709117239298', '813901237015969793',"839711534544740353","839978595753873409","839827612331569152", "839744761661538304","839990867419095040","840204477701468162","840193824613912576","840146020390453248","840123660048388097","840171492767911936", "840106670445404160","840523476628824064", "840469290268688384","840489058866458624", "840380895714508800", "840481156067971072"]
let choice1 = ids[Math.floor(Math.random() * ids.length)];

class Pipeline extends React.Component {
    
    constructor(props) {
        super(props);
        let comments = JSON.parse(localStorage.getItem('data'));
        this.state = {
            value: 'Please help us dissect some other tweets so that our model can learn!',
            comments: comments,
            choice: ids[Math.floor(Math.random() * ids.length)] 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    Tweet(choice){
        return <TweetEmbed id={choice} options={{ theme: 'dark', cards: 'hidden' }} /> 
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let choice = ids[Math.floor(Math.random() * ids.length)];
        localStorage.setItem('data', ...JSON.stringify(this.state.value));
        this.setState({ value: this.element.value, choice: choice });
        alert("Thank you answer has been stored")
    }

    render () {return (
        <div>
            <Wrapper>
            <img src={pipeline} />
        </Wrapper>
        <Wrapper2>
                <div>
                    {this.Tweet(this.state.choice)}
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <textarea type="text" ref={el => this.element = el} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <p>{this.state.value}</p>
                    <br/>
                    <p>Previously Answered: </p>
                    <p>{this.state.comments}</p>
                </div>
        </Wrapper2>
        </div>
    );        
    }
}

export default Pipeline;
