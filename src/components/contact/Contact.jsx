import { useState } from 'react'
import emailjs from 'emailjs-com'
import "./Contact.css";
import handShake from '../../images/shake.svg'


export default function Contact() {

    const [message, setMessage] = useState(false);
    const [form, showForm] = useState(true);

    function sendEmail(e) {
        e.preventDefault();
   
        emailjs.sendForm('service_sd9giec', 'template_83aqx4c', e.target, "user_foLN1bYDlF1jKYwQM8UUe")
    
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setMessage(true)
        showForm(false)
    } 


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={handShake} alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>    
                    {showForm ? form &&
                        <form id="myForm" onSubmit={sendEmail}>
                            <label>
                                <input name="email" type="email" id="email" placeholder="Your email..." name="email" required/>
                            </label>
                            <label>
                                <textarea name="message" id="comment" name="comment" placeholder="Write something..." required></textarea>
                            </label>
                            <button type="submit">Send</button>

                        </form> :  null}

                    {message && <span>Thanks, I will reply ASAP ;)</span>}
            </div>
        </div>
        );
    };


