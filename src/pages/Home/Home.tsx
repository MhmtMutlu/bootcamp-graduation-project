import React from 'react';
import Header from './Header/Header';
import { Button, ButtonWrapper, HomeContainer, HomeWrapper, HomePageImage, ImageWrapper } from './styles';

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <ButtonWrapper>
          <Button>
            Şikayet Oluştur
          </Button>
          <Button>
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
