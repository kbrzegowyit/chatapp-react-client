import './index.css';

const Message = (props) => {
    const { isMyMessage, msg } = props;
    return (
        <div className={`message ${isMyMessage ? "user-message" : "contact-message"}`}>
            <p className="message-text">{msg}</p>
            <span className="message-date">{(new Date()).toLocaleDateString()}</span>
        </div>
    )
}

export default Message;