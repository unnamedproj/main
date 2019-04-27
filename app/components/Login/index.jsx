import React            from 'react';
import axios            from 'axios';

class Login extends React.Component {
	constructor (props) {
		super (props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeInput = this.changeInput.bind(this);

		this.state = {
			username: '',
			password: '',
			error: false
		}
	}

	changeInput(event){
		const type = event.target.dataset.type;
		const value = event.target.value;

		this.setState({
			[type]: value
		});
	}

	handleSubmit(e) {
		const context = this;

		e.preventDefault();
		
		axios.post('/auth/login', {
			username: context.state.username,
			password: context.state.password,
		})
		.then(() => {
			window.location = '/homepage' 
		})
		.catch((err) => {
			console.error('Wrong Password');
			this.setState({
				error: true
			})
		})
	}

	render() {
	    return (
	      <div>
	        <form onSubmit={this.handleSubmit}>
	          <div className="form-inputs">
		        <div className='logo-signup'>
	              <img src='strawberry.png'/>
	            </div>
	            <div className='signin-container'>
		            <input 
		              onChange={this.changeInput}
		              className="login-input"
		              type='text'
		              placeholder='username'
		              data-type='username'
		              autoFocus
		              />
		            <span id="username"></span>
		            <br />
		        </div>
		        <div className='signin-container'>
		            <input 
		              onChange={this.changeInput}
		              className="login-input"
		              type='password' 
		              placeholder='password'
		              data-type='password'
		              />
		            <br />
		            <span className='signin-error' id="password">{this.state.error ? 'password incorrect' : ''}</span>
		        </div>
	              <button type="submit" id="submit">Login</button>
	          </div>
	        </form>
	        <div id="error">
	        </div>
	      </div>
	    );
	}
}

module.exports = Login;