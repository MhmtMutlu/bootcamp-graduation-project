import React, { useContext, useState } from 'react';
import LoginModal from '../../../components/Modal/LoginModal';
import { LoginContext } from '../../../context/LoginContext';
import { BrandName, HeaderSection, LoginButton } from './styles';

function Header() {
  const { isLoggedIn, logOutAdmin } = useContext(LoginContext);
  const [visible, setVisible] = useState(false);

  const handleModalVisibilty = () => {
    setVisible(!visible);
  };

  return (
    <HeaderSection>
      <BrandName>Şikayetim Var</BrandName>
      {isLoggedIn 
        ? <LoginButton onClick={logOutAdmin}>Çıkış Yap</LoginButton>
        : <LoginButton onClick={handleModalVisibilty}>Giriş Yap</LoginButton>
      }
      <LoginModal visible={visible} handleModalVisibilty={handleModalVisibilty} />
    </HeaderSection>
  )
}

export default Header;
