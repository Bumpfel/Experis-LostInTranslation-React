import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = (props) => (
    <div className="container mt-4">
        <h1>{props.header}</h1>
        <p>{props.message}</p>

        <Link to="/">Go Back</Link>
    </div>
)
export default ErrorPage