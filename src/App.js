// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import './App.css';

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {

        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };



    return ( <
            Router >
            <
            Routes >
            <
            Route path = "/login"
            element = { < LoginPage onLogin = { handleLogin }
                />} / >
                <
                Route path = "/signup"
                element = { < SignupPage / > }
                /> <
                Route path = "/home"
                element = { < HomePage user = { user }
                    onLogout = { handleLogout }
                    />} / >
                    <
                    Route path = "/"
                    element = { <
                        div >
                        <
                        h1 > Welcome to PopX < /h1> <
                        p > < span > Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. < /span></p >
                        <
                        button onClick = {
                            () => window.location.href = '/signup' } > Create Account < /button> <
                        button onClick = {
                            () => window.location.href = '/login' } > Already Register ? Login < /button>

                        <
                        /div>
                    }
                    /> <
                    /Routes> <
                    /Router>
                );
            }

            export default App;