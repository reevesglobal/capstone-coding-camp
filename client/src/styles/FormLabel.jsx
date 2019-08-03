import React from 'react';
import styled from 'styled-components';

const LabelField = styled.label`
  padding: 15px 0 5px;
  min-width: 120px;
  color: #004E92;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.15em;
`;

const FormLabel = ({ value }) => {
  return (
    <LabelField>{value}</LabelField>
  );
}

export default FormLabel;
