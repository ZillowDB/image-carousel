import React from 'react';
import Arrow from './Arrow';
import Carousel from './Carousel';
import SlideShow from './SlideShow';
import helpers from './helpers';
import {
  carouselVisible,
  carouselHidden,
  viewStyle,
} from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      currentIndex: 0,
      toggle: false,
      right: '0px',
    };

    this.renderImage = this.renderImage.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    this.houseId = helpers.getHouseIdFromUrl(window.location.pathname);
    fetch(`/api/homes/${this.houseId}/images`)
      .then(response => response.json())
      .then((res) => {
        this.setState({ images: res.data });
      })
      .catch(err => console.log(`Error ${err}`));
  }

  go(forward = true) {
    const {
      toggle,
      images,
      currentIndex,
      right,
    } = this.state;

    const pixels = helpers.stringPxToNum(right);
    const change = (forward) ? 1 : -1;
    const comparison = (forward) ? pixels < 1373 : pixels > 0;

    if (toggle) {
      this.setState({
        currentIndex: currentIndex + change,
        image: images[currentIndex + change].imageUrl,
      });
    } else if ((toggle === false) && comparison) {
      this.setState({ right: `${pixels + 274.91}px` });
    }
  }

  goBack() {
    this.go(false);
  }

  goForward() {
    this.go(true);
  }

  renderImage(e) {
    const { toggle, images } = this.state;
    if (!toggle) {
      this.setState({
        image: [e.target.src],
        currentIndex: e.target.id,
        toggle: true,
      });
    } else if (toggle) {
      this.setState({ images, toggle: false });
    }
  }

  renderSelectedImage() {
    const { image } = this.state;
    return (
      <SlideShow image={image} renderImage={this.renderImage} />
    );
  }

  renderCarousel() {
    const { images } = this.state;
    return (
      <Carousel images={images} renderImage={this.renderImage} />
    );
  }

  render() {
    const { right, toggle, images } = this.state;
    if (images === null) {
      return (<div>Loading...</div>);
    }

    return (
      <div
        className={(toggle) ? carouselHidden : carouselVisible}
      >
        <Arrow direction="left" go={this.goBack} />
        <Arrow direction="right" go={this.goForward} />
        <div style={{ right: right }} className={viewStyle}>
          {toggle ? this.renderSelectedImage()
            : this.renderCarousel()}
        </div>
      </div>
    );
  }
}

export default App;
