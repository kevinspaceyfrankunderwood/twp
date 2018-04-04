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
  ${media.tablet`
    font-size: ${TWPStyleGuide.font.size.small};
    padding: 30px 10px;
  `}
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
            padding={'20px 10px'}
          >
            The Wildflower Project is a 501(c)(3) non-profit dedicated to taking urban, neglected spaces, and giving them a purpose.
          </ResponsiveHeader>
          <TWPDiv
            width={'90%'}
            flexDirection={'row'}
            flexWrap={'wrap'}
          >
            <TWPDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={BeeBlue}
              />
            </TWPDiv>
            <TWPDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={TeamEffort}
              />
            </TWPDiv>
            <TWPDiv
              width={'250px'}
              height={'250px'}
              minWidth={'250px'}
              margin={'5px'}
              padding={'0'}
            >
              <TWPImage
                src={Ground}
              />
            </TWPDiv>
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
          <TWPHeader
            fontSize={TWPStyleGuide.font.size.mediumSmall}
            color={TWPStyleGuide.color.darkOrange}
            padding={'2%'}
          >
            Wildflowers | Urban | Community
          </TWPHeader>
        </TWPDiv>
  );
}

export default EverySeed;
