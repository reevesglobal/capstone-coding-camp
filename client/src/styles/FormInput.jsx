import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    border-bottom: 2px solid rgba(0, 79, 148, 0.2);
  }
  100% {
    border-bottom: 2px solid rgba(0, 79, 148, 1);
  }
`;

const InputField = styled.input`
  margin-right: 100px;
  max-width: 300px;
  padding: 15px 10px 5px;
  border: none;
  border-bottom: 2px solid rgba(0, 79, 148, 0.2);
  font-size: 1.15em;
  :focus {
    outline: none;
    border-bottom: 2px solid #004E92;
    animation-duration: 0.8s;
    animation-name: ${fadeIn};
  }
`;

const FormInput = ({ type, name, id, onChange }) => {
  return (
    <InputField 
      key={id} 
      type={type} 
      name={name} 
      id={id} 
      onChange={onChange} 
      required 
    />
  );
}

export default FormInput;
