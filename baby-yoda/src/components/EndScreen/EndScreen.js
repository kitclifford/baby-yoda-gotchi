import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class EndScreen extends Component {
     constructor(props){
          super(props)

          this.handleClick = this.handleClick.bind(this);
     }

     handleClick(){
          this.props.deleteAndReset();
     }

     render() {
          return (
               <div className="gameOver">
                    <h1 className="text-warning">Your Baby Yoda has gone to a galaxy far far away... in the clouds...</h1>
                    <Button 
                         onClick={ this.handleClick }
                         className="mt-5 p-3" 
                         variant="outline-warning"
                    >Create a new Yoda</Button>
               </div>
          );
     } 
};

export default EndScreen;