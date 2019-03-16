import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledCardHeaderImage,
} from '../styles/Cards';

class MarkdownCard extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
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
        <StyledCardBody>
          <Markdown>{this.props.content}</Markdown>
        </StyledCardBody>
      </StyledCard>
    );
  }
}
export default MarkdownCard;
