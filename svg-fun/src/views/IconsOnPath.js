import React, { useEffect } from "react";
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
  
  useEffect( () => {
    debugger;
    const icons = document.querySelector( "#icons" );
    if( icons.childElementCount > 0 ){
      
      let child = icons.firstElementChild;
      const id = "#" + child.getAttribute( "id" );
      gsap.to( id, {
        motionPath: {
          path: "#motionPath",
          align: "#motionPath",
          alignOrigin: [ .5, .5 ],
          autoRotate: false,
        }, duration: "240", repeat: -1, ease: "none",
        
      } );
      let number = 0;
      while( child.nextElementSibling ){
        number += 1;
        child = child.nextElementSibling;
        const id = "#" + child.getAttribute( "id" );
        gsap.to( id, {
          motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [ .5, .5 ],
            autoRotate: false,
            start: ( .01 * number ),
            ease: "none",
          }, duration: "240", repeat: -1, ease: "none",
        } );
      }
    }
  }, [] );
  
  return ( <Container>
    <SVG/>
  </Container> );
};

const Container = styled.div`
width: 100%;
height: 100%;
`;

export default IconsOnPath;