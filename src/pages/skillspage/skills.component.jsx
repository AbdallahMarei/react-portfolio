import React from 'react'
import "./skills.styles.css"

const Skills = ({darkFunction,dark}) => {
    return (
        <main>
        <section className="qualifications" id="qualifications-page">
            <div className="darkmode" onClick={darkFunction}>
                <input type="checkbox" className={`${dark ? "dark-theme" : ""} toggle-darkmode`}/>
       
             </div>
            <h2 data-aos="fade-up" data-aos-duration="2000"><strong>Qualifications</strong></h2>
            <hr data-aos="fade-up" data-aos-duration="2000"/>
            <div className="table">
            <div className="first-cell">
                <h3 data-aos="fade-up" data-aos-duration="2000"><strong>Experience</strong></h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="second-cell">
                <ol>
                    <li><strong>Stack Web Developer Trainee</strong>  at Orange Coding Academy.
                        <p>From Sep 2021 - March 2022</p>
                    </li>
                    <li><strong>Mechanical Engineer - PV Sales Engineer</strong> at Izzat Marji.
                        <p>From Dec 2020 - June 2021</p> 
                    </li>
                </ol>
            </div>
            <div className="first-cell">
                <h3 data-aos="fade-up" data-aos-duration="2000"><strong>Education</strong></h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="second-cell">
                <ol>
                    <li><strong>Mechanical Engineer</strong> from the University of Jordan
                        <p>From Sep 2015 - June 2020</p>
                    </li>
                    <li><strong>Full Stack Web Developer Course</strong> from Udemy
                        <p>June 2021 - August 2021</p> 
                    </li>
                </ol>
            </div>
        </div>
        </section>
        
    
        <section className="projects" id="projects-page">
            <h2><strong>Projects</strong></h2>
            <hr/>
            <h3><strong>A list of projects done by me</strong></h3>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" style={{width: "80%", margin: "0 auto"}}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/project1.PNG" className="d-block" alt="first project"/>
                  </div>
                  <div className="carousel-item">
                    <img src="images/project2.PNG" className="d-block" alt="second project"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
        </section>
    </main>
    )
}

export default Skills;
