import React from "react";
import styled from "styled-components";
import FlowObject from "../styles/FlowObject";
import SectionTitle from "../styles/SectionTitle";

const StyledBackground = styled.section`
  background-color: rgba(142, 180, 209, 0.1);
`;

const ObjectContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding: 5px 0 40px 0;
`;

const universal = {
  border: "none",
  height: "225px",
  width: "225px",
  margin: "20px",
  textPadding: "30px",
  textColor: "#10124E",
  textSize: "1.5em",
  textWeight: "bold",
  textTransform: "uppercase"
};

const Benefits = () => {
  return (
    <StyledBackground>
      <SectionTitle label={`Key benefits of participating`}/>
      <ObjectContainer>
        <FlowObject
          margin={universal.margin}
          height={universal.height}
          width={universal.width} 
          inputColor="rgba(134, 181, 216, 0.4)" 
          border={universal.border}
          textInput="Develop teamwork &amp; project building skills"
          textPadding={universal.textPadding}
          textColor={universal.textColor}
          textSize={universal.textSize}
          textWeight={universal.textWeight}
          textTransform={universal.textTransform}
        >
        </FlowObject>
        <FlowObject 
          margin={universal.margin}
          height={universal.height}
          width={universal.width} 
          inputColor="rgba(134, 181, 216, 0.6)" 
          border={universal.border}
          textInput="Improve your coding skills"
          textPadding={universal.textPadding}
          textColor={universal.textColor}
          textSize={universal.textSize}
          textWeight={universal.textWeight}
          textTransform={universal.textTransform}
        >
        </FlowObject>
        <FlowObject 
          margin={universal.margin}
          height={universal.height}
          width={universal.width} 
          inputColor="rgba(134, 181, 216, 0.8)" 
          border={universal.border} 
          textInput="An awesome project for your resume"
          textPadding={universal.textPadding}
          textColor={universal.textColor}
          textSize={universal.textSize}
          textWeight={universal.textWeight}
          textTransform={universal.textTransform}
        >
        </FlowObject>
      </ObjectContainer>
    </StyledBackground>
  );
}

export default Benefits;
