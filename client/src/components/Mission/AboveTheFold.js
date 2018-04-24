import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'
import Monarch from '../../assets/images/MonachBackSide.jpg'


export const AboveTheFold = () => {
  return(
    <TWPDiv
      background={`linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${Monarch}) fixed`}
      backgroundPosition={'center'}
      mobileBackgroundPosition={'top right'}
      backgroundSize={'cover'}
      height={'600px'}
      width={'100%'}
    >
      <TWPHeader>
        Mission
      </TWPHeader>
    </TWPDiv>
  );
}


export default AboveTheFold;
