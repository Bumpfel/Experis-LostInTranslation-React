import React from 'react'
import { Redirect, Route } from 'react-router'
import TopMenu from './TopMenu'

const GuardedRoute = props => {
    const { component: GuardedComponent, path, exact, allow, redirectTo, ...componentProps } = props // destructure properties

    return (
        <Route path={path} {...exact}>
            <TopMenu />
            <div className='container mt-3 mb-2'>
                {
                    allow()
                    ? <GuardedComponent {...componentProps} />
                    : <Redirect to={redirectTo} />
                }
            </div>
        </Route>
    )
}
export default GuardedRoute