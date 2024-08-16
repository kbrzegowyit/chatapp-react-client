import CurrentStatus from '../CurrentStatus';
import './index.css';

const User = (props) => {
    const { user } = props;

    return (
        <div className="user">
            <div className='user-name'>
                { user.nick }
            </div>
            <CurrentStatus/>
        </div>
    )
}

export default User;