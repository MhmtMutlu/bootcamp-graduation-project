import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComplaintCard = styled.div`
  width: 30%;
  height: 20rem;
  background-color: var(--dark-color);
  color: var(--light-color);
  margin: 10px;
  padding: 35px;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .4s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    width: 35%;
  }

  @media (max-width: 978px) {
    width: 45%;
  }

  @media (max-width: 628px) {
    width: 85%;
  }

  @media (max-width: 428px) {
    width: 95%;
  }
`;

export const ComplaintTitle = styled.h4`
  font-size: 1.5rem;
  padding: .3rem 0;
`;

export const ComplaintId = styled.h4`
  font-size: 1.2rem;
  padding: .3rem 0;
`;

export const ComplaintOwner = styled.p`
  font-size: 1rem;
  color: var(--grey-color);
`;

export const ComplaintDetail = styled.p`
  font-size: 1rem;
  color: var(--grey-color);
`;

export const CardButton = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: semibold;
  transition: all .4s;

  &:hover {
    text-decoration: none;
    color: var(--light-color);
  }
`;