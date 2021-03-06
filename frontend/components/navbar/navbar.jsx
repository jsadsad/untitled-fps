import React from 'react'
import SearchBar from '../search_bar/search_bar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="navbar-items">
      <div className="user-dropdown">
        <div className="user-icon">{`${currentUser.firstName} ${currentUser.lastName}`}</div>
        <div className="dropdown-content" onClick={logout}>
          Log Out
        </div>
      </div>
    </div>
  ) : (
    <div className="navbar-items">
      <Link className="login-btn" to="/login">
        Log In
      </Link>
      <Link className="signup-btn" to="/signup">
        Sign Up
      </Link>
    </div>
  )
  return (
    <div className="nav-bar">
      <div className="nav-bar-left justify-content-between">
        <div className="d-flex">
          <a href="https://github.com/jsadsad/TacoBoutIt" target="_blank">
            <FontAwesomeIcon
              className="navbar-FA"
              icon={faGithub}
              transform="left-4"
              color="white"
            />
          </a>
          <a href="https://www.linkedin.com/in/joshsad2/" target="_blank">
            <FontAwesomeIcon
              className="navbar-FA"
              icon={faLinkedin}
              transform="left-4"
              color="white"
            />
          </a>
          <a href="https://angel.co/u/jsadsad" target="_blank">
            <FontAwesomeIcon
              className="navbar-FA"
              icon={faAngellist}
              transform="left-4"
              color="white"
            />
          </a>
          <Link to="/" className="tbi-logo-container">
            <div className="tbi-navbar-logo"></div>
          </Link>
        </div>
      </div>
      <Link className="navbar-all-businesses" to="/businesses">
        All Businesses
      </Link>
      <div className="search-bar-nav">
        <SearchBar />
      </div>
      <div className="nav-bar-right">{display}</div>
    </div>
  )
}

export default NavBar
