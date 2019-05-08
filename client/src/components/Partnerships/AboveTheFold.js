import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./AboveTheFold.css";
import styled from "styled-components";

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

import Volunteers from "../../assets/images/volunteers.jpeg";
import Partner from "../../assets/images/PartnerPic.jpg";

const ResponsiveDiv = TWPDiv.extend`
  ${media.tablet`
    height: 300px;
    margin-top: 110px;
    background-position: center;
  `}
`;

const GreenSectionHeader = TWPSectionHeader.extend`
  ${media.tablet`
    padding: 50px 2%;
  `}
`;

const StyledDiv = styled.div`
  ${media.tablet`
    margin-top: 100px;
  `}
`;

export const AboveTheFold = () => {
  return (
    <StyledDiv>
      <ResponsiveDiv
        background={` url(${Partner}) `}
        backgroundPosition={"center"}
        mobileBackgroundPosition={"top right"}
        backgroundSize={"cover"}
        height={"450px"}
        width={"100%"}
        justifyContent={"flex-start"}
      />
      <TWPHeader>Partnerships</TWPHeader>
      <TWPDiv height={"100%"} width={"100%"} padding={"0"}>
        <GreenSectionHeader
          padding={"70px 2%"}
          backgroundColor={TWPStyleGuide.color.white}
          color={TWPStyleGuide.color.darkGreen}
          fontSize={TWPStyleGuide.font.size.medium}
          smallTabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          mobileFontFontSize={TWPStyleGuide.font.size.small}
          fontWeight={"300"}
        >
          Strong partnerships support to healthy communities,
          <br />
          Healthy communities support to happy lives.
        </GreenSectionHeader>
      </TWPDiv>
    </StyledDiv>
  );
};

export default AboveTheFold;
