import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    const { onChange } = this.props;
    const id = nanoid();

    return (
      <div>
        <p className={css.filter} htmlFor={id}>
          Find contacts by name
        </p>
        <input className={css.input} type="search" onChange={onChange}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
