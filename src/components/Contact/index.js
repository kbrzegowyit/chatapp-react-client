import { Component } from "react";
import './index.css';
import CurrentStatus from "../CurrentStatus";

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='contact-name'>
                    { this.props.name }
                </div>
                <CurrentStatus />
            </div>
        )
    }
}

export default Contact;