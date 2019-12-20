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
          let { name } = this.props;
          return (
               <div className="gameOver">
                    <h1 className="text-warning death-text"> Baby { name } has gone to a galaxy far, far away....</h1>
                    <Button 
                         onClick={ this.handleClick }
                         className="mt-5 p-3" 
                         variant="outline-warning"
                    >Return { name } to the Force</Button>
               </div>
          );
     } 
};

export default EndScreen;