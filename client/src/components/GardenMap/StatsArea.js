import React, { Component } from 'react';
import { TWPDiv, media, TWPSectionHeader, TWPParagraph, TWPImage, TWPHeader } from '../../styles/GenericStyledComponents'
import { ProjectInfo } from '../../assets/strings/ProjectInfo'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const InfoBoxWrap = TWPDiv.extend`
  ${media.tablet`
    width: 80%;
  `}
  ${media.phone`
    width: 95%;
  `}
`

const SliderParagraph = TWPParagraph.extend`
  line-height: 1.5;
`

class StatsArea extends Component {

  
  
  render(){
    return (
      <TWPDiv
        width={'100%'}
        padding={'0'}
        height={'600px'}
        backgroundColor={TWPStyleGuide.color.lightGreen}
      >
        <TWPHeader
        >
          This Area Will Have Stats
        </TWPHeader>
      </TWPDiv>
    )
  }
}

export default StatsArea;

