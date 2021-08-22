import React from 'react';
import { BrandName, HeaderSection, LoginButton } from './styles';

function Header() {
  return (
    <HeaderSection>
      <BrandName>Şikayetim Var</BrandName>
      <LoginButton>Giriş Yap</LoginButton>
    </HeaderSection>
  )
}

export default Header;
