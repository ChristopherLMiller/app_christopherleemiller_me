import React from 'react';
import propTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
import hljs from 'highlight.js/';
// import 'highlight.js/styles/atom-one-dark.css';
import NextSEO from 'next-seo';
import CommentsList from '../CommentsList';
import { siteTitle, separator, siteURL, siteDefaultImage } from '../../config';

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
    // eslint-disable-next-line prefer-destructuring
    const article = this.props.article;

    let formattedDate = '';
    if (this.props.article.createdAt) {
      formattedDate = formatRelative(
        parseISO(this.props.article.createdAt),
        new Date()
      );
    }

    return (
      <>
        <NextSEO
          config={{
            title: `${siteTitle}${separator}${article.title}`,
            description: article.content_brief,
            openGraph: {
              title: `${siteTitle}${separator}${article.title}`,
              description: article.content_brief,
              url: `${siteURL}/post/${article.slug}`,
              image: article.featured_image
                ? article.featured_image
                : siteDefaultImage,
            },
          }}
        />
        <StyledArticle>
          <StyledArticleHeader>
            {article.featured_image && (
              <StyledArticleHeaderImage
                src={article.featured_image}
                alt={article.title}
              />
            )}
            <StyledArticleHeaderInfo>
              <h2>{article.title}</h2>
              {article.createdAt && (
                <p>
                  Published {formattedDate} by {article.user.username}
                </p>
              )}
            </StyledArticleHeaderInfo>
          </StyledArticleHeader>
          <StyledArticleBody>{this.props.children}</StyledArticleBody>
        </StyledArticle>

        {this.props.commentsEnabled && (
          <CommentsList comments={article.comments} />
        )}
      </>
    );
  }
}

export default FullArticle;
