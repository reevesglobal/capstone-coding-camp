import React from 'react';
import styled from 'styled-components';

const StyledHBMButton = styled.button`
    display: none;

    @media (max-width: 848px) {
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height 50px;
        width: 50px;
        background: transparent;
        border: none;
        cursor: pointer;
        margin: 1.25rem;

        :hover {
            background-color: #ddd;
            color: black;
        }
    }
`;

const BurgerBar = styled.div`
    width: 35px;
    height: 8px;
    background: white;
`;

const HBMButton = (props) => {
    function myFunction() {
        var x = document.getElementById("navLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
    }

    return (
        <StyledHBMButton onClick={() => myFunction()}>
            <BurgerBar />
            <BurgerBar />
            <BurgerBar />
        </StyledHBMButton>
    )
};

export default HBMButton;