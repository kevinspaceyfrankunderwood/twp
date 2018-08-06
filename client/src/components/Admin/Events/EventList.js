import React from 'react'
import SingleEvent from './SingleEvent'
import styled from 'styled-components'
import { Button, Item } from 'semantic-ui-react'

const ButtonWrap = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export default class EventList extends React.Component {

  displayBulletin = () => {
    return this.props.events.map( (single, index) => {
      return(
        <div
          style={{display: 'flex', flexDirection: 'center', alignItems: 'center'}}
        >
          <div>
            <h1 style={{alignSelf: 'center'}}>{index+1}</h1>
          </div>
          <Item.Group
            style={{borderBottom: '1px solid gray', padding: '30px'}}
          >
            <SingleEvent single={single} index={index} editButton={(single) => this.props.editButton(single)} deleteButton={this.props.deleteButton}/>
          </Item.Group>
        </div>
      )
    })
  }

  render(){
    if (this.props.events.length) {
      return(
        <div
          style={{width: '90%', margin: '0 auto'}}
        >
          <ButtonWrap>
            <Button 
              onClick={this.props.createButton} 
              color="blue"
              size="huge"
            >
              Create New Event
            </Button>
          </ButtonWrap>
          { this.displayBulletin() }
        </div>
      )
    } else {
      return(
        <div
          style={{
            paddingTop: '100px', 
            width: '90%', 
            margin: '0 auto', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          No Events
          <Button 
            onClick={this.props.createButton} 
            color="blue"
          >
            Create New Event
          </Button>
        </div>
      ) 
    }
  }
}