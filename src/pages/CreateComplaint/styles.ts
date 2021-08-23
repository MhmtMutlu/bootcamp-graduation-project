import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  display: grid; 
  grid-template-columns: 0.5fr 1.5fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "SideBar PageContainer";
  background-color: var(--dark-color);

  @media (max-width: 1124px) {
    grid-template-columns: 0.6fr 1.4fr; 
  }

  @media (max-width: 972px) {
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 0.5fr 1.5fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "SideBar"
      "PageContainer";
    background-color: var(--light-color);
  }
`;

export const SideBar = styled.div`
  grid-area: SideBar; 
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
  }
`;

export const PageContainer = styled.div`
  grid-area: PageContainer;
  background-color: var(--light-color);
  border-radius: 60px 0 0 60px;
  color: var(--dark-color);
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1520px) {
    font-size: 12px;
  }
  
  @media (max-width: 972px) {
    background-color: var(--light-color);
  }
`;

export const PageContainerNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--green-color);
  
  @media (max-width: 972px) {
    justify-content: center;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: semibold;
  color: inherit;
  transition: all .4s;

  &:hover {
    color: var(--green-hover-color);
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

export const EditImage = styled.div`
  height: 70px;
  width: 70px;
  background: url(assets/editimage.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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