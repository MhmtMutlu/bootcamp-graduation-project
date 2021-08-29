import styled from "styled-components";

export const SideBarWrapper = styled.div`
  grid-area: SideBarWrapper;
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
    padding: 2.5rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;

  @media (max-width: 1520px) {
    font-size: 2rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }

  @media (max-width: 972px) {
    font-size: 2rem;
  }
`;

export const EditImage = styled.img`
  height: 70px;
  width: 70px;
  margin: 4rem 0;

  @media (max-width: 972px) {
    display: none;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 972px) {
    flex-direction: row;
    margin-top: 2rem;
  }
`;

export const ActiveStep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--light-color);
  font-weight: bold;
  width: 90%;
  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 972px) {
    width: 4rem;
    margin: 0;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--grey-color);
  width: 90%;
  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 972px) {
    width: 4rem;
    margin: 0;
  }
`;

export const StepNumber = styled.div`
  border: 2px solid var(--grey-color);
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.5rem 1.1rem;
  color: inherit;

  @media (max-width: 1480px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.9rem;
  }
`;

export const StepTitle = styled.h5`
  font-size: 1.5rem;
  color: inherit;
  margin-left: 2rem;

  @media (max-width: 1480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1300px) {
    font-size: 1rem;
  }

  @media (max-width: 972px) {
    display: none;
    margin: 0;
  }
`;
