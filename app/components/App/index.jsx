import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
	        <form onSubmit={this.handleSubmit}>
	          <div className="form-inputs">
		        <div className='logo-signup'>
	              <img src='strawberry.png'/>
	            </div>
	            <h1> Title </h1>
	            <div className='signin-container'>
		            <form method="GET" action='/signup'>
						<button type='submit'> Sign Up </button>
					</form>
		        </div>
		        <div className='signin-container'>
		            <form method="GET" action='/login'>
						<button type='submit'> Log In </button>
					</form>
		        </div>
	          </div>
	        </form>
	      </div>
		)
	}
}