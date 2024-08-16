import Message from '../Message';
import './index.css';

const MessageOutput = (props) => {
    const { messages, user } = props;
    
    return (
        <div className='message-output'>
            {messages.map((msg, index) => (
                <Message key={index} isMyMessage={msg.from === user.nick} msg={msg.content} />
            ))}
        </div>
    )
}

export default MessageOutput;