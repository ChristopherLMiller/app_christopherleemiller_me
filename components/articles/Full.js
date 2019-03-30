import React from 'react';
import propTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
import hljs from 'highlight.js/';
import 'highlight.js/styles/atom-one-dark.css';
import CommentsList from '../CommentsList';

import {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
} from '../styles/Articles';

class FullArticle extends React.Component {
  static propTypes = {
    article: propTypes.object,
    children: propTypes.object,
    commentsEnabled: propTypes.bool,
  };

  static defaultProps = {
    commentsEnabled: true,
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

        {this.props.commentsEnabled && (
          <CommentsList comments={this.props.article.comments} />
        )}
      </>
    );
  }
}

export default FullArticle;
