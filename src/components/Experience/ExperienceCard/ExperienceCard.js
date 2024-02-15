import { ExperienceList } from "../../../data/ExperienceData";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, CardLeft, CardRight } from "./ExperienceCardElements";
function ExperienceCard() {
  return (
    <>
      {ExperienceList.map((list, index) => (
        <ScrollAnimation
          animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
          key={index}
        >
          <Card>
            <CardLeft>
              <h2>
                <strong>{list.title}</strong>
              </h2>
              <br />
              <h4>{list.company}</h4>
              <br />
              <p>{list.date}</p>
            </CardLeft>
            <CardRight>
              <ul>
                {list.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}
export default ExperienceCard;
