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
import VijayJangal from "../../assets/VijayJangal.png"
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src={VijayJangal} alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInRight">
              Hello, I'm <strong>Vijay Jangal</strong>, a recent graduate from
              the <strong>Indian Institute of Technology Guwahati</strong> with
              a Bachelor's degree. Throughout my academic journey, I've engaged
              in a variety of projects and internships that have broadened my
              understanding of the tech industry. I've cultivated a diverse
              skill set and a passion for creating innovative solutions.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Beyond my academic and professional experiences, I've pursued
              personal projects that reflect my interest in technology and its
              applications. I'm driven by a curiosity to explore new
              technologies and bring ideas to life. As I embark on the next
              phase of my journey, I'm eager to continue learning and
              contributing to impactful projects that shape the future of
              technology.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInRight">
              Working collaboratively within a team towards shared objectives
              has been incredibly rewarding, fueling my personal growth and
              fostering innovation. With a keen interest in web development and
              cross-platform mobile development, I'm excited about exploring new
              projects. Eager to contribute my skills and embrace challenges,
              I'm ready to embark on the next phase of my journey in technology.
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
