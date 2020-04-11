import React from "react";
import styled from "styled-components";
import { ReactComponent as SVG } from "../svgs/IconSidePaths.svg";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin( MotionPathPlugin );
/**
 *   IconsOnPath
 *
 *  @component
 *
 */
const IconsOnPath = ( props ) => {
  const path = document.querySelector( "#motionPath" );
  const icons = document.querySelctor
  return ( <Container>
    <SVG/>
  </Container> );
};

const Container = styled.div`
width: 100%;
height: 100%;
`;

export default IconsOnPath;