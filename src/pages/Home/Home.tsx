import React, { useContext, useState } from 'react';
import ComplaintQueryModal from '../../components/Modal/ComplaintQueryModal';
import { LoginContext } from '../../context/LoginContext';
import Header from './Header/Header';
import { Button, ButtonCheck, ButtonWrapper, HomeContainer, HomePageImage, HomeWrapper, ImageWrapper } from './styles';

function Home() {
  const { isLoggedIn } = useContext(LoginContext);
  const [visibleQuery, setVisibleQuery] = useState(false);

  const handleQueryModalVisibilty = () => {
    setVisibleQuery(!visibleQuery);
  };

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
                <ButtonCheck onClick={handleQueryModalVisibilty}>
                  Şikayet Sorgula
                </ButtonCheck>
              </>
            )
          }
        </ButtonWrapper>
        <ImageWrapper>
          <HomePageImage src="../../assets/homepageimage.png" alt="Home Page" />
        </ImageWrapper>
      </HomeContainer>
      <ComplaintQueryModal visibleQuery={visibleQuery} handleQueryModalVisibilty={handleQueryModalVisibilty} />
    </HomeWrapper>
  )
}

export default Home;
