import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../Gallery/index.jsx'; 
// import { DropdownButton } from 'react-bootstrap'
// import { Button } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
// import { ButtonGroup } from 'react-bootstrap';

import AliceCarousel from 'react-alice-carousel';

class Homepage extends React.Component { 
    render() { 
        return (
            <div className="App">
                <div className="row navbar">
                    <div className="col-md-6 dropdown">
                        <img className="logo" src='/networking.png' />
                        <div className="dropdown">
  <button className="dropbtn">Find a Worker! <span>&#8595;</span></button>
  <div className="dropdown-content">
  <a href="#">Graphic Designer</a>
  <a href="#">Builder</a>
  <a href="#">Chef</a>
  <a href="#">Accountant</a>
  <a href="#">Barber</a>
  <a href="#">Clown</a>
  <a href="#">Tattoo Artist</a>
  <a href="#">Web Dev</a>
  <a href="#">Painter</a>

  </div>
</div>

                    </div>
                    <div className="col-md-6 authlinks">
                        <a href="/login">Log in</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 galleryDiv">
                        <Gallery/>
                    </div>
                </div>

            </div>
        ); 
    } 
}

module.exports = Homepage;