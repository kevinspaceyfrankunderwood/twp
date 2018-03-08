import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';

import { TWPHeader, TWPDiv } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Monarch from '../../assets/images/MonachBackSide.jpg'


const EverySeed = () => {  
  return(
    <TWPDiv 
      padding={'0'}
    >
      <TWPDiv
          background={`linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${Monarch}) fixed`}
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          height={'600px'}
          width={'100%'}
        >
          <TWPHeader
            tabletFontSize={TWPStyleGuide.font.size.largeSmall}
          >
            Every seed we plant, we plant for pollinators
          </TWPHeader>            
        </TWPDiv>
    </TWPDiv>
  );
}

export default EverySeed;
