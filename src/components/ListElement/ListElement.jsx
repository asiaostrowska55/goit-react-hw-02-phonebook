import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ListElement.module.css';

export default class ListElement extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return contacts.map(({ id, name, number }) => (
      <li className={css.element}>
        {name}: {number}
        <button
          className={css.btn}
          type="button"
          key={id}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ));
  }
}

ListElement.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
