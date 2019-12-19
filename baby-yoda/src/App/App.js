import React from "react";
import Homepage from "../components/Homepage";
import Game from "../components/Game";
import EndScreen from "../components/EndScreen";

const App = ({ submitted, alive } ) => (

     <>
          { submitted ? ( alive ? <Game/> : <EndScreen/>) : <Homepage/> }
     </>
);

export default App;
