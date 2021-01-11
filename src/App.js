import React from 'react'
import AppRouter from './AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components'
import ScrollToTop from './functions/ScrollToTop'
import './scss/app.scss'

require('dotenv').config()

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <AppRouter />
                <Footer />
            </ScrollToTop>
        </Router>
    )
}

export default App
