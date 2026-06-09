import React from 'react'

import { Route, Routes,useNavigate  } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Profile from '../pages/profile'
import Login from '../pages/login'
import { NotFoundPage } from '../pages/notFound'
import PublicLayout from '../layouts/publicLayout'
import AuthLayout from '../layouts/AuthLayout'
import { useAuth } from '../context/AuthContext'
const AppRoutes = () => {

  const auth = useAuth();
  const navigate = useNavigate()

    const { user } = auth;
    console.log("user get:", user);

if (!auth || !user) {
  navigate('/login')
}
    return (
        <>
            <Routes>
/**public routes here */
                <Route element={<PublicLayout />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' Component={Login} />
                     
                </Route>

                /** authenticated routes here */
                <Route element={<AuthLayout />}>
                    <Route path='/' Component={Dashboard} />
                    <Route path='/dashboard' Component={Dashboard} />

                    <Route path='/profile' Component={Profile} />

                    <Route path='/login' Component={Login} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
