import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding: 2rem;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2),
    0 6px 6px -3px rgba(0, 0, 0, 0.05);
  // background: linear-gradient(135deg, #f5f7fa, #c3cfe2);

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 992px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Company = styled.h4`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 1rem;
`;

export const Date = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 2rem;
`;

export const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  color: #555;
  @media (min-width: 992px) {
    padding-left: 20px;
  }
`;

export const DetailItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.75);

  &:before {
    content: "•";
    color: #000;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`;
