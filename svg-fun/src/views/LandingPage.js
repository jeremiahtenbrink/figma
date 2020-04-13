import React from "react";
import styled from "styled-components";
import { ReactComponent as Background } from "../svgs/Group.svg";
import { ReactComponent as Mask } from "../svgs/Mask Group.svg";

/**
 *   LandingPage
 *
 *  @component
 *
 */
const LandingPage = ( props ) => {
  return ( <Container>
    <header className="App-header">
      <FadedBackground>
        <WithKeyframes/>
        <p>
          Fun with SVG's!!!
        </p>
        <a
          className="App-link"
          href="www.tenbrink.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Portfolio
        </a>
      </FadedBackground>
    </header>
    <a href="https://www.freepik.com/free-photos-vectors/background">Background
      vector created by starline - www.freepik.com
    </a>
  </Container> );
};

const Container = styled.div`
`;

const FadedBackground = styled.div`
width: 60%;
height: 100%;
min-height: 300px;
background-color: rgba(255, 255, 255, .9);
`;

const AppBackground = styled( Background )`
position: fixed;
z-index: -5;
left: -200px;
top: -100px;
width: 150%;
height: 150%;
`;

const WithKeyframes = styled( Mask )`
&& {
  #WritePath {
    stroke: #a8a8a8;
    fill: transparent;
    animation: dash 10s reverse;
    }
    
    @keyframes dash {
    0% {
      stroke-dasharray: 4000px, 4000px;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 4000px, 4000px;
      stroke-dashoffset: 4000px;
    }
  }
}


`;

export default LandingPage;