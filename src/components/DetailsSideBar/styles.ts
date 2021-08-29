import styled from "styled-components";

export const DetailsSideBarWrapper = styled.div`
  grid-area: DetailsSideBarWrapper;
  color: var(--light-color);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 972px) {
    background-color: var(--dark-color);
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 60px 60px;
    padding: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }

  @media (max-width: 972px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0;

  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }

  @media (max-width: 972px) {
    display: none;
  }
`;

export const ImportantDetails = styled.p`
  font-size: 1rem;
  font-weight: semibold;
  color: var(--grey-color);
  text-align: center;
`;

export const Details = styled.p`
  font-size: 1rem;
  font-weight: semibold;
  color: var(--grey-color);
  text-align: center;

  @media (max-width: 972px) {
    display: none;
  }
`;