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
    text: 'To revitalize and restore the health & wellness of pollinator habitats in urban environments',
    image: Bank
  },
  {
    text: 'To bring vibrant, natural beauty to our urban communities',
    image: sideboob
  },
  {
    text: 'To foster education and awareness through volunteerism and partnerships, including nonprofit, commercial, private and civic',
    image: Member
  },
  {
    text: 'To take spaces with no hope and give them a purpose',
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
