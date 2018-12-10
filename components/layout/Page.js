import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Meta from "./Meta";

const theme = {
  black: "#E9E9E9",
  white: "#FFFFFF",
  red: "#982929"
};

const StyledPage = styled.div`
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Inner = styled.div`
  grid-column: 2 / 5;
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
`;

export default class Page extends Component {
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
