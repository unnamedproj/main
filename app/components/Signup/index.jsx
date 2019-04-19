import React            from 'react';
import axios            from 'axios';

class Signup extends React.Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.usernameHandleKeyDown = this.usernameHandleKeyDown.bind(this)

    this.state = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };
  }

  changeInput(event) {
    const type = event.target.dataset.type;
    const value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(e) {
    const context = this;
    console.log('31');
    e.preventDefault();

    axios.post('/auth/signup', {
       username: context.state.username,
       password: context.state.password,
       email: context.state.email,
       firstName: context.state.firstName,
       lastName: context.state.lastName
    })
    .then((response) => {
      console.log('response: ',response);
    })
    .then(() => {
       window.location = '/homepage'
    })
    .catch((err) => {
      console.error('Error');
    })
  }

  usernameHandleKeyDown(event) {
    const type = event.target.dataset.type;
    const value = event.target.value;

    axios.post('/auth/check_username', {
      username: event.target.value
    })
    .then((response) => {
      this.setState({
        username: value
      });
    })
    .catch((err) => {
      console.log('Error', err, 'what');
      document.getElementById("error").innerHTML = '<h3> **username already taken** </h3>'
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id="error"></div>
          <div className="form-inputs">
            <input 
              onKeyUp={this.usernameHandleKeyDown}
              className="login-input"
              type='text'
              placeholder='username'
              data-type='username'
              />
            <span id="username"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='password' 
              placeholder='password'
              data-type='password'
              />
            <span id="password"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='email'
              data-type='email'
              />
            <span id="email"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='firstName'
              data-type='firstName'
              />
            <span id="firstName"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='lastName'
              data-type='lastName'
              />
            <span id="lastName"></span>
            <div className="submit">
              <button id="submit" type="submit" className="btn btn-success">Sign Up</button>
            </div>
          </div>
        </form>
        <div id="error">
        </div>
      </div>
    );
  }
}

module.exports = Signup; 
