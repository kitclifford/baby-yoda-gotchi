import React from "react";
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../yoda.css';

// EXTEND CLASS AND ADD STATE AND PROPS
const Game = ({ name, color, age, health }) => (
     <React.Fragment>
          <div className="content">
               <h1>Baby { name }</h1>
               <div className="gamebox">
                    <div 
                         className="baby-yoda"
                         style={{
                              backgroundColor: color,
                              borderTopColor: color,
                         }}
                    ></div>
               </div>
               <div className="game-controls">
                    <h2>Age: { age }</h2>
               </div>
               <div className="game-controls">
                    <p>Health: </p>
                    <ProgressBar className="m-3" variant="danger" animated now={ health } />
                    <Button className="m-3" variant="outline-warning">Feed Baby { name }</Button>
               </div>
               <div className="game-controls">
                    <Button className="m-3" variant="outline-danger">Terminate</Button>
               </div>
          </div>
     </React.Fragment>
);

export default Game;