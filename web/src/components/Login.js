import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-md-4 offset-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input ref={input => this.email = input} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input ref={input => this.password = input} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button onClick={(e) => this.props.onLogin(e, this.email.value, this.password.value)} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
