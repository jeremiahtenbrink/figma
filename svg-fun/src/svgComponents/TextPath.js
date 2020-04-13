import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "antd";

/**
 *   TextPath
 *
 *  @component
 *
 */
const TextPath = ( { textWidth = 300, fontSize = 32, textOffset = 0, pathWidth = 174, pathHeight = 87 } ) => {
  
  const [ offset, setOffset ] = useState( textOffset );
  const [ width, setWidth ] = useState( textWidth );
  const [ fSize, setFontSize ] = useState( fontSize );
  const [ pathLength, setPathLength ] = useState( 0 );
  const [ pWidth, setPathWidth ] = useState( pathWidth );
  const [ pHeight, setPathHeight ] = useState( pathHeight );
  
  useEffect( () => {
    const path = document.querySelector( "#path" );
    setPathLength( path.getTotalLength() );
  } );
  
  const handleChange = ( name, value ) => {
    debugger;
    const setStateObject = {
      offset: setOffset,
      width: setWidth,
      fSize: setFontSize,
      pWidth: setPathWidth,
      pHeight: setPathHeight,
    };
    setStateObject[ name ]( value );
  };
  const fontSizeText = `{fontSize: ${ fSize }}`;
  return ( <Container>
    <Header>
      <div>
        
        <h3>Path Length</h3>
        <h4>{ pathLength }</h4>
        <Slider onChange={ ( value ) => handleChange( "offset", value ) }
                style={ { width: "300px" } } min={ -pathLength }
                max={ pathLength }
                value={ offset }>Text Offset</Slider>
        <Slider onChange={ ( value ) => handleChange( "width", value ) }
                value={ width } min={ 0 } max={ window.innerWidth }>Text
          Length</Slider>
        <Slider onChange={ ( value ) => handleChange( "fSize", value ) }
                value={ fSize } min={ 0 } max={ 200 }>Font Size</Slider>
        <Slider onChange={ ( value ) => handleChange( "pWidth", value ) }
                value={ pWidth } min={ 0 } max={ window.innerHeight }>Path
          Width</Slider>
        <Slider onChange={ ( value ) => handleChange( "pHeight", value ) }
                value={ pHeight } min={ 0 } max={ window.innerHeight }>Path
          Width</Slider>
      </div>
      
      <Pre>
        <code>
          &#x3C;svg viewBox=&#x22;0 0 174
          87&#x22; width="{ pWidth }" height="{ pHeight }" &#x3E;<br/>
          <div style={ { marginLeft: "2rem" } }> &#x3C;path
            id=&#x22;path&#x22; fill=&#x22;transparent&#x22;
            d=&#x22;M1.11096 86.1235C1.40107 38.8425 39.5055 0.795461 86.7869
            <div style={ { marginLeft: "2rem" } }>
              0.576619C134.287 0.356764 172.964 38.6164 173.26
              86.116&#x22;stroke=&#x22;transparent&#x22; /&#x3E;<br/><br/>
            </div>
            &#x3C;style&#x3E;
            <div
              style={ { marginLeft: "2rem" } }>.path-text { fontSizeText } </div>
            
            &#x3C;/style&#x3E;<br/><br/>
            &#x3C;text
            class="{ "path-text" }" textLength="{ width }"&#x3E;<br/>
            
            <div style={ { marginLeft: "2rem" } }> &#x3C;textPath
              
              startOffset={ offset } xlinkHref=&#x22;#path&#x22;&#x3E;<br/>
              <div style={ { marginLeft: "2rem" } }>Lambda School</div>
              &#x3C;/textPath&#x3E;
            </div>
            &#x3C;/text&#x3E;<br/>
          </div>
          &#x3C;/svg&#x3E;<br/>
        </code>
      </Pre>
    </Header>
    
    <SVG viewBox="0 0 174 87" width={ pWidth } height={ pHeight }
         fontSize={ fSize }>
      <style>
        .path-text { fontSizeText }
      </style>
      <path id="path" fill="transparent"
            d="M1.11096 86.1235C1.40107 38.8425 39.5055 0.795461 86.7869 0.576619C134.287 0.356764 172.964 38.6164 173.26 86.116"
            stroke="transparent"/>
      <text className={ "path-text" } textLength={ width }>
        <textPath startOffset={ offset } xlinkHref="#path">
          Lambda School
        </textPath>
      </text>
    </SVG>
  
  </Container> );
};

const Pre = styled.pre`
width: 60%;
text-align: left;
`;

const SVG = styled.svg`
&&{
overflow: visible;
}



`;

const Header = styled.div`
display: flex;
width: 100%;
min-width: 100vw;
flex-direction: row;
margin-bottom: 8rem;justify-content: space-around;
`;

const Container = styled.div`
    position: relative;
    `;

TextPath.propTypes = {};

export default TextPath;