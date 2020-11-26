import { React, useState } from 'react';
import { login } from '../utils/auth';

const LoginPage = (props) => {

    const [username, setUsername] = useState('');
    const [loginError, setLoginError] = useState('');

    const onUserSubmit = () => {
        setLoginError('');

        try {
            login(username);
        } catch (e) {
            setLoginError(e.message || e);
        } finally {
        }

    }

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

    const inputStyle = {
        width: '275px'
    }

    return (
        <form onSubmit={onUserSubmit}>
            <div className="form-group">
                <label>Username: </label>
                <input className="form-control" type="text" autoComplete="off" placeholder="Enter username of choice to log in" style={inputStyle} onChange={onUsernameChanged} />
            </div>
            <div>
                <button className="btn btn-outline-secondary">Login</button>
            </div>

            { loginError && <p>{loginError}</p>}

        </form>
    )
}

export default LoginPage;
