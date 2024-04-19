import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
         <div className="customer-dealing-section">
            <div className="customer-dealing-main-div">
            <div className="customer-dealing-left-div">
                <h2>Let’s Talk About Your Project</h2>
                <p>Do you have a project in mind, that you feel 
                    our approach would work well for?</p>
                    <p>We’re always happy to discuss your project with 
                        you and put together a free proposal.</p>
                        
            </div>
            <div className="customer-dealing-right-div">
                <h4> Just fill out the form below  to get started.</h4>
                <form className="form">
                    <div className="group">
                    <input placeholder="" type="text" required=""/>
                    <label for="name">Name</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="email" id="email" name="email" required=""/>
                    <label for="email">Email</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="text" id="company" name="company" required=""/>
                    <label for="email">Company</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="text" id="phoneNo" name="phoneNo" required="" />
                    <label for="email">Phone No</label>
                    </div>
                <div className="group">
                    <input placeholder="Send us brief" type="file" id="file" name="file" required=""/>
                    <label for="email">Send Us Your Brief</label>
                    </div>
                <div className="group">
                    <textarea placeholder="" id="message" name="message" rows="5" required=""></textarea>
                    <label for="comment">Message</label>
                </div>
                <div className="groups">
                    <input type="checkbox" />
                    <p>I agree to have my information stored <span>Privacy Policy.</span></p>
                </div>
                    <button type="submit">Send your message</button>
                  </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact