import React from 'react'
import AppRouter from './AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components'
import './scss/app.scss'

require('dotenv').config()

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <AppRouter />
            <Footer />
        </Router>
    )
}

export default App
