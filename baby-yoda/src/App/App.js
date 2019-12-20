import React from "react";
import Homepage from "../components/Homepage";
import GameWrapper from "../components/GameWrapper/GameWrapper";
import EndScreenWrapper from "../components/EndScreenWrapper/EndScreenWrapper";

const App = ({ submitted, alive } ) => (

     <>
          { submitted ? ( alive ? <GameWrapper/> : <EndScreenWrapper/>) : <Homepage/> }
     </>
);

export default App;
