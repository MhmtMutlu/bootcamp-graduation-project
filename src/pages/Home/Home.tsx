import React from 'react';
import Header from './Header/Header';
import { Button, ButtonWrapper, HomeContainer, HomeWrapper, HomePageImage, ImageWrapper } from './styles';

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <ButtonWrapper>
          <Button to="/create-complaint">
            Şikayet Oluştur
          </Button>
          <Button to="/create-complaint">
            Şikayet Sorgula
          </Button>
        </ButtonWrapper>
        <ImageWrapper>
          <HomePageImage />
        </ImageWrapper>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home;
