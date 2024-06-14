import { Component } from "react";
import './index.css';

class Message extends Component {
    render() {
        const { isMyMessage } = this.props;
        return (
            <div className={`message  ${isMyMessage ? "user-message" : "contact-message"}`}>
                <p className="message-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non urna urna. Phasellus eget justo sollicitudin, pulvinar orci vel, commodo tortor. Nulla facilisi.</p>
                <span className="message-date">22.05.2024 22:12</span>
            </div>
        )
    }
}

export default Message;