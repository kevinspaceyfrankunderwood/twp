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

const DatePickerWrap = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

class CreateEvent extends React.Component{ 

  state = { 
            body: "",
            title: "",
            sub_title: "",
            date: new Date(),
            index: "",
            image: "",
            link: "",
            link_text: ""
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleDate = date => this.setState({ date })

  handleSubmit = () => {
    const event = { ...this.state }
    axios.post('/api/events/', { event })
    .then(() => this.props.back())
    .catch( err => console.log(err))
  }

  render() {
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
              <input placeholder='This is the events place in line with all other events. 1st comes first, than 2nd, etc' type="number" value={this.state.index} id="index" onChange={this.handleChange} />
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
  }
}

export default CreateEvent;