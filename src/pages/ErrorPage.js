import React from 'react'

const ErrorPage = (props) => {

    return (
    <div className="container mt-4">
        <h1>{props.header}</h1>
        <p>{props.message}</p>

        <button className="btn btn-link p-0" onClick={() => window.history.back()}>Go Back</button>
    </div>
    )
}
export default ErrorPage