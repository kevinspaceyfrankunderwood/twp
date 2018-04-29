import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'
import moment from 'moment';
import styled from 'styled-components'

import { TWPDiv, TWPImage, TWPAnchor, media, TWPSectionHeader, TWPHeader, TWPParagraph } from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const BlogDivWrap = TWPDiv.extend`
    width: 70%;
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

const BlogImageWrap = TWPDiv.extend`
  &:hover {
    background-color: ${TWPStyleGuide.color.brightOrange}
  }

  ${media.tablet`
    display: none;
  `}
`

class InstagramGoogle extends Component {
  state = { blog: [] }
  
  componentWillMount(){
    axios.get('api/blogs/index')
    .then( res => this.setState({blog: res.data}) )
    .catch( res => console.log(res))
  }

  displayBlog = () => {
    const { blog } = this.state;
    const chopped = this.state.blog.excerpt.replace(/\[(.*?)\]/gm, "").replace(/(\&([#8217]*?)\;)/gm, "'").replace(/(\&([#8230]*?)\;)/gm, ". ").replace(/\&([;\s\w\"\=\,\:\./\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\;/gm, "").replace(/<p[^>]*>/g, "").replace(/(<([^>]+)>)/gm, "")
   
    return(
      <BlogAnchorWrap 
        width={'100%'}
        height={'100%'}
        target="_blank"
        href={blog.URL}
        flexDirection={'row'}
      >
      <BlogImageWrap
        width={'30%'}
        padding={'1%'}
      >
        <TWPImage src={blog.featured_image} />
      </BlogImageWrap>
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
            smallTabletFontSize={TWPStyleGuide.font.size.tiny}
            textAlign={'center'}
          >
            {moment(blog.date).format("MMMM, Do YYYY")}
          </TWPParagraph>
          <TWPParagraph
            color={TWPStyleGuide.color.white}
            fontSize={TWPStyleGuide.font.size.smallTiny}
            smallTabletFontSize={TWPStyleGuide.font.size.tiny}
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
          { this.displayBlog() }
      </TWPDiv>
    );
  } else {
    return <div/>
  }
}
}

export default InstagramGoogle;
