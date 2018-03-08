import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'

import { TWPDiv, TWPImage, TWPAnchor, media } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';


class InstagramGoogle extends Component {
  state = { photos: [], height: window.innerHeight, width: window.innerWidth }

	componentDidMount() {
		axios.get('api/instagram/index')
		.then( res => this.setState({ photos: res.data.data }) )
	}
 
	displayImages = () => {
		return this.state.photos.map( pic => 
			<TWPDiv
        width={'250px'}
        height={'250px'}
        padding={'0'}
        margin={'10px'}
      >
				<TWPAnchor href={pic.link} target="_blank" rel="noopener noreferrer" >
          <TWPImage 
            width={'250px'}
            borderRadius={'40px'}
            height={'-webkit-fill-available'}
            className="homeSingleInsta" 
            src={pic.images.standard_resolution.url} 
          />
		    </TWPAnchor>
			</TWPDiv>
		)
  }
  

  render() {
    return(
    <TWPDiv 
      padding={'0'}
    >
      <TWPDiv
        flexDirection={'row'}
        height={'100%'}
        width={'100%'}
        padding={'20px 2%'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
      >
        { this.displayImages() }
      </TWPDiv>
      <iframe 
        src="https://www.google.com/maps/d/u/0/embed?mid=1X8vfQjjnxOLWqmTO6JJf4-Tr5uo" 
        width={this.state.width} 
        height={this.state.height}
      />
    </TWPDiv>
    );
  }
}

export default InstagramGoogle;
