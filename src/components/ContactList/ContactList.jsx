import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <ul className={css.listItem}>{children}</ul>
      </>
    );
  }
}
ContactList.propTypes = {
  children: PropTypes.node,
};
export default ContactList;
