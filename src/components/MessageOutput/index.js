import { Component } from 'react';
import Message from '../Message';
import './index.css';

class MessageOutput extends Component {
    render() {
        return (
            <div className='message-output'>
                <Message isMyMessage={true} />
                <Message isMyMessage={false} />
            </div>
        )
    }
}

export default MessageOutput;