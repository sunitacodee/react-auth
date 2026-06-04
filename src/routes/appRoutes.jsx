import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Profile from '../pages/profile'
import Login from '../pages/login'
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' Component={Dashboard} />
                <Route path='/dashboard' Component={Dashboard} />

                <Route path='/profile' Component={Profile} />

                <Route path='/login' Component={Login} />

            </Routes>
        </>
    )
}

export default AppRoutes
