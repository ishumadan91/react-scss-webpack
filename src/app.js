import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './app.scss';
import Home from './components/Home';
import About from './components/About';

const App = () => (
    <div>
        <p>Header</p>
        <BrowserRouter>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about/">About</Link>
                </li>
            </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
        </div>
        </BrowserRouter>
        <p>Footer</p>
    </div>
);

export default App;
