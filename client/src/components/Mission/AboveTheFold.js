import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'
import Monarch from '../../assets/images/MonachBackSide.jpg'

const ResponsiveHeader = TWPHeader.extend`
  ${media.tablet`
    padding: 150px 2%;
  `}
`

const ResponsiveDiv = TWPDiv.extend`
  ${media.tablet`
    height: 430px;
  `}
`

export const AboveTheFold = () => {
  return(
    <ResponsiveDiv
      background={`linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${Monarch}) fixed`}
      backgroundPosition={'center'}
      mobileBackgroundPosition={'top right'}
      backgroundSize={'cover'}
      height={'600px'}
      width={'100%'}
      justifyContent={'flex-start'}
    >
      <ResponsiveHeader
        padding={'100px 2%'}
      >
        Mission
      </ResponsiveHeader>
    </ResponsiveDiv>
  );
}


export default AboveTheFold;
