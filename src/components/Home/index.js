import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import User from '../User';
import CurrentContact from '../CurrentContact';
import ContactList from '../ContactList';
import MessageOutput from '../MessageOutput';
import MessageInput from '../MessageInput';
import { useAuth } from '../AuthProvider';
import './index.css';

const Home = () => {
  const [contactsList, setContactsList] = useState([]);
  const [user, setUser] = useState({ nick: null });
  const [currentContact, setCurrentContact] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const { getToken, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    const socket = io("http://localhost:3001/chat-notifications", { auth: { token} });
    
    setSocket(socket);

    const handleConnected = (userNick) => {
      setUser({ nick: userNick });
    }

    const handleContactsList = (contacts) => {
      setContactsList(contacts);
      setCurrentContact(contacts[0]);
    }

    const handleChatMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    }

    const handleConnectError = (error) => {
      try {
        logout();
        navigate('/login');
      } catch (error) {
        console.log('Error logging out: ', error.message) 
      }
    }

    socket.on('connected', handleConnected);
    socket.on('contacts-list', handleContactsList);
    socket.on('chat-message', handleChatMessage);
    socket.on('connect_error', handleConnectError);

    return () => {
      socket.off('connected', handleConnected);
      socket.off('contacts-list', handleContactsList);
      socket.off('chat-message', handleChatMessage);
      socket.off('connect_error', handleConnectError);
      socket.disconnect();
    }
  }, [navigate, getToken, logout]);

  return (
    <div id="container">
      <div id="panels">
        <div id="left-panel-header" className="header">
          <User user={user} />
        </div>
        <div id="right-panel-header" className="header">
          <CurrentContact contact={currentContact} />
        </div>
        <div id="left-panel">
          <ContactList contacts={contactsList} setCurrentContact={setCurrentContact} setMessages={setMessages} />
        </div>
        <div id="right-panel">
          <MessageOutput messages={messages} user={user} />
          <MessageInput user={user} currentContact={currentContact} setMessages={setMessages} socket={socket} />
        </div>
      </div>
    </div>
  );
}

export default Home;