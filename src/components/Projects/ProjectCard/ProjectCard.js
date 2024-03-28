import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import project1 from "../../../assets/project1.png"
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
  return (
      <>
          {ProjectList.map((list, index) => (
              <ScrollAnimation
                  animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  key={index}
              >
                  <Card>
                      <CardLeft>
                          {index == 0 && <img src={project1} alt={list.name} />}
                          {index == 1 && <img src={project2} alt={list.name} />}
                          {index == 2 && <img src={project3} alt={list.name} />}
                          {index == 3 && <img src={project4} alt={list.name} />}
                      </CardLeft>
                      <CardRight>
                          <h4>{list.title}</h4>
                          <p>{list.description}</p>
                          <TechCardContainer>
                              {list.tech_stack.map((tech, index) => (
                                  <TechCard key={index}>{tech}</TechCard>
                              ))}
                          </TechCardContainer>
                          <BtnGroup>
                              {list.github_url.length > 0 && (
                                  <a
                                      className="btn SecondaryBtn btn-shadow"
                                      href={list.github_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      Github
                                  </a>
                              )}
                              {list.demo_url.length > 0 && (
                                  <a
                                      className="btn PrimaryBtn btn-shadow"
                                      href={list.demo_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      Demo ➜
                                  </a>
                              )}
                          </BtnGroup>
                      </CardRight>
                  </Card>
              </ScrollAnimation>
          ))}
      </>
  );
}

export default ProjectCard;
