import React from "react";
import styled from "styled-components";
import TextPath from "../svgComponents/TextPath.js";

/**
 *   TextPathView
 *
 *  @component
 *
 */
const TextPathView = ( props ) => {
  return ( <Container>
    <TextPath></TextPath>
  </Container> );
};

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
min-width: 100vw;
min-height: 100vh;
margin: auto;
`;

TextPathView.propTypes = {};

export default TextPathView;