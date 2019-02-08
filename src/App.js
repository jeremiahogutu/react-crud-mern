import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create";
import Edit from "./components/edit";
import Index from "./components";

class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">React Crud</Link>
                        <div className="collapse navbar-collapse" id="navbarSupprtedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Index</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br/>
                    <h2>React CRUD</h2>
                    <Switch>
                        <Route exact path='/create' component={ Create }/>
                        <Route path='/edit/:id' component={ Edit }/>
                        <Route path='/index' component={ Index }/>
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App