import styled from "styled-components";

export const ComplaintListWrapper = styled.div`
  height: 100vh;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 0.6fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "HeaderSection"
    "ComplaintListContainer"; 
`;

export const ComplaintListContainer = styled.div`
  grid-area: ComplaintListContainer;
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1280px) {
    width: 978px;
  }

  @media (max-width: 978px) {
    width: 628px;
  }
  
  @media (max-width: 628px) {
    width: 428px;
  }

  @media (max-width: 428px) {
    width: 280px;
  }

  @media (max-width: 324px) {
    width: 200px;
  }
`;