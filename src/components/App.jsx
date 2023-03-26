import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ListElement from './ListElement/ListElement';
import Filter from './Filter/Filter';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

// feedback
// 1. https://github.com/asiaostrowska55/goit-react-hw-02-feedback
// 2. https://asiaostrowska55.github.io/goit-react-hw-02-feedback/

// phonebook
// 1.https://github.com/asiaostrowska55/goit-react-hw-02-phonebook
// 2.https://asiaostrowska55.github.io/goit-react-hw-02-phonebook/
