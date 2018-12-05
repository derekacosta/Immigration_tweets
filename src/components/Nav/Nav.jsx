import React from 'react';

import styled, { css } from 'styled-components';

import netflixlogo from './../../img/logo.svg';

const Nav = styled.nav`
    height: 90px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* Netflix logo */
    img {
        // width: 250px;
        height : 150px;
        // max-height: 150px;
        vertical-align: middle;
    }
    .logo {
        display: inline-block;
        line-height: 90px;
        margin: 5% 0 0 3%;
    }
`;

const Button = styled.button`
    color: white;
    cursor: pointer;
    background-color: #e50914;
    line-height: normal;
    margin: 18px 3% 0 0;
    padding: 7px 17px;
    font-weight: 100;
    border: transparent;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: one;

    ${props => props.right && css`
        float: right;
    `}
    &:hover {
        background-color: #E53935;
    }
`;

const nav = () => {
    return (
      <Nav>
        <a href={"/"} className="logo">
            <img src={netflixlogo} alt="Netflix Logo" />
        </a>
      </Nav>
    )
}

export default nav;