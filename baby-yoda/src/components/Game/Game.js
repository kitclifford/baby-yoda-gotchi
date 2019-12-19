import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../yoda.css';
import UIfx from 'uifx';
import mp3File from './yodaNoise.mp3';

const noise = new UIfx(mp3File);

class Game extends Component {

     constructor(props){
          super(props);
          this.handleClick=this.handleClick.bind(this);
     }

     intervalHealth = 0;
     intervalAge = 0;

     componentDidMount(){
          this.intervalAge = setInterval(() => (this.props.updateAge()), 1000);
          this.intervalHealth = setInterval(() => (this.props.updateHealth()), 1000);
     }

     componentWillUnmount() {
          clearInterval(this.intervalHealth);
          clearInterval(this.intervalAge);
     }

     handleClick() {
          noise.setVolume(1.0).play();
          this.props.feedClick();
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
                              <h3>Age: { displayAge }</h3>
                         </div>
                         <div className="game-controls">
                              <p>Health: { health }%</p>
                              <ProgressBar className="m-3" variant="danger" animated now={ health } />
                              <Button 
                                   className="m-3 buttonFeed" 
                                   variant="outline-warning"
                                   onClick={ this.handleClick }
                              >Feed Baby { name }</Button>
                         </div>
                    </div>
               </React.Fragment>
          );
     }
}
 
export default Game;