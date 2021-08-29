import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.div`
  grid-area: HeaderSection;
  width: 100vw;
  height: 10rem;
  background-color: var(--dark-color);
  border-radius: 0 0 60px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  @media (max-width: 428px) {
    height: 8rem;
  }
`;

export const BrandName = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--light-color);
  margin-left: 10rem;
  transition: all .4s;

  &:hover {
    transform: scale(1.2);
    color: var(--grey-color);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    font-size: 2rem;
  }

  @media (max-width: 428px) {
    font-size: 1.5rem;
  }
`;

export const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 2.5rem;
  color: var(--green-color);
  margin-right: 10rem;
  transition: all .4s;

  &:hover {
    cursor: pointer;
    color: var(--green-hover-color);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  @media (max-width: 428px) {
    font-size: 1.5rem;
  }
`;