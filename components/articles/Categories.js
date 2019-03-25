import React from 'react';
import propTypes from 'prop-types';

class Categories extends React.Component {
  static propTypes = {
    categories: propTypes.array,
  };

  render() {
    if (this.props.categories && this.props.categories.length > 0) {
      return (
        <div>
          <span>Categories: </span>
          {this.props.categories.map(category => (
            <a key={category.title}>{category.title}</a>
          ))}
        </div>
      );
    }

    return (
      <div>
        <span>Categories: None</span>
      </div>
    );
  }
}

export default Categories;
