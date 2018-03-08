import React, { Component } from 'react';

import ContactUsSection from './Contact Us/ContactUsSection'

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../styles/GenericStyledComponents'
import TWPStyleGuide from '../styles/TWPStyleGuide';

import whiteFlower from '../assets/images/basicWhiteFlower.png'
import logo from '../assets/images/logoFullSize.png'

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

const Footer = () => { 
    return(
      <div>
      <ContactUsSection />
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
                  href={'/mission'}
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
    </div>
  );
}

export default Footer;
