import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid; 
  grid-template-columns: 0.5fr 1.5fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "SideBarWrapper PageContainer";
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
      "SideBarWrapper"
      "PageContainer";
    background-color: var(--light-color);
  }
`;

export const PageContainer = styled.div`
  grid-area: PageContainer;
  background-color: var(--light-color);
  border-radius: 60px 0 0 60px;
  color: var(--dark-color);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1520px) {
    font-size: 12px;
  }
  
  @media (max-width: 972px) {
    background-color: var(--light-color);
    padding: 1.5rem 1rem;
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

export const NavbarButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 2rem;
  font-weight: semibold;
  color: inherit;
  transition: all .4s;

  &:hover {
    cursor: pointer;
    color: var(--green-hover-color);
  }
`;
