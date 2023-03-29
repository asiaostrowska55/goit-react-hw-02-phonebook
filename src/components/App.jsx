import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ListElement from './ListElement/ListElement';
import Filter from './Filter/Filter';

export class App extends Component {
  STORAGE_KEY = 'phonebook';
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.state.contacts) {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addNewContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  filter = el => {
    this.setState({
      filter: el.currentTarget.value,
    });
  };

  filterName = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filterName();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addNewContact}
        />

        <h2>Contacts</h2>
        <Filter onChange={this.filter} filterContacts={this.filterName} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        >
          {/* <ListElement /> */}
        </ContactList>
      </div>
    );
  }
}
