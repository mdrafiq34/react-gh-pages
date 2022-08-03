import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <>
      <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Nihan Studio
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      
      </>
    )
  }
}

export default Navigation