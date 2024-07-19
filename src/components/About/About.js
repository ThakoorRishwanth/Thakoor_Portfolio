import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import pic from '../../images/Rishi2.jpg'
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src={pic}
            alt="Thakoor"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Thakoor Rishwanth</strong>. I am from Rajanna Sircilla district in Telangana. I completed my Bachelor's Degree in BHMCT from Regency College of Hotel Management and Culinary Arts, affiliated with Osmania University, in 2022.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            After gaining hands-on experience as an intern and associate at Novotel Hyderabad, I realized my passion for IT. Motivated by this realization, I began upskilling myself and enrolled in a 35-week intensive Full Stack Web Development course at Masai School. This program provided me with hands-on experience in technologies like HTML, CSS, SQL, MongoDB, JavaScript, React, and Node.js, and allowed me to collaborate on projects with teammates. Currently residing in Canada, I have further honed my skills and work ethic through various entry-level positions.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
