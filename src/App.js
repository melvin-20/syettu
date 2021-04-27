import React from 'react'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

import './styles/app.scss'

import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">

            <Router>
                <Header />

                <Switch>
                    <Route path="/search">
                        <SearchPage />
                    </Route>

                    <Route path="/" >
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </Router>

            
            {/* Search Page */}
        </div>
    )
}

export default App
