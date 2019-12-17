import React from "react";
import Homepage from "./components/Homepage";
import Game from "./components/Game";

import {
     BrowserRouter as Router,
     Route,
} from "react-router-dom";

const App = () => (
     <Router>
          <React.Fragment>
               <Route exact path="/" component={ Homepage }/>
               <Route exact path="/game" component={ Game }/>
          </React.Fragment>
     </Router>
);

export default App;

// WOULDN'T USE ROUTER FOR THIS ONCE WE HAVE STATE AND API, ONLY TEMPORARY TO SEPERATE LOGIN AND GAME PAGE FOR FONTEND DESIGN