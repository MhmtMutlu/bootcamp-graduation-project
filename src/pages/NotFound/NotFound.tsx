import React from "react";
import {
  HomePageButton,
  ImageSide,
  NotFoundImage,
  PageWrapper,
  Warning,
  WarningSide,
} from "./styles";

function NotFound() {
  return (
    <PageWrapper>
      <WarningSide>
        <Warning>Bu Numaraya Ait Sorgu Bulunamadı!</Warning>
        <HomePageButton to="/">Ana Sayfa</HomePageButton>
      </WarningSide>
      <ImageSide>
        <NotFoundImage src="../../assets/notfoundimage.png" alt="Not Found" />
      </ImageSide>
    </PageWrapper>
  );
}

export default NotFound;
