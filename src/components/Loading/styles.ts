import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  background: transparent;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

