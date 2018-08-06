import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const ButtonWrap = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto; 
  justify-content: space-around;
  align-items: center;
`

class EditEvent extends React.Component{ 

  state = { 
            body: this.props.event.body ? this.props.event.body : null, 
            title: this.props.event.title ? this.props.event.title : null, 
            date: this.props.event.date ? this.props.event.date : null,
            index: this.props.event.index ? this.props.event.index : null,
            sub_title: this.props.event.date ? this.props.event.sub_title : null,
            image: this.props.event.image ? this.props.event.image : null,
            link: this.props.event.link ? this.props.event.link : null,
            link_text: this.props.event.link_text ? this.props.event.link_text : null
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const event = { ...this.state }
    axios.put(`/api/events/${this.props.event.id}`, { event })
    .then(() => this.props.back())
    .catch( err => console.log(err))
  }

  handleDate = date => this.setState({ date })

  render() {
    const { bulletin } = this.props
    if (this.props.event){
      return(
        <div>
        <Form
          style={{paddingTop: '100px', width: '80%', margin: '0 auto'}}
        >
          <Form.Field>
            <label>Title</label>
            <input placeholder='Enter Title' value={this.state.title} id="title" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Sub-Title</label>
            <input placeholder='Enter Sub-Title' value={this.state.sub_title} id="sub_title" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input placeholder='Enter Body' value={this.state.body} id="body" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input placeholder='Enter Date' type="datetime-local" value={this.state.date} id="date" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input placeholder='Enter Image URL' type="text" value={this.state.image} id="image" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Index</label>
            <input placeholder='This is the events place in line with all other events. 1st comes first, than 2nd, etc' type="number" value={this.state.image} id="image" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Link Text</label>
            <input placeholder='Enter the Link Will Say' type="text" value={this.state.link_text} id="link_text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Link URL</label>
            <input placeholder='Paste Facebook (or other) Link URL' type="text" value={this.state.link} id="link" onChange={this.handleChange} />
          </Form.Field>
        </Form>
        <ButtonWrap>
          <Button type='submit' onClick={this.handleSubmit} color="green" >Submit</Button>
          <Button type='submit' onClick={this.props.back} color="red" >Cancel</Button>
        </ButtonWrap>
      </div>
      )
    } else {
      return <div style={{paddingTop: '100px'}}>loading</div>
    }
  }
}

export default EditEvent;