import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-2">
                    <a href="#!" className="brand-logo">Meetups</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Meetups</Link></li>
                        <li><Link to="/meetups/add">Add Meetup</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/">Meetups</Link></li>
                        <li><Link to="/meetups/add">Add Meetup</Link></li>
                        <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;