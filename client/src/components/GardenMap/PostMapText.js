import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import sunrise from '../../assets/images/sunriseDubliner.jpg'


export const AboveTheFold = () => {
    return(
      <div>
    <TWPHeader
      padding={'2%'}
      smallTabletFontSize={TWPStyleGuide.font.size.medium}

    >
      Featured Gardens
    </TWPHeader>
  </div>
  );
}


export default AboveTheFold;
