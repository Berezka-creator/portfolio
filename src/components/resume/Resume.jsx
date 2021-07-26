import React from 'react'
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faAt, faMarker, faLink, faUser, faWrench, faFileCode, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ResumeSection from "./resumeSection/ResumeSection"


export default function Resume() {
    return (
        <div className="resume">
            <div className="title-container">
                <div className="resume-title">
                     <h1>Julia Berezina</h1>
                    <h2>Front End Developer</h2>
                </div>

                <div className="resume-contact contact-container">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faMobile} className="i" />
                    <p>+1 (415)632-0302</p>

                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faAt}  className="i"/>
                    <p>berezina.y.v.2015@gmail.com</p>

                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faMarker}  className="i"/>
                    <p>San Francisco, CA</p>

                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faLink}  className="i"/>
                     <p>www.github/berezka-creator.com</p>
                </div>
             </div>
                
            </div>

           
       
            <ResumeSection 
                class="summary-container"
                icon={faUser} 
                title ="Summary">
               <p>As a problem solver individual with over five years of engineering and project management experience, I would like to pursue a career change to software engineer and aiming to be considered for a software engineer/front-end developer internship.</p>
           </ResumeSection>

            <ResumeSection 
                class="skills-container"
                icon={faWrench} 
                title="Skills">
               <div className="skills">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>JQuery</div>
                    <div>ReactJS</div>
                    <div>Bootstrap</div>
               </div>
           </ResumeSection>

            <ResumeSection 
                class="webexp-container"
                icon={faFileCode} 
                title="Web Experience">
                <div className="experience">
                    <div className="experience__item">
                    <h3>WordPress Developer </h3>
                        <h4>SF Living Wage Coalition | San-Francisco, Ca</h4>
                        <h5>Sep 2020 - Dec 2020</h5>
                        <ul>
                            <li>Developed a new website from scratch for the Film Festival using WordPress.
                                 https://www.csej.org/</li>
                            <li>Collaborated with team members to ensure a positive user experience.</li>
                                <li>Researched relevant designs that fit the website and presented it to the team with recommendations.</li>
                            <li>Maintained Sf Living Wage’s home website; fixed the auction module and other bugs as needed.
                                 Front End</li> 
                        </ul>
                    </div> 
                    <div className="separator"></div>
                    <div className="experience__item">
                        <h3>Front End Developer</h3>
                        <h4>Code for SF | San-Francisco, Ca</h4>
                        <h5>June 2020 - August 2020</h5>
                        <ul>
                            <li>Contributed to the SF Bay Area Relief web application using React. It provided a database for non-profits to search for grants and loans relevant to their organization.
                                https://github.com/sfbrigade/datasci-bay-area-relief-frontend</li>
                            <li>Worked collaboratively with other development teams.</li>
                            <li>Researched relevant designs that fit the website and presented it to the team with recommendations.</li>
                            <li>Built the test code for each React component.</li>
                        </ul>

                    </div>
                </div>
            </ResumeSection>

            <ResumeSection
                class="exp-container"
                icon={faBriefcase} 
                title="Experience">
                <div className="experience">
                    <div className="experience__item">
                        <h3>Digital Marketing Associate</h3>
                        <h4>Partita CDJ | San-Francisco, Ca</h4>
                        <h5>March 2018 - March 2020</h5>
                        <ul>
                            <li>Developed the store’s website using Shopify and improved SEO analytics based on the company’s mission and the target audience.</li>
                            <li>Managed social media channels including Facebook, Instagram, Pinterest, and promoting the store’s values and products.</li>
                            <li>Managed custom jewelry projects by monitoring and coordinating all customer service processes to ensure customer satisfaction.</li>
                        </ul>
                    </div>

                    <div className="separator"></div>
                    <div className="experience__item">
                        <h3>Mining Engineer</h3>
                        <h4>Irone Ore Mining | Russia</h4>
                        <h5>Dec 2011 - May 2017</h5>
                        <ul>
                            <li>Spearheaded a project for mine expansion at Iron Ore Mine that entailed collaborating with other departments with other engineers and ensures clear communication.</li>
                            <li>Analyzed and consolidated data from multiple resources; provided drafted correspondence and controlled quality of work to report monthly progress. Analyzed various sites and provided recommendations.</li>
                        </ul>
                    </div>
                </div>

            </ResumeSection>
           
            <ResumeSection 
                class = "edu-container"
                icon={faGraduationCap} 
                title ="Education">
               <div className="education"> 
                    <div className="education__item">
                    <h3>City College of San Francisco</h3>
                    <h4>Web Application Development Certificate</h4>
                    <h5>Aug 2019 – Dec 2020</h5>
                </div>

                <div className="education__item">
                    <h3>Ural Mountain State University</h3>
                    <h4>Bachelor of Mining Engineering</h4>
                    <h5>Sep 2006 – July 2011</h5>
                </div>

               </div>
           </ResumeSection>

            <ResumeSection 
                class="lang-container"
                icon={faMobile} 
                title="Languages">
                    <div className="language">
                        <div>Russian</div>
                        <div>English</div>
                        <div>Arabic</div>   
                    </div>
               
            </ResumeSection>

            <ResumeSection 
                class="hobby-container"
                icon={faAt} 
                title="Hobby">
                    <div className="hobby">
                        <div>Capoeira</div>
                        <div>Human Biology</div>
                        <div>Earth Science</div>   
                    </div>
               
            </ResumeSection>
        </div>

    )
}
