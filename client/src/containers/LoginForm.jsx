import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import FormInput from '../styles/FormInput';
import FormLabel from '../styles/FormLabel';

const Form = styled.form`
`;

const PropBlock = styled.span`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onTextChange = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newUser = this.state;
    console.log(newUser);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <PropBlock>
          <FormLabel value="Email" />
          <FormInput 
            type="email" 
            name="email" 
            id="email" 
            value={this.state.email} 
            onChange={this.onTextChange} 
          />
        </PropBlock>

        <PropBlock>
          <FormLabel value="Password" />
          <FormInput 
            type="password" 
            name="password" 
            id="password" 
            value={this.state.password} 
            onChange={this.onTextChange} 
          />
        </PropBlock>

        <Centered>
          <Button 
            text="LOGIN"
            type="submit"
            borderRadius="4px"
            background="#fff"
            color="#133F86"
            margin="60px"
            border="2px solid #133F86"
            hoverBG="#133F86"
            hoverColor="#F6F9FE"
            hoverBorder="2px solid transparent"
          />
        </Centered>
      </Form>
    );
  }
}

export default LoginForm;
