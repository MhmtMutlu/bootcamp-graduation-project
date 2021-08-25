import React from "react";
import { useHistory } from "react-router-dom";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import {
  EditImage,
  NavbarButton,
  PageContainer,
  PageContainerNavbar,
  PageWrapper,
  SideBar,
  Step,
  StepContainer,
  StepNumber,
  StepTitle,
  Title,
} from "./styles";

function CreateComplaint() {
  const history = useHistory();
  const homePageButton = () => {
    history.push("/")
  }

  return (
    <PageWrapper>
      <SideBar>
        <Title>Şikayet Oluştur</Title>
        <EditImage> </EditImage>
        <StepContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Kişisel Bilgiler</StepTitle>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Şikayet Detayı</StepTitle>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Şikayet Başlığı</StepTitle>
          </Step>
          <Step>
            <StepNumber>4</StepNumber>
            <StepTitle>Ek Bilgiler</StepTitle>
          </Step>
        </StepContainer>
      </SideBar>
      <PageContainer>
        <PageContainerNavbar>
          <NavbarButton onClick={homePageButton}>Ana Sayfa</NavbarButton>
        </PageContainerNavbar>
        <MultiStepForm />
      </PageContainer>
    </PageWrapper>
  );
}

export default CreateComplaint;
