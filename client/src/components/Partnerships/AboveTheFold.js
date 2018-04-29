import React, { Component } from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css" ;
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './AboveTheFold.css'
import styled from 'styled-components'


import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Volunteers from '../../assets/images/volunteers.jpeg'
import slider1 from '../../assets/images/PartnershipSlider1.jpg'
import slider2 from '../../assets/images/PartnershipSlider2.jpg'
import slider3 from '../../assets/images/PartnershipSlider3.jpg'

const ResponsiveDiv = TWPDiv.extend`
  ${media.tablet`
    height: 300px;
    margin-top: 110px;
    background-position: center;
  `}
`

const GreenSectionHeader = TWPSectionHeader.extend`
  ${media.tablet`
    padding: 50px 2%;
  `}
`

const StyledDiv = styled.div`
  ${media.tablet`
    margin-top: 100px;
  `}
`

export const AboveTheFold = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "PartnershipsSlider",
    adaptiveHeight: true,
    dotsClass: "DotClass",
    dots: false,
  };
  return (
    <StyledDiv>
      <Slider {...settings}>
        <div>
          <TWPImage src={slider1} height={'400px'} width={'80%'} margin={'0 auto'}/>
        </div>
        <div>
          <TWPImage src={slider2} height={'400px'} width={'80%'} margin={'0 auto'}/>
        </div>
        <div>
          <TWPImage src={slider3} height={'400px'} width={'80%'} margin={'0 auto'}/>
        </div>
      </Slider>
      <TWPHeader>
        Partnerships
      </TWPHeader>
      <TWPDiv
        height={'100%'}
        width={'100%'}
        padding={'0'}
      >
        <GreenSectionHeader
          padding={'70px 2%'}
          backgroundColor={TWPStyleGuide.color.darkGreen}
          color={TWPStyleGuide.color.white}
          fontSize={TWPStyleGuide.font.size.medium}
          smallTabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          mobileFontFontSize={TWPStyleGuide.font.size.small}
          fontWeight={'100'}
        >
          Strong partnerships support to healthy communities,<br/>Healthy communities support to happy lives. 
        </GreenSectionHeader>
      </TWPDiv>
    </StyledDiv>
  );
}


export default AboveTheFold;
