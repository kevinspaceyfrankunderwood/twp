import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';
import './carousel.css'
import MSCG from '../../assets/images/mscg.jpg'
import awesome from '../../assets/images/the-awesome-foundation.png'
import PPCG from '../../assets/images/PPCG.png'
import Propel from '../../assets/images/propel.png'
import Sunrise from '../../assets/images/sunrise.png'
import JOTP from '../../assets/images/JOTP.jpg'
import Dunning from '../../assets/images/Dunning.jpg'
import Urban from '../../assets/images/urbanGrowlerLogo.png'
import { TWPDiv, TWPImage, TWPAnchor } from '../../styles/GenericStyledComponents';

const Partnerships = [
  {
    image: Urban,
    href: "http://www.urbangrowlerbrewing.com"
  },
  {
    image: Sunrise,
    href: "https://sunrisebanks.com/"
  },
  {
    image: Propel,
    href: "https://www.propelnonprofits.org"
  },
  {
    image: awesome,
    href: "https://www.awesomefoundation.org/en"
  },
  {
    image: MSCG,
    href: "http://www.merriamstation.org"
  },
  {
    image: Dunning,
    href: ""
  },
  {
    image: JOTP,
    href: 'http://joytothepeople.org'
  },
  {
    image: PPCG,
    href: "http://ppcgmn.org"
  },
  {
    image: Urban,
    href: "http://www.urbangrowlerbrewing.com"
  },
  {
    image: Sunrise,
    href: "https://sunrisebanks.com/"
  },
  {
    image: Propel,
    href: "https://www.propelnonprofits.org"
  },
  {
    image: awesome,
    href: "https://www.awesomefoundation.org/en"
  },
  {
    image: Dunning,
    href: ""
  },
  {
    image: MSCG,
    href: "http://www.merriamstation.org"
  },
  {
    image: JOTP,
    href: 'http://joytothepeople.org'
  },
  {
    image: PPCG,
    href: "http://ppcgmn.org"
  },
]

class PartnershipSlider extends Component {


  displayImages = () => {
    return Partnerships.map( single => {
      return(
          <TWPAnchor href={single.href} >
            <TWPImage src={single.image}/>
          </TWPAnchor>
      )
    })
  }

  render() {
    return (
      <TWPDiv
        height={'200px'}
      >
      <Carousel
        slideWidth="200px"
        autoplay={true}
        wrapAround={true}
        autoplayInterval={2000}
        dragging={true}
        cellSpacing={100}
        width={'80%'}
        renderCenterLeftControls={({ previousSlide }) => (
          <h6 onClick={previousSlide}></h6>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <h6 onClick={nextSlide}></h6>
        )}
      >
        {this.displayImages()}
      </Carousel>
      </TWPDiv>
    )
  }
}

export default PartnershipSlider