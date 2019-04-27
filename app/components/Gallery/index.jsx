import React from 'react';
import ReactDOM from 'react-dom';

import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.responsive = {
      0: { items: 1 },
      1024: { items: 3 },
    }

    var galleryObj = JSON.parse(this.props.photos);
    var galleryItems = Object.keys(galleryObj).map((key) => {
      return (<figure><img className="carimages" src={galleryObj[key]}/><figcaption>{key}</figcaption></figure>);
    });

    this.state = {
      galleryItems: galleryItems.map((i) => (<h2 key={i}>{i}</h2>)),
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
      <div className="gallery-container">
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
    </div>
    )
  }
}

module.exports = Gallery;