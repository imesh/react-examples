import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <Navbar />
        <div className="container">
            <Main />
        </div>
    </div>
)

export default App;
