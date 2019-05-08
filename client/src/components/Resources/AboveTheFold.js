import React, { Component } from "react";

import {
  TWPHeader,
  TWPDiv,
  TWPSectionHeader,
  TWPParagraph,
  TWPImage,
  TWPAnchor,
  media
} from "../../styles/GenericStyledComponents";
import TWPStyleGuide from "../../styles/TWPStyleGuide";

import Youngster from "../../assets/images/youngPlant.jpg";
import Monarch from "../../assets/images/MonachBackSide.jpg";

const TopWrap = TWPDiv.extend`
  ${media.tablet`
    margin-top: 120px;
    padding: 0 50px;
  `}
`;

export const AboveTheFold = () => {
  return (
    <TopWrap
      backgroundColor={TWPStyleGuide.color.white}
      height={"250px"}
      padding={"0 100px"}
      width={"100%"}
    >
      <TWPHeader
        fontSize={TWPStyleGuide.font.size.medium}
        tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
      >
        Welcome to the Resources page!
        <br />
        <br />
      </TWPHeader>
      <TWPSectionHeader tabletFontSize={TWPStyleGuide.font.size.small}>
        From here, you can learn all about Minnesota's native pollinators and discover new
        plant species to attract them in your own backyard!
      </TWPSectionHeader>
    </TopWrap>
  );
};

export default AboveTheFold;
