import React from 'react';
import propTypes from 'prop-types';
import {
  StyledCard,
  StyledCardHeader,
  StyledCardHeaderImage,
  StyledCardBody,
} from '../styles/Cards';

class Card extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node,
    ]).isRequired,
    image: propTypes.string,
  };

  render() {
    return (
      <StyledCard>
        <StyledCardHeader>
          {this.props.image && (
            <StyledCardHeaderImage
              src={this.props.image}
              alt={this.props.title}
            />
          )}
          <h2>{this.props.title}</h2>
        </StyledCardHeader>
        <StyledCardBody>{this.props.children}</StyledCardBody>
      </StyledCard>
    );
  }
}
export default Card;
