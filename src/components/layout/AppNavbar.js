import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class AppNavbar extends Component { 
    state = {
        isAuthenticated: false
    }
    static getDerivedStateFromProps(porps, state) { 
        const { auth } = this.props;

        if (auth.id) {
            return { isAuthenticated: true }
        } else { 
            return { isAuthenticated: false }
        }
    }
    render() { 
        const { isAuthenticated } = this.state;
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
                            { isAuthenticated ? (
                                <li className="nav-item">
                                    <Link to="/"  className="nav-link">
                                        Dashboard
                                    </Link>
                                </li>
                            ) : null
                            }
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

AppNavbar.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => { 
        auth: state.firebase.auth
    })
)(AppNavbar);