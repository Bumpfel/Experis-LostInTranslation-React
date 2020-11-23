import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = { }
    }

    componentDidMount() {
    }

    render() {
        return (
        <form onSubmit={() => console.log('log in attempt')} >
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" type="text" id="username" autoComplete="off" placeholder="Enter username of choice to log in" />
            </div>
            <button className="btn btn-outline-secondary">Log in</button>
        </form>
        )
    }
}