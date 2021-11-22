import React from 'react'
import "./contact.styles.css"

const Contact = ({darkFunction,dark}) => {
    return (
        <main>
    <section className="contactme" id="contactme-page">
        <div className="dark-mode" onClick={darkFunction}>
        <input type="checkbox" className={`${dark ? "dark-theme" : ""} toggle-darkmode`}/>
   
         </div>
        <h2 data-aos="fade-up" data-aos-duration="2000"><strong>Contact Me</strong></h2>
        <hr data-aos="fade-up" data-aos-duration="2000"/>
        <h3 data-aos="fade-up" data-aos-duration="2000"><strong>Have me make stuff for you. If you like my work and have some cool projects to work on, just send me a direct message or contact me through social sites.</strong></h3>
        <div className="contactme-container">
            <form data-aos="fade-up" data-aos-duration="2000" action="mailto:abdullahmari@gmail.com" id="contact-form">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control name-input" id="exampleFormControlInput1" placeholder="Enter Your Name" required/>
                  </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Email address</label>
                  <input type="email" className="form-control email-input" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                  <textarea className="form-control text-input" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary"><strong>Submit</strong></button>
              </form>
            <div className="contact-info">
              <p data-aos="fade-up" data-aos-duration="2000">Contact Information</p>
              <p data-aos="fade-up" data-aos-duration="2000">Abdallah Marei</p>
              <br/>
              <p data-aos="fade-up" data-aos-duration="2000"><i className="fas fa-map-marker-alt"></i> Amman, Jordan</p>
              <p data-aos="fade-up" data-aos-duration="2000"><i className="fas fa-phone"></i> +(962)798861423/+(962)777685230</p>
              <p data-aos="fade-up" data-aos-duration="2000"><i className="fas fa-envelope"></i> abdullahmari@gmail.com</p>

            </div>
        </div>
    </section>
</main>
    )
}

export default Contact
