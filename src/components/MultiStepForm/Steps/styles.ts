import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1.5rem;
  margin: .5rem 0;
  border-radius: 60px;
  outline: none;
  transition: all .3s;

  &:focus {
    background-color: var(--light-grey-color);
  }
`;

export const ComplaintView = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ComplaintDetail = styled.p`
  font-size: 1.2rem;
  font-weight: semibold;
  margin: 1rem 0;
  
  @media (max-width: 548px) {
    font-size: 1rem;
    font-weight: semibold;
    margin: .7rem 0;
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

export const ErrorMessage = styled.p`
  color: red;
  margin: 0 1rem;
  font-size: .8rem;
`;