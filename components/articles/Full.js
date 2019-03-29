import React from 'react';
import propTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import markdown from 'highlight.js/lib/languages/markdown';

import CommentsList from '../CommentsList';

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

class FullArticle extends React.Component {
  static propTypes = {
    article: propTypes.object,
    children: propTypes.object,
  };

  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    let formattedDate = '';
    if (this.props.article.createdAt) {
      formattedDate = formatRelative(
        parseISO(this.props.article.createdAt),
        new Date()
      );
    }

    return (
      <>
        <StyledArticle>
          <StyledArticleHeader>
            {this.props.article.featured_image && (
              <StyledArticleHeaderImage
                src={this.props.article.featured_image}
                alt={this.props.article.title}
              />
            )}
            <StyledArticleHeaderInfo>
              <h2>{this.props.article.title}</h2>
              {this.props.article.createdAt && (
                <p>
                  Published {formattedDate} by{' '}
                  {this.props.article.user.username}
                </p>
              )}
            </StyledArticleHeaderInfo>
          </StyledArticleHeader>
          <StyledArticleBody>{this.props.children}</StyledArticleBody>
        </StyledArticle>
        <CommentsList comments={this.props.article.comments} />
      </>
    );
  }
}

export default FullArticle;
