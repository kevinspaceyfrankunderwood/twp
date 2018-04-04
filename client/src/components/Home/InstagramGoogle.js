import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'
import moment from 'moment';
import styled from 'styled-components'

import { TWPDiv, TWPImage, TWPAnchor, media, TWPSectionHeader, TWPHeader, TWPParagraph } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const BlogDivWrap = TWPDiv.extend`
  ${media.tablet`
    width: 100%;
    height: 300px;
  `}
`

const BlogAnchorWrap = TWPAnchor.extend`
  ${media.tablet`
    width: 100%;
  `}
`

class InstagramGoogle extends Component {
  state = { blog: [], photos: [] }

	componentDidMount() {
		axios.get('api/instagram/index')
    .then( res => this.setState({ photos: res.data.data }) )
    .then( res => axios.get('api/blogs/index')
    .then( res => this.setState({blog: res.data}) )
    .catch( res => console.log(res)))
    .catch( res => console.log(res) )
    // this.secondCall()
  }
  
  secondCall(){
    axios.get('api/blogs/index')
    .then( res => this.setState({blog: res.data}) )
    .catch( res => console.log(res))
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

  displayBlog = () => {
    const { blog } = this.state;
    const chopped = this.state.blog.excerpt.replace(/\[(.*?)\]/gm, "").replace(/(\&([#8217]*?)\;)/gm, "'").replace(/(\&([#8230]*?)\;)/gm, ". ").replace(/\&([;\s\w\"\=\,\:\./\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\;/gm, "").replace(/<p[^>]*>/g, "").replace(/(<([^>]+)>)/gm, "")
   
    return(
      <BlogAnchorWrap 
        width={'50%'}
        height={'100%'}
        target="_blank"
        href={blog.URL}
      >
      <BlogDivWrap
          height={'100%'}
          backgroundColor={TWPStyleGuide.color.brightOrange}
          justifyContent={'space-around'}
          hoverBackgroundColor={TWPStyleGuide.color.darkOrange}
          cursor={'pointer'}
        >
          <TWPHeader
            color={TWPStyleGuide.color.white}
            fontSize={TWPStyleGuide.font.size.mediumSmall}
            tabletFontSize={TWPStyleGuide.font.size.small}
          >
            Click to read our Garden Journal
          </TWPHeader>
          <TWPParagraph
            color={TWPStyleGuide.color.white}
            fontSize={TWPStyleGuide.font.size.smallTiny}
            smallTabletSize={TWPStyleGuide.font.size.tiny}
            textAlign={'center'}
          >
            {moment(blog.date).format("MMMM, Do YYYY")}
          </TWPParagraph>
          <TWPParagraph
            color={TWPStyleGuide.color.white}
            fontSize={TWPStyleGuide.font.size.smallTiny}
            smallTabletSize={TWPStyleGuide.font.size.tiny}
          >
            {chopped}. . .
          </TWPParagraph>
        </BlogDivWrap>
      </BlogAnchorWrap>
    )
  }
  

  render() {
    if (this.state.blog.excerpt){
    return(
      <TWPDiv
        flexDirection={'row'}
        padding={'0'}
        height={'300px'}
        smallTabletFlexDirection={'column'}
        tabletHeight={'100%'}
      >
        <TWPDiv
          flexDirection={'row'}
          height={'100%'}
          width={'50%'}
          padding={'20px 2%'}
          justifyContent={'space-around'}
          flexWrap={'wrap'}
          backgroundColor={TWPStyleGuide.color.lightGreen}
          tabletWidth={'100%'}
        >
          { this.displayImages() }
        </TWPDiv>
          { this.displayBlog() }
      </TWPDiv>
    );
  } else {
    return <div/>
  }
}
}

export default InstagramGoogle;
