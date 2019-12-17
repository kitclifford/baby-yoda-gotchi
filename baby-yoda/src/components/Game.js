import React from "react";
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../yoda.css';

// EXTEND CLASS AND ADD STATE AND PROPS
const Game = () => (
     <React.Fragment>
          <div className="content">
               <h1>Baby Micheal</h1>
               <div className="gamebox">
                    <div className="baby-yoda"></div>
               </div>
               <div className="game-controls">
                    <h2>Age: 52</h2>
               </div>
               <div className="game-controls">
                    <p>Health: </p>
                    <ProgressBar className="m-3" variant="danger" animated now={70} />
                    <Button className="m-3" variant="outline-warning">Feed Baby Micheal</Button>
               </div>
               <div className="game-controls">
                    <Button className="m-3" variant="outline-danger">Terminate</Button>
               </div>
          </div>
     </React.Fragment>
);

export default Game;