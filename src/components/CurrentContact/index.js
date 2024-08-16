import CurrentStatus from "../CurrentStatus";
import './index.css';

const CurrentContact = (props) => {
    const { contact } = props;

    return (
        <div className="current-contact">
            <div className='current-user-name'>To: {contact}</div>
            <CurrentStatus/>
        </div>
    )
}

export default CurrentContact;