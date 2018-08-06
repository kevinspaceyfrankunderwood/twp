import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';

class Register extends Component {
  state = { email: '', password: '', password_confirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, password_confirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === password_confirmation) {
      dispatch(registerUser({ email, password, password_confirmation }, history));
    } 
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, password_confirmation } = this.state;

    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register Component</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password_confirmation'>Password Confirmation</label>
            <input
              id='password_confirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={password_confirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);
