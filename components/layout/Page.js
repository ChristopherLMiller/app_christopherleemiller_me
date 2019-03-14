import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Sidebar from './Sidebar';

const theme = {
  black: '#000000',
  grey: '#E9E9E9',
  white: '#FFFFFF',
  red: '#982929',
  red_transparent: 'rgba(152, 41, 41, 0.7)',

  small: '700px',
  med_small: '900px',
  med: '1000px',
  med_large: '1100px',
  large: '1200px',
};

const StyledPage = styled.div`
  color: ${props => props.theme.white};
  transition: all 0.5s;

  @media (min-width: ${props => props.theme.small}) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
  @media (min-width: ${props => props.theme.med_small}) {
    grid-template-columns: 350px 1fr;
  }
  @media (min-width: ${props => props.theme.med}) {
    grid-template-columns: 350px 1fr;
  }
  @media (min-width: ${props => props.theme.med_large}) {
    grid-template-columns: 400px 1fr;
  }
  @media (min-width: ${props => props.theme.large}) {
    grid-template-columns: 450px 1fr;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Oswald', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.15;
    background: url("https://res.cloudinary.com/christopherleemiller/image/upload/v1544460951/clm_me/assets/background.jpg")
    no-repeat center;
    background-attachment: fixed;
    background-size: cover;
  }
  a {
    text-decoration: none;
    color: ${theme.white};
  }
  main {
    flex-grow: 2;
  }
`;

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Sidebar />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
