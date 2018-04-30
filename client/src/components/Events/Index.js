import React, { Component } from 'react'

import axios from 'axios'
import './nutrition.css'
import { Grid, Image, Item, Icon, Loader, Segment, Dimmer, Card } from 'semantic-ui-react'
import Flores from '../../assets/images/FloresDeMayoSmall.jpg'
import Festival from '../../assets/images/FestivalBand.jpg'
import Comm from '../../assets/images/CommEd.jpg'
import Placeholder from '../../assets/images/basicWhiteFlower.png'
import Mug from '../../assets/images/DeneenMug.jpg'
import FloresPDF from '../../assets/images/FloresDeMayoPDF.pdf'

import moment from 'moment';

class Events extends Component {
	state = { posts: [], loaded: false }

	componentDidMount() {
		axios.get('api/blogs/events')
		.then( res => this.setState({ posts: res.data, loaded: true }) )
	}
 
	displayPosts = () => {
		return this.state.posts.map( post =>{
      const chopped = post.title.replace(/\[(.*?)\]/gm, "").replace(/(\&([#8217]*?)\;)/gm, "'").replace(/(\&([#8230]*?)\;)/gm, ". ").replace(/\&([;\s\w\"\=\,\:\./\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\;/gm, "").replace(/<p[^>]*>/g, "").replace(/(<([^>]+)>)/gm, "")
      const excerpt = post.excerpt.split('.')[0].replace(/\[(.*?)\]/gm, "").replace(/(\&([#8217]*?)\;)/gm, "'").replace(/(\&([#8230]*?)\;)/gm, ". ").replace(/\&([;\s\w\"\=\,\:\./\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\;/gm, "").replace(/<p[^>]*>/g, "").replace(/(<([^>]+)>)/gm, "")
			return(
      <Item as='a' className="singlePostEntire" href={post.short_URL} target="_blank">
	      <Item.Image className="blogPic" as='a' src={ post.featured_image === "" ? Placeholder : post.featured_image } />
	      <Item.Content className="blogContent" as='a' target="_blank" rel="noreferrer noopener" href={post.short_URL}>
	        <Item.Header className="postAlignCenter"> { chopped } </Item.Header>
	        <Item.Description className="postAlignCenter singlePostContent">
            {excerpt}...
	        </Item.Description>
	      </Item.Content>
	    </Item>
      )
    })
	}

	render() {
		if(this.state.loaded){
			return (
			<div>          
        <div className="nutritionTopPhoto"></div>
        <div className="nourishingRecovery">
          <div className="programWordsh2">Explore TWP Events and Blog Below</div>
        </div>

				<Grid stackable className="eventsGridEntire">
				<Grid.Row>
					<Grid.Column className="cardsColumn" computer={11} tablet={10} mobile={16} >
						<Card color="orange" raised centered className="classCard" as="a" href={FloresPDF} target="_blank">
					    <Image className="nutritionCardPhoto" src={Flores} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        Flores de Mayo
					      </Card.Header>
					      <Card.Description
                  style={{padding: '10px 0', textAlign: 'center', fontStyle: "oblique", fontWeight: 700}}
                >
					        May 5, 12p-5p, Urban Growler
					      </Card.Description>
					      <Card.Description>
					        Join your neighbors in celebrating the Twin Cities' pollinators, the local beer scene, and learn a little about how local organizations are making positive change. 
					      </Card.Description>
					    </Card.Content>
					  </Card>

						<Card color="green" raised centered className="classCard" as="a" target="_blank" href="https://stpaul.ce.eleyo.com/search?redirected_yet=true&sf[category]=71">
					    <Image className="nutritionCardPhoto" src={Comm} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        Community Education:<br/>Planting with a Purpose
					      </Card.Header>
					      <Card.Description
                  style={{padding: '10px'}}
                >
					        June 13 - Dunning Community Garden
									<br/>
									June 20 - Merriam Station Community Garden
					      </Card.Description>
                <Card.Description>
					        TWP Founders - Ean Koerner and Matt Wildenauer - are putting on an environmentally based Community Ed. course. 
					      </Card.Description>
					    </Card.Content>
					  </Card>

						<Card color="teal" raised centered className="classCard">
					    <Image className="nutritionCardPhoto" src={Festival} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        The Wildflower Festival
					      </Card.Header>
					      <Card.Description>
					        Date - Coming Soon!!
					      </Card.Description>
								<Card.Description>
					        Meet us at JOTP for family fun with live music, local environmental organizations, delicious food, face paint, and More!
					      </Card.Description>
					    </Card.Content>
					  </Card>
					 </Grid.Column>

					 <Grid.Column computer={5} tablet={6} mobile={16}> 
							<div className="blogTitle">
								<a style={{color: 'black', fontSize: '20px'}} href="http://food2recover.blogspot.com/">
									<Icon style={{marginTop: '10px', color: "#366902"}} name="feed" /> TWP Garden Journal Blog
								</a>
							</div>
						<Item.Group className="commentGroup" style={styles.commentGroup}>
							{ this.displayPosts() }	
					  </Item.Group>

					</Grid.Column>

				</Grid.Row>
				</Grid>

				<div className="nutritionBottom">
					<p className="nutritionBottomWords">Discover pollinator-friendly gardening practices from local landscapers and master gardeners! Learn how to prep a garden bed, discover native species and build habitat in your own backyard!</p>
				</div>
				<a href="mailto:buzz@thewildflowerproject.org" className="nutritionBottomEmailWords">
					<Icon name="mail outline" color="white" style={{fontSize: '20px'}}  />
					&nbsp;&nbsp;Contact Ean Koerner to get involved with The Wildflower Project&nbsp;&nbsp;
					<Icon name="mail outline" color="white" style={{fontSize: '20px'}}  />
				</a>
			</div>
		)
	} else {
		return (
				<Segment style={{height: '600px'}}>
					<Dimmer active>
						<Loader>Loading Blog Posts</Loader>
					</Dimmer>
				</Segment>
			)
		}
	}
}

const styles = {
	topNutritionPadding: {
		paddingTop: '55px',
	},
}

export default Events;