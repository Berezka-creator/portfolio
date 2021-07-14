import { Component } from 'react'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';


import "./Contact.css";
import Input from '../UI/Input.jsx';

class Contact extends Component {

    state = {
        orderForm:{
            name:{
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your name"
                },
                value: ''
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type: "email",
                    placeholder: "Your email..."
                },
                value: ''
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: "text",
                    placeholder: "Your message..."
                },
                value: ''

            }


        },
        loading: false,
        message: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
   
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
     
        updatedFormElement.value = event.target.value;

        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});  
    }
    

    sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_83aqx4c', e.target, "user_foLN1bYDlF1jKYwQM8UUe")
    
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
       
    }

    render () {

        const formElementArray = [];
        for (let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.sendEmail}>
           
                 {formElementArray.map(formElement => (
                     <Input 
                        key= {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                 ))}
                 <button type="submit">Send</button>

            </form>
        )


        return (
            <div className="contact" id="contact">
                <div className="left">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="right">
                    <h2>Contact</h2>
                        {form}
                       
                </div>
                
            </div>
        );
     } 
}
export default Contact;

