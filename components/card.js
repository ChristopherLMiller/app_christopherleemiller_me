import styled from 'styled-components';
import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const StyledCard = styled.div`
  background: ${props => props.theme.grey};
  padding: 30px;
  margin-bottom: 50px;
  color: black;
  font-family: 'Special Elite', sans-serif;
`;

class Card extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
  };

  render() {
    return (
      <StyledCard>
        <h2>{this.props.title}</h2>
        <Markdown>{this.props.content}</Markdown>
      </StyledCard>
    );
  }
}
export default Card;
