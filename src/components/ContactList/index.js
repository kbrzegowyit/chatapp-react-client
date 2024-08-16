import Contact from '../Contact';

const ContactList = (props) => {
    const { contacts, setCurrentContact, setMessages } = props;
    return (
        <div id='contact-list'>
            {contacts.map(contact => <Contact name={contact} key={contact} setCurrentContact={setCurrentContact} setMessages={setMessages} />)}
        </div>
    )
}

export default ContactList;