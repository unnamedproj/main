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
                        <Gallery photos={JSON.stringify({
                            "Graphic Designer": "https://cdn-images-1.medium.com/max/1600/0*I0vqL4kZwVo_knXG.png",
                            "Builder": "https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg",
                            "Chef": "https://images.all-free-download.com/images/graphicthumb/cartoon_cook_cute_design_vector_541584.jpg",
                            "Accountant": "https://applebymall.co.uk/wp-content/uploads/2016/06/questions-for-accountants.jpg",
                            "Barber": "https://previews.123rf.com/images/dmitrymoi/dmitrymoi1610/dmitrymoi161000029/64033995-cute-barber-character-barber-shop-cartoon-vector-illustration-scissors-in-hand-vintage-hairstyle-set.jpg",
                            "Clown": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24958929.jpg",
                            "Tattoo Artist": "https://www.feedfond.com/wp-content/uploads/2017/09/Tattoo-parlors.png",
                            "Web Dev": "http://kyachalra.com/wp-content/uploads/2018/08/25.png",
                            "Painter": "https://afterhourspaintinginc.com/wp-content/uploads/2017/11/PAINTER6.png"
                        }
                        )}/>
                    </div>
                </div>

            </div>
        ); 
    } 
}

module.exports = Homepage;