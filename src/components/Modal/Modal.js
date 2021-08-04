import React from 'react'
import emailjs from 'emailjs-com';
import './css/modal.css'

const Modal = props => {
    const [submitMessage, updateSubmitMessage] = React.useState("Leave me a message")

    function sendEmail(e) {
        e.preventDefault();
        const form = e.target
        emailjs.sendForm('default_service', 'template_tqknj9b', e.target, 'user_JWcm4lveU05DWLfNas9iM')
            .then((result) => {
            form.reset()
                updateSubmitMessage("Thank you for the message 😉👍")
            }, (error) => {
            updateSubmitMessage("Missing information")
            })
        }

    return<div id="modal-container" 
                // className="modal-container"
                className={`modal-container 
                    ${props.triggered ? 
                        props.showModal ? "show-container" : "hide-container" 
                    : ""}
                `}
            >
            <div id="modal-wrapper" 
                // className="modal-wrapper"
                className={`modal-wrapper 
                    ${props.triggered ? 
                        props.showModal ? "show-wrapper" : "hide-wrapper"
                    : ""}
                `}
            >
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

                    <div className="modal-buttons">

                        <input className="CTA-contact CTA"  type="submit" value="Send" />
                        <button className="CTA_secondary" 
                            onClick={(e) => {
                                e.preventDefault()
                                props.close()
                                updateSubmitMessage("Let's get in touch 🐸")
                            }}
                        >
                            Cancel
                        </button>
                    </div>

                    <div className={"modal-alternative"}>
                        <span>Or open your own email client by <a href = "mailto: andriussvilys@gmail.com">clicking here</a>. </span>
                    </div>

                </form>
            </div>
        </div>
}

export default Modal