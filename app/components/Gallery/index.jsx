import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";


class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.responsive = {
      0: { items: 1 },
      1024: { items: 3 },
    }

    this.state = {
      galleryItems: [<img className = "carimages" src="https://www.careerfaqs.com.au/wp-content/uploads/2018/10/How_to_become_a_graphic_designer_612px.jpg"/>,
       <img className = "carimages" src="https://ichef.bbci.co.uk/images/ic/640x360/p04vzmvk.jpg"/>,
        <img className = "carimages" src="http://www.italianmade.com/ca/wp-content/uploads/2015/05/Rob-Gentile-Buca.jpg"/>].map((i) => (<h2 key={i}>{i}</h2>)),
    }
  }

 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
 
  render() {
    return (
      <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    )
  }
}

export default Gallery;