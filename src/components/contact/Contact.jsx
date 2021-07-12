import { useState } from 'react'
import "./Contact.css"

export default function Contact() {

    const [message,setMessage] = useState (false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)

    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} action="mailto:berezina.y.v.2015@gmail.com">
                    <input type="text" placeholder="Email" />
                    <textarea placehilder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP :) </span>}
               </form>
            </div>
            
        </div>
    )
}
