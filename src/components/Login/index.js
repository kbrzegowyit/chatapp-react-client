import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import './style.css';

const Login = () => {
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
   
    const handlePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const handleNick = (event) => {
        const { value } = event.target;
        setNick(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res =  await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nick: nick,
                    password: password,
                }),
            });

            const data = await res.json();

            if (res.status === 200) {
                login(data.token);
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <div className="login-container">
            <form className="login-form">
               <h2>Login</h2> 
               { error && <div className="error-message">{error}</div> }
               <div className="form-group">
                    <label htmlFor="nick">Nick</label>
                    <input type="text" id="nick" name="nick" onChange={handleNick} required />
               </div>
               <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handlePassword} required />
                </div>
               <div className="form-group">
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div className="register-link">
                    <p>Don't have an account? <Link to='/register'>Register here</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;