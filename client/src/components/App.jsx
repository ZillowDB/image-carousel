import React from 'react';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import Carousel from './Carousel.jsx';
import SlideShow from './SlideShow.jsx';

const stringPxToNum = (string) => {
  const num = string.split('px');
  return Number(num[0]);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      toggle: false,
      image: [],
      viewStyle: {
        position: 'relative',
        right: '0px',
      },
      carouselStyle: {
        overflow: 'hidden',
        maxWidth: '1629.45px',
      },
    };
    this.renderImage = this.renderImage.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    fetch('/homes/:home/images')
      .then(response => response.json())
      .then(data => this.setState({ images: data }))
      .catch(() => console.log('Error'));
  }

  goBack() {
    const {
      toggle,
      images,
      currentIndex,
      viewStyle,
    } = this.state;

    if (toggle) {
      this.setState({
        currentIndex: currentIndex - 1,
        image: images[currentIndex - 1].imageUrl,
      });
    } else if (toggle === false
      && (stringPxToNum(viewStyle.right) > 0)) {
      this.setState({
        viewStyle: {
          position: 'relative',
          right: `${stringPxToNum(viewStyle.right) + 274.91}px`,
        },
      });
    }
  }

  goForward() {
    const {
      toggle,
      images,
      currentIndex,
      viewStyle,
    } = this.state;

    if (toggle) {
      this.setState({
        currentIndex: Number(currentIndex) + 1,
        image: images[Number(currentIndex) + 1].imageUrl,
      });
    } else if (toggle === false
      && (stringPxToNum(viewStyle.right) < 1373)) {
      this.setState({
        viewStyle: {
          position: 'relative',
          right: `${stringPxToNum(viewStyle.right) + 274.91}px`,
        },
      });
    }
  }

  renderImage(e) {
    const { toggle, images } = this.state;
    if (!toggle) {
      this.setState({
        image: [e.target.src],
        currentIndex: e.target.id,
        toggle: true,
        carouselStyle: {
          overflow: 'visible',
          maxWidth: '1629.45px',
        },
      });
    } else if (toggle) {
      this.setState({
        images,
        toggle: false,
        carouselStyle: {
          overflow: 'hidden',
          maxWidth: '1629.45px',
        },
      });
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
    const { carouselStyle, viewStyle, toggle } = this.state;
    return (
      <div style={carouselStyle}>
        <LeftArrow goBack={this.goBack} />
        <RightArrow goForward={this.goForward} />
        <div style={viewStyle}>
          {toggle ? this.renderSelectedImage() : this.renderCarousel()}
        </div>
      </div>
    );
  }
}

export default App;
