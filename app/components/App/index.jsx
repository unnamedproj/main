import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1> temp title </h1>
				<form method="GET" action='/signup'>
					<button type='submit'> Sign Up </button>
				</form>
				<form method="GET" action='/login'>
					<button type='submit'> Log In </button>
				</form>
			</div>
		)
	}
}

module.exports = index;