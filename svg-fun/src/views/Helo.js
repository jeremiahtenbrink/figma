import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponents as JeremiahHelo } from "../svgs/JeremiahHelo.svg";

/**
 *   Helo
 *
 *  @component
 *
 */
const Helo = ( props ) => {
  
  useEffect( async() => {
    const svg = removeAndPlaceColorInCss( props.children );
    
  }, [] );
  
  const removeAndPlaceColorInCss = ( elements, startingNumber = 0 ) => {
    const returnElements = [];
    let stack = [];
    if( Array.isArray( elements ) ){
      stack = elements;
    }else{
      stack = [ elements ];
    }
    
    while( stack.length > 0 ){
      let el = stack.pop();
      if( el.hasOwnProperty( "fill" ) || el.hasOwnProperty( "stroke" ) ){
        
        const fill = el.hasOwnProperty( "fill" );
        const stroke = el.hasOwnProperty( "stroke" );
        el.removeAttribute( "fill" );
        el.removeAttribute( "stroke" );
        
        let children = false;
        if( el.hasChildren ){
          children = removeAndPlaceColorInCss( el.children );
        }
        
        const newEl = React.cloneElement( el, el.props );
        returnElements.push( newEl );
        
        const styles = generateStrokeAndFillWithTimeDelay( 1,
          startingNumber * .1,
          fill,
          stroke,
        );
        
        const Styled = withStyles( newEl, styles );
        returnElements.push( Styled );
        
      }else{
        returnElements.push( el );
      }
    }
    
    return returnElements;
    
  };
  
  return ( <Container>
  </Container> );
};

const withStyles = ( element, styles ) => {
  return styled( element )`
     && {
     ...styles
     }
    `;
};

const generateStrokeAndFillWithTimeDelay = ( time = 1, delay = 0,
  fill = undefined, stroke = undefined ) => {
  let styles = "";
  if( stroke ){
    styles += generateStrokeColorWithTimeOffset( time, delay, stroke );
  }
  if( fill ){
    styles += generateFillColorWithTimeOffset( time, delay, fill );
  }
  return styles;
};

const generateFillColorWithTimeOffset = ( time, delay, color ) => {
  const fillColorDelay = keyframes`
  0%{
    fill: transparent
  }100%{
    fill: ${ color },
  }`;
  return `animate ${ fillColorDelay } ${ time } ${ delay } forward`;
};

const generateStrokeColorWithTimeOffset = ( time, delay, color ) => {
  const strokeColorDelay = keyframes`
  0%{
    stroke: transparent
  }100%{
    stroke: ${ color },
  }`;
  return `animate ${ strokeColorDelay } ${ time } ${ delay } forward`;
};

const Container = styled.div`
`;

Helo.propTypes = {};

export default Helo;