import React, { Component } from 'react';
import axios from 'axios';

class Single extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.toggleSingle} >back</button>
        <div>{JSON.stringify(this.props.playlist)}</div>
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
        return (<div className="card">
          <div className="card-header">
            {p.name}
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a onClick={(e) => this.getPlaylist(e, p.id)} href="#" className="btn btn-primary">Go somewhere</a>
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

  render() {
    if (this.state.showNew) {
      return (
        <div className='row'>
          <div className="col-md-6 offset-md-3">
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Example label</label>
                <input ref={input => this.name = input} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
              {/* <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
              </div> */}
              <button type="submit" className="btn btn-primary">Add New</button>
            </form>
          </div>
        </div>
      )
    }
    return (
      <div className='row'>
        <div className="col-md-6 offset-md-3">
          <button onClick={() => this.setState({ showNew: true })} type="button" className="btn btn-primary"><i className="fas fa-plus"></i></button>
          <br />
          { this.state.single ? (
            <Single playlist={this.state.playlist} toggleSingle={() => this.setState({ single: false })}/>
          ) : this.renderAll() }

        </div>
      </div>
    );
  }
}

export default Playlist;
