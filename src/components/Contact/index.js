import CurrentStatus from "../CurrentStatus";
import './index.css';

const Contact = (props) => {
    const { name, setCurrentContact, setMessages } = props;
    const changeCurrentContact = () => {
        setCurrentContact(props.name);
        setMessages([]);
    }
    return (
        <div className='contact' onClick={changeCurrentContact} >
            <div className='contact-name'>{ name }</div>
            <CurrentStatus />
        </div>
    )
}

export default Contact;