import './App.css';
import User from '../User';
import CurrentContact from '../CurrentContact';
import ContactList from '../ContactList';
import MessageOutput from '../MessageOutput';
import MessageInput from '../MessageInput';

function App() {
  return (
    <div id="container">
      <div id="panels">
        <div id="left-panel-header" className="header">
          <User/>
        </div>
        <div id="right-panel-header" className="header">
          <CurrentContact/>
        </div>
        <div id="left-panel">
          <ContactList/>
        </div>
        <div id="right-panel">
          <MessageOutput /> 
          <MessageInput />
        </div>
      </div>
    </div>
  );
}

export default App;
