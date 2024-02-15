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
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello, I'm <strong>Vijay Jangal</strong>, a recent graduate from
              the <strong>Indian Institute of Technology Guwahati</strong> with
              a Bachelor's degree. Throughout my academic journey, I've engaged
              in a variety of projects and internships that have broadened my
              understanding of the tech industry. I've cultivated a diverse
              skill set and a passion for creating innovative solutions.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInRight">
              Beyond my academic and professional experiences, I've pursued
              personal projects that reflect my interest in technology and its
              applications. I'm
              driven by a curiosity to explore new technologies and bring ideas
              to life. As I embark on the next phase of my journey, I'm eager to
              continue learning and contributing to impactful projects that
              shape the future of technology.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInRight" key={index}>
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
