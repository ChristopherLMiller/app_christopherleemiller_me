import React from 'react';
import propTypes from 'prop-types';

class Tags extends React.Component {
  static propTypes = {
    tags: propTypes.array,
  };

  render() {
    if (this.props.tags && this.props.tags.length > 0) {
      return (
        <div>
          <span>Tags: </span>
          {this.props.tags.map(tag => (
            <a key={tag.title}>{tag.title}</a>
          ))}
        </div>
      );
    }

    return (
      <div>
        <span>Tags: None</span>
      </div>
    );
  }
}

export default Tags;
