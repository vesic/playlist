import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-md-6 offset-md-3">
          <button onClick={this.props.addPlaylist} type="button" className="btn btn-primary"><i className="fas fa-plus"></i></button>
          <br />
          <br />
          <div className="card">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div>&nbsp;</div>
          <div className="card">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div>&nbsp;</div>
          <div className="card">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
