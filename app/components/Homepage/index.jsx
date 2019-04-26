import React, { Component } from 'react';
import Gallery from '../Gallery/index.jsx'; 
// className is just the JSX version of a html class

class Homepage extends Component {

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
  
  render() {
    return (
      <div className="App">
        <div className="grid">
          <img className="logo" src='https://lh3.googleusercontent.com/PGj87eT5OroFdd199hELlWMH9xEIN6l9koNdUOMVFX9n3kRewCHURBdtG-N2da0FTdRU'/>

          <div className="wrap">
            <div className="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
             <button type="submit" class="searchButton">
             <i className="fa fa-search"></i>
            </button>
            </div>
            </div>
            <img className="logo" src='https://lh3.googleusercontent.com/PGj87eT5OroFdd199hELlWMH9xEIN6l9koNdUOMVFX9n3kRewCHURBdtG-N2da0FTdRU'/>
        </div> 


      <h1>Find a worker!</h1>

        <Gallery/>
      </div>
    );
  }
}

export default Homepage;