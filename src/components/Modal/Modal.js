import React from 'react'
import emailjs from 'emailjs-com';
import './css/modal.css'

const Modal = props => {
    const [submitMessage, updateSubmitMessage] = React.useState("Leave me a message")
    // const [submitMessage, updateSubmitMessage] = React.useState(<div class="loader">Please wait while the message is being sent...</div>)

    function sendEmail(e) {
        e.preventDefault();
        // updateSubmitMessage(<div class="loader">Please wait while the message is being sent...</div>)
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
                className={`modal-container ${props.showModal ? "show-container" : "hide-container"}`}
            >
            <div id="modal-wrapper" 
                // className="modal-wrapper"
                className={`modal-wrapper ${props.showModal ? "show-wrapper" : ""}`}
            >
                <form className="contact-form" onSubmit={sendEmail}>
                <button className="modal-close" 
                onClick={() => {
                    props.close()
                    updateSubmitMessage("Let's get in touch :^)")
                }}><span>✖</span></button>
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

                    {/* <div class="loader">Please wait while the message is being sent...</div> */}
                    <input className="CTA-contact CTA"  type="submit" value="Send" />
                </form>
            </div>
        </div>
}

export default Modal