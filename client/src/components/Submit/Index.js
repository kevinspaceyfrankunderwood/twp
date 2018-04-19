import React, { Component } from 'react';
import { TWPImage, TWPDiv } from '../../styles/GenericStyledComponents';

import Flower from '../../assets/images/prettyRedFlower.jpg'

export const Index = () => {
  return (
    <div>
      <TWPDiv
        marginTop={'100px'}
        padding={'0'}
        height={'300px'}
      >
        <TWPImage
          height={'initial'}
          src={Flower}
        />
      </TWPDiv>
      <TWPDiv
        marginTop={'100px'}
      />
    </div>
  )
}

export default Index