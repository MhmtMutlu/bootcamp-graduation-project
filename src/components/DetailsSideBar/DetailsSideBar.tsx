import React from "react";
import { IProps } from "../../types";
import { Details, DetailsSideBarWrapper, SubTitle, Title, ImportantDetails } from "./styles";

function DetailsSideBar({
  firstName,
  lastName,
  age,
  address,
  email,
  complaintTitle,
  complaintDetail,
  identityNumber,
  adminResponse,
  id
}: IProps) {

  return (
    <DetailsSideBarWrapper>
      {
        adminResponse !== "" 
          ? <Title style={{ color: `var(--green-color)`}}>Şikayet Detayları</Title>
          : <Title style={{ color: `var(--orange-color)`}}>Şikayet Detayları</Title>
      }
      <SubTitle>Kişisel Bilgiler</SubTitle>
      <ImportantDetails>{`${firstName} ${lastName}`}</ImportantDetails>
      <Details>{identityNumber}</Details>
      <Details>{email}</Details>
      <Details>{age}</Details>
      <Details>{address}</Details>
      <SubTitle>Şikayet Bilgileri</SubTitle>
      <ImportantDetails>{id}</ImportantDetails>
      <ImportantDetails>{complaintTitle}</ImportantDetails>
      <ImportantDetails>{complaintDetail}</ImportantDetails>
    </DetailsSideBarWrapper>
  );
}

export default DetailsSideBar;
