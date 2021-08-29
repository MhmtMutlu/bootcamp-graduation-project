import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  margin: .5rem 0;
  border-radius: 60px;
  outline: none;
  transition: all .3s;

  &:focus {
    background-color: var(--light-grey-color);
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 548px) {
    font-size: 1.2rem;
    margin: 3rem 0 1rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SaveButton = styled.button`
  font-size: 1.5rem;
  padding: .7rem 2rem;
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
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0 1rem;
  font-size: .8rem;
`;