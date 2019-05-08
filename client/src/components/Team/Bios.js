import React, { Component } from "react";

import { employees, board } from "../../assets/strings/Team";

import TWPStyleGuide from "../../styles/TWPStyleGuide";

import SingleDuo from "../Generic/SingleDuo";
import { TWPSectionHeader, TWPDiv } from "../../styles/GenericStyledComponents";

const TeamHeaderText = TWPSectionHeader.extend`
  border-bottom: 1px solid ${TWPStyleGuide.color.darkGreen};
`;

class Bios extends Component {
  employees = () => {
    return employees.map((person, i) => {
      const item = {
        title: person.fullName,
        description: person.title,
        picture: person.photo,
        longerDescription: person.longBio
      };
      return (
        <SingleDuo
          item={item}
          index={i}
          widthSetting={"100%"}
          textAlignSetting={"center"}
        />
      );
    });
  };

  board = () => {
    return board.map((person, i) => {
      const item = {
        title: person.fullName,
        description: person.title,
        picture: person.photo,
        longerDescription: person.longBio
      };
      return (
        <SingleDuo
          item={item}
          index={i + 2}
          widthSetting={"100%"}
          textAlignSetting={"center"}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <TWPDiv padding={"0"}>
          <TeamHeaderText
            padding={"5%"}
            fontSize={TWPStyleGuide.font.size.mediumLarge}
            smallTabletFontSize={TWPStyleGuide.font.size.medium}
            mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
          >
            Founders
          </TeamHeaderText>
          {this.employees()}
        </TWPDiv>
        <TWPDiv padding={"0"}>
          <TeamHeaderText
            padding={"5%"}
            fontSize={TWPStyleGuide.font.size.mediumLarge}
            smallTabletFontSize={TWPStyleGuide.font.size.medium}
            mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
          >
            Strategic Advisors
          </TeamHeaderText>
          {this.board()}
        </TWPDiv>
      </div>
    );
  }
}

export default Bios;
