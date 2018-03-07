import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor } from '../styles/GenericStyledComponents'
import TWPStyleGuide from '../styles/TWPStyleGuide';

import Field from '../assets/images/FlowerField.jpg'
import Monarch from '../assets/images/MonachBackSide.jpg'
import squares from '../assets/images/Squares.png'
import Bouquet from '../assets/images/BouquetOranges.png'
import Dragon from '../assets/images/DragonflyBirdsEye.jpg'
import whiteFlower from '../assets/images/basicWhiteFlower.png'
import logo from '../assets/images/logoFullSize.png'

const BoxTopText = TWPSectionHeader.extend`
  height: 70%;
  display: flex;
  align-items: center;
`

const ThirdSectionTopText = TWPHeader.extend`
  height: 40%;
  display: flex;
  align-items: center;
`

class Home extends Component {
  state = { photos: [] }

	// componentDidMount() {
	// 	axios.get('api/instagram/home')
	// 	.then( res => this.setState({ photos: res.data.data }) )
	// }
 
	// displayImages = () => {
	// 	return this.state.photos.map( pic => 
	// 		<Grid.Column computer={4} mobile={16} tablet={8} >
	// 			<BLink href="https://www.instagram.com/fit_2recover/?hl=en" target="_blank" rel="noopener noreferrer" className="homeInsta">
	// 				<div className="homeInstaTitle">
	// 					Follow Us @fit_2recover
	// 						<Icon name="instagram" />
	// 				</div>
	// 				<Image className="homeSingleInsta" src={pic.images.standard_resolution.url} />
	// 	    </BLink>
	// 		</Grid.Column>
	// 	)
  // }
  

  render() {
    return(
    <TWPDiv 
      padding={'0'}
    >
      <TWPDiv
        background={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${Field})`}
        backgroundSize={'100%'}
        backgroundPosition={'bottom center'}
        backgroundAttachment={'fixed'}
        height={'650px'}
      >
        <TWPDiv
          height={'25%'} 
          width={'100%'}
        >
          <TWPHeader 
            fontWeight={'300'}
            width={'100%'}
          >
            <span style={{color: TWPStyleGuide.color.yellow}}>The </span>
            <span style={{color: TWPStyleGuide.color.brightOrange}}>Wildflower </span>
            <span style={{color: TWPStyleGuide.color.darkGreen}}>Project</span>
          </TWPHeader>
          <TWPSectionHeader
            fontWeight={'300'}
            width={'100%'}
          >
            planting with a purpose
          </TWPSectionHeader>
        </TWPDiv>
        <TWPDiv 
          flexDirection={'row'}
          width={'100%'}
          height={'75%'}
        >
          <TWPDiv 
            background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            desktopImage={null}
            borderRadius={'5px'}
            justifyContent={'space-around'}
            flex={'1 1 50%'}
            margin={'0 5%'}
            height={'45%'}
          >
            <TWPSectionHeader 
              padding={'5% 2%'}
              color={TWPStyleGuide.color.darkGreen}
            >
              Installing wildflower gardens in urban environments and underutilized or vacant spaces
            </TWPSectionHeader>
            <TWPDiv 
              flexDirection={'row'} 
              width={'90%'} 
              backgroundColor={TWPStyleGuide.color.white}
              margin={'2%'}
              borderRadius={'3px'}
              height={'40%'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <TWPImage
                src={squares}
                height={'unset'}
                width={'30%'}
              />
              <TWPDiv
                alignItems={'flex-start'}
                width={'60%'}
              >
                <TWPSectionHeader 
                  color={TWPStyleGuide.color.brown} 
                  fontSize={TWPStyleGuide.font.size.mediumLarge}
                  textAlign={'left'}
                  padding={'0'}
                  width={'40%'}
                >
                  11,124
                </TWPSectionHeader>
                <TWPParagraph
                  padding={'0'} 
                  color={TWPStyleGuide.color.brown} 
                  textAlign={'left'}
                  width={'fit-content'}
                >
                  Square Footage Restored
                </TWPParagraph>
              </TWPDiv>
            </TWPDiv>
          </TWPDiv>
          <TWPDiv 
            background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
            desktopImage={null}
            borderRadius={'5px'}
            justifyContent={'space-around'}
            flex={'1 1 50%'}
            margin={'0 5%'}
            height={'45%'}
          >
            <TWPSectionHeader 
              padding={'5% 2%'}
              color={TWPStyleGuide.color.darkGreen}
            >
              Bringing vibrant, natural beauty to urban communities
            </TWPSectionHeader>
            <TWPDiv 
              width={'90%'} 
              backgroundColor={TWPStyleGuide.color.white}
              flexDirection={'row'}
              margin={'2%'}
              borderRadius={'3px'}
              height={'40%'}
              alignItems={'center'}
            >
              <TWPImage
                src={Bouquet}
                height={'unset'}
                width={'30%'}
              />
              <TWPSectionHeader 
                color={TWPStyleGuide.color.brown} 
                fontSize={TWPStyleGuide.font.size.mediumLarge}
                textAlign={'right'}
                width={'fit-content'}
              >
                17
              </TWPSectionHeader>
              <TWPParagraph 
                color={TWPStyleGuide.color.brown} 
                width={'fit-content'}
              >
                Gardens Planted<br/>in the Twin Cities
              </TWPParagraph>
            </TWPDiv>
          </TWPDiv>
        </TWPDiv>
      </TWPDiv>
      <TWPDiv
          background={`linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${Monarch}) fixed`}
          backgroundPosition={'center'}
          backgroundSize={'100%'}
          backgroundPosition={'fixed'}
          height={'600px'}
          width={'100%'}
        >
          <TWPHeader>
            Every seed we plant, we plant for pollinators
          </TWPHeader>            
        </TWPDiv>
      <TWPDiv
          background={`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0)), url(${Dragon})`}
          backgroundPosition={'center'}
          backgroundSize={'100%'}
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
          >
            By building habitat for pollinators, we can build a community of good neighbors and vibrant civil societies, supporting all members of our shared ecosystem.
          </ThirdSectionTopText>
          <TWPDiv
            flexDirection={'row'}
            height={'60%'}
          >
          <TWPDiv 
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
              padding={'5% 2%'}
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
              >
                #savethebees
              </TWPHeader>
            </TWPDiv>
          </TWPDiv>
          <TWPDiv 
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
              padding={'5% 2%'}
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
              >
                IG @wildflower_project
              </TWPHeader>
            </TWPDiv>
          </TWPDiv>
          </TWPDiv>
        </TWPDiv>
      </TWPDiv>
      <TWPDiv
        height={'200px'}
        width={'100%'}
        flexDirection={'row'}
        padding={'0'}
      >
        <TWPDiv
          height={'100%'}
          backgroundColor={TWPStyleGuide.color.darkGreen}
          width={'50%'}
          justifyContent={'space-around'}
        >
          <TWPDiv
            width={'100%'}
          >
            <TWPHeader
              color={TWPStyleGuide.color.white}
              width={'fit-content'}
              fontWeight={'100'}
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
              width={'33%'}
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
              width={'33%'}
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
            <TWPDiv
              width={'33%'}
            >
              <TWPImage
                width={'30%'}
                src={whiteFlower}
              />
            </TWPDiv>
          </TWPDiv>
        </TWPDiv>
        <TWPDiv
          width={'50%'}   
          height={'100%'}
          justifyContent={'space-around'}     
        >
          <TWPDiv
            flexDirection={'row'}
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
            >
              &copy; COPYRIGHT 2018. ALL RIGHTS RESERVED
            </TWPParagraph>
            <TWPParagraph
              width={'fit-content'}
            >
              The WildflowerProject is a 501(c)(3)non-profit organization. Your gifts are tax deductible.
            </TWPParagraph>
          </TWPDiv>
        </TWPDiv>
      </TWPDiv>
    </TWPDiv>
    );
  }
}

export default Home;
