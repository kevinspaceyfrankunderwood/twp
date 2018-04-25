import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';



import { TWPDiv, TWPImage, TWPAnchor, TWPSectionHeader, TWPParagraph } from '../../styles/GenericStyledComponents';

import '../Partnerships/carousel.css'

import Bee1 from '../../assets/images/Bee1.png'
import Bee2 from '../../assets/images/Bee2.png'
import Bee3 from '../../assets/images/Bee3.png'
import Bee4 from '../../assets/images/Bee4.png'
import Bee5 from '../../assets/images/Bee5.png'
import Bee6 from '../../assets/images/Bee6.png'
import Bee7 from '../../assets/images/Bee7.png'
import Bee8 from '../../assets/images/Bee8.png'
import Bee9 from '../../assets/images/Bee9.png'
import Bee10 from '../../assets/images/Bee10.png'
import Bee11 from '../../assets/images/Bee11.png'
import Bee12 from '../../assets/images/Bee12.png'
import Bee13 from '../../assets/images/Bee13.png'
import Bee14 from '../../assets/images/Bee14.png'
import Bee15 from '../../assets/images/Bee15.png'
import Bee16 from '../../assets/images/Bee16.png'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const Bees = [
  {
    image: Bee1
  },
  {
    image: Bee2
  },
  {
    image: Bee3
  },
  {
    image: Bee4
  },
  {
    image: Bee5
  },
  {
    image: Bee6
  },
  {
    image: Bee7
  },
  {
    image: Bee8
  },
  {
    image: Bee9
  },
  {
    image: Bee10
  },
  {
    image: Bee11
  },
  {
    image: Bee12
  },
  {
    image: Bee13
  },
  {
    image: Bee14
  },
  {
    image: Bee15
  },
  {
    image: Bee16
  },
  {
    image: Bee1
  },
  {
    image: Bee2
  },
  {
    image: Bee3
  },
  {
    image: Bee4
  },
  {
    image: Bee5
  },
  {
    image: Bee6
  },
  {
    image: Bee7
  },
  {
    image: Bee8
  },
  {
    image: Bee9
  },
  {
    image: Bee10
  },
  {
    image: Bee11
  },
  {
    image: Bee12
  },
  {
    image: Bee13
  },
  {
    image: Bee14
  },
  {
    image: Bee15
  },
  {
    image: Bee16
  },
  {
    image: Bee1
  },
  {
    image: Bee2
  },
  {
    image: Bee3
  },
  {
    image: Bee4
  },
  {
    image: Bee5
  },
  {
    image: Bee6
  },
  {
    image: Bee7
  },
  {
    image: Bee8
  },
  {
    image: Bee9
  },
  {
    image: Bee10
  },
  {
    image: Bee11
  },
  {
    image: Bee12
  },
  {
    image: Bee13
  },
  {
    image: Bee14
  },
  {
    image: Bee15
  },
  {
    image: Bee16
  }
]

class BeeSlider extends Component {

  displayImages = () => {
    return Bees.map( single => {
      return(
          <TWPDiv>
            <TWPImage src={single.image} borderRadius={'3px'}/>
          </TWPDiv>
      )
    })
  }

  render() {
    return (
      <TWPDiv
        height={'400px'}
        backgroundColor={TWPStyleGuide.color.lightGreen}
      >
        <Carousel
          slideWidth="200px"
          autoplay={true}
          wrapAround={true}
          autoplayInterval={3500}
          cellSpacing={100}
          width={window.innerWidth < 590 ? '60%' : '90%'}
          renderCenterLeftControls={({ previousSlide }) => (
            <h6 onClick={previousSlide}></h6>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <h6 onClick={nextSlide}></h6>
          )}
        >
          {this.displayImages()}
        </Carousel>
        <TWPParagraph
          padding={'2%'}
          textAlign={'center'}
          fontSize={TWPStyleGuide.font.size.smallTiny}
        >
          Images above courtesy of Heather Holm
        </TWPParagraph>
      </TWPDiv>
    )
  }
}

export default BeeSlider