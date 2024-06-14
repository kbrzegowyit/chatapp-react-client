import { Component } from "react";
import './index.css';
import CurrentStatus from "../CurrentStatus";

class CurrentContact extends Component {
    render () {
        return (
            <div className="current-contact">
                <div className='current-user-name'>
                    To: John Doe
                </div>
                <CurrentStatus/>
            </div>
        )
    }
}

export default CurrentContact;