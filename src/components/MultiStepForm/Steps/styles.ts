import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  margin: .5rem 0;
  border-radius: 60px;
  outline: none;
  transition: all .3s;

  &:focus {
    background-color: var(--light-grey-color);
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin:  .5rem 1rem;
  display: block;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContinueButton = styled.button`
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

export const BackButton = styled.button`
  font-size: 1.5rem;
  padding: .7rem 2rem;
  border-radius: 60px;
  background-color: var(--light-grey-color);
  color: var(--light-color);
  margin-top: 1rem;
  border: none;
  transition: all .4s;

  &:hover {
    cursor: pointer;
    background-color: var(--grey-color);
  }
`;
