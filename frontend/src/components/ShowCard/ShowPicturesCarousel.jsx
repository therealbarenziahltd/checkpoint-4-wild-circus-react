import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators} from 'reactstrap';
import './ShowCard.scss'; 

class ShowPicturesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.pictures.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.pictures.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.pictures.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img 
            src={item.url} 
            alt={item.id} 
            className='show-image'/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className='my-carousel'
      >
        <CarouselIndicators 
          items={this.props.pictures} 
          activeIndex={activeIndex} 
          onClickHandler={this.goToIndex} 
          className="carousel-controller"
        />
        {slides}
        <CarouselControl 
          direction="prev"
          directionText="Previous" 
          onClickHandler={this.previous}
          className="carousel-controller"
        />
        <CarouselControl
          direction="next" 
          directionText="Next"
          onClickHandler={this.next}
          className="carousel-controller"
        />
      </Carousel>
    );
  }
}


export default ShowPicturesCarousel;