import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  h1 {
    background: ${props => props.theme.red_transparent};
    margin: 0;
    padding: 50px 30px;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h1>{this.props.title}</h1>
      </StyledHeader>
    );
  }
}

export default Header;
