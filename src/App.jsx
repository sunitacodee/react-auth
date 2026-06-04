import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import AppRoutes from './routes/appRoutes'

function App() {

  return (
    <>
    <AppRoutes/>
    </>
  )
}

export default App
