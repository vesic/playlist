import React, { Component } from 'react';
import Login from './components/Login';
import AddNew from './components/AddNew';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';
import Landing from './components/Landing';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    showForm: false,
    login: false,
    showLanding: true
  }

  componentDidMount() {
    if (this.getToken()) {
      this.setState({ login: true })
    }
  }

  handleGetYourPlaylists = (e) => {
    e.preventDefault();
    if (!this.getToken()) {
      this.setState({ showForm: true, login: true })
      return false;
    }
    // axios.get('http://localhost:8000/api/data')
    //   .then(res => {
    //     console.log('res', res);
    //     this.setState({ showForm: false })
    //   })
  }

  handleAddPlaylist = () => {
    console.log('handle');
    // if (!this.getToken()) {
    //   this.setState({ showForm: true })
    //   return false;
    // }

    // axios.get('http://localhost:8000/api/data')
    //   .then(res => {
    //     console.log('res')
    //     console.log(res.data);
    //     this.setState({
    //       showForm: false,
    //       login: true
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  getToken = () => {
    return window.localStorage.getItem('token');
  }

  onLogin = (e, email, password) => {
    e.preventDefault();
    axios.post('http://localhost:8000/auth/login', { email, password })
      .then(res => {
        console.log('res', res);
        if (res.status === 200) {
          window.localStorage.setItem('token', res.data.token)
          this.setState({
            login: true,
            showForm: false,
            showLanding: false
          })
        }
      })
      .catch(err => {
        console.log('err', err.response)
      })
  }

  renderList = () => {
    return (
      <div>
        { this.state.login && this.getToken() ? <Playlist addPlaylist={this.handleAddPlaylist}/> : <Landing /> }
      </div>
    )
  }

  handleLogout = () => {
    this.setState({ login: false, showLanding: true }, () => window.localStorage.removeItem('token'));
  }

  render() {
    return (
      <div>
        <Navbar getYourPlaylists={this.handleGetYourPlaylists} logout={this.handleLogout} />
        <div className="container">
          <div>&nbsp;</div>
          { this.state.showForm ? <Login onLogin={this.onLogin}/> : this.renderList() }
        </div>
      </div>
    );
  }
}

export default App;
