import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'
import butterfly from '../../assets/images/blackWhiteButterflies.jpg'


export const AboveTheFold = () => {
  return(
    <TWPDiv
      background={`linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${butterfly}) fixed`}
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      height={'400px'}
      width={'100%'}
    >
      <TWPHeader
        color={TWPStyleGuide.color.darkGreen}
        fontSize={TWPStyleGuide.font.size.massive}
        tabletFontSize={TWPStyleGuide.font.size.Large}
        smallTabletSize={TWPStyleGuide.font.size.medium}
        mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
      >
        Meet the Team
      </TWPHeader>
    </TWPDiv>
  );
}


export default AboveTheFold;
