import { Component } from 'react';
import './index.css';
import CurrentStatus from '../CurrentStatus';

class User extends Component {
    render() {
        return (
            <div className="user">
                <div className='user-name'>
                    John Doe
                </div>
                <CurrentStatus/>
            </div>
        )
    }
}

export default User;