import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CirclePicker } from 'react-color';

class Settings extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               name: props.name,
               color: props.color,
               submitted: false,
          };

          this.handleChangeName = this.handleChangeName.bind(this);
          this.handleChangeColor = this.handleChangeColor.bind(this);    
     }

     handleChangeName(e) {
          this.setState({ name: e.currentTarget.value });
     }

     handleChangeColor(color){
          this.setState({ color: color.hex });
     };

     render() {
          return (
               <Form className="container p-5">
                    <Form.Group className="row justify-content-center mb-5">
                         <Form.Label className="col-12"><p>Name:</p></Form.Label>
                         <Form.Control
                              type="text"
                              className="col-8"
                              value={ this.state.input } 
                              onChange={ this.handleChangeName } 
                         >
                         </Form.Control>
                    </Form.Group>

                    <Form.Group className="row justify-content-center mb-5">
                         <Form.Label className="col-12"><p>Colour:</p></Form.Label>
                         <CirclePicker 
                              className="col-8 justify-content-center"
                              color={ this.state.color }
                              onChangeComplete={ this.handleChangeColor }
                              />
                    </Form.Group>
                    
                    <Button 
                         type="submit"
                         className="m-1" 
                         variant="outline-warning"
                    >New game</Button>

                    <Button 
                         className="m-1" 
                         variant="outline-warning"
                    >view yoda history</Button>
               </Form>
          );
     } 
};

export default Settings;