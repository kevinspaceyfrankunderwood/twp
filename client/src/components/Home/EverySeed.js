import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import styled from 'styled-components'

import { TWPHeader, TWPDiv, TWPImage, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Monarch from '../../assets/images/MonachBackSide.jpg'
import BeeBlue from '../../assets/images/beeBlueFlower.jpg'
import Dragonfly from '../../assets/images/dragonflySideView.jpg'
import Ground from '../../assets/images/groundCover.jpg'
import TeamEffort from '../../assets/images/teamEffort.jpg'

const ResponsiveHeader = TWPHeader.extend`
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

const BottomResponsiveHeader = TWPHeader.extend`
  ${media.tablet`
    padding: 30px 10px;
  `}
`

const DisappearingDiv = TWPDiv.extend`
  ${media.tablet`
    display: none;
  `}
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
            fontSize={TWPStyleGuide.font.size.medium}
            color={TWPStyleGuide.color.darkOrange}
            padding={'30px 10px'}
          >
            The Wildflower Project is a 501(c)(3) non-profit dedicated to taking urban, neglected spaces, and giving them a purpose.
          </ResponsiveHeader>
          <TWPDiv
            width={'90%'}
            flexDirection={'row'}
            flexWrap={'wrap'}
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
            <DisappearingDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={TeamEffort}
              />
            </DisappearingDiv>
            <SixHundredFiveDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={Ground}
              />
            </SixHundredFiveDiv>
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
          <BottomResponsiveHeader
            fontSize={TWPStyleGuide.font.size.mediumSmall}
            color={TWPStyleGuide.color.darkOrange}
            padding={'30px 2%'}
          >
            Wildflowers | Urban | Community
          </BottomResponsiveHeader>
        </TWPDiv>
  );
}

export default EverySeed;
