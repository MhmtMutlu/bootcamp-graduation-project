import React, { useState } from 'react';
import LoginModal from '../../../components/Modal/LoginModal';
import { BrandName, HeaderSection, LoginButton } from './styles';

function Header() {
  const [visible, setVisible] = useState(false);
  const handleModalVisibilty = () => {
    setVisible(!visible);
  };

  return (
    <HeaderSection>
      <BrandName>Şikayetim Var</BrandName>
      <LoginButton onClick={handleModalVisibilty}>Giriş Yap</LoginButton>
      <LoginModal visible={visible} handleModalVisibilty={handleModalVisibilty} />
    </HeaderSection>
  )
}

export default Header;
