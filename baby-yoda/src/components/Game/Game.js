import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../yoda.css';

class Game extends Component {
     // constructor(props){
     //      super(props);
     // }

     componentDidMount(){
          setInterval(() => (this.props.updateAge()), 1000);
          setInterval(() => (this.props.updateHealth()), 30000);
     }

     render() { 
     let { name, color, age, health, feedClick } = this.props;

     let startAge = age;

     let days = Math.floor(startAge / (3600*24));
     startAge  -= days*3600*24;
     let hrs   = Math.floor(startAge / 3600);
     startAge  -= hrs*3600;
     let mnts = Math.floor(startAge / 60);
     startAge  -= mnts*60;
     let displayAge = (days+" days, "+hrs+" hrs, "+mnts+" minutes, "+startAge+" seconds");

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
                              <h2>Age: { displayAge }</h2>
                         </div>
                         <div className="game-controls">
                              <p>Health: { health }%</p>
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