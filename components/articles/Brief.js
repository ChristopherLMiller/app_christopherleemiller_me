import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import markdown from 'highlight.js/lib/languages/markdown';

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
} from '../styles/Articles';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('markdown', markdown);

class BriefArticle extends React.Component {
  static propTypes = {
    title: propTypes.string,
    children: propTypes.object,
    user: propTypes.string.isRequired,
    createdAt: propTypes.string,
    image: propTypes.string,
    categories: propTypes.array,
    tags: propTypes.array,
    comments: propTypes.array,
    slug: propTypes.string,
  };

  render() {
    let formattedDate = '';
    if (this.props.createdAt) {
      formattedDate = formatRelative(
        parseISO(this.props.createdAt),
        new Date()
      );
    }

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
            {this.props.createdAt && (
              <p>
                Published {formattedDate} by {this.props.user}
              </p>
            )}
          </StyledArticleHeaderInfo>
        </StyledArticleHeader>
        <StyledArticleBody>
          {this.props.children}
          <Link href={`/archive/${this.props.slug}`}>
            <a>Read More &gt;</a>
          </Link>
          <CommentCount comments={this.props.comments} />
        </StyledArticleBody>
        <StyledArticleFooter>
          <Categories categories={this.props.categories} />
          <Tags tags={this.props.tags} />
        </StyledArticleFooter>
      </StyledArticle>
    );
  }
}

export default BriefArticle;
