import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Meetups</a>
                    <a data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Meetups</Link></li>
                        <li><Link to="/meetups/add">Add Meetup</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    </div>
                    <div className="nav-content">
                        
                    </div>
                </nav>
                <ul className="sidenav" id="main-menu">
                    <li><Link to="/"><i className="fa fa-users" />Meetups</Link></li>
                    <li><Link to="/meetups/add"><i className="fa fa-plus" />Add Meetup</Link></li>
                    <li><Link to="/about"><i className="fa fa-question-circle" />About</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;