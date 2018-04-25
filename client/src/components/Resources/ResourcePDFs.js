import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';

import { TWPDiv, TWPParagraph, TWPImage, TWPAnchor, TWPSectionHeader, media } from '../../styles/GenericStyledComponents';

import BeeDiversityPDF from '../../assets/images/Bee Diversity Urban Areas.pdf'
import BeeDiversitySS from '../../assets/images/BeeDiversitySS.png'
import BeeSpeciesPDF from '../../assets/images/Bee Species.pdf'
import BeeSpeciesSS from '../../assets/images/BeeSpeciesSS.png'
import MNZooPDF from '../../assets/images/Butterfly%2FMoth MN ZOO .pdf'
import MNZooSS from '../../assets/images/MNZooSS.png'
import GuideFemalePDF from '../../assets/images/Guide to Female MN Bees.pdf'
import GuideFemaleSS from '../../assets/images/GuideToFemaleSS.png'
import GuideMalePDF from '../../assets/images/Guide to Male MN Bees.pdf'
import GuideMaleSS from '../../assets/images/GuideToMaleSS.png'
import HarvestPDF from '../../assets/images/How-to Harvest Wildflower Seed.pdf'
import HarvestSS from '../../assets/images/HarvestSS.png'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const ResourcePDFDiv = TWPDiv.extend`
  
  ${media.tablet`
    width: 300px;
  `}

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 12px 5px ${TWPStyleGuide.color.lightGray};
  }

  &:hover .textsection{
    background-color: ${TWPStyleGuide.color.brightOrange};
  }
`

const SectionWrap = TWPSectionHeader.extend`
  ${media.tablet`
    padding: 40px 0;
  `}
`

const Resources = [
  {
    image: BeeDiversitySS,
    href: BeeDiversityPDF,
    title: "The city as a guide for insect pollinators",
    text: "Research on urban insect pollinators is changing views on the biological value and ecological importance of cities."
  },
  {
    image: BeeSpeciesSS,
    href: BeeSpeciesPDF,
    title: "More Than Bumble Bees",
    text: "1.4% of U.S. Bees are Bumble Bees. Learn about the other 98%."
  },
  {
    image: MNZooSS,
    href: MNZooPDF,
    title: "Status of Minnesota's Butterflies and Moths",
    text: "The MN Zoo's overview on our rich diversity of butterflies and moths"
  },
  {
    image: GuideFemaleSS,
    href: GuideFemalePDF,
    title: "Guide to MN Bumble Bees: Females",
    text: "Minnesota's Female Bumble Bee Guide"
  },
  {
    image: GuideMaleSS,
    href: GuideMalePDF,
    title: "Guide to MN Bumble Bees: Males",
    text: "Minnesota's Male Bumble Bee Guide"
  },
  {
    image: HarvestSS,
    href: HarvestPDF,
    title: "How to Harvest Wildflower Seed",
    text: "Harvesting seed from your wildflower Meadow is Rewarding!"
  },
]

class ResourcePDFs extends Component {


  displayPDF = () => {
    return Resources.map( single => {
      return(
          <TWPAnchor href={single.href} target="_blank">
            <ResourcePDFDiv 
              onclick={`location.href=${single.href};`}
              height={'400px'}
              width={'400px'} 
              margin={'20px 5px'}
              padding={'0'}
              justifyContent={'space-between'}
              border={`2px solid ${TWPStyleGuide.color.darkGreen}`}
              borderRadius={'5px'}
              boxShadow={`1px 1px 12px 1px ${TWPStyleGuide.color.lightGray}`}
            >
              <TWPDiv
                height={'50%'}
                width={'100%'}
              >
                <TWPImage 
                  src={single.image} 
                  height={'100%'} 
                  width={'93%'}
                  padding={'1%'}
                />
              </TWPDiv>
              <TWPDiv
                backgroundColor={TWPStyleGuide.color.lightGray}
                width={'100%'}
                padding={'2px 10px'}
                height={'50%'}
                justifyContent={'space-around'}
                className="textsection"
              >
                <TWPSectionHeader
                  tabletFontSize={TWPStyleGuide.font.size.small}
                >
                  {single.title}
                </TWPSectionHeader>
                <TWPParagraph
                  tabletFontSize={TWPStyleGuide.font.size.smallTiny}
                >
                  {single.text}
                </TWPParagraph>
              </TWPDiv>
            </ResourcePDFDiv>
          </TWPAnchor>
      )
    })
  }

  render() {
    return (
        <TWPDiv 
          height={'100%'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-around'}
        >
          <SectionWrap
            padding={'3%'}
            color={TWPStyleGuide.color.darkBrown}
          >
            Read about various Wildflower and Pollinator topics
          </SectionWrap>
          {this.displayPDF()}
        </TWPDiv>
    )
  }
}

export default ResourcePDFs