import { Component } from 'react';
import './index.css';

class CurrentStatus extends Component {
    render() {
        return (
            <div className='current-status'>
                <span className='current-status-text'>active</span>
                <span className='current-status-dot'></span>
            </div>
        )
    }
}

export default CurrentStatus;