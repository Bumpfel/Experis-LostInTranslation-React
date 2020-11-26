import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../utils/auth';

const LoginPage = (props) => {

    const [username, setUsername] = useState('');
    const [loginError, setLoginError] = useState('');

    const history = useHistory()

    const onUserSubmit = e => {
        e.preventDefault()
        if(username.trim().length <= 1) {
            setLoginError('You username must be at least 2 characters long')
        } else {
            login(username);
            history.replace('/')
        }
    }

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

    const inputStyle = {
        width: '275px'
    }

    return (
        <form onSubmit={onUserSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <input className="form-control" type="text" autoComplete="off" placeholder="Enter username of choice to log in" style={inputStyle} onChange={onUsernameChanged} />
                { loginError && <small style={{ color: 'red' }}>{loginError}</small>}
            </div>
            <div>
                <button className="btn btn-outline-secondary">Login</button>
            </div>
        </form>
    )
}

export default LoginPage;
