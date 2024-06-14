import { Component } from 'react';
import './index.css';

class MessageInput extends Component {
    render () {
        return (
          <div className="message-input">
            <textarea placeholder="Type something..."></textarea>
          </div>
        )
    }
}

export default MessageInput;