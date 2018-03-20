import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Volunteers from '../../assets/images/volunteers.jpeg'

const ResponsiveDiv = TWPDiv.extend`
  ${media.tablet`
    height: 300px;
    margin-top: 110px;
    background-position: center;
  `}
`

const GreenSectionHeader = TWPSectionHeader.extend`
  ${media.tablet`
    padding: 50px 2%;
  `}
`

export const AboveTheFold = () => {
  return(
    <div>
      <ResponsiveDiv
        background={`linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url(${Volunteers})`}
        backgroundPosition={'top center'}
        backgroundSize={'cover'}
        height={'400px'}
        width={'100%'}
      >
        <TWPHeader lineHeight={'.5'}>
          Partnerships<br/><span style={{fontSize: `14px`}}>(placeholder image)</span>
        </TWPHeader>
      </ResponsiveDiv>
      <TWPDiv
        height={'100%'}
        width={'100%'}
        padding={'0'}
      >
        <GreenSectionHeader
          padding={'70px 2%'}
          backgroundColor={TWPStyleGuide.color.darkGreen}
          color={TWPStyleGuide.color.white}
          fontSize={TWPStyleGuide.font.size.medium}
          smallTabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          mobileFontFontSize={TWPStyleGuide.font.size.small}
          fontWeight={'100'}
        >
          Strong partnerships translate to healthy communities,<br/>Healthy communities translate to happy lives. 
        </GreenSectionHeader>
      </TWPDiv>
    </div>
  );
}


export default AboveTheFold;
