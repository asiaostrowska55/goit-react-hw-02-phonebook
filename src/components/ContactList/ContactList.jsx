import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <ul>{children}</ul>
      </>
    );
  }
}
