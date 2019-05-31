import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './app.scss';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import reducers from './redux/reducers';

const store = createStore(reducers, {list: null})

const App = () => (
    <Provider store={store}>
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
                <li>
                <Link to="/users/">Users</Link>
                </li>
            </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </div>
        </BrowserRouter>
    </Provider>
    
);

export default App;
