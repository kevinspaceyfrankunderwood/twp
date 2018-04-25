import React, { Component } from 'react';

import { TWPHeader, TWPDiv, TWPSectionHeader, TWPParagraph, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Youngster from '../../assets/images/youngPlant.jpg'
import Monarch from '../../assets/images/MonachBackSide.jpg'

const SectionWrap = TWPSectionHeader.extend`
  ${media.tablet`
    font-size: ${TWPStyleGuide.font.size.small};
  `}
`


export const AboveTheFold = () => {
  return(
    <TWPDiv
      backgroundColor={TWPStyleGuide.color.darkGreen}
      width={'100%'}
      padding={'0 2% 2% 2%'}
    >
      <SectionWrap
        padding={'1%'}
        color={TWPStyleGuide.color.white}
        tabletFontSize={TWPStyleGuide.font.size.small}
      >
        - TED Talk -<br/>Marla Spivak, Entomologist and Professor, University of Minnesota
      </SectionWrap>
      <SectionWrap
        padding={'1%'}
        color={TWPStyleGuide.color.white}
        tabletFontSize={TWPStyleGuide.font.size.small}
      >
        Why Bees Are Disappearing
      </SectionWrap>
      <iframe id="tubeplayer-player-container-2192d820-7988-4b98-9089-0486c7fd89bf" frameborder="0" allowfullscreen="1" allow=" encrypted-media" title="YouTube video player" width="80%" height={window.innerWidth < 768 ? "250" : "490"} src="https://www.youtube.com/embed/dY7iATJVCso?autoplay=0&amp;mute=0&amp;autohide=1&amp;controls=1&amp;loop=1&amp;playlist&amp;rel=0&amp;fs=1&amp;wmode=transparent&amp;showinfo=0&amp;modestbranding=1&amp;iv_load_policy=1&amp;start=0&amp;theme=dark&amp;color=red&amp;playsinline=false&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fwww.thewildflowerprojectmn.org&amp;widgetid=1"></iframe>
    </TWPDiv>
  );
}


export default AboveTheFold;
