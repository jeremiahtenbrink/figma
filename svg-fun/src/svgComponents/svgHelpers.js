import React from "react";
import { keyframes } from "styled-components";

export const createGradient = ( colors, id, angle ) => {
  let stopColors = [];
  const getPercentage = ( i ) => {
    if( i === 0 ){
      return "0%";
    }else if( i === colors.length ){
      return "100%";
    }else{
      return ( 100 / ( colors.length - 1 ) * i ) + "%";
    }
  };
  
  for( let i = 0; i < colors.length; i++ ){
    stopColors.push( <stop id={ id + "-stop-color-" + i }
                           offset={ getPercentage( i ) }
                           stopColor={ colors[ i ] }/> );
  }
  return (
    
    <linearGradient id={ id } gradientUnits="userSpaceOnUse"
                    gradientTransform={ `rotate(${ angle })` }>
      { stopColors }
    </linearGradient> );
};

export const getDraw = ( length ) => keyframes`
    0%{
    stroke-dashoffset: ${ length * -1 };
    }100% {
    stroke-dashoffset: 0;
    }
`;