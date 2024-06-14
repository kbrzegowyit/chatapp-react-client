import { Component } from 'react';
import Contact from '../Contact';

class ContactList extends Component {
    contacts = [{
        name: 'Mark Smith'
    },
    {
        name: 'Frank Boss'
    }];

    render() {
        return (
            <div id='contact-list'>
                {this.contacts.map(contact => <Contact name={contact.name} />)}
            </div>
        )
    }
}

export default ContactList;