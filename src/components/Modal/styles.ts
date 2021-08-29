import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Input = styled.input`
  width: 100%;
  outline: none;
  border-radius: 60px;
  font-size: 1rem;
  padding: .7rem;
  margin-bottom: 1rem;
  transition: all .3s;

  &:focus {
    background-color: var(--light-grey-color);
  }

  @media (max-width: 972px) {
    padding: .5rem;
    margin-bottom: .7rem;
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin:  .5rem 1rem;
  display: block;

  @media (max-width: 972px) {
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 972px) {
    justify-content: center;
    width: 100%;
  }
`;

export const ContinueButton = styled.button`
  font-size: 1.5rem;
  padding: .5rem 2.5rem;
  border-radius: 60px;
  background-color: var(--green-color);
  color: var(--light-color);
  margin-top: 1rem;
  margin-left: 1rem;
  border: none;
  transition: all .4s;

  &:hover {
    cursor: pointer;
    background-color: var(--green-hover-color);
  }

  @media (max-width: 972px) {
    font-size: 1.1rem;
    padding: .6rem 2rem;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0 1rem;
  font-size: .8rem;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--dark-color);
  transition: all .4s;

  &:hover {
    color: var(--grey-color);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: inherit;
`;