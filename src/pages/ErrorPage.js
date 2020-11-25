import React from 'react'

const ErrorPage = (props) => (
    <React.Fragment>
        <h1>{props.header}</h1>
        <p>{props.message}</p>
    </React.Fragment>
)
export default ErrorPage