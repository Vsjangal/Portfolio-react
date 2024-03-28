import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  ul {
    font-weight: 400;
    max-width: 90%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);

    text-align: start;
    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }

  li {
    margin-top: 1rem;
  }
`;
