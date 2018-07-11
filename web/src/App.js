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
    showLanding: true,
    playlists: []
  }

  componentDidMount() {
    if (this.getToken()) {
      const playlists = window.localStorage.getItem('playlists');
      this.setState({ login: true, playlists: JSON.parse(playlists) })
    }
  }

  handleGetYourPlaylists = (e) => {
    e.preventDefault();
    if (!this.getToken()) {
      this.setState({ showForm: true, login: true })
      return false;
    }
    axios.get('http://localhost:8000/api/playlists?token='+this.getToken())
      .then(res => {
        console.log('res', res.data);
        this.setState({ playlists: res.data }, () => {
          window.localStorage.setItem('playlists', JSON.stringify(res.data))
        })
        // this.setState({ showForm: false })
      })
  }

  handleAddPlaylist = (playlistName) => {
    console.log('handleAddPlaylist name', playlistName);
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
          axios.get('http://localhost:8000/api/playlists?token='+res.data.token)
            .then(res => {
              console.log('res', res.data);
              this.setState({ playlists: res.data }, () => { 
                window.localStorage.setItem('playlists', JSON.stringify(res.data))
              })
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
        { this.state.login 
          ? <Playlist addPlaylist={this.handleAddPlaylist} playlists={this.state.playlists}/> 
          : <Landing /> }
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
