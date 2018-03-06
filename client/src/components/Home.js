import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage } from '../styles/GenericStyledComponents'
import Field from '../assets/images/FlowerField.jpg'
import Monarch from '../assets/images/MonachBackSide.jpg'
import squares from '../assets/images/Squares.png'
import Bouquet from '../assets/images/BouquetOranges.png'
import TWPStyleGuide from '../styles/TWPStyleGuide';

class Home extends Component {
  render() {
    return(
    <TWPDiv>
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
              Installing wildflower gardens in uraban environments and underutilized or vacant spaces
            </TWPSectionHeader>
            <TWPDiv 
              flexDirection={'row'} 
              width={'90%'} 
              backgroundColor={TWPStyleGuide.color.white}
              margin={'2%'}
              borderRadius={'3px'}
              height={'40%'}
              alignItems={'center'}
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
        {/* Bottom Duo */}
      <TWPDiv
          background={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${Monarch})`}
          backgroundPosition={'center'}
          backgroundSize={'100%'}
          backgroundPosition={'fixed'}
          height={'650px'}
          width={'100%'}
        >
        <TWPDiv
          flexDirection={'row'}
          width={'100%'}
          height={'100%'}
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
              Installing wildflower gardens in uraban environments and underutilized or vacant spaces
            </TWPSectionHeader>
            <TWPDiv 
              flexDirection={'row'} 
              width={'90%'} 
              backgroundColor={TWPStyleGuide.color.white}
              margin={'2%'}
              borderRadius={'3px'}
              height={'40%'}
              alignItems={'center'}
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
    </TWPDiv>
    );
  }
}

export default Home;
