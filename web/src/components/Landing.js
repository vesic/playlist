import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Latest</h1>
        <div className="card-columns">
          {
            this.props.latest.map(playlist => {
              return (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{playlist.name}</h5>
                    <p className="card-text">{playlist.desc}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Landing;
