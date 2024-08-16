import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import "./style.css";

const Register = () => {
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleNick = (event) => {
        const { value } = event.target;
        setNick(value);
    }

    const handlePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const handleConfirmPassword = (event) => {
        const { value } = event.target;
        setConfirmPassword(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nick: nick,
                    password: password,
                    confirmPassword: confirmPassword,
                })
            });

            const data = await res.json();

            if (res.status === 200) {
                login(data.token);
                navigate('/');
            } else {
                setError(data.errorMessage);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="register-container">
            <form className="register-form">
               <h2>Register</h2> 
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
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleConfirmPassword} required />
                </div>
               <div className="form-group">
                    <button onClick={handleSubmit}>Register</button>
                </div>
                <div className="register-link">
                    <p>I have an account <Link to='/login'>Login here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register;