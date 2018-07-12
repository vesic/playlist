import React, { Component } from 'react';
import axios from 'axios';

class Single extends Component {

  render() {
    const { playlist } = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">{playlist.name}</h5>
            <p className="card-text">{playlist.desc}</p>
            <a href="#" className="btn btn-primary" onClick={this.props.toggleSingle}>Back</a>
            <a href="#" className="btn btn-danger float-right" onClick={e => this.props.deleteList(e, playlist.id)}>Delete</a>
          </div>
        </div>
      </div>
    )
  }
}

class Playlist extends Component {
  state = {
    single: false,
    playlist: {},
    showNew: false
  }

  getToken = () => {
    return window.localStorage.getItem('token');
  }

  getPlaylist = (e, id) => {
    e.preventDefault();

    axios.get(`http://localhost:8000/api/playlists/${id}?token=${this.getToken()}`)
      .then(res => {
        console.log('from single');
        console.log(res);
        this.setState({ single: true, playlist: res.data })
      })
  }

  renderAll = () => {
    return (
      this.props.playlists.map(p => {
        return (<div style={{ marginBottom: 20 }} className="card">
          <div className="card-header">
            {p.name}
          </div>
          <div className="card-body">
            {/* <h5 className="card-title">Special title treatment</h5> */}
            <p className="card-text">{p.desc}</p>
            <a onClick={(e) => this.getPlaylist(e, p.id)} href="#" className="btn btn-primary">More</a>
          </div>
        </div>)
      })
    )
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ showNew: false })
    this.props.addPlaylist(this.name.value)
  }

  deleteList = (e, id) => {
    this.props.deleteList(e, id); 
    this.setState({ single: false })
  }

  render() {
    if (this.state.showNew) {
      return (
        <div className='row'>
          <div className="col-md-6 offset-md-3">
            <h3>Add new playlist</h3>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Playlist name</label>
                <input ref={input => this.name = input} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Playlist description</label>
                {/* <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" /> */}
                <textarea ref={input => this.desc = input} className="form-control"></textarea>
              </div>
              <button onClick={(e) => { this.props.addNew(e, this.name.value, this.desc.value); this.setState({ showNew: false }) }} type="submit" className="btn btn-primary">Add New</button>
            </form>
          </div>
        </div>
      )
    }
    return (
        <div className='row'>
          <div className="col-md-8 offset-md-2">
            <button onClick={() => this.setState({ showNew: true })} type="button" className="btn btn-primary btn-block"><i className="fas fa-plus"></i></button>
            <br />
            { this.state.single ? (
              <Single deleteList={this.deleteList} playlist={this.state.playlist} toggleSingle={() => this.setState({ single: false })}/>
            ) : this.renderAll() }
          </div>
        </div>
    );
  }
}

export default Playlist;
