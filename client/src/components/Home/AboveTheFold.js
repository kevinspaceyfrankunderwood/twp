import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Field from '../../assets/images/FlowerField.jpg'
import squares from '../../assets/images/Squares.png'
import Bouquet from '../../assets/images/BouquetOranges.png'

const AboveTheFoldWrap = TWPDiv.extend`
  ${media.tablet`
    margin-top: 50px;
  `}
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

export const AboveTheFold = () => {
    return(
    <AboveTheFoldWrap 
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
    </AboveTheFoldWrap>
  );
}


export default AboveTheFold;
