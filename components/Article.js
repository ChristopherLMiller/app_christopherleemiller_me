import React from 'react';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import formatRelative from 'date-fns/formatRelative';
import parseISO from 'date-fns/parseISO';
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
  StyledArticleFooter,
} from './styles/Articles';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('markdown', markdown);

class Article extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    image: propTypes.string,
    categories: propTypes.array,
    tags: propTypes.array,
  };

  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    const formattedDate = formatRelative(
      parseISO(this.props.createdAt),
      new Date()
    );

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
            <p>
              Published {formattedDate} by {this.props.user}
            </p>
          </StyledArticleHeaderInfo>
        </StyledArticleHeader>
        <StyledArticleBody>
          <Markdown>{this.props.content}</Markdown>
        </StyledArticleBody>
        <StyledArticleFooter>
          <Categories categories={this.props.categories} />
          <Tags tags={this.props.tags} />
        </StyledArticleFooter>
      </StyledArticle>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class Categories extends React.Component {
  static propTypes = {
    categories: propTypes.array,
  };

  render() {
    return (
      <div>
        <span>Categories: </span>
        {this.props.categories.map(category => (
          <a key={category.title}>{category.title}</a>
        ))}
      </div>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class Tags extends React.Component {
  static propTypes = {
    tags: propTypes.array,
  };

  render() {
    return (
      <div>
        <span>Tags: </span>
        {this.props.tags.map(tag => (
          <a key={tag.title}>{tag.title}</a>
        ))}
      </div>
    );
  }
}

export default Article;
