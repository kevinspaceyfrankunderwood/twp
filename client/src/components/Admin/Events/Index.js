import React from 'react'
import axios from 'axios'
import EditEvent from './EditEvent'
import EventList from './EventList'
import CreateEvent from './CreateEvent';


class Index extends React.Component {
  state = { events: [], showAll: true, editEvent: undefined }

  componentDidMount(){
    this.fetchEvents()
  }

  fetchEvents = () => {
    axios.get('/api/events/')
    .then( res => this.setState({ events: res.data, showAll: true }))
    .catch( res => console.log(res))
  }

  editButton = info => {
    this.setState({ editEvent: info, showAll: false, create: false  })
  }

  deleteButton = (note) => {
    axios.delete(`/api/events/${note.id}`)
    let events = this.state.events
    const newArr = events.filter(single => single.id !== note.id)
    this.setState({ events: newArr })
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  render(){
    if (this.state.showAll){
      return <EventList 
              editButton={this.editButton} 
              events={this.state.events} 
              deleteButton={this.deleteButton}
              createButton={() => this.setState({ create: true, showAll: false })}
            />
    } else if (this.state.create){
      return(
        <CreateEvent 
          back={this.fetchEvents} 
          cancelButton={this.cancelButton}
        />
      )
    } else {
      return(
        <EditEvent 
          event={this.state.editEvent} 
          back={this.fetchEvents} 
          cancelButton={this.cancelButton} 
        />
      )
    }
  }
}

export default Index