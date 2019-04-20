import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.responsive = {
      0: { items: 1 },
      1024: { items: 3 },
    }

    this.state = {
      galleryItems: [<a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages"  src="https://www.careerfaqs.com.au/wp-content/uploads/2018/10/How_to_become_a_graphic_designer_612px.jpg"/><figcaption>Graphic Designer</figcaption></figure></a>,
     <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://ichef.bbci.co.uk/images/ic/640x360/p04vzmvk.jpg"/><figcaption>Builder</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="http://www.italianmade.com/ca/wp-content/uploads/2015/05/Rob-Gentile-Buca.jpg"/><figcaption>Chef</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://i.imgur.com/DuqzSFH.jpg"/><figcaption>Accountant</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://i.imgur.com/OWJA9yv.jpg"/><figcaption>Barber</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://i.imgur.com/2eKDlV8.jpg"/><figcaption>Clown</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://i.imgur.com/WkqZWUT.jpg"/><figcaption>Tattoo Artist</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://i.imgur.com/jh7a2c5.jpg"/><figcaption>Web Dev</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://i.imgur.com/PxoH5ik.jpg"/><figcaption>Painter</figcaption></figure></a>].map((i) => (<h2 key={i}>{i}</h2>)),
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