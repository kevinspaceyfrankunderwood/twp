import React, { Component } from "react";
import {
  TWPDiv,
  media,
  TWPSectionHeader,
  TWPParagraph,
  TWPImage
} from "../../styles/GenericStyledComponents";
import { ProjectInfo } from "../../assets/strings/ProjectInfo";
import TWPStyleGuide from "../../styles/TWPStyleGuide";

const InfoBoxWrap = TWPDiv.extend`
  ${media.tablet`
    width: 95%;
    flex-direction: column;
    height: 500px;
  `}
`;

const SliderParagraph = TWPParagraph.extend`
  line-height: 1.5;
`;

const ResponsiveFeaturedImage = TWPDiv.extend`
  ${media.tablet`
    border-right: 1px solid ${TWPStyleGuide.color.darkGreen};
    border-radius: 10px 10px 0 0;
    width: 90%;
    height: 60%;
  `}
`;

const ResponsiveFeaturedText = TWPDiv.extend`
  ${media.tablet`
    border-radius: 0 0 10px 10px;
    width: 90%;
    height: 40%;
  `}
`;

class ProjectSlider extends Component {
  state = { info: ProjectInfo[0], index: 0, here: 1 };

  timer = () => {
    if (this.state.index === ProjectInfo.length - 1) {
      this.setState({ info: ProjectInfo[0], index: 0 });
    } else {
      this.setState(state => {
        return {
          info: ProjectInfo[state.index + 1],
          index: state.index + 1
        };
      });
    }
  };

  componentDidMount() {
    setTimeout(() => {
      let intervalId = setInterval(this.timer, 4000);
      this.setState({ intervalId: intervalId });
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  informationBox = () => {
    const { info } = this.state;
    return (
      <InfoBoxWrap
        flexDirection={"row"}
        width={"75%"}
        borderRadius={"20px"}
        padding={"0"}
        margin='0 0 30px 0'
        height={"350px"}
      >
        <ResponsiveFeaturedImage
          borderLeft={`1px solid ${TWPStyleGuide.color.darkGreen}`}
          borderTop={`1px solid ${TWPStyleGuide.color.darkGreen}`}
          borderRadius={"10px 0 0 10px"}
          backgroundColor={TWPStyleGuide.color.white}
          height={"100%"}
          width={"50%"}
        >
          <TWPImage
            src={info.image}
            width={"100%"}
            height={"75%"}
            borderRadius={"5px"}
            smallTabletHeight={"70%"}
            smallTabletWidth={"90%"}
          />
          <TWPSectionHeader margin={"20px 0 0 0"}>{info.title}</TWPSectionHeader>
        </ResponsiveFeaturedImage>
        <ResponsiveFeaturedText
          borderRadius={"0 10px 10px 0"}
          backgroundColor={TWPStyleGuide.color.white}
          borderTop={`1px solid ${TWPStyleGuide.color.darkGreen}`}
          borderRight={`1px solid ${TWPStyleGuide.color.darkGreen}`}
          borderLeft={`1px solid ${TWPStyleGuide.color.darkGreen}`}
          height={"100%"}
          width={"50%"}
        >
          <SliderParagraph
            fontSize={TWPStyleGuide.font.size.small}
            textAlign={"center"}
            smallTabletFontSize={TWPStyleGuide.font.size.smallTiny}
          >
            {info.text}
          </SliderParagraph>
        </ResponsiveFeaturedText>
      </InfoBoxWrap>
    );
  };

  render() {
    return (
      <TWPDiv
        width={"100%"}
        padding={"0"}
        background={`linear-gradient(to bottom,  rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, ${
          TWPStyleGuide.color.darkGreen
        } 40%, ${TWPStyleGuide.color.darkGreen} 100%)`}
      >
        {this.informationBox()}
      </TWPDiv>
    );
  }
}

export default ProjectSlider;
