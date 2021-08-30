import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComplaintDetailsWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "DetailsSideBarWrapper ComplaintDetailsContainer";
  background-color: var(--dark-color);
  overflow: hidden;

  @media (max-width: 1124px) {
    grid-template-columns: 0.6fr 1.4fr;
  }

  @media (max-width: 972px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    gap: 0px 0px;
    grid-template-areas:
      "DetailsSideBarWrapper"
      "ComplaintDetailsContainer";
    background-color: var(--light-color);
  }
`;

export const ComplaintDetailsContainer = styled.div`
  grid-area: ComplaintDetailsContainer;
  background-color: var(--light-color);
  border-radius: 60px 0 0 60px;
  color: var(--dark-color);
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 1520px) {
    font-size: 12px;
  }
  
  @media (max-width: 972px) {
    background-color: var(--light-color);
    padding: 1.5rem 1rem;
  }
`;

export const ComplaintDetailsContainerNavbar = styled.div`
  position: absolute;
  top: 35px;
  right: 55px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--green-color);
  
  @media (max-width: 972px) {
    justify-content: center;
    top: 25px;
    right: 35px;
  }

  @media (max-width: 428px) {
    justify-content: center;
    top: 10px;
    right: 15px;
  }
`;

export const NavbarButton = styled(Link)`
  border: none;
  background-color: inherit;
  font-size: 2rem;
  font-weight: semibold;
  color: inherit;
  transition: all .4s;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: var(--green-hover-color);
    text-decoration: none;
  }
`;