import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import styled from 'styled-components'

import { TWPHeader, TWPDiv, TWPImage, media, TWPSectionHeader } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Monarch from '../../assets/images/MonachBackSide.jpg'
import BeeBlue from '../../assets/images/beeBlueFlower.jpg'
import Dragonfly from '../../assets/images/dragonflySideView.jpg'
import Ground from '../../assets/images/groundCover.jpg'
import TeamEffort from '../../assets/images/teamEffort.jpg'

const ResponsiveHeader = TWPSectionHeader.extend`
  width: 75%;

  ${media.desktop`
    width: 80%;
  `}
  ${media.tablet`
    font-size: ${TWPStyleGuide.font.size.small};
    width: 90%;
    padding: 30px 10px;
  `}
  ${media.phone`
    width: 95%;
  `}
`



const DisappearingDiv = TWPDiv.extend`
@media(max-width: 605px){
  display: none;
}
`

const DisappearingFirstDiv = TWPDiv.extend`
  @media(max-width: 907px){
    display: none;
  }
`

const SixHundredFiveDiv = TWPDiv.extend`
  @media (max-width: 605px){
    display: none;
  }
`

const EverySeed = () => {  
  return(
      <TWPDiv
          justifyContent={'space-evenly'}
          padding={'0'}
        >
          <ResponsiveHeader
            color={TWPStyleGuide.color.darkOrange}
            padding={'30px 10px'}
          >
            The Wildflower Project's focus is to serve as environmental and community stewards, fulfilling our promise of planting with a purpose.
          </ResponsiveHeader>
          <TWPDiv
            width={'90%'}
            flexDirection={'row'}
            flexWrap={'wrap'}
            padding={'4% 2%'}
          >
            <DisappearingDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={BeeBlue}
              />
            </DisappearingDiv>
            <DisappearingFirstDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={TeamEffort}
              />
            </DisappearingFirstDiv>
            <TWPDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={Dragonfly}
              />
            </TWPDiv>
          </TWPDiv>
          
        </TWPDiv>
  );
}

export default EverySeed;
