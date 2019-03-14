import styled from 'styled-components';
import React from 'react';

const StyledMenuText = styled.button`
  font-size: 1.25em;
  text-transform: uppercase;
  border: 2px solid ${props => props.theme.red};
  position: fixed;
  padding: 15px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  z-index: 20;

  @media screen and (min-width: ${props => props.theme.small}) {
    display: none;
  }
`;

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () =>
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));

  render() {
    return (
      <StyledMenuText isOpen={this.state.isOpen} onCLick={this.handleClick}>
        Menu
      </StyledMenuText>
    );
  }
}

export default Hamburger;
