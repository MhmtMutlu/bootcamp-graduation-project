import React, { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import Header from './Header/Header';
import { Button, ButtonWrapper, HomeContainer, HomePageImage, HomeWrapper, ImageWrapper } from './styles';

function Home() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <ButtonWrapper>
          {
            isLoggedIn
            ? (
              <Button to="/admin/complaint-list">Şikayet Listesi</Button>
            )
            : (
              <>
                <Button to="/create-complaint">
                  Şikayet Oluştur
                </Button>
                <Button to="/create-complaint">
                  Şikayet Sorgula
                </Button>
              </>
            )
          }
        </ButtonWrapper>
        <ImageWrapper>
          <HomePageImage src="../../assets/homepageimage.png" alt="Home Page" />
        </ImageWrapper>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home;
