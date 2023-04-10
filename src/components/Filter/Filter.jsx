import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, filtered } = this.props;
    const id = nanoid();

    return (
      <div>
        <p className={css.filter} htmlFor={id}>
          Find contacts by name
        </p>
        <input
          className={css.input}
          type="search"
          value={value}
          id={id}
          onChange={filtered}
        ></input>
      </div>
    );
  }
}

Filter.propTypes = {
  filtered: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
