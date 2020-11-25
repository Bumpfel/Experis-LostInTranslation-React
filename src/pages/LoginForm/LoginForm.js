import { React, useState } from 'react';
import { login } from '../../utils/auth';

const LoginForm = (props) => {

    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const onLoginClick = async () => {
        setIsLoading(true);
        setLoginError('');
        let loginResult;

        try {
            loginResult = login(username);
        } catch (e) {
            setLoginError(e.message || e);
        } finally {
            setIsLoading(false);
            props.complete(loginResult || {});
        }
        
    }

    const onUsernameChanged = e => setUsername(e.target.value.trim());

    return (
        <form onSubmit={onLoginClick}>
            <div className="form-group">
                <label>Username: </label>
                <input className="form-control" type="text" autoComplete="off" placeholder="Enter username of choice to log in" onChange={onUsernameChanged} />
            </div>
            <div>
                <button className="btn btn-outline-secondary" type="submit">Login</button>
            </div>

            { isLoading && <p>Logging in...</p>}
            { loginError && <p>{loginError}</p>}

        </form>
    )
}

export default LoginForm;
