import React, { useContext } from "react";
import { ComplaintContext } from "../../context/ComplaintContext";
import {
  ActiveStep,
  EditImage,
  SideBarWrapper,
  Step,
  StepContainer,
  StepNumber,
  StepTitle,
  Title,
} from "./styles";

function SideBar() {
  const { step } = useContext(ComplaintContext);

  return (
    <SideBarWrapper>
      <Title>Şikayet Oluştur</Title>
      <EditImage src="../../assets/editimage.png" alt="Edit" data-testid="image" />
      <StepContainer>
        {step === "firstStep" 
          ? (
            <ActiveStep>
              <StepNumber>1</StepNumber>
              <StepTitle>Kişisel Bilgiler</StepTitle>
            </ActiveStep>
          )
          : (
            <Step>
              <StepNumber>1</StepNumber>
              <StepTitle>Kişisel Bilgiler</StepTitle>
            </Step>
          )
        }
        {step === "secondStep" 
          ? (
            <ActiveStep>
              <StepNumber>2</StepNumber>
              <StepTitle>Şikayet Detayı</StepTitle>
            </ActiveStep>
          )
          : (
            <Step>
              <StepNumber>2</StepNumber>
              <StepTitle>Şikayet Detayı</StepTitle>
            </Step>
          )
        }
        {step === "thirdStep" 
          ? (
            <ActiveStep>
              <StepNumber>3</StepNumber>
              <StepTitle>Şikayet Başlığı</StepTitle>
            </ActiveStep>
          )
          : (
            <Step>
              <StepNumber>3</StepNumber>
              <StepTitle>Şikayet Başlığı</StepTitle>
            </Step>
          )
        }
        {step === "fourthStep" 
          ? (
            <ActiveStep>
              <StepNumber>4</StepNumber>
              <StepTitle>Ek Bilgiler</StepTitle>
            </ActiveStep>
          )
          : (
            <Step>
              <StepNumber>4</StepNumber>
              <StepTitle>Ek Bilgiler</StepTitle>
            </Step>
          )
        }
      </StepContainer>
    </SideBarWrapper>
  );
}

export default SideBar;
