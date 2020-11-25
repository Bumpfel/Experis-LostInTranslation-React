import React from 'react'
import { Redirect, Route } from 'react-router'

const GuardedRoute = props => {
    const { component: GuardedComponent, path, exact, allow, redirectTo, ...componentProps } = props // destructure properties

    return (
        <Route path={path} exact={exact}>
            {
                allow
                ? <GuardedComponent {...componentProps} />
                : <Redirect to={redirectTo} />
            }
        </Route>
    )
}
export default GuardedRoute