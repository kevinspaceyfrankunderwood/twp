import React, { Component } from 'react';
import { BLDiv, BLAnchor, BLButton, BLHeader, media } from '../../styles/GenericStyledComponents';
import TWPStyleGuide from '../../styles/TWPStyleGuide'
import { Icon } from 'semantic-ui-react'

const SectionDiv = BLDiv.extend`
  height: 200px;
  flex-direction: row;
  ${media.tablet`
    height: 400px;
    flex-direction: column;
  `}
`

const LeftContactDiv = BLDiv.extend`
  ${media.desktop`
    width: 50%;
  `}
  ${media.tablet`
    border-right: none;
    border-bottom: 1px solid ${TWPStyleGuide.color.white};
    width: 100%;
  `}
`

const RightContactDiv = BLDiv.extend`
  ${media.tablet`
    width: 100%;
  `}
`

const LeaveUsANoteButton = BLButton.extend`
  &:hover {
   background-color: ${TWPStyleGuide.color.white} 
  }
  ${media.desktop`
    font-size: ${TWPStyleGuide.font.size.medium};
    width: 85%
  `}
  ${media.tablet`
    font-size: ${TWPStyleGuide.font.size.mediumSmall};
  `}
  ${media.phone`
    font-size: ${TWPStyleGuide.font.size.small};
  `}
`

const EmailUsAnchor = BLAnchor.extend`
  border: 2px solid ${TWPStyleGuide.color.secondary};
  line-height: 1;
  padding: 1.5% 3%;
  width: 75%;
  height: 45px;
  font-weight: 300;
  border-radius: 10px;
  font-size: ${TWPStyleGuide.font.size.medium};
  color: ${TWPStyleGuide.color.title};
  font-family: ${TWPStyleGuide.font.family.monoFur};

  ${media.desktop`
    font-size: ${TWPStyleGuide.font.size.medium};
    width: 85%
    `}
  ${media.tablet`
    font-size: ${TWPStyleGuide.font.size.mediumSmall};
  `}
  ${media.phone`
    font-size: ${TWPStyleGuide.font.size.small};
  `}
`

class CommunicationDoubleDivide extends Component {
  render() {
      return (
        <SectionDiv
          padding={'0'}
        > 
          <LeftContactDiv 
            flex={'1 1 50%'} 
            height={'100%'}
            padding={'0'}
            backgroundColor={TWPStyleGuide.color.brightOrange}
          >
            <Icon 
            name="mail outline" 
            style={{fontSize: '40px', color: `${TWPStyleGuide.color.white}`}}
          />
            <EmailUsAnchor
              href="mailto:buzz.twp@gmail.com"
              hoverColor={TWPStyleGuide.color.brightOrange}
              hoverBackgroundColor={TWPStyleGuide.color.white}
              color={TWPStyleGuide.color.white}
            >
              Send us an email
            </EmailUsAnchor>
            <br/>
            <BLHeader
                fontWeight={'300'}
                fontSize={TWPStyleGuide.font.size.medium}
                color={TWPStyleGuide.color.white}
                fontFamily={TWPStyleGuide.font.family.monoFur}
                tabletFontSize={TWPStyleGuide.font.size.medium}
                mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
            >
              buzz.twp@gmail.com
            </BLHeader>
          </LeftContactDiv>
          <RightContactDiv 
            flex={'1 1 50%'} 
            height={'100%'}
            backgroundColor={TWPStyleGuide.color.yellow}
          >
            <Icon 
              name="pencil" 
              style={{fontSize: '40px'}}

            />
            <LeaveUsANoteButton 
              onClick={this.props.commentDisplay}
              padding={'1% 3%'}
              width={'75%'}
              fontSize={TWPStyleGuide.font.size.medium}
              height={'45px'}
              color={TWPStyleGuide.color.title}
              backgroundColor={TWPStyleGuide.color.yellow}
              font-family={TWPStyleGuide.font.family.monoFur}
              border={`2px solid ${TWPStyleGuide.color.black}`}
              >
              Submit a garden site
            </LeaveUsANoteButton>
            <br/>
            <BLHeader
                fontWeight={'300'}
                fontSize={TWPStyleGuide.font.size.medium}
                color={TWPStyleGuide.color.title}
                fontFamily={TWPStyleGuide.font.family.monoFur}
                tabletFontSize={TWPStyleGuide.font.size.medium}
                mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
            >
              more flowers the merrier...
            </BLHeader>
          </RightContactDiv> 
        </SectionDiv>
    );
  }
}

export default CommunicationDoubleDivide;


// DOUBLE Divide Code:
/*
        <BLDiv 
          height={'300px'} 
          flexDirection={'row'}
        > 
          <BLDiv 
            flex={'1 1 50%'} 
            borderRight={`1px solid ${TWPStyleGuide.color.bodyText}`} 
            height={'80%'}
          >
            <Icon 
            name="mail outline" 
            style={{fontSize: '70px'}}
          />
            <BLAnchor
                fontWeight={'300'}
                fontSize={TWPStyleGuide.font.size.large}
                color={TWPStyleGuide.color.title}
                hoverColor={TWPStyleGuide.color.highlight}
                fontFamily={TWPStyleGuide.font.family.monoFur}
                href="mailto:bettermentLabs@gmail.com"
            >
              Shoot Us an Email
            </BLAnchor>
            <br/>
            <BLHeader
                fontWeight={'300'}
                fontSize={TWPStyleGuide.font.size.medium}
                color={TWPStyleGuide.color.title}
                fontFamily={TWPStyleGuide.font.family.monoFur}
            >
              BettermentLabs@gmail.com
            </BLHeader>
          </BLDiv>
          <BLDiv 
            flex={'1 1 50%'} 
            height={'80%'}
          >
            <Icon 
              name="pencil" 
              style={{fontSize: '40px'}}
            />
            <BLButton 
              onClick={this.props.commentDisplay}
              borderRadius={'5px'} 
              padding={'1% 3%'}
              fontSize={TWPStyleGuide.font.size.small}
              color={TWPStyleGuide.color.background}
              backgroundColor={TWPStyleGuide.color.lightBlue}
              hoverBackground={TWPStyleGuide.color.title}
              width={'50%'}
              >
              Leave Us a Note
            </BLButton>
          </BLDiv> 
        </BLDiv>
*/