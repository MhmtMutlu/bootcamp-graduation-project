import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "WarningSide ImageSide";

  @media (max-width: 972px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "ImageSide"
      "WarningSide";
    background-color: var(--dark-color);
  }
`;

export const WarningSide = styled.div`
  grid-area: WarningSide;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 972px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Warning = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0;
  color: var(--orange-color);

  @media (max-width: 428px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
`;

export const HomePageButton = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: inherit;
  color: var(--green-color);
  font-size: 1rem;
  font-weight: semibold;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    color: var(--green-hover-color);
    transform: scale(1.05);
    text-decoration: none;
  }
`;

export const ImageSide = styled.div`
  grid-area: ImageSide;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 972px) {
    justify-content: flex-end;
    align-items: center;
  }
`;

export const NotFoundImage = styled.img`
  height: 300px;
  width: 400px;

  @media (max-width: 1124px) {
    height: 300px;
    width: 400px;
  }

  @media (max-width: 428px) {
    height: 180px;
    width: 250px;
  }
`;
