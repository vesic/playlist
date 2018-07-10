import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Playlist</a>
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li className="nav-item">
              <a onClick={this.props.getYourPlaylists} className="nav-link" href="#">Your playlists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Signup</a>
            </li>
            <li className="nav-item">
              <a onClick={this.props.logout} className="nav-link" href="#">Logout</a>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;