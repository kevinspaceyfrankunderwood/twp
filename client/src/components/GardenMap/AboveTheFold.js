import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import sunrise from '../../assets/images/sunriseDubliner.jpg'

const TopImageSunriseBank = TWPDiv.extend`

  background-size: 115%;
  ${media.desktop`
    background-size: 130%;
  `}

  @media (max-width: 830px) {
    background-size: 150%;
  }

  ${media.tablet`
    height: 400px;
    background-position: bottom;
    background-attachment: unset;
  `}

  @media (max-width: 620px) {
    height: 320px
  }

  @media (max-width: 454px){
    height: 290px;
  }
`

const SectionHeaderAdjustablePadding  = TWPSectionHeader.extend`
  ${media.tablet`
    padding: 10% 2%;
  `}
`

export const AboveTheFold = () => {
    return(
      <div>
    <TopImageSunriseBank
    background={`linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, .3), rgba(255, 255, 255, 0)), url(${sunrise})`}
    backgroundPosition={'top'}
    backgroundAttachment={'fixed'}
    height={'400px'}
    width={'100%'}
    />
    <TWPHeader
      padding={'2%'}
      color={TWPStyleGuide.color.darkGreen}
      smallTabletFontSize={TWPStyleGuide.font.size.medium}
    >
      Garden Sites
    </TWPHeader>
    <TWPDiv
      borderTop={`1px solid ${TWPStyleGuide.color.brown}`}
      width={'50%'}
      margin={'auto'}
      />
    <SectionHeaderAdjustablePadding
      padding={'2%'}
      color={TWPStyleGuide.color.darkGreen}
      smallTabletFontSize={TWPStyleGuide.font.size.small}
    >
      From Frogtown to Uptown and all the neighborhoods in between,<br/>TWP is building a network of urban gardens to restore pollinator habitat across the Twin Cities metro.
    </SectionHeaderAdjustablePadding>
  </div>
  );
}


export default AboveTheFold;
