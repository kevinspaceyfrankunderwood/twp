import React from 'react';

import { BLCard, BLHeader, media } from '../../styles/GenericStyledComponents'
// import Satellite from '../../../assets/images/SaltLakeSatellite.jpg'
import BLStyleGuide from '../../styles/TWPStyleGuide'

// class FeaturedApp extends Component {
//   render() {

    const LargeHeaderResponsive = BLHeader.extend`
        ${media.desktop`
            font-size: ${BLStyleGuide.font.size.mediumLarge}
        `}
        ${media.tablet`
            font-size: ${BLStyleGuide.font.size.medium}
        `}
        ${media.phone`
            font-size: ${BLStyleGuide.font.size.mediumSmall}
        `}
    `

    const MediumHeaderResponsive = BLHeader.extend`
        ${media.desktop`
            font-size: ${BLStyleGuide.font.size.medium}
        `}
        ${media.tablet`
            font-size: ${BLStyleGuide.font.size.mediumSmall}
        `}
        ${media.phone`
            font-size: ${BLStyleGuide.font.size.small}
        `}
    `

    const SmallHeaderResponsive = BLHeader.extend`
        ${media.desktop`
            font-size: ${BLStyleGuide.font.size.mediumSmall}
        `}
        ${media.tablet`
            font-size: ${BLStyleGuide.font.size.small}
        `}
        ${media.phone`
            font-size: ${BLStyleGuide.font.size.smallTiny}
        `}
    `

const SimpleTextBar = (props) => {
    return (
      <BLCard
        width={'100%'}
        height={props.height || '180px'}
        padding={'2%'}
        backgroundColor={props.backgroundColor || BLStyleGuide.color.title}
        href={props.href}
        borderRadius={'0'}
        >
        {props.textBig &&
        <LargeHeaderResponsive 
            fontWeight={'100'}
            hoverColor={props.hoverColor}
            fontSize={BLStyleGuide.font.size.mediumLarge}
            fontFamily={BLStyleGuide.font.family.monoFur}
            color={props.textColor || BLStyleGuide.color.highlight}
            >
        {props.textBig}
        </LargeHeaderResponsive>}

        {props.textMedium &&
        <MediumHeaderResponsive 
            fontWeight={'100'}
            hoverColor={props.hoverColor}
            fontSize={BLStyleGuide.font.size.medium}
            fontFamily={BLStyleGuide.font.family.monoFur}
            color={props.textColor || BLStyleGuide.color.highlight}
            >
        {props.textMedium}
        </MediumHeaderResponsive>
        }

        {props.textSmall &&
        <SmallHeaderResponsive
            fontWeight={'100'}
            hoverColor={props.hoverColor}
            style={{justifySelf:'flex-end'}}
            fontSize={BLStyleGuide.font.size.mediumSmall}
            fontFamily={BLStyleGuide.font.family.monoFur}
            color={props.textColor || BLStyleGuide.color.highlight}
            >
        {props.textSmall}
        </SmallHeaderResponsive>
        }
        {props.children}
    </BLCard>
    );
}

export default SimpleTextBar;

/*
<BLCard height={this.props.height} 
              width={this.props.width} 
              flexWrap={this.props.flexWrap}
              border={this.props.border}
              margin={this.props.margin}
              padding={this.props.padding}
              justifyContent={'space-evenly'}
              backgroundColor={this.props.backgroundColor}
              boxShadow={this.props.boxShadow}
              href={this.props.href}
              target="_blank"
              rel="noopener noreferrer"
              >*/