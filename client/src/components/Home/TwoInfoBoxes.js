import React from 'react'
import {
  TWPDiv,
  TWPSectionHeader,
  TWPImage,
  TWPParagraph,
  media
} from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide'
import Bouquet from '../../assets/images/BouquetOranges.png'

import squares from '../../assets/images/Squares.png'

export default function TwoInfoBoxes() {
  return (
    <TopWrapper
      flexDirection={'row'}
      width={'100%'}
      background={
        'linear-gradient(to right, #92d03d 0%,#ffffff 40%,#ffffff 56%,#92d03d 100%)'
      }
      justifyContent='space-around'
    >
      <TopTwoInfoBoxes
        background={'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'}
        backgroundColor={
          'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'
        }
        desktopImage={null}
        borderRadius={'5px'}
        justifyContent={'space-around'}
        flex={'1 1 50%'}
        margin={'10px 0'}
        width={'45%'}
        height='95%'
        padding='0'
        maxWidth='500px'
        minWidth='330px'
      >
        <TopTwoTopText padding={'5% 2%'} color={TWPStyleGuide.color.darkGreen}>
          Installing wildflower gardens in urban environments and underutilized or vacant
          spaces
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
          <TopTwoClipArt src={squares} height={'unset'} width={'25%'} />
          <TopTwoBottomLeftNumberText alignItems={'flex-start'} width={'fit-content'}>
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
        backgroundColor={
          'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'
        }
        desktopImage={null}
        borderRadius={'5px'}
        justifyContent={'space-around'}
        flex={'1 1 50%'}
        margin={'10px 0'}
        width={'45%'}
        height='95%'
        padding='0'
        maxWidth='500px'
        minWidth='330px'
      >
        <TopTwoTopText padding={'5% 2%'} color={TWPStyleGuide.color.darkGreen}>
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
            20
          </TopTwoNumbers>
          <TWPParagraph
            color={TWPStyleGuide.color.brown}
            width={'fit-content'}
            tabletFontSize={TWPStyleGuide.font.size.smallTiny}
          >
            Gardens Planted
            <br />
            in the Twin Cities
          </TWPParagraph>
          <TopTwoClipArt src={Bouquet} height={'unset'} width={'30%'} />
        </TWPDiv>
      </TopTwoInfoBoxes>
    </TopWrapper>
  )
}

const TopTwoInfoBoxes = TWPDiv.extend`
  @media (max-width: 1025px) {
    max-width: unset;
  }
  ${media.desktop`
    height: 55%
  `}
  ${media.tablet`
    width: 70%;
    margin: 10px 0;
  `}
  @media(max-width: 500px) {
    width: 90%;
  }
`

const TopWrapper = TWPDiv.extend`
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`

const TopTwoTopText = TWPSectionHeader.extend`
  height: 60%;
  display: flex;
  align-items: center;

  ${media.phone`
    font-size: ${TWPStyleGuide.font.size.small};
  `}
`

const TopTwoClipArt = TWPImage.extend`
  max-height: 72px;

  ${media.tablet`
    width: 25%
  `}
`

const TopTwoNumbers = TWPSectionHeader.extend`
  @media (max-width: 450px) {
    font-size: 2em;
  }
`

const TopTwoBottomLeftNumberText = TWPDiv.extend`
  @media (max-width: 450px) {
    padding: 0 6%;
  }
`
