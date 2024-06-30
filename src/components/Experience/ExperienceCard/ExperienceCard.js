import { ExperienceList } from "../../../data/ExperienceData";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Card,
  CardLeft,
  CardRight,
  Title,
  Company,
  Date,
  DetailList,
  DetailItem,
} from "./ExperienceCardElements";
import "animate.css/animate.min.css";

function ExperienceCard() {
  return (
    <>
      {ExperienceList.map((list, index) => (
        <ScrollAnimation
          animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
          animateOnce={true}
          key={index}
        >
          <Card>
            <CardLeft>
              <Title>{list.title}</Title>
              <Company>{list.company}</Company>
              <Date>{list.date}</Date>
            </CardLeft>
            <CardRight>
              <DetailList>
                {list.details.map((detail, index) => (
                  <DetailItem key={index}>{detail}</DetailItem>
                ))}
              </DetailList>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ExperienceCard;
