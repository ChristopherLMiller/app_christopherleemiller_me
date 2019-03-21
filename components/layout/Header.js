import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import propTypes from 'prop-types';

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
  background: ${props => props.theme.red_transparent};
  padding: 50px 30px;
`;

const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const StyledHeaderDescription = styled.p`
  font-size: 1.25em;
`;

class Header extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  };

  render() {
    return (
      <StyledHeader>
        <StyledHeaderTitle>{this.props.title}</StyledHeaderTitle>
        <StyledHeaderDescription>
          {this.props.description}
        </StyledHeaderDescription>
      </StyledHeader>
    );
  }
}

export default Header;
