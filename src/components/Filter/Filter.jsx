import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <p className={css.filter}>Find contacts by name</p>
        <input className={css.input} type="text" name="name"></input>
      </div>
    );
  }
}
