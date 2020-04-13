import React from "react";
import styled from "styled-components";
import CircleWithOutlines from "../svgComponents/CircleWithOutlines.js";

/**
 *   Icons
 *
 *  @component
 *
 */
const Icons = ( props ) => {
  return ( <Container>
    <h1>Icons</h1>
    <CircleWithOutlines
      circleFill={ "#00ACEE" }/>
  </Container> );
};

const Container = styled.div`
min-width: 100vw;
min-height: 100vh;
`;

Icons.propTypes = {};

export default Icons;