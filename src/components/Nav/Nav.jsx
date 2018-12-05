import React from 'react';

import styled from 'styled-components';

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