import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  height: 100vh;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 0.6fr 2.2fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "HeaderSection"
    "HomeContainer"; 
`;

export const HomeContainer = styled.div`
  display: grid; 
  grid-template-columns: .8fr 1.2fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "ButtonWrapper ImageWrapper"; 
  width: 100vw;

  @media (max-width: 1124px) {
    grid-template-columns: 1fr; 
    grid-template-rows: 1.2fr 0.8fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "ImageWrapper"
      "ButtonWrapper"; 
  }
`;

export const ButtonWrapper = styled.div`
  grid-area: ButtonWrapper;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(motion(Link))`
  text-decoration: none;
  width: 15rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: var(--dark-color);
  color: var(--light-color);
  border-radius: 60px;
  transition: all .4s;
  text-align: center;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: var(--grey-color);
  }

  @media (max-width: 428px) {
    font-size: 1rem;
    width: 12rem;
  }
`;

export const ButtonCheck = styled(motion.button)`
  width: 15rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: var(--dark-color);
  color: var(--light-color);
  border-radius: 60px;
  transition: all .4s;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    text-decoration: none;
    color: var(--grey-color);
  }

  @media (max-width: 428px) {
    font-size: 1rem;
    width: 12rem;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: ImageWrapper;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePageImage = styled.img`
  height: 500px;
  width: 700px;

  @media (max-width: 1124px) {
    height: 300px;
    width: 400px;
  }

  @media (max-width: 428px) {
    height: 180px;
    width: 250px;
  }
`;
