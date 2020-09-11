import React, { Fragment } from 'react'
import emailjs from 'emailjs-com';
import './css/contact.css'

const Contact = (props) => {

    const [submitMessage, updateSubmitMessage] = React.useState("Let's get in touch")

    function sendEmail(e) {
        e.preventDefault();
        const form = e.target
        emailjs.sendForm('default_service', 'template_tqknj9b', e.target, 'user_JWcm4lveU05DWLfNas9iM')
          .then((result) => {
            form.reset()
              updateSubmitMessage("Speak soon :)")
          }, (error) => {
            updateSubmitMessage("Missing information")
          })
      }
    
      return (
        <Fragment>

            <form className="contact-form" onSubmit={sendEmail}>
                <p className="contact-greeting">{submitMessage}</p> 
                <div className="contact-item">
                    <label className="contact-label">Name</label>
                    <input required className="contact-input" type="text" name="name" />
                </div>

                <div className="contact-item">
                    <label className="contact-label">Email</label>
                    <input required className="contact-input" type="email" name="email" />
                </div>

                <div className="contact-item">
                    <label className="contact-label">Message</label>
                    <textarea required className="contact-input contact-input_textArea" name="message" />
                </div>


            <input className="CTA-contact"  type="submit" value="Send" />
            </form>
        </Fragment>
      );
}

export default Contact