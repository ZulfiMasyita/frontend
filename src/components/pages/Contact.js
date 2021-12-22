import React from "react";
import { useState } from "react";
import "../../App.css";
import Form from '../Form.css';
import emailjs from "emailjs-com";

const Result = () => {
    return (
        <p>Your massage has been successfully successfully sent. I will contact you soon</p>
    )
}

function Contact(props) {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("gmail", "template_qztn7vl", e.target, "user_MUofQBtctpOBwMiAI5ngD")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showResult(true)
    };

    // hide result
    setTimeout(() =>{
        showResult(false)
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="formWord2">
            <h3>ContactUs!</h3>
            </div>
            <div className="formWord">
                <span>Name</span>
                <br />
                <input className="input100" type="text" name="fullname" placeholder="Enter your fullname"  required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" placeholder="Enter your phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" placeholder="Enter your email" required />
            </div>
            <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required placeholder="Enter your Message"></textarea>
                <br />
                <button>SUBMIT</button>
            </div>
        </form>
    );
}

export default Contact;