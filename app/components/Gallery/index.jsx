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
      galleryItems: [<a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages"  src="https://cdn-images-1.medium.com/max/1600/0*I0vqL4kZwVo_knXG.png"/><figcaption>Graphic Designer</figcaption></figure></a>,
     <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg"/><figcaption>Builder</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://images.all-free-download.com/images/graphicthumb/cartoon_cook_cute_design_vector_541584.jpg"/><figcaption>Chef</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://applebymall.co.uk/wp-content/uploads/2016/06/questions-for-accountants.jpg"/><figcaption>Accountant</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://previews.123rf.com/images/dmitrymoi/dmitrymoi1610/dmitrymoi161000029/64033995-cute-barber-character-barber-shop-cartoon-vector-illustration-scissors-in-hand-vintage-hairstyle-set.jpg"/><figcaption>Barber</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24958929.jpg"/><figcaption>Clown</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://www.feedfond.com/wp-content/uploads/2017/09/Tattoo-parlors.png"/><figcaption>Tattoo Artist</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="http://kyachalra.com/wp-content/uploads/2018/08/25.png"/><figcaption>Web Dev</figcaption></figure></a>,
      <a href="https://memegenerator.net/img/instances/54179236/hello-is-it-me-youre-looking-for.jpg"><figure><img className = "carimages" src="https://afterhourspaintinginc.com/wp-content/uploads/2017/11/PAINTER6.png"/><figcaption>Painter</figcaption></figure></a>].map((i) => (<h2 key={i}>{i}</h2>)),
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

export default Gallery;