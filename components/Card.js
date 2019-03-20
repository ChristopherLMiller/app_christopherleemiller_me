import React from 'react';
import propTypes from 'prop-types';
import { StyledCard, StyledCardBody } from './styles/Cards';

class Card extends React.Component {
  static propTypes = {
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node,
    ]).isRequired,
  };

  render() {
    return (
      <StyledCard>
        <StyledCardBody>{this.props.children}</StyledCardBody>
      </StyledCard>
    );
  }
}
export default Card;
