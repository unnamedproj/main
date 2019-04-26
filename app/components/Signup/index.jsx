import React            from 'react';
import axios            from 'axios';

class Signup extends React.Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.usernameHandleKeyUp = this.usernameHandleKeyUp.bind(this)

    this.state = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        error: false,
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

  usernameHandleKeyUp(event) {
    const type = event.target.dataset.type;
    const value = event.target.value;

    axios.post('/auth/check_username', {
      username: event.target.value
    })
    .then((response) => {
      this.setState({
        username: value,
        error: false
      });
    })
    .catch((err) => {
      console.log('Error', err, 'what');
      this.setState({
        error: true
      })
      //document.getElementById("error").innerHTML = '<h3> **username already taken** </h3>'
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id="error"></div>
          <div className="form-inputs">
            <div className='logo-signup'>
              <img src='strawberry.png'/>
            </div>
            <div className='signin-container'>
              <input 
                onKeyUp={this.usernameHandleKeyUp}
                className="login-input"
                type='text'
                placeholder='username'
                data-type='username'
                style={this.state.error ? {color: 'red'} : {}}
                autoFocus
                />
              <br />
              <span className='signin-error' id="username">{this.state.error ? 'username taken' : ''}</span>
            </div>
            <div className='signin-container'>
              <input 
                onChange={this.changeInput}
                className="login-input"
                type='password' 
                placeholder='password'
                data-type='password'
                />
              <span id="password"></span>
            </div>
            <div className='signin-container'>
              <input 
                onChange={this.changeInput}
                className="login-input"
                type='text' 
                placeholder='email'
                data-type='email'
                />
              <span id="email"></span>
            </div>
            <div className='signin-container'>
              <input 
                onChange={this.changeInput}
                className="login-input"
                type='text' 
                placeholder='first name'
                data-type='firstName'
                />
              <span id="firstName"></span>
            </div>
            <div className='signin-container'>
              <input 
                onChange={this.changeInput}
                className="login-input"
                type='text' 
                placeholder='last name'
                data-type='lastName'
                />
              <span id="lastName"></span>
            </div>
            <div className="submit">
              <button type="submit" id='submit'>Sign Up</button>
            </div>
          </div>
        </form>
        <div id="error"> </div>
      </div>
    );
  }
}
module.exports = Signup; 
