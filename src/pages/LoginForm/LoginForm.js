import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../utils/auth';

const LoginForm = (props) => {

    const [username, setUsername] = useState('');
    const [loginError, setLoginError] = useState('');

    const redirect = useHistory('');

    const onUserSubmit = () => {
        setLoginError('');
        let loginResult;

        try {
            loginResult = login(username);
        } catch (e) {
            setLoginError(e.message || e);
        } finally {
            props.complete(loginResult || {});
            redirect.replace("/profile");
        }
        
    }

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

    return (
        <form onSubmit={onUserSubmit}>
            <div className="form-group">
                <label>Username: </label>
                <input className="form-control" type="text" autoComplete="off" placeholder="Enter username of choice to log in" onChange={onUsernameChanged} />
            </div>
            <div>
                <button className="btn btn-outline-secondary" type="button" onClick={onUserSubmit}>Login</button>
            </div>

            { loginError && <p>{loginError}</p>}

        </form>
    )
}

export default LoginForm;
