import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CirclePicker } from 'react-color';

class Settings extends Component {

     render() {
          return (
               <Form className="container p-5">

                    <Form.Group className="row justify-content-center mb-5">
                         <Form.Label className="col-12"><p>Name:</p></Form.Label>
                         <Form.Control
                              type="text"
                              className="col-8"
                         >
                         </Form.Control>
                    </Form.Group>

                    <Form.Group className="row justify-content-center mb-5">
                         <Form.Label className="col-12"><p>Colour:</p></Form.Label>
                         <CirclePicker className="col-8 justify-content-center"/>
                    </Form.Group>
                    
                    <Button className="m-1" variant="outline-light">new game</Button>
                    <Button className="m-1" variant="outline-light">view yoda history</Button>

               </Form>
          );
     } 
};

export default Settings;