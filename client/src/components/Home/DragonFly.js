import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Dragon from '../../assets/images/DragonflyBirdsEye.jpg'
import styled from 'styled-components';


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

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`

const BoxAnchorWrap = styled.a`
  width: 45%;

  ${media.desktop`
    width: 50%;
  `}

  ${media.tablet`
    width: 95%;
    margin: 10px;
    display: flex;
  `}

`

export const DragonFly = () => {  
  return(
    <TWPDiv 
      padding={'0'}
    >
      <DragonflySection
          background={`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0)), url(${Dragon}) fixed`}
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
            justifyContent={'space-around'}
            height={'60%'}
          >
            <BoxAnchorWrap href="https://www.instagram.com/explore/tags/savethebees/">
              <BottomTwoInfoBoxes 
                background={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
                backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
                desktopImage={null}
                borderRadius={'5px'}
                justifyContent={'space-between'}
                flex={'1 1 50%'}
                margin={'0 2%'}
                padding={'unset'}
                height={'200px'}
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
                    textAlign={'left'}
                    width={'fit-content'}
                    fontSize={TWPStyleGuide.font.size.medium}
                    tabletFontSize={TWPStyleGuide.font.size.medium}
                    mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
                  >
                    #savethebees
                  </TWPHeader>
                </TWPDiv>
              </BottomTwoInfoBoxes>
            </BoxAnchorWrap>
            <BoxAnchorWrap href="https://www.instagram.com/wildflower_project/">
              <BottomTwoInfoBoxes 
                background={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
                backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
                desktopImage={null}
                borderRadius={'5px'}
                justifyContent={'space-between'}
                flex={'1 1 50%'}
                margin={'0 2%'}
                padding={'unset'}
                height={'200px'}
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
                  backgroundColor={TWPStyleGuide.color.yellow}
                  margin={'unset'}
                  alignItems={'center'}
                  height={'30%'}
                  borderRadius={'5px'}
                >
                  <TWPHeader 
                    fontSize={TWPStyleGuide.font.size.mediumLarge}
                    textAlign={'right'}
                    width={'fit-content'}
                    tabletFontSize={TWPStyleGuide.font.size.medium}
                    fontSize={TWPStyleGuide.font.size.medium}
                    mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
                  >
                    IG @wildflower_project
                  </TWPHeader>
                </TWPDiv>
              </BottomTwoInfoBoxes>
            </BoxAnchorWrap>
          </BottomWrapper>
        </TWPDiv>
      </DragonflySection>
    </TWPDiv>
  );
}

export default DragonFly;
