import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';

import { TWPHeader, TWPDiv, TWPImage } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Monarch from '../../assets/images/MonachBackSide.jpg'
import BeeBlue from '../../assets/images/beeBlueFlower.jpg'
import Dragonfly from '../../assets/images/dragonflySideView.jpg'
import Ground from '../../assets/images/groundCover.jpg'
import TeamEffort from '../../assets/images/teamEffort.jpg'

const EverySeed = () => {  
  return(
      <TWPDiv
          height={'600px'}
          justifyContent={'space-evenly'}
          padding={'0'}
        >
          <TWPHeader
            fontSize={TWPStyleGuide.font.size.medium}
            color={TWPStyleGuide.color.darkOrange}
            padding={'0 15%'}
          >
            The Wildflower Project is a 501(c)(3) non-profit dedicated to taking urban, neglected spaces, and giving them a purpose.
          </TWPHeader>
          <TWPDiv
            width={'90%'}
            flexDirection={'row'}
          >
            <TWPDiv
              width={'250px'}
              height={'250px'}
              margin={'0 5px'}
              padding={'0'}
            >
              <TWPImage
                src={BeeBlue}
              />
            </TWPDiv>
            <TWPDiv
              width={'250px'}
              height={'250px'}
              margin={'0 5px'}
              padding={'0'}
            >
              <TWPImage
                src={TeamEffort}
              />
            </TWPDiv>
            <TWPDiv
              width={'250px'}
              height={'250px'}
              margin={'0 5px'}
              padding={'0'}
            >
              <TWPImage
                src={Ground}
              />
            </TWPDiv>
            <TWPDiv
              width={'250px'}
              height={'250px'}
              margin={'0 5px'}
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
          >
            Wildflowers | Urban | Community
          </TWPHeader>
        </TWPDiv>
  );
}

export default EverySeed;
