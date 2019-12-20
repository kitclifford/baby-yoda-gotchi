import React from "react";
import Homepage from "../components/Homepage";
import GameWrapper from "../components/GameWrapper/GameWrapper";
import EndScreen from "../components/EndScreen";

const App = ({ submitted, alive } ) => (

     <>
          { submitted ? ( alive ? <GameWrapper/> : <EndScreen/>) : <Homepage/> }
     </>
);

export default App;
