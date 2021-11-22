import React from 'react'
import "./homepage.styles.css";
import resume from "../../assests/resume.pdf"
import {Link} from "react-router-dom";

const HomePage = ({darkFunction,dark}) => {
    return (
        <main>

    <section style={{backgroundImage: "url('images/background.jpg')"}} id="home-page">
      <div className="dark-mode" onClick={darkFunction}>
      <input type="checkbox" className={`${dark ? "dark-theme" : ""} toggle-darkmode`}/>

      </div>
        <div className="home" >
            <h1>Welcome to Abdallah Marei's Portfolio</h1>
            <p>A Full Stack Web Developer At Your Service</p>
            <Link to="/contact"><button type="button" className="btn btn-primary"><strong>Contact Me</strong></button></Link>
        </div>
    </section>

    <section className="about" id="about-page">
      <h2 data-aos="fade-up" data-aos-duration="2000"><strong>About</strong></h2>
      <hr data-aos="fade-up" data-aos-duration="2000"/>
      <div className="about-container">
        <div data-aos="fade-up" data-aos-duration="2000" className="description">
          <p>My name is Abdallah Marei and I am a full stack web developer. I graduated from the University of Jordan as a Mechanical Engineer but I realized quickly that it was not for me, that is why I decided to follow my passion and start my career as a developer. Changing my career was the best decision in my life because now work is no longer work it is fun.</p>
          <p>Feel free to contact me if you have any work you think I am suited for. I am looking forward to working with you.</p>
          <a href={resume} download=""><button type="button" className="btn btn-primary"><strong>Download My CV</strong></button></a>
        </div>
        <div className="profile-picture">
          <img data-aos="fade-up" data-aos-duration="2000" src="images/abdallah.png" alt="Abdallah Marei"/>
        </div>
      </div>
    </section>

    <section className="services" id="services-page">
        <h2 data-aos="fade-up" data-aos-duration="2000"><strong>Services</strong></h2>
        <hr data-aos="fade-up" data-aos-duration="2000"/>
        <div className="services-container">
           <div data-aos="fade-up" data-aos-duration="2000" className="first-service">
            <i className="fas fa-desktop"></i>
            <h3><strong>Web development</strong></h3>
            <p>My skills in web development are versatile, I am an expert in Html5, CSS3, Javascript, PHP and React. In the future I am sure I will have more at my disposal.</p>
           </div>
           <div data-aos="fade-up" data-aos-duration="2000" className="second-service">
            <i className="fas fa-mobile-alt"></i>
            <h3><strong>Mobile App development</strong></h3>
            <p>Building Mobile applications is a necessity at this day and age, that is why I have learned Flutter and Swift to build IOS and Android applications for my clients.</p>
           </div>
           <div data-aos="fade-up" data-aos-duration="2000" className="third-container">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3><strong>Programming Teacher</strong></h3>
            <p>In my spare time I like to teach Programming for other people because I think it is wrong not share ones knowledge with others. Which is why I regularly teach others.</p>
           </div>
        </div>
    </section>

    <section className="testimonials" id="testimonials-page">
        <h2 data-aos="fade-up" data-aos-duration="2000"><strong>Testimonials</strong></h2>
        <hr data-aos="fade-up" data-aos-duration="2000"/>
        <h3 data-aos="fade-up" data-aos-duration="2000"><strong>Here is what my clients have said about me</strong></h3>
        <div className="testimonials-container">
            <div className="first-testimonial">
                <p>⭐⭐⭐⭐⭐</p>
                <blockquote><strong>"Great web developers can be pretty difficult to find sometimes. Luckily I came across Abdallah, he developed my website exactly to my very specific specifications. I highly recommend."</strong></blockquote>
                <img src="images/ghassan.png" alt="Ghassan dabak"/>
                <p>Ghassan Dabak</p>
                <p>Full Stack Developer at Orange</p>
            </div>
            <div className="second-testimonial">
                <p>⭐⭐⭐⭐⭐</p>
                <blockquote><strong>"Abdallah have really helped me with developing a successful website with the features that I dreamed about. I am very impressed by the result and excited for future developments."</strong></blockquote>
                <img src="images/azmi.png" alt="Azmi Tammam"/>
                <p>Azmi Tammam</p>
                <p>Full Stack Developer at Orange</p>
            </div>
            <div className="third-testimonial">
                <p>⭐⭐⭐⭐⭐</p>
                <blockquote><strong>"Thanks to Abdallah we are able to gain our customers trust and work towards giving them better services. Our website has pushed our company to success. I highly recommend his services."</strong></blockquote>
                <img src="images/yaser.png" alt="Yaser Ananbeh"/>
                <p>Yaser Ananbeh</p>
                <p>Full Stack Developer at Orange</p>
            </div>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div  className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/ghassan.png" className="d-block w-100" alt="Ghassan dabak"/>
                <div className="carousel-caption d-md-block">
                  <h5>"One of the best developers I met."</h5>
                  <p>Ghassan Dabak, Full Stack Developer at Orange</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/azmi.png" className="d-block w-100" alt="Azmi Tammam"/>
                <div className="carousel-caption d-md-block">
                  <h5>"You want a good product, go with Abdallah."</h5>
                  <p>Azmi Tammam, Full Stack Developer at Orange</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/yaser.png" className="d-block w-100" alt="Yaser Ananbeh"/>
                <div className="carousel-caption d-md-block">
                  <h5>"Fastest delivery of a website I have ever seen."</h5>
                  <p>Yaser Ananbeh, Full Stack Developer at Orange</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    </section>

    
</main>

    )
}

export default HomePage;
