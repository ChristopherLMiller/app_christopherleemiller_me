import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
} from './styles/Articles';

hljs.registerLanguage('javascript', javascript);

class Article extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    image: propTypes.string,
  };

  render() {
    return (
      <StyledArticle>
        <StyledArticleHeader>
          {this.props.image && (
            <StyledArticleHeaderImage
              src={this.props.image}
              alt={this.props.title}
            />
          )}
          <h2>{this.props.title}</h2>
        </StyledArticleHeader>
        <StyledArticleBody>
          <Markdown>{this.props.content}</Markdown>
        </StyledArticleBody>
      </StyledArticle>
    );
  }
}
export default Article;
