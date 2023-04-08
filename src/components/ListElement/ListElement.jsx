import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ListElement.module.css';

class ListElement extends Component {
  render() {
    const { contacts, removeContact } = this.props;
    return contacts.map(({ id, name, number }) => (
      <li className={css.element}>
        {name}: {number}
        <button
          className={css.btn}
          type="button"
          key={id}
          onClick={removeContact(id)}
        >
          Delete
        </button>
      </li>
    ));
  }
}

ListElement.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};

export default ListElement;
