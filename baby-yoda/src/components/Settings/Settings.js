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
               colorPickError: false,
               namePickError: false
          };

          this.handleChangeName = this.handleChangeName.bind(this);
          this.handleChangeColor = this.handleChangeColor.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);   
          this.handleFindYoda = this.handleFindYoda.bind(this);    
 
     }

     handleChangeName(e) {
          this.setState({ name: e.currentTarget.value });
     }

     handleChangeColor(color){
          this.setState({ color: color.hex });
     };

     handleSubmit(e){
          e.preventDefault();
         
          if (this.state.name !== ""){
               this.setState({namePickError: false})
          }
          if (this.state.color !== ""){
               this.setState({colorPickError: false})
          }
          if (this.state.name === ""){
               this.setState({namePickError: true})
          }
          if (this.state.color === ""){
               this.setState({colorPickError: true})
          } else {
               this.props.createYoda(this.state);
          
               this.setState({
                    name: "",
                    colour: "",
               });
          }
     }

     handleFindYoda(){

          let { findYoda } = this.props;
          
          findYoda(this.state.name);

          this.setState({
               name: "",
          });
     }

     render() {
          let { errors } = this.props;
          return (
               <Form 
                    className="container p-5"
                    onSubmit={ this.handleSubmit }
               >
                    <Form.Group className="row justify-content-center mb-5">
                         <Form.Label className="col-12"><p>Name:</p></Form.Label>
                         <Form.Control
                              type="text"
                              className="col-8 bg-dark text-warning"
                              value={ this.state.name } 
                              onChange={ this.handleChangeName } 
                         >
                         </Form.Control>
                         <p>{ errors[errors.length - 1] }</p>
                         
                    </Form.Group>
                    <p style={{ display: this.state.namePickError ? "block" : "none"}}>
                              Please pick a name!
                    </p>

                    <Form.Group className="row justify-content-center mb-5">
                         <Form.Label className="col-12"><p>Colour:</p></Form.Label>
                         <CirclePicker 
                              className="col-8 justify-content-center picker"
                              color={ this.state.color }
                              onChangeComplete={ this.handleChangeColor }
                              />
                    </Form.Group>
                         <p style={{ display: this.state.colorPickError ? "block" : "none"}}>
                              Please pick a colour!
                         </p>
               
                    <Button 
                         type="submit"
                         className="m-1" 
                         variant="outline-warning"
                    >CREATE YODA</Button>
          
                    <Button 
                         onClick={ this.handleFindYoda }
                         className="m-1" 
                         variant="outline-warning"
                    >FIND MY YODA</Button>
               </Form>
          );
     } 
};

export default Settings;