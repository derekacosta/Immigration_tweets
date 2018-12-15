import React from 'react';

import styled from 'styled-components';

import CancelTab from './Cancel/Cancel';
import WatchTab from './Watch/Watch';
import PriceTab from './Price/Price';
import PipelineTab from './Pipeline/Pipeline';
import paper from './../../img/paper.png'
import twitter from './../../img/twitter.png'
import data from './../../img/data.png'
import pipe from './../../img/pipe.png'

const Feature = styled.div `
    background-color: #141414;
    border-bottom: 2px solid #3d3d3d;
        .featureNav {
            padding: 20px 0 0 0;
            width: 80%;
            cursor: pointer;
            margin: 0 auto;
            display: flex;
        }
        a {
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        color: #777;
        height: 125px;
        line-height: 20px;
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        &:hover {
            color: white;
            svg {
                fill: white;
            }
        }
        h2 {
            margin: 10px 0 0;
            font-size: 1em;
        }
        svg {
            fill: #777;
        }
        img {
            height: 50px;   
        }
        .selected {
            color: white;
            fill: white;
        }
    }
    @media (max-width: 900px) {
        svg {
            width: 100%;
            height: 34px;
        }
    }
`;

const Wrapper = styled.div `
    margin-bottom: 120px; 
`;

// Red Bottom Border on Selected Feature
const Selectedspan = styled.span `
    padding: 15px 0 0 0;
    display: block;
    border-bottom: 5px solid #e50914;
    @media (max-width: 900px) {
        padding: 30px 0 0 0;
    }
`;

class features extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
            cancelContent: false,
            watchContent: true,
            priceContent: true,
            pipeline: true
        }
    }
    
    toggleContent(e) {
        e.preventDefault();
        this.setState({cancelContent: false, watchContent: true, priceContent: true, pipeline: true})
    }
    toggleContent2(e) {
        e.preventDefault();
        this.setState({cancelContent: true, watchContent: false, priceContent: true, pipeline: true})
    }
    toggleContent3(e) {
        e.preventDefault();
        this.setState({cancelContent: true, watchContent: true, priceContent: false, pipeline: true})
    }
    toggleContent4(e) {
        e.preventDefault();
        this.setState({cancelContent: true, watchContent: true, priceContent: true, pipeline: false})
    }

    render() {

        const {cancelContent} = this.state;
        const {watchContent} = this.state;
        const {priceContent} = this.state;
        const {pipeline} = this.state;

        return (
            <Wrapper>
                <Feature>
                    <div className="featureNav">

                        <a onClick={(e) => this.toggleContent(e)}>
                            <img src={twitter} alt="twitter"/>

                            <h2
                                className={!cancelContent
                                ? 'selected'
                                : ''}>
                                Example Tweets
                            </h2>
                            {!this.state.cancelContent && <Selectedspan/>}
                        </a>

                        <a onClick={(e) => this.toggleContent2(e)}>
                            <img src={data} alt="data"/>

                            <h2
                                className={!watchContent
                                ? 'selected'
                                : ''}>
                                Anaylsis
                            </h2>
                            <br/> {!this.state.watchContent && <Selectedspan/>}
                        </a>

                        <a onClick={(e) => this.toggleContent3(e)}>
                            <img src={paper} alt="paper"/>
                            <h2
                                className={!priceContent
                                ? 'selected'
                                : ''}>
                                Sources
                            </h2>
                            <br/> {!this.state.priceContent && <Selectedspan/>}
                        </a>

                        <a onClick={(e) => this.toggleContent4(e)}>
                            <img src={pipe} alt="pipe"/>
                            <h2
                                className={!pipeline
                                ? 'selected'
                                : ''}>
                                Pipeline
                            </h2>
                            <br/> {!this.state.pipeline && <Selectedspan/>}
                        </a>

                    </div>
                </Feature>
                {!this.state.cancelContent && <CancelTab/>}
                {!this.state.watchContent && <WatchTab/>}
                {!this.state.priceContent && <PriceTab/>}
                {!this.state.pipeline && <PipelineTab/>}
            </Wrapper>

        );
    }
}

export default features;