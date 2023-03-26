import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <div>
        <Filter />
        <ul>
          <li className={css.element}>
            {name}Asia: 112233{number}{' '}
            <button className={css.btn} type="button">
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
