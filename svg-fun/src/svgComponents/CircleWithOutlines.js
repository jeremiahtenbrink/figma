import React from "react";
import styled, { keyframes } from "styled-components";
import { lighten, darken, linearGradient } from "polished";
import { createGradient, getDraw } from "./svgHelpers.js";

/**
 *   CircleWithOutlines
 *
 *  @component
 *
 */
const CircleWithOutlines = ( { circleFill } ) => {
  
  const gradientColorsLight = [
    lighten( .4, circleFill ), lighten( .2, circleFill ),
    darken( .1, circleFill ),
  ];
  
  const gradientColorsDark = [
    "white", circleFill, darken( .1, circleFill ), darken( .15, circleFill ),
    darken( .2, circleFill ),
  ];
  
  return ( <Container>
    <SVG fill="none" width="113" height="113" circleFill={ circleFill }
         viewBox="0 0 113 113"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        { createGradient( gradientColorsLight, "circleGradientLight", 50 ) }
        { createGradient( gradientColorsDark, "circleGradientDark", 50 ) }
      </defs>
      <g id="IconCirclesWithOutlines">
        <g id="circleOutline6">
          
          <path
            d="M111.915 56.277C111.915 86.6527 87.2909 111.277 56.9153 111.277C26.5396 111.277 1.91528 86.6527 1.91528 56.277C1.91528 25.9014 26.5396 1.27705 56.9153 1.27705C87.2909 1.27705 111.915 25.9014 111.915 56.277Z"
            strokeWidth="2"
            mask="url(#path-2-inside-1)"/>
        </g>
        <g id="circleOutline5">
          
          <path
            d="M112.915 56.277C112.915 87.205 87.8432 112.277 56.9153 112.277C25.9873 112.277 0.915283 87.205 0.915283 56.277C0.915283 25.3491 25.9873 0.277046 56.9153 0.277046C87.8432 0.277046 112.915 25.3491 112.915 56.277Z"
            strokeWidth="2"
            mask="url(#path-3-inside-2)"/>
        </g>
        <g id="circleOutline4">
          
          <path
            d="M110.915 56.277C110.915 86.1004 86.7387 110.277 56.9153 110.277C27.0919 110.277 2.91528 86.1004 2.91528 56.277C2.91528 26.4537 27.0919 2.27705 56.9153 2.27705C86.7387 2.27705 110.915 26.4537 110.915 56.277Z"
            strokeWidth="2"
            mask="url(#path-4-inside-3)"/>
        </g>
        <g id="circleOutline3">
          
          <path
            d="M109.915 56.277C109.915 85.5481 86.1864 109.277 56.9153 109.277C27.6442 109.277 3.91528 85.5481 3.91528 56.277C3.91528 27.006 27.6442 3.27705 56.9153 3.27705C86.1864 3.27705 109.915 27.006 109.915 56.277Z"
            strokeWidth="2"
            mask="url(#path-5-inside-4)"/>
        </g>
        <g id="circleOutline2">
          
          <path
            d="M108.915 56.277C108.915 84.9958 85.6341 108.277 56.9153 108.277C28.1965 108.277 4.91528 84.9958 4.91528 56.277C4.91528 27.5582 28.1965 4.27705 56.9153 4.27705C85.6341 4.27705 108.915 27.5582 108.915 56.277Z"
            strokeWidth="2"
            mask="url(#path-6-inside-5)"/>
        </g>
        <g id="circleOutline1">
          
          <path
            d="M107.915 56.277C107.915 84.4436 85.0818 107.277 56.9153 107.277C28.7488 107.277 5.91528 84.4436 5.91528 56.277C5.91528 28.1105 28.7488 5.27705 56.9153 5.27705C85.0818 5.27705 107.915 28.1105 107.915 56.277Z"
            strokeWidth="2"
            mask="url(#path-7-inside-6)"/>
        </g>
        <path id="centerCircle"
              d="M106.915 56.277C106.915 83.8913 84.5295 106.277 56.9153 106.277C29.301 106.277 6.91528 83.8913 6.91528 56.277C6.91528 28.6628 29.301 6.27705 56.9153 6.27705C84.5295 6.27705 106.915 28.6628 106.915 56.277Z"
        />
      </g>
    </SVG>
  
  </Container> );
};
const fadeOut = keyframes`
  0% {
    opacity: 1;
    
  }
  100%{
   opacity: 0;
  }
`;

const grow = keyframes`
  0% {
    transform: scale(1)
    
  }
  100%{
   transform: scale(2)
  }
`;

const rotate = keyframes`
to{
transform: rotateZ(360deg);
}
`;

const SVG = styled.svg`
#circleOutline4, #circleOutline3{
transition: stroke-dashoffset 2s linear,  transform 0s 2s;
transform-origin: 50% 50%;
stroke-dasharray: 340;
stroke-dashoffset: -340;
stroke: ${ props => darken( .2, props.circleFill ) };
}

#centerCircle {
transition: fill 1s ease;
fill: url("#circleGradientLight");
}

&:not(:root){
overflow: visible;
}

#circleOutline6, #circleOutline5 {

transform-origin: 50% 50%;
stroke: ${ props => props.circleFill };
opacity: 0;
}


:hover{
#centerCircle {
transition: fill 1s ease;
fill: url("#circleGradientDark");
}

#circleOutline6, #circleOutline5 {
animation: ${ grow } .5s ease forwards, ${ fadeOut } .5s ease forwards;
}

#circleOutline4, #circleOutline3{
transition: stroke-dashoffset 2s linear, transform 2s 2s linear;
stroke-dasharray: 330;
stroke-dashoffset: 0;
transform: rotateZ(-360deg);
}

}

`;

const Container = styled.div`
`;

CircleWithOutlines.propTypes = {};

export default CircleWithOutlines;