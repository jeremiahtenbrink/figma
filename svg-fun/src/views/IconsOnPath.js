import React, { useEffect, useState } from "react";
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
  
  const [ icons, setIcons ] = useState( { southIcons: [], northIcons: [] } );
  
  useEffect( () => {
    debugger;
    const southIcons = document.querySelector( "#southIcons" );
    const northIcons = document.querySelector( "#northIcons" );
    let southIconArray = [];
    let northIconArray = [];
    let icon = southIcons.firstElementChild;
    
    do{
      southIconArray.push( icon );
      icon = icon.nextElementSibling;
    }while( icon );
    icon = northIcons.firstElementChild;
    do{
      northIconArray.push( icon );
      icon = icon.nextElementSibling;
    }while( icon );
    const newIcons = { northIcons: northIconArray, southIcons: southIconArray };
    setIcons( newIcons );
  }, [] );
  
  useEffect( () => {
    if( icons.southIcons.length === 0 || icons.northIcons.length === 0 ){
      return;
    }
    const southIcon = icons.southIcons.shift();
    const northIcon = icons.northIcons.shift();
    let id = "#" + southIcon.getAttribute( "id" );
    gsap.to( id, {
      motionPath: {
        path: "#leftPath", align: "#leftPath", alignOrigin: [ 0.5, 0.5 ],
      }, duration: 60, ease: "none",
    } );
    
    id = "#" + northIcon.getAttribute( "id" );
    gsap.to( id, {
      motionPath: {
        path: "#rightPath", align: "#rightPath", alignOrigin: [ 0.5, 0.5 ],
      }, duration: 60, ease: "none", delay: 1,
    } );
    
    window.setTimeout( () => {
      debugger;
      setIcons( {
        northIcons: [ ...icons.northIcons, southIcon ],
        southIcons: [ ...icons.southIcons, northIcon ],
      } );
    }, 9000 );
    
  }, [ icons ] );
  
  return ( <Container>
    <SVG/>
  </Container> );
};

const Container = styled.div`
width: 100%;
height: 100%;
background: darkslategrey;
`;

export default IconsOnPath;