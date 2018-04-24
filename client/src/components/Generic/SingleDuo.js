import React, { Component } from 'react';

import styled from 'styled-components'

import { TWPDiv, TWPSectionHeader, TWPImage, TWPParagraph, TWPAnchor, TWPButton, media } from '../../styles/GenericStyledComponents'

import TWPStyleGuide from '../../styles/TWPStyleGuide'

const SectionDiv = TWPDiv.extend`
  flex-direction: row;
  width: 100%;
  height: ${({extended}) => extended ? '100%' : '400px'};
  min-height: 400px;
  ${media.desktop`
    height: ${({extended}) => extended ? '100%' : '400px'};
  `}
  ${media.tablet`
  height: 100%;
  flex-direction: column;
  `}
  `
  
const FlipOrderDiv = TWPDiv.extend`
  max-width: 40%;

  ${media.tablet`
    order: 1;
    padding: 2%;
    max-width: 80%;
  `}
`

const DuoDiv = TWPDiv.extend`
  max-width: 40%;

  ${media.tablet`
    padding: 2%;
    max-width: 80%;
  `}
`

const DuoPlus = TWPButton.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: .75;
`

const DuoMinus = TWPButton.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`

const DuoImage = TWPImage.extend`
  max-width: 300px;
  max-height: 350px;

  ${media.tablet`
    max-width: 250px;
    max-height: 300px;
  `}
`

const ParagraphDiv = TWPDiv.extend`
  
`

const AnchorDiv = styled.div`
  display: block; 
  position: relative;
  visibility: hidden;
  top: -260px;

  ${media.tablet`
    top: -150px;
  `}
`


class SingleDuo extends Component {
  state = { displayExtend: false }

  displayExtend = (item, isEvenRow) => {
    return(
      <TWPDiv 
        width={'90%'}
      >
        <TWPParagraph 
          fontWeight={'300'} 
          padding={'20px 0'}
          color={isEvenRow ? TWPStyleGuide.color.darkGreen : TWPStyleGuide.color.black}
          width={'100%'}
          >
            {item.longerDescription}
        </TWPParagraph>
        <DuoMinus 
          onClick={() => this.setState({ displayExtend: false })} 
          backgroundColor={TWPStyleGuide.color.white}
          color={TWPStyleGuide.color.secondary}
          border={isEvenRow ? `2px solid ${TWPStyleGuide.color.darkGreen}` : `2px solid ${TWPStyleGuide.color.black}`}
          width={'295px'}
          height={'40px'}
          borderRadius={'3px'}
          padding={'0'}
          fontSize={TWPStyleGuide.font.size.mediumLarge}
          >
            <span style={{height: '6px'}}>-</span>
          </DuoMinus>
      </TWPDiv>
    )
  }

  showExpand = (isEvenRow) => {
    return(
      <a href={`#${this.props.index}`}>
        <DuoPlus 
          onClick={() => this.setState({ displayExtend: true })} 
          backgroundColor={isEvenRow ? TWPStyleGuide.color.background : TWPStyleGuide.color.highlight}
          color={TWPStyleGuide.color.secondary}
          width={'295px'}
          height={'40px'}
          borderRadius={'3px'}
          border={isEvenRow ? `2px solid ${TWPStyleGuide.color.darkGreen}` : `2px solid ${TWPStyleGuide.color.black}`}
          padding={'0'}
          margin={'20px 0'}
          fontSize={TWPStyleGuide.font.size.mediumLarge}
        >
          <span style={{fontSize: '34px'}}>+</span>
        </DuoPlus>
      </a>
    )
  }

  render() {
    const { item, index } = this.props;
    const isEvenRow = ( index % 2 === 0 );
    const imageSection = (
      <DuoDiv
        flex={'1 1 60%'}
      >
        <TWPDiv
          width={'250px'}
        >
          <DuoImage
            boxShadow={'0'}
            width={'100%'}
            src={item.picture} 
            borderRadius={'40px'}
          />
        </TWPDiv>
      </DuoDiv>
    );

    const flipImageTablet = (
      <FlipOrderDiv
        flex={'1 1 60%'}
      >
        <TWPDiv
          width={'250px'}
        >
          <DuoImage
            boxShadow={'0'}
            width={'100%'}
            src={item.picture}
            borderRadius={'40px'}
          />
        </TWPDiv>
      </FlipOrderDiv>
    )
    const textSection = (
        <ParagraphDiv 
          id="top"
          flex={'1 1 60%'}
          maxWidth={'60%'} 
          maxHeight={'75%'} 
        >
        <TWPSectionHeader
          width={'fit-content'}
          padding={'2%'} 
          fontSize={TWPStyleGuide.font.size.mediumLarge}
          tabletFontSize={TWPStyleGuide.font.mediumLarge}
          color={isEvenRow ? TWPStyleGuide.color.darkGreen : TWPStyleGuide.color.black}
          >
          {item.title}
        </TWPSectionHeader>
        <TWPParagraph
          fontWeight={'400'}
          fontSize={TWPStyleGuide.font.size.mediumSmall}
          color={isEvenRow ? TWPStyleGuide.color.darkGreen : TWPStyleGuide.color.black}
          width={this.props.widthSetting ? this.props.widthSetting : null}
          textAlign={this.props.textAlignSetting ? this.props.textAlignSetting : null}
          >
          {item.description}
        </TWPParagraph>
        { this.state.displayExtend ? this.displayExtend(item, isEvenRow) : this.showExpand(isEvenRow)}
      </ParagraphDiv>
      )

      return (
          <SectionDiv
            backgroundColor={isEvenRow ? TWPStyleGuide.color.white : TWPStyleGuide.color.lightGreen}
            extended={this.state.displayExtend}
            className="herher"
            padding={'0'}
            padding={'2% 0'}
          >
            <AnchorDiv id={`${this.props.index}`} />
            {isEvenRow && textSection}
            {isEvenRow ? imageSection : flipImageTablet}
            {!isEvenRow && textSection}
          </SectionDiv>
      )
  }
}

export default SingleDuo;
