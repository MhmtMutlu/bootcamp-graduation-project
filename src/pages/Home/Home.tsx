import React, { useContext, useState } from 'react';
import ComplaintQueryModal from '../../components/Modal/ComplaintQueryModal';
import { LoginContext } from '../../context/LoginContext';
import { homePageItem, homePageItems } from '../../motion/Variants';
import Header from './Header/Header';
import { Button, ButtonCheck, ButtonWrapper, HomeContainer, HomePageImage, HomeWrapper, ImageWrapper } from './styles';

function Home() {
  const { isLoggedIn } = useContext(LoginContext);
  const [visibleQuery, setVisibleQuery] = useState(false);

  const handleQueryModalVisibilty = () => {
    setVisibleQuery(!visibleQuery);
  };

  return (
    <HomeWrapper variants={homePageItems} initial="hidden" animate="show">
      <Header />
      <HomeContainer>
        <ButtonWrapper>
          {
            isLoggedIn
            ? (
              <Button 
                to="/admin/complaint-list"
                layout
                variants={homePageItem}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
              >
                Şikayet Listesi
              </Button>
            )
            : (
              <>
                <Button 
                  to="/create-complaint"
                  layout
                  variants={homePageItem}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Şikayet Oluştur
                </Button>
                <ButtonCheck 
                  onClick={handleQueryModalVisibilty}
                  layout
                  variants={homePageItem}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.9 }}
                >
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
