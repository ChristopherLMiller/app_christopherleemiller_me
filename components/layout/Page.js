import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Meta from './Meta';
import Sidebar from './Sidebar';
import { theme } from '../styles/Themes';

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

const GlobalStyle = createGlobalStyle`
  ${reset}

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
    padding: 20px;

    @media screen and (min-width: ${props => props.theme.small}) {
      padding: 30px;
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
          <GlobalStyle />
          <Meta />
          <Sidebar />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
