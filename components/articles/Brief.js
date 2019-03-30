import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
import hljs from 'highlight.js';

import CommentCount from './CommentCount';
import Categories from './Categories';
import Tags from './Tags';

import {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
  StyledArticleFooter,
  StyledReadMore,
} from '../styles/Articles';

class BriefArticle extends React.Component {
  static propTypes = {
    article: propTypes.object.isRequired,
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
                Published {formattedDate} by {this.props.article.user.username}
              </p>
            )}
          </StyledArticleHeaderInfo>
        </StyledArticleHeader>
        <StyledArticleBody>
          {this.props.children}
          <CommentCount comments={this.props.article.comments} />
          <StyledReadMore>
            <Link
              as={`/post/${this.props.article.slug}`}
              href={`/post?slug=${this.props.article.slug}`}
            >
              <a>Read More</a>
            </Link>
          </StyledReadMore>
        </StyledArticleBody>
        <StyledArticleFooter>
          <Categories categories={this.props.article.categories} />
          <Tags tags={this.props.article.tags} />
        </StyledArticleFooter>
      </StyledArticle>
    );
  }
}

export default BriefArticle;
