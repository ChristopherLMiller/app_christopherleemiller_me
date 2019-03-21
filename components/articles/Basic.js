import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import markdown from 'highlight.js/lib/languages/markdown';
import {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
} from '../styles/Articles';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('markdown', markdown);

class BasicArticle extends React.Component {
  static propTypes = {
    title: propTypes.string,
    content: propTypes.string.isRequired,
    image: propTypes.string,
  };

  componentDidMount() {
    hljs.initHighlighting();
  }

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
          <StyledArticleHeaderInfo>
            <h2>{this.props.title}</h2>
          </StyledArticleHeaderInfo>
        </StyledArticleHeader>
        <StyledArticleBody>
          <Markdown>{this.props.content}</Markdown>
        </StyledArticleBody>
      </StyledArticle>
    );
  }
}

export default BasicArticle;
