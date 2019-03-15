import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios';

import {
	TWPHeader,
	TWPDiv,
	TWPSectionHeader,
	TWPParagraph,
	TWPImage,
	TWPAnchor,
	media
} from '../../styles/GenericStyledComponents';
import TWPStyleGuide from '../../styles/TWPStyleGuide';

import Dragon from '../../assets/images/DragonflyBirdsEye.jpg';
import styled from 'styled-components';
import FeaturedEvent from '../../assets/images/FeaturedEvent.jpg';

const BoxTopText = TWPSectionHeader.extend`
	display: flex;
	align-items: center;
	${media.tablet`
    padding: 2%;
  `};
`;

const DragonFlySubHeader = TWPSectionHeader.extend`
	display: flex;
	align-items: center;
	padding: 50px 2%;
`;

const DragonflySection = TWPDiv.extend`
	&:before {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
	}
	${media.tablet`
    height: 100%;
  `};
`;

const BottomWrapper = TWPDiv.extend`
	${media.tablet`
    flex-direction: column;
    height: 75%;
    width: 100%;
  `};
`;

const BottomTwoInfoBoxes = TWPDiv.extend`
	${media.tablet`
    width: 70%;
    margin: 10px 0;
  `} @media(max-width: 500px) {
		width: 90%;
	}

	&:hover {
		background-color: white;
		cursor: pointer;
	}
`;

const BoxAnchorWrap = styled.a`
	width: 45%;

	${media.desktop`
    width: 50%;
  `} ${media.tablet`
    width: 70%;
    margin: 10px;
    display: flex;
  `} @media(max-width: 500px) {
		width: 90%;
	}
`;

const DragonFlyHeader = TWPHeader.extend`
	${media.tablet`
    padding: 30px 10px;
  `};
`;

class DragonFly extends Component {
	state = { photos: [] };

	componentDidMount() {
		axios
			.get('/api/instagram/tenGroup')
			.then((res) => this.setState({ photos: res.data.data }))
			.catch((res) => console.log(res));
	}

	displayImages = () => {
		return (
			<TWPDiv width={'225px'} height={'225px'} padding={'0'}>
				<TWPAnchor href={this.state.photos.link} target="_blank" rel="noopener noreferrer">
					<TWPImage
						width={'225px'}
						borderRadius={'5px'}
						height={'-webkit-fill-available'}
						className="homeSingleInsta"
						src={this.state.photos[0].images.standard_resolution.url}
					/>
				</TWPAnchor>
			</TWPDiv>
		);
	};

	displayFeatured = () => {};

	render() {
		return (
			<TWPDiv padding={'0'}>
				<DragonflySection
					background={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Dragon})`}
					// desktopImage={`url(${Dragon})`}
					// mobileBackground={`url(${Dragon})`}
					backgroundSize={'cover'}
					backgroundPosition={'bottom center'}
					height={'850px'}
					width={'100%'}
				>
					<TWPDiv
						flexDirection={'column'}
						width={'100%'}
						justifyContent={'space-between'}
						height={'100%'}
						alignItems={'center'}
					>
						<DragonFlyHeader
							fontSize={TWPStyleGuide.font.size.medium}
							tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
							color={TWPStyleGuide.color.white}
							padding={'30px 2%'}
						>
							Wildflowers | Urban | Community
						</DragonFlyHeader>
						<DragonFlySubHeader
							fontSize={TWPStyleGuide.font.size.mediumSmall}
							tabletFontSize={TWPStyleGuide.font.size.small}
							color={TWPStyleGuide.color.white}
						>
							By building habitat for pollinators, we can build a community of good neighbors and vibrant civil
							societies, supporting all members of our shared ecosystem.
						</DragonFlySubHeader>
						<BottomWrapper flexDirection={'row'} justifyContent={'space-around'} height={'60%'}>
							<BoxAnchorWrap target="_blank" href="https://www.instagram.com/wildflower_project/">
								<BottomTwoInfoBoxes
									background={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
									backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
									desktopImage={null}
									borderRadius={'5px'}
									justifyContent={'space-between'}
									flex={'1 1 50%'}
									margin={'0 2%'}
									padding={'unset'}
									height={'450px'}
									width={'unset'}
								>
									<TWPDiv height={'85%'} justifyContent={'space-around'}>
										<BoxTopText
											padding={'3%'}
											color={TWPStyleGuide.color.darkGreen}
											tabletFontSize={TWPStyleGuide.font.size.small}
										>
											Revitalizing the health &amp; wellness of pollinator habitats
										</BoxTopText>
										{this.state.photos.length && this.displayImages()}
										<TWPSectionHeader
											fontSize={TWPStyleGuide.font.size.mediumSmall}
											width={'100%'}
											tabletFontSize={TWPStyleGuide.font.size.small}
										>
											Follow Us on Instagram
										</TWPSectionHeader>
									</TWPDiv>
									<TWPDiv
										flexDirection={'row'}
										width={'100%'}
										backgroundColor={TWPStyleGuide.color.lightGreen}
										margin={'unset'}
										alignItems={'center'}
										height={'15%'}
										borderRadius={'0 0 5px 5px'}
									>
										<TWPHeader
											padding={'0'}
											textAlign={'left'}
											width={'fit-content'}
											fontSize={TWPStyleGuide.font.size.medium}
											tabletFontSize={TWPStyleGuide.font.size.medium}
											mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
										>
											#plantingwithapurpose
										</TWPHeader>
									</TWPDiv>
								</BottomTwoInfoBoxes>
							</BoxAnchorWrap>
							<BoxAnchorWrap
								target="_blank"
								href="https://stpaul.ce.eleyo.com/search?redirected_yet=true&sf[category]=71"
							>
								<BottomTwoInfoBoxes
									background={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
									backgroundColor={'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))'}
									desktopImage={null}
									borderRadius={'5px'}
									justifyContent={'space-between'}
									flex={'1 1 50%'}
									margin={'0 2%'}
									padding={'unset'}
									height={'450px'}
									width={'unset'}
								>
									<TWPDiv height={'85%'} justifyContent={'space-around'}>
										<BoxTopText
											padding={'3%'}
											color={TWPStyleGuide.color.darkGreen}
											tabletFontSize={TWPStyleGuide.font.size.small}
										>
											Fostering education and community development through volunteerism and partnerships
										</BoxTopText>
										<TWPDiv width={'225px'} height={'225px'} padding={'0'}>
											<TWPImage
												width={'225px'}
												borderRadius={'5px'}
												height={'-webkit-fill-available'}
												className="homeSingleInsta"
												src={FeaturedEvent}
											/>
										</TWPDiv>
										<TWPSectionHeader
											fontSize={TWPStyleGuide.font.size.mediumSmall}
											width={'100%'}
											tabletFontSize={TWPStyleGuide.font.size.small}
										>
											Sign Up for our Gardening Class!!
										</TWPSectionHeader>
									</TWPDiv>
									<TWPDiv
										flexDirection={'row'}
										width={'100%'}
										backgroundColor={TWPStyleGuide.color.yellow}
										margin={'unset'}
										alignItems={'center'}
										height={'15%'}
										borderRadius={'0 0 5px 5px'}
									>
										<TWPHeader
											fontSize={TWPStyleGuide.font.size.mediumLarge}
											textAlign={'right'}
											width={'fit-content'}
											tabletFontSize={TWPStyleGuide.font.size.medium}
											fontSize={TWPStyleGuide.font.size.medium}
											mobileFontSize={TWPStyleGuide.font.size.mediumSmall}
										>
											Featured Event
										</TWPHeader>
									</TWPDiv>
								</BottomTwoInfoBoxes>
							</BoxAnchorWrap>
						</BottomWrapper>
					</TWPDiv>
				</DragonflySection>
			</TWPDiv>
		);
	}
}

export default DragonFly;
