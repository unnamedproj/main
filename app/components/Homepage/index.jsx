import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from '../Gallery/index.jsx'; 
import  { DropdownButton } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import AliceCarousel from 'react-alice-carousel';

class Homepage extends Component { 
    render() { 
        return (
            <div className="App">
                <div className="row navbar">
                    <div className="col-md-6 dropdown">
                        <img className="logo" src='/networking.png' />
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                What are you looking for?
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Chef</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Builder</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Graphic Designer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Accountant</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Barber</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Clown</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tattoo Artist</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Web Dev</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Painter</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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

export default Homepage;