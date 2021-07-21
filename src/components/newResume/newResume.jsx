import React from 'react'
import './newResume.css'

export default function newResume() {
    return (
        <div classNameName="main">
            
        <div className="resume">
        <div className="resume-title name">
            <h1>Julia Berezina</h1>
            <h2>Front End Developer</h2>
        </div>

        <section className="contact">
            <div>
                <i className="fas fa-mobile-alt">&nbsp;&nbsp;&nbsp;&nbsp;+1(415)813-0678</i>
            </div>
        
            <div>
                <i className="fas fa-at">&nbsp;&nbsp;berezina.y.v.2015@gmail.com</i>
            </div>

            <div>
                <i className="fas fa-marker">&nbsp;&nbsp;San-Francisco, CA</i>
            </div>

            <div>
                <i className="fas fa-link">&nbsp;&nbsp;www.github.berezka-creator.com</i>
            </div>

        </section>

        <div className="summary">
            <div className="resume-section__title" id="resume-section__title"><i className="fas fa-user"></i>Summary</div>
            <section>
                <p>As a problem solver individual with over five years of engineering and project management experience, I would like to pursue a career change to software engineer and aiming to be considered for a software engineer/front-end developer internship.</p>      
            </section>
        </div>

        <div className="skills">
            <div className="resume-section__title" id="resume-section__title"><i className="fas fa-wrench"></i>Skills</div>
            <section>
                <h4>Programming Skills</h4>
                <div className="skill">
                    <h4>HTML</h4>
                    <div className="knowledge" style="width:90%"></div>
                    
                    <h4>CSS</h4>
                   <div className="knowledge" style="width:90%"></div>

                    <h4>JQuery</h4>
                    <div className="knowledge" style="width:80%"></div>

                    <h4>JavaScript</h4>
                    <div className="knowledge" style="width:80%"></div>

                    <h4>ReactJS</h4>
                    <div className="knowledge" style="width:60%"></div>

                    <h4>SASS</h4>
                    <div className="knowledge" style="width:80%"></div>

                    <h4>git</h4>
                    <div className="knowledge" style="width:60%"></div>

                    <h4>MySQL</h4>
                    <div className="knowledge" style="width:60%"></div>

                    <h4>Python</h4>
                    <div className="knowledge" style="width:30%"></div>


                </div>
    
                <div className="separator"></div>
    
                <h4>Design</h4>
                <div className="skill">
                    <h4>Photoshop</h4>
                    <div className="knowledge"></div>
                    <h4>Illustrator</h4>
                    <div className="knowledge"></div>
                </div>
    
                <div className="separator"></div>
    
                <h4>Other</h4>
                <p></p>
            </section>
        </div>

        <div className="experience">
            <div className="resume-section__title" id="resume-section__title"><i className="fas fa-file-code"></i>Website Development Experience</div>
        <section>
            <div className="resume-work">
                <h3 className="resume-work__title">WordPress Developer </h3>
                <h4 className="resume-work__city">SF Living Wage Coalition | San-Francisco, Ca</h4>
                <h5 className="resume-work__date">Sep 2020 - Dec 2020</h5>
                <ul className="resume-work__description">
                    <li>Developed a new website from scratch for the Film Festival using WordPress.
                            https://www.csej.org/</li>
                   <li>Collaborated with team members to ensure a positive user experience.</li>
                   <li>Researched relevant designs that fit the website and presented it to the team with recommendations.</li>
                   <li>Maintained Sf Living Wage’s home website; fixed the auction module and other bugs as needed.
                    Front End</li> 
                </ul>
            </div>
            <div className="separator"></div>
            <div className="resume-work">
                    <h3 className="resume-work__title">Front End Developer</h3>
                    <h4 className="resume-work__city">Code for SF | San-Francisco, Ca</h4>
                    <h5 className="resume-work__date">June 2020 - August 2020</h5>
                    <ul className="resume-work__description">
                        <li>Contributed to the SF Bay Area Relief web application using React. It provided a database for non-profits to search for grants and loans relevant to their organization.
        https://github.com/sfbrigade/datasci-bay-area-relief-frontend</li>
                    <li>Worked collaboratively with other development teams.</li>
                    <li>Researched relevant designs that fit the website and presented it to the team with recommendations.</li>
                    <li>Built the test code for each React component.</li>
                    </ul>
            </div>
            
        </section>

        <div className="resume-section__title" id="resume-section__title"><i className="fas fa-briefcase"></i>Experience</div>
            <section>
                <div className="resume-work">
                    <h3 className="resume-work__title">Digital Marketing Associate</h3>
                    <h4 className="resume-work__city">Partita CDJ | San-Francisco, Ca</h4>
                    <h5 className="resume-work__date">March 2018 - March 2020</h5>
                    <ul className="resume-work__description">
                        <li>Developed the store’s website using Shopify and improved SEO analytics based on the company’s mission and the target audience.</li>
                       <li>Managed social media channels including Facebook, Instagram, Pinterest, and promoting the store’s values and products.</li>
                       <li>Managed custom jewelry projects by monitoring and coordinating all customer service processes to ensure customer satisfaction.</li>
                    </ul>
                </div>
    
                <div className="separator"></div>
    
                <div className="resume-work">
                    <h3 className="resume-work__title">Mining Engineer</h3>
                    <h4 className="resume-work__city">Irone Ore Mining | Russia</h4>
                    <h5 className="resume-work__date">Dec 2011 - May 2017</h5>
                    <ul className="resume-work__description">
                        <li>Spearheaded a project for mine expansion at Iron Ore Mine that entailed collaborating with other departments with other engineers and ensures clear communication.</li>
                       <li>Analyzed and consolidated data from multiple resources; provided drafted correspondence and controlled quality of work to report monthly progress. Analyzed various sites and provided recommendations.</li>
                    </ul>
                </div>
                
            </section>

        </div>

        <div className="education">
            <div className="resume-section__title" id="resume-section__title"><i className="fas fa-graduation-cap"></i>Education</div>
            <section>
                <div className="resume-education">
                    <h3 className="resume-education_title">City College of San Francisco</h3>
                    <h4 className="resume-education__city">Web Application Development Certificate</h4>
                    <h5 className="resume-education__date">Aug 2019 – Dec 2020</h5>
                </div>
                <div className="separator"></div>
    
                <div className="resume-education">
                    <h3 className="resume-education_title">Ural Mountain State University</h3>
                    <h4 className="resume-education__city">Bachelor of Mining Engineering</h4>
                    <h5 className="resume-education__date">Sep 2006 – July 2011</h5>
                </div>
            </section>
        </div>

        <div className="language">
            <div className="resume-section__title" id="resume-section__title"><i className="fas fa-user"></i>Languages</div>
            
            <div className="languages">
                <h4>English</h4>
                <div className="knowledge"  style="width:90%"></div>
                <h4>Russian</h4>
                <div className="knowledge" style="width:100%"></div>
                <h4>Arabic</h4>
                <div className="knowledge" style="width:40%"></div>
            </div>
        </div>

        <div className="hobby">
            <div className="resume-section__title" id="resume-section__title"><i className="fas fa-user"></i>Hobby</div>
            <div className="hobbies">
                <h4>Craft</h4>
                
            <h4>Human Biology</h4>

            </div>
            
        </div>

    {/* <!-- I enjoy my life in all possibilites tha possible -->
    <!-- Everything what I do, just enjoy my life in n all possiblilites that was given us to exploe diffrent sides of our creation -->


    */}
            
        </div>
    </div>
    )
}
