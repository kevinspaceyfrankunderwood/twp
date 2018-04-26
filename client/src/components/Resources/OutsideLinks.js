import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';


const TopWrap = TWPDiv.extend`
  ${media.tablet`
    margin-top: 120px;
    padding: 0 50px;
  `}
`

export const AboveTheFold = () => {
  return(
    <TopWrap
      backgroundColor={TWPStyleGuide.color.white}
      height={'250px'}
      padding={'0 100px'}
      width={'100%'}
    >
      <TWPHeader
        fontSize={TWPStyleGuide.font.size.medium}
        tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
      >
        Links below <br/><br/>
      </TWPHeader>
      <TWPDiv>
      </TWPDiv>
    </TopWrap>
  );
}


export default AboveTheFold;
