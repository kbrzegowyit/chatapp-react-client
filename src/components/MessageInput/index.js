import { useState } from 'react';
import './index.css';

const MessageInput = ({ user, currentContact, setMessages, socket }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  
  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  }

  const sendMessage = (event) => {
    event.preventDefault();
    if(!currentMessage.trim()) return;

    socket.emit('chat-message', {
      message: currentMessage,
      to: currentContact,
      from: user.nick
    });

    setMessages((prevMessages) => {
      return [...prevMessages, { from: user.nick, content: currentMessage }]
    });
    
    setCurrentMessage('');
  }
  return (
    <div className="message-input">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={currentMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
      </form>
    </div>
  )
}

export default MessageInput;