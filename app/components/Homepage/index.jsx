import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from '../Gallery/index.jsx'; 
import  { DropdownButton } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import AliceCarousel from 'react-alice-carousel';

 class Homepage extends Component { render() { return (
<div className="App">
    <div className="grid">
        <div className="1">
            <img className="logo" src='https://lh3.googleusercontent.com/PGj87eT5OroFdd199hELlWMH9xEIN6l9koNdUOMVFX9n3kRewCHURBdtG-N2da0FTdRU' />
        </div>
        <div className="middle">
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    What are you looking for?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Chef</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Builder</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Graphic Designer</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
        <div className="buttons">
            <ButtonGroup vertical>
                <Button variant="primary">Log in</Button>
                <Button href="https://www.google.com/">Sign Up</Button>
            </ButtonGroup>
        </div>
    </div>

    <h1>Find a worker!</h1>

    <Gallery/>
</div>
); } }

export default Homepage;