import React from 'react';
import styled from 'styled-components';
import img from '../assets/CCClogo.png';
import StyledMessageCard from '../styles/JumboMessage';





const JumboImage = () => {
    return (
        <StyledMessageCard>
            <img src={img} alt="Image here" />
        </StyledMessageCard>
    )
}
