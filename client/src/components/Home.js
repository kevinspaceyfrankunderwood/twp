import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../styles/GenericStyledComponents'
import TWPStyleGuide from '../styles/TWPStyleGuide';

import Field from '../assets/images/FlowerField.jpg'
import Monarch from '../assets/images/MonachBackSide.jpg'
import squares from '../assets/images/Squares.png'
import Bouquet from '../assets/images/BouquetOranges.png'
import Dragon from '../assets/images/DragonflyBirdsEye.jpg'
import whiteFlower from '../assets/images/basicWhiteFlower.png'
import logo from '../assets/images/logoFullSize.png'
import { Grid, Segment, Image, Icon } from 'semantic-ui-react'

const BoxTopText = TWPSectionHeader.extend`
  height: 70%;
  display: flex;
  align-items: center;
  ${media.tablet`
    padding: 2%;
  `}
`

const ThirdSectionTopText = TWPHeader.extend`
  height: 40%;
  display: flex;
  align-items: center;
`

const TopTwoInfoBoxes = TWPDiv.extend`
  ${media.desktop`
    height: 55%
  `}
  ${media.tablet`
    width: 70%;
    margin: 10px 0;
  `}
  @media(max-width: 500px){
    width: 90%
  }
`

const TopWrapper = TWPDiv.extend`
  ${media.tablet`
    flex-direction: column;
  `}
`

const TopTwoTopText = TWPSectionHeader.extend`
  height: 60%;
  display: flex;
  align-items: center;
`

const TopTwoClipArt = TWPImage.extend`
  ${media.tablet`
    width: 25%
  `}
`

const TopTwoNumbers = TWPSectionHeader.extend`
  @media(max-width: 450px) {
    font-size: 2em;
  }
`

const TopTwoBottomLeftNumberText = TWPDiv.extend`
  @media(max-width: 450px){
    padding: 0 6%;
  }
`

const DragonflySection = TWPDiv.extend`
  ${media.tablet`
    height: 750px
  `}
`

const BottomWrapper = TWPDiv.extend`
  ${media.tablet`
    flex-direction: column;
    height: 75%;
    width: 100%;
  `}
`

const BottomTwoInfoBoxes = TWPDiv.extend`
  ${media.tablet`
    width: 70%;
    margin: 10px 0;
  `}
  @media(max-width: 500px){
    width: 90%
  }
`

const FooterWrap = TWPDiv.extend`
  ${media.tablet`
    flex-direction: column;
    height: unset;
  `}
`

const FooterDuo = TWPDiv.extend`
  ${media.tablet`
    width: 100%;
    height: 150px;
  `}
`

const QuicklinksWrap = TWPDiv.extend`

`

class Home extends Component {
  state = { photos: [], height: window.innerHeight, width: window.innerWidth }

	componentDidMount() {
		axios.get('api/instagram/index')
		.then( res => this.setState({ photos: res.data.data }) )
	}
 
	displayImages = () => {
		return this.state.photos.map( pic => 
			<TWPDiv
        width={'250px'}
        height={'250px'}
        padding={'0'}
        margin={'10px'}
      >
				<TWPAnchor href={pic.link} target="_blank" rel="noopener noreferrer" >
          <TWPImage 
            width={'250px'}
            borderRadius={'40px'}
            height={'-webkit-fill-available'}
            className="homeSingleInsta" 
            src={pic.images.standard_resolution.url} 
          />
		    </TWPAnchor>
			</TWPDiv>
		)
  }
  

  render() {
    return(
    <TWPDiv 
      padding={'0'}
    >
      <TWPDiv
        background={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${Field})`}
        backgroundSize={'cover'}
        backgroundPosition={'bottom center'}
        backgroundAttachment={'fixed'}
        height={'650px'}
        width={'100%'}
      >
        <TWPDiv
          height={'25%'} 
          width={'100%'}
        >
          <TWPHeader 
            fontWeight={'300'}
            width={'100%'}
            tabletFontSize={TWPStyleGuide.font.size.mediumLarge}
          >
            <span style={{color: TWPStyleGuide.color.yellow}}>The </span>
            <span style={{color: TWPStyleGuide.color.brightOrange}}>Wildflower </span>
            <span style={{color: TWPStyleGuide.color.darkGreen}}>Project</span>
          </TWPHeader>
          <TWPSectionHeader
            fontWeight={'300'}
            width={'100%'}
            tabletFontSize={TWPStyleGuide.font.size.small}
          >
            planting with a purpose
          </TWPSectionHeader>
        </TWPDiv>
        <TopWrapper 
          flexDirection={'row'}
          width={'100%'}
          height={'75%'}
        >
          <TopTwoInfoBoxes 
            background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            desktopImage={null}
            borderRadius={'5px'}
            justifyContent={'space-between'}
            flex={'1 1 50%'}
            margin={'0 5%'}
            height={'45%'}
          >
            <TopTwoTopText 
              padding={'5% 2%'}
              color={TWPStyleGuide.color.darkGreen}
            >
              Installing wildflower gardens in urban environments and underutilized or vacant spaces
            </TopTwoTopText>
            <TWPDiv 
              flexDirection={'row'} 
              width={'90%'} 
              backgroundColor={TWPStyleGuide.color.white}
              margin={'2%'}
              borderRadius={'3px'}
              height={'40%'}
              alignItems={'center'}
              justifyContent={'space-around'}
            >
              <TopTwoClipArt
                src={squares}
                height={'unset'}
                width={'25%'}
              />
              <TopTwoBottomLeftNumberText
                alignItems={'flex-start'}
                width={'fit-content'}
              >
                <TopTwoNumbers 
                  color={TWPStyleGuide.color.brown} 
                  fontSize={TWPStyleGuide.font.size.mediumLarge}
                  textAlign={'left'}
                  padding={'0'}
                  width={'40%'}
                  tabletFontSize={TWPStyleGuide.font.size.medium}
                >
                  11,124
                </TopTwoNumbers>
                <TWPParagraph
                  padding={'0'} 
                  color={TWPStyleGuide.color.brown} 
                  textAlign={'left'}
                  width={'fit-content'}
                  tabletFontSize={TWPStyleGuide.font.size.smallTiny}
                >
                  Square Footage Restored
                </TWPParagraph>
              </TopTwoBottomLeftNumberText>
            </TWPDiv>
          </TopTwoInfoBoxes>
          <TopTwoInfoBoxes 
            background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            desktopImage={null}
            borderRadius={'5px'}
            justifyContent={'space-around'}
            flex={'1 1 50%'}
            margin={'0 5%'}
            height={'45%'}
          >
            <TopTwoTopText 
              padding={'5% 2%'}
              color={TWPStyleGuide.color.darkGreen}
            >
              Bringing vibrant, natural beauty to urban communities
            </TopTwoTopText>
            <TWPDiv 
              width={'90%'} 
              backgroundColor={TWPStyleGuide.color.white}
              flexDirection={'row'}
              margin={'2%'}
              borderRadius={'3px'}
              height={'40%'}
              alignItems={'center'}
            >
              <TopTwoNumbers 
                color={TWPStyleGuide.color.brown} 
                fontSize={TWPStyleGuide.font.size.mediumLarge}
                textAlign={'right'}
                width={'fit-content'}
                tabletFontSize={TWPStyleGuide.font.size.medium}
              >
                17
              </TopTwoNumbers>
              <TWPParagraph 
                color={TWPStyleGuide.color.brown} 
                width={'fit-content'}
                tabletFontSize={TWPStyleGuide.font.size.smallTiny}
              >
                Gardens Planted<br/>in the Twin Cities
              </TWPParagraph>
              <TopTwoClipArt
                src={Bouquet}
                height={'unset'}
                width={'30%'}
              />
            </TWPDiv>
          </TopTwoInfoBoxes>
        </TopWrapper>
      </TWPDiv>
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
      <DragonflySection
          background={`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0)), url(${Dragon})`}
          backgroundSize={'cover'}
          backgroundPosition={'bottom center'}
          height={'650px'}
          width={'100%'}
        >
        <TWPDiv
          flexDirection={'column'}
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
        >
          <ThirdSectionTopText
            fontSize={TWPStyleGuide.font.size.medium}
            color={TWPStyleGuide.color.white}
            tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          >
            By building habitat for pollinators, we can build a community of good neighbors and vibrant civil societies, supporting all members of our shared ecosystem.
          </ThirdSectionTopText>
          <BottomWrapper
            flexDirection={'row'}
            height={'60%'}
          >
          <BottomTwoInfoBoxes 
            background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            desktopImage={null}
            borderRadius={'5px'}
            justifyContent={'space-between'}
            flex={'1 1 50%'}
            margin={'0 2%'}
            padding={'unset'}
            height={'60%'}
            width={'unset'}
          >
            <BoxTopText 
              padding={'5% 5%'}
              color={TWPStyleGuide.color.darkGreen}
            >
              Revitalizing the health &amp; wellness of pollinator habitats
            </BoxTopText>
            <TWPDiv 
              flexDirection={'row'} 
              width={'100%'} 
              backgroundColor={TWPStyleGuide.color.lightGreen}
              margin={'unset'}
              alignItems={'center'}
              height={'30%'}
              borderRadius={'5px'}
            >
              <TWPHeader
                padding={'0'} 
                color={TWPStyleGuide.color.white} 
                textAlign={'left'}
                width={'fit-content'}
                tabletFontSize={TWPStyleGuide.font.size.medium}
              >
                #savethebees
              </TWPHeader>
            </TWPDiv>
          </BottomTwoInfoBoxes>
          <BottomTwoInfoBoxes 
            background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            desktopImage={null}
            borderRadius={'5px'}
            justifyContent={'space-between'}
            flex={'1 1 50%'}
            margin={'0 2%'}
            padding={'unset'}
            height={'60%'}
            width={'unset'}
          >
            <BoxTopText 
              padding={'5% 5%'}
              color={TWPStyleGuide.color.darkGreen}
            >
              Fostering education and community development through volunteerism and partnerships
            </BoxTopText>
            <TWPDiv 
              flexDirection={'row'} 
              width={'100%'} 
              backgroundColor={TWPStyleGuide.color.mustardYelow}
              margin={'unset'}
              alignItems={'center'}
              height={'30%'}
              borderRadius={'5px'}
            >
              <TWPHeader 
                color={TWPStyleGuide.color.white} 
                fontSize={TWPStyleGuide.font.size.mediumLarge}
                textAlign={'right'}
                width={'fit-content'}
                tabletFontSize={TWPStyleGuide.font.size.medium}
              >
                IG @wildflower_project
              </TWPHeader>
            </TWPDiv>
          </BottomTwoInfoBoxes>
          </BottomWrapper>
        </TWPDiv>
      </DragonflySection>
      <TWPDiv
        flexDirection={'row'}
        height={'100%'}
        width={'100%'}
        padding={'20px 2%'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
      >
        { this.displayImages() }
      </TWPDiv>
      <iframe 
        src="https://www.google.com/maps/d/u/0/embed?mid=1X8vfQjjnxOLWqmTO6JJf4-Tr5uo" 
        width={this.state.width} 
        height={this.state.height}
      />
      <FooterWrap
        height={'200px'}
        width={'100%'}
        flexDirection={'row'}
        padding={'0'}
      >
        <FooterDuo
          height={'100%'}
          backgroundColor={TWPStyleGuide.color.darkGreen}
          width={'50%'}
          justifyContent={'space-around'}
          flexDirection={'row'}
        >
          <QuicklinksWrap
            width={'85%'}
            height={'100%'}
            justifyContent={'space-around'}
          >
            <TWPDiv
              width={'100%'}
            >
              <TWPHeader
                color={TWPStyleGuide.color.white}
                width={'fit-content'}
                fontWeight={'100'}
                tabletFontSize={TWPStyleGuide.font.size.mediumLarge}
              >
                Quick Links
              </TWPHeader>
           </TWPDiv>
            <TWPDiv
              flexDirection={'row'}
              width={'100%'}
              justifyContent={'space-around'}
            >
              <TWPDiv
                width={'50%'}
              >
                <TWPAnchor
                  textAlign={'left'}
                  color={TWPStyleGuide.color.white}
                  width={'100%'}
                  href={'/aboutus'}
                >
                  About Us
                </TWPAnchor>
                <TWPAnchor
                  textAlign={'left'}
                  color={TWPStyleGuide.color.white}
                  width={'100%'}
                  href={'/contact'}
                >
                  Contact
                </TWPAnchor>
                <TWPAnchor
                  textAlign={'left'}
                  color={TWPStyleGuide.color.white}
                  width={'100%'}
                  href={'/volunteer'}
                >
                  Volunteer
                </TWPAnchor>
              </TWPDiv>
              <TWPDiv
                width={'50%'}
              >
                <TWPAnchor
                  textAlign={'left'}
                  color={TWPStyleGuide.color.white}
                  width={'100%'}
                  href={'/partnerships'}
                >
                  Partnerships
                </TWPAnchor>
                <TWPAnchor
                  textAlign={'left'}
                  color={TWPStyleGuide.color.white}
                  width={'100%'}
                  href={'/Donate'}
                >
                  Donate
                </TWPAnchor>
                <TWPAnchor
                  textAlign={'left'}
                  color={TWPStyleGuide.color.white}
                  width={'100%'}
                  href={'/photogallery'}
                >
                  Photo Gallery
                </TWPAnchor>
              </TWPDiv>
            </TWPDiv>
          </QuicklinksWrap>
          <TWPDiv
              width={'15%'}
              padding={'0'}
            >
              <TWPImage
                width={'85%'}
                src={whiteFlower}
              />
            </TWPDiv>
        </FooterDuo>
        <FooterDuo
          width={'50%'}   
          height={'100%'}
          justifyContent={'space-around'}     
        >
          <TWPDiv
            flexDirection={'row'}
            height={'60%'}
          >
            <TWPDiv
              width={'50%'}
            >
              <TWPImage
                width={'50%'}
                src={logo}
              />
            </TWPDiv>
            <TWPDiv
              width={'50%'}
            >
              <TWPParagraph
                color={TWPStyleGuide.color.darkGreen}
                width={'fit-content'}
              >
                887 Raymond AVe.<br/>Saint Paul, MN 55114
              </TWPParagraph>
            </TWPDiv>
          </TWPDiv>
          <TWPDiv
            width={'100%'}
          >
            <TWPParagraph
              width={'fit-content'}
              tabletFontSize={TWPStyleGuide.font.size.smallTiny}
            >
              The WildflowerProject is a 501(c)(3)non-profit organization. Your gifts are tax deductible.
            </TWPParagraph>
            <TWPParagraph
              width={'fit-content'}
              tabletFontSize={TWPStyleGuide.font.size.tiny}
            >
              &copy; COPYRIGHT 2018. ALL RIGHTS RESERVED
            </TWPParagraph>
          </TWPDiv>
        </FooterDuo>
      </FooterWrap>
    </TWPDiv>
    );
  }
}

export default Home;
