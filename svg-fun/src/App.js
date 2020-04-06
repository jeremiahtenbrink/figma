import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import { ReactComponent as Mask } from "./svgs/Mask Group.svg";

function App(){
  return ( <div className="App">
    <header className="App-header">
      
      <WithKeyframes/>
      
      
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div> );
}

const WithKeyframes = styled( Mask )`
&& {
  #WritePath {
    stroke: green;
    fill: transparent;
    animation: dash 20s forwards;
    }
    
    @keyframes dash {
    0% {
      stroke-dasharray: 4000px, 4000px;
      stroke-dashoffset: 4000px;
    }
    100% {
      stroke-dasharray: 4000px, 4000px;
      stroke-dashoffset: 0%;
    }
  }
}


`;

export default App;
