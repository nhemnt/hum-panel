import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class AppNavbar extends Component { 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Hum Panel
                    </Link>    
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/"  className="nav-link">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.hemantnegi.net">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.behance.net/nhemnt">Portfolio</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.github.com/nhemnt">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.hemantnegi.net">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.behance.net/nhemnt">Portfolio</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavbar;