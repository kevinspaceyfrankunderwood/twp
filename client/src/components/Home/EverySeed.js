import React, { Component } from 'react';
import axios from 'axios'

import { TWPHeader, TWPDiv, TWPImage, media, TWPSectionHeader } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const ResponsiveHeader = TWPSectionHeader.extend`
  width: 75%;

  ${media.desktop`
    width: 80%;
  `}
  ${media.tablet`
    font-size: ${TWPStyleGuide.font.size.small};
    width: 90%;
    padding: 30px 10px;
  `}
  ${media.phone`
    width: 95%;
  `}
`



const DisappearingDiv = TWPDiv.extend`
@media(max-width: 605px){
  display: none;
}
`

const DisappearingFirstDiv = TWPDiv.extend`
  @media(max-width: 907px){
    display: none;
  }
`

const SixHundredFiveDiv = TWPDiv.extend`
  @media (max-width: 605px){
    display: none;
  }
`

export default class EverySeed extends React.Component {  

  state = { photos: [] }

  componentDidMount() {
		axios.get('/api/instagram/bundle')
    .then( res => this.setState({ photos: res.data.data }) )
    .catch( res => console.log(res))
  }

  displayPhotos = () => {
    console.log("here")
    const first = Math.floor(Math.random() * 3) + 1
    const second = Math.floor(Math.random() * 3) + 4
    const third = Math.floor(Math.random() * 3) + 7
    console.log(this.state.photos[first])
    return(
      <TWPDiv
          width={'90%'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          padding={'4% 2%'}
        >
          <DisappearingDiv
            width={'250px'}
            height={'250px'}
            minWidth={'250px'}
            margin={'5px'}
            padding={'0'}
          >
            <TWPImage
              src={this.state.photos[first].images.standard_resolution.url}
            />
          </DisappearingDiv>
          <DisappearingFirstDiv
            width={'250px'}
            height={'250px'}
            minWidth={'250px'}
            margin={'5px'}
            padding={'0'}
          >
            <TWPImage
              src={this.state.photos[second].images.standard_resolution.url}
            />
          </DisappearingFirstDiv>
          <TWPDiv
            width={'250px'}
            height={'250px'}
            minWidth={'250px'}
            margin={'5px'}
            padding={'0'}
          >
            <TWPImage
              src={this.state.photos[third].images.standard_resolution.url}
            />
          </TWPDiv>
        </TWPDiv>
    )
  }

  render() {
    return(
      <TWPDiv
        justifyContent={'space-evenly'}
        padding={'0'}
      >
        <ResponsiveHeader
          color={TWPStyleGuide.color.darkOrange}
          padding={'30px 10px'}
        >
          The Wildflower Project's focus is to serve as environmental and community stewards, fulfilling our promise of planting with a purpose.
        </ResponsiveHeader>
        { this.state.photos.length && this.displayPhotos() }
      </TWPDiv>
    )
  }
}
