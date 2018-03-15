import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'
import Bank from '../../assets/images/BankFlower.jpg'
import Urban from '../../assets/images/UrbanGrowlerConstruction.jpg'
import sideboob from '../../assets/images/SideBoobMonarch.jpg'
import Member from '../../assets/images/CommunityMember.jpg'

const points = [
  {
    text: 'We believe planting gardens is a means to collaboration with a variety of groups creating awareness, engagement and educational possibilities through pollinator garden installation',
    image: Bank
  },
  {
    text: 'We believe in providing easier access to nature for urban communities',
    image: sideboob
  },
  {
    text: 'We support healthy living, civic engagement and community pride',
    image: Member
  },
  {
    text: 'We believe by building habitat for pollinators, we can build a community of good neighbors and vibrant civil societies, supporting all members of our shared ecosystem',
    image: Urban
  }
]

class MissionObjectives extends Component {



  objectives = () =>{
    return points.map( item => {
      return (
        <TWPDiv
          background={`linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${item.image})`}
          backgroundSize={'cover'}
          backgroundPosition={'bottom center'}
          backgroundAttachment={'fixed'}
          height={'400px'}
          width={'100%'}
        >
          <TWPSectionHeader
            fontSize={TWPStyleGuide.font.size.medium}
            padding={'0 10%'}
          >
            {item.text}
          </TWPSectionHeader>
        </TWPDiv>
      )  
    })
  }

  render() {
    return(
      <div>
        { this.objectives() }
      </div>
    );  
  }
}


export default MissionObjectives;
