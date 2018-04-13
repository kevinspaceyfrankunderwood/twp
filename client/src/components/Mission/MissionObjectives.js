import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'
import TeamBuilding from '../../assets/images/teamBuilding.jpg'
import OrangePurple from '../../assets/images/beeOrangePurpleFlower.jpg'
import sideboob from '../../assets/images/SideBoobMonarch.jpg'
import Member from '../../assets/images/CommunityMember.jpg'
import PollinatorFriendly from '../../assets/images/pollinatorFriendly.jpg'

const points = [
  {
    text: 'We believe in providing easier access to nature for urban communities',
    image: sideboob
  },
  {
    text: 'We support healthy living, civic engagement and community pride',
    image: Member
  },
  {
    text: 'We believe planting gardens is a means to collaboration with a variety of groups creating awareness, engagement and educational possibilities through pollinator garden installation',
    image: TeamBuilding
  },
  {
    text: 'We believe by building habitat for pollinators, we can build a community of good neighbors and vibrant civil societies, supporting all members of our shared ecosystem',
    image: OrangePurple
  },
]

const ResponsiveSectionHeader = TWPSectionHeader.extend`
  ${media.tablet`
    padding: 45px;
  `}
`

class MissionObjectives extends Component {



  objectives = () =>{
    return points.map( item => {
      return (
        <div>
          <TWPDiv
            background={`linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${item.image})`}
            backgroundSize={'cover'}
            backgroundPosition={'bottom center'}
            backgroundAttachment={'fixed'}
            height={'400px'}
            width={'100%'}
          />
          <ResponsiveSectionHeader
            fontSize={TWPStyleGuide.font.size.medium}
            color={TWPStyleGuide.color.darkGreen}
            smallTabletFontSize={TWPStyleGuide.font.size.small}
            padding={'3% 10%'}
          >
            {item.text}
          </ResponsiveSectionHeader>
        </div>
      )  
    })
  }

  render() {
    return(
      <div>
        { this.objectives() }
        <TWPDiv
            background={`linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${PollinatorFriendly})`}
            backgroundSize={'cover'}
            backgroundPosition={'bottom center'}
            backgroundAttachment={'fixed'}
            height={'400px'}
            width={'100%'}
          />
      </div>
    );  
  }
}


export default MissionObjectives;
