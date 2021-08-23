import React from 'react';
import { EditImage, NavbarLink, PageContainer, PageContainerNavbar, PageWrapper, SideBar, Step, StepContainer, StepNumber, StepTitle, Title } from './styles';

function CreateComplaint() {
  return (
    <PageWrapper>
      <SideBar>
        <Title>Şikayet Oluştur</Title>
        <EditImage />
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
          <NavbarLink to="/">
            Ana Sayfa
          </NavbarLink>
        </PageContainerNavbar>
        
      </PageContainer>
    </PageWrapper>
  )
}

export default CreateComplaint;
