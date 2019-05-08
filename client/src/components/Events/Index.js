import React, { Component } from "react";

import axios from "axios";
import "./nutrition.css";
import {
  Grid,
  Image,
  Item,
  Icon,
  Loader,
  Segment,
  Dimmer,
  Card
} from "semantic-ui-react";
import Flores from "../../assets/images/FloresDeMayoSmall.jpg";
import Festival from "../../assets/images/FestivalBand.jpg";
import Comm from "../../assets/images/CommEd.jpg";
import Placeholder from "../../assets/images/basicWhiteFlower.png";
import Mug from "../../assets/images/DeneenMug.jpg";
import FloresPDF from "../../assets/images/FloresDeMayoPDF.pdf";
import styled from "styled-components";
import moment from "moment";
import TWPStyleGuide from "../../styles/TWPStyleGuide";

const HeaderEventWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  margin: 20px 0;
`;
const EventTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: ${props => props.color};
`;

const SectionWrap = styled.div`
  width: ${props => props.width};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventWrap = styled.div`
  height: 100%;
  width: ${props => props.width};
  margin: auto 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlogWrap = styled.div`
  width: ${props => props.width};
  margin: 20px 0;
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

class Events extends Component {
  state = { posts: [], events: [], loaded: false };

  componentDidMount() {
    axios
      .get("api/blogs/events")
      .then(res =>
        this.setState({ posts: res.data.blogs, events: res.data.events, loaded: true })
      );
  }

  displayPosts = () => {
    return this.state.posts.map(post => {
      const chopped = post.title
        .replace(/\[(.*?)\]/gm, "")
        .replace(/(\&([#8217]*?)\;)/gm, "'")
        .replace(/(\&([#8230]*?)\;)/gm, ". ")
        .replace(/\&([;\s\w\"\=\,\:\./\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\;/gm, "")
        .replace(/<p[^>]*>/g, "")
        .replace(/(<([^>]+)>)/gm, "");
      const excerpt = post.excerpt
        .split(".")[0]
        .replace(/\[(.*?)\]/gm, "")
        .replace(/(\&([#8217]*?)\;)/gm, "'")
        .replace(/(\&([#8230]*?)\;)/gm, ". ")
        .replace(/\&([;\s\w\"\=\,\:\./\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\;/gm, "")
        .replace(/<p[^>]*>/g, "")
        .replace(/(<([^>]+)>)/gm, "");
      return (
        <Item as='a' className='singlePostEntire' href={post.short_URL} target='_blank'>
          <Item.Image
            className='blogPic'
            as='a'
            src={post.featured_image === "" ? Placeholder : post.featured_image}
          />
          <Item.Content
            className='blogContent'
            as='a'
            target='_blank'
            rel='noreferrer noopener'
            href={post.short_URL}
          >
            <Item.Header className='postAlignCenter'> {chopped} </Item.Header>
            <Item.Description className='postAlignCenter singlePostContent'>
              {excerpt}...
            </Item.Description>
          </Item.Content>
        </Item>
      );
    });
  };

  displayEvents = () => {
    return this.state.events.map(single => {
      return (
        <Card
          as='a'
          href={single.link}
          target='_blank'
          style={{
            minHeight: "300px",
            height: "fit-content",
            width: "300px",
            minWidth: "300px",
            marginTop: "0 !important"
          }}
        >
          <Image src={single.image} />
          <Card.Content
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column"
            }}
          >
            <Card.Header>{single.title}</Card.Header>
            <Card.Meta>{single.sub_title}</Card.Meta>
            <Card.Description>{single.body}</Card.Description>
            <Card.Meta as='a' href={single.link} target='_blank'>
              {single.link_text}
            </Card.Meta>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    if ((this.state.loaded = 1)) {
      return (
        <div>
          <div className='nutritionTopPhoto' />
          <div className='nourishingRecovery'>
            <div className='programWordsh2'>Explore TWP Events and Blog Below</div>
          </div>

          <SectionWrap>
            <HeaderEventWrap>
              <EventTitle color={TWPStyleGuide.color.darkGreen}>TWP Events</EventTitle>
              <EventWrap>{this.displayEvents()}</EventWrap>
            </HeaderEventWrap>
            <BlogWrap width={this.state.events.length === 0 ? "75%" : "40%"}>
              <div className='blogTitle'>
                <a
                  style={{ color: "black", fontSize: "20px" }}
                  href='https://wildflowerproject.wordpress.com/'
                >
                  <Icon style={{ marginTop: "10px", color: "#366902" }} name='feed' /> TWP
                  Garden Journal Blog
                </a>
              </div>
              <Item.Group className='commentGroup' style={styles.commentGroup}>
                {this.displayPosts()}
              </Item.Group>
            </BlogWrap>
          </SectionWrap>

          <div className='nutritionBottom'>
            <p className='nutritionBottomWords'>
              Discover pollinator-friendly gardening practices from local landscapers and
              master gardeners! Learn how to prep a garden bed, discover native species
              and build habitat in your own backyard!
            </p>
          </div>
          <a
            href='mailto:buzz@thewildflowerproject.org'
            className='nutritionBottomEmailWords'
          >
            <Icon name='mail outline' color='white' style={{ fontSize: "20px" }} />
            &nbsp;&nbsp;Contact Ean Koerner to get involved with The Wildflower
            Project&nbsp;&nbsp;
            <Icon name='mail outline' color='white' style={{ fontSize: "20px" }} />
          </a>
        </div>
      );
    } else {
      return (
        <Segment style={{ height: "600px" }}>
          <Dimmer active>
            <Loader>Loading Blog Posts</Loader>
          </Dimmer>
        </Segment>
      );
    }
  }
}

const styles = {
  topNutritionPadding: {
    paddingTop: "55px"
  }
};

export default Events;
