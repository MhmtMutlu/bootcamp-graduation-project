import styled from "styled-components";

export const ComplaintListWrapper = styled.div`
  min-height: 100vh;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 0.6fr 2.2fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "HeaderSection"
    "ComplaintListContainer"; 
`;

export const ComplaintListContainer = styled.div`

`;