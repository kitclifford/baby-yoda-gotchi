import React from "react";
import Homepage from "../components/Homepage/Homepage";
import Game from "../components/Game/index";

// import {
//      BrowserRouter as Router,
//      Route,
//      Switch,
// } from "react-router-dom";

const App = ({ submitted } ) => (

     <>
          { submitted ? 
               <Game/> : <Homepage/>}
          
     </>
);

export default App;

// WOULDN'T USE ROUTER FOR THIS ONCE WE HAVE STATE AND API, ONLY TEMPORARY TO SEPERATE LOGIN AND GAME PAGE FOR FONTEND DESIGN