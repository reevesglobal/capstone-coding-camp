import React from 'react';
import styled from 'styled-components';

const TriangleShape = styled.div`
  position: absolute;
  top: -10px;
  left: 116px;
  width: 0;
  height: 0;
  border-left: 84px solid transparent; /* half width */
  border-right: 84px solid transparent; /* half width */
  border-bottom: 126px solid #fff; /* height */
  transform-origin: 84px 210px;
  transform: rotate(${props => props.rotation || '0deg'});
`;

const Triangle = ({ rotation, id }) => {
  return (
    <TriangleShape rotation={rotation} key={id} />
  );
}

export default Triangle;
