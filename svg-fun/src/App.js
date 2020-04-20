import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import IconsOnPath from "./views/IconsOnPath.js";
import LandingPage from "./views/LandingPage.js";
import TextPathView from "./views/TextPathView.js";
import Icons from "./views/Icons.js";
import Helo from "./views/Helo.js";
import { ReactComponent as JeremiahHelo } from "./svgs/JeremiahHelo.svg";

function App(){
  return ( <div className="App">
    <Switch>
      <Route path={ "/icons-along-path" } component={ IconsOnPath }/>
      <Route path={ "/text-path" } component={ TextPathView }/>
      <Route path={ "/icons" } component={ Icons }/>
      <Route path={ "/helo" } render={ () => <Helo><JeremiahHelo/></Helo> }/>
      <Route exact path={ "/" } component={ LandingPage }/>
    
    </Switch>
  
  </div> );
}

export default App;
