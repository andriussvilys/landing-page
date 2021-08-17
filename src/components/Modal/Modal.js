import React from 'react'
import emailjs from 'emailjs-com';
import './css/modal.css'

const Modal = props => {

    const responses = {
        default: <div></div>,
        sending: <div>
                    <p>Please stand by.</p>
                    <p>Your message is being sent
                        <span role="img" aria-label="runner"> 🏃</span>
                        <span role="img" aria-label="incoming envelope">📨</span>
                    </p>
                </div>,
        success: <div>
                    <p>Your message has been received.</p>
                    <p>Thank you
                        <span role="img" aria-label="wink face"> 😉</span>
                        <span role="img" aria-label="thumbs up"> 👍</span>
                    </p>
                </div>,
        error: <div>
                    <p>Something went wrong
                        <span role="img" aria-label="person gesturing no">🙅</span>
                        <span role="img" aria-label="cross mark">❌</span>
                    </p>
                    <p>
                        <span className={"modal-alternative_text"}>You can send a message from your email client by
                            <a href = "mailto: andriussvilys@gmail.com"> clicking here</a>
                        </span>
                    </p>
                </div>
    }

    const[status, updateStatus] = React.useState(null)

    function sendEmail(e) {

        e.preventDefault();
        const form = e.target

        updateStatus("sending")

        emailjs.sendForm('default_service', 'template_tqknj9b', form, 'user_JWcm4lveU05DWLfNas9iM')
        .then(
            (result) => {
                form.reset()
                updateStatus("success")
            }, 
            (error) => {
                updateStatus("error")
            }
        )
    }

    React.useEffect(() => {
        if(!props.showModal)
        {
            updateStatus(null)
        }
    }, [props.showModal])

    return<div id="modal-container" 
                className={`modal-container 
                    ${props.triggered ? 
                        props.showModal ? "show-container" : "hide-container" 
                    : ""}
                `}
            >
            <div id="modal-wrapper" 
                className={`modal-wrapper 
                    ${props.triggered ? 
                        props.showModal ? "show-wrapper" : "hide-wrapper"
                    : ""}
                `}
            >
                <form className="contact-form" onSubmit={sendEmail}>

                    <p className="contact-greeting">Let's get in touch
                        <span role="img" aria-label="frog face"> 🐸</span>
                    </p> 

                    <div className={"form-container"}>
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

                        <div className={
                            `submitResponse 
                            ${status ? "submitResponse-show" : null}
                            ${status ? "show-container_white" : "hide-container_white"}
                            `} >
                                <div className={`
                                    submitResponse_wrapper 
                                    ${status ? "show-wrapper" : "hide-wrapper"}
                                `}>
                                    {status ? responses[status] : null}
                                </div>
                        </div>

                    </div>


                    <div className="modal-buttons">

                        <button className={`CTA-contact CTA ${!status ? "" : "CTA_disabled"}`}>
                            <input type="submit" value=""/>
                            <span>send</span>
                        </button>

                        {/* <button className="CTA_secondary" 
                            onClick={(e) => {
                                e.preventDefault()
                                if(!status){
                                    updateStatus("sending")
                                }
                                else if(status == "sending")
                                {
                                    updateStatus("success")
                                }
                                else if(status == "success")
                                {
                                    updateStatus("error")
                                }
                                else if(status == "error")
                                {
                                    updateStatus(null)
                                }
                            }}
                        >
                            <span>{!status ? "Toggle" : status}</span>
                        </button> */}

                        <button className="CTA_secondary" 
                            onClick={(e) => {
                                e.preventDefault()
                                props.close()
                                updateStatus(null)
                            }}
                        >
                            <span>{status ? "Close" : "Cancel"}</span>
                        </button>

                    </div>

                    <div className={"modal-alternative"}>
                        <span className={"modal-alternative_text"} >Use your email client by
                            <a href = "mailto: andriussvilys@gmail.com"> clicking here</a>
                        </span>
                    </div>

                </form>
            </div>
        </div>
}

export default Modal