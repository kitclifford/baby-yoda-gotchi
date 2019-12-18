import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../yoda.css';

class Game extends Component {
     constructor(props){
          super(props);
          // this.state = { time:Date.now() };
     }

     componentDidMount(){
          setInterval(() => (this.props.updateAge()), 5000);
     }

     render() { 
     let { name, color, age, health, feedClick } = this.props;

          return ( 
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
                    <div className="robe"></div>
               </div>
               <div className="game-controls">
                    <h2>Age: { age }</h2>
               </div>
               <div className="game-controls">
                    <p>Health: </p>
                    <ProgressBar className="m-3" variant="danger" animated now={ health } />
                    <Button 
                         className="m-3" 
                         variant="outline-warning"
                         onClick={ feedClick }
                    >Feed Baby { name }</Button>
               </div>
               <div className="game-controls">
                    <Button className="m-3" variant="outline-danger">Terminate</Button>
               </div>
          </div>
     </React.Fragment>

           );
     }
}
 
export default Game;



// EXTEND CLASS AND ADD STATE AND PROPS
// const Game = ({ name, color, age, health, feedClick }) => (
//      <React.Fragment>
//           <div className="content">
//                <h1>Baby { name }</h1>
//                <div className="gamebox">
//                     <div 
//                          className="baby-yoda"
//                          style={{
//                               backgroundColor: color,
//                               borderTopColor: color,
//                          }}
//                     ></div>
//                     <div className="robe"></div>
//                </div>
//                <div className="game-controls">
//                     <h2>Age: { age }</h2>
//                </div>
//                <div className="game-controls">
//                     <p>Health: </p>
//                     <ProgressBar className="m-3" variant="danger" animated now={ health } />
//                     <Button 
//                          className="m-3" 
//                          variant="outline-warning"
//                          onClick={ feedClick }
//                     >Feed Baby { name }</Button>
//                </div>
//                <div className="game-controls">
//                     <Button className="m-3" variant="outline-danger">Terminate</Button>
//                </div>
//           </div>
//      </React.Fragment>
// );

// export default Game;