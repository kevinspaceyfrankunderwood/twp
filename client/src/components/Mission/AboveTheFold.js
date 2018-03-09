import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'


export const AboveTheFold = () => {
  return(
    <TWPDiv
      background={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${Youngster})`}
      backgroundSize={'cover'}
      backgroundPosition={'bottom center'}
      backgroundAttachment={'fixed'}
      height={'650px'}
      width={'100%'}
    >
      <TWPHeader>
        Our Mission
      </TWPHeader>
    </TWPDiv>
  );
}


export default AboveTheFold;
