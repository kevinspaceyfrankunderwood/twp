import React from 'react';

import { BLDiv, TWPDiv, TWPHeader, media } from '../../styles/GenericStyledComponents';

import CommunicationDoubleDivide from './CommunicationDoubleDivide';
import CommentForm from './CommentForm';
import SimpleTextBar from '../Generic/SimpleTextBar';
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const WeWouldLoveWrap = TWPHeader.extend`
  background-color: white;
  ${media.tablet`
    padding: 6% 2%;
  `}
`

class ContactUsSection extends React.Component {
  state = {
    formDisplayed: false,
    thanksBarDisplayed: false,
    errorBarDisplayed: false
  }

  handleFormSubmit = event => {
    console.log("here")
    event.preventDefault()
    // const emailjs = require('https://cdn.emailjs.com/dist/email.min.js');
    window.emailjs.send("default_service","wildflower_contactus",
      {from_name: this.state.firstName+" "+this.state.lastName,
      message_html: this.state.message, reply_to: this.state.email})
      .then(response => {
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          this.tempMessage(response);
      }, err => {
          console.log("FAILED. error=", err);
          this.setState({errorBarDisplayed: true});
      });
     
    // axios.post("api/contacts/create", this.state)
    //   .then( res =>
    //     res.status === 200 ? this.setState({thanksBarDisplayed: true}) : this.setState({errorBarDisplayed: true}) )
    //   .then( res => this.setState({name: '', email: '', message: ''}) )
    //   .catch( res => {this.setState({errorBarDisplayed: true}); console.log(res)})
  }

  switchToNormal = () => {
    
  }

  tempMessage = response => {
    if ( response.status === 200 ) {
      this.setState({thanksBarDisplayed: true})
      setTimeout(() => this.setState({thanksBarDisplayed: false, errorBarDisplayed: false, formDisplayed: false}), 5000)
    } else {
      this.setState({errorBarDisplayed: true})
      setTimeout(() => this.setState({thanksBarDisplayed: false, errorBarDisplayed: false, formDisplayed: false}), 5000)
    }
  }
  
  handleFormChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }
  
    render() {
      var ThisView = null;

      const CommentFormView = (
        <CommentForm
          commentDisplay={() => this.setState({formDisplayed: false, thanksBarDisplayed: false, errorBarDisplayed: false})}
          commentSubmitFunction={this.handleFormSubmit}
          handleChange={this.handleFormChange}
        />
      )

      if (this.state.errorBarDisplayed) {
        ThisView = (
          <BLDiv padding={'0'}>
            <SimpleTextBar
              textBig="Note send failed — please try again"
              />
              {CommentFormView}
          </BLDiv>
        )
      } else if (this.state.thanksBarDisplayed) {
        ThisView = (
          <BLDiv padding={'0'}>
          <SimpleTextBar
            textBig="Thanks for the note — we'll get back to you ASAP"
            />
            <SimpleTextBar
            />
          </BLDiv>
        )
      } else if (this.state.formDisplayed) {
        ThisView = CommentFormView;
      } else {
        ThisView = (
          <CommunicationDoubleDivide
            commentDisplay={() => this.setState({formDisplayed: true})}
          />
        )
      }
      
      return (
        <div>
        <TWPDiv
          backgroundColor={TWPStyleGuide.color.white}
          padding={'0'}
        >
          <WeWouldLoveWrap
            padding={'2%'}
            color={TWPStyleGuide.color.darkGreen}
            fontWeight={'100'}
            tabletFontSize={TWPStyleGuide.font.size.medium}
            mobileFontSize={TWPStyleGuide.font.size.small}
          >
            We would love to hear from you
          </WeWouldLoveWrap>
        </TWPDiv>
          {ThisView}
          </div>
      )  }
}

export default ContactUsSection;