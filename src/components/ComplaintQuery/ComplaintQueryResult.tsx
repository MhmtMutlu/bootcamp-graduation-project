import React from "react";
import { IProps } from "../../types";
import { SubTitle } from "../DetailsSideBar/styles";
import { QueryExplanation, Title } from "./styles";

function ComplaintQueryResult({ adminResponse, id }:IProps) {
  return (
    <>
      <Title>Şikayet Yanıtı</Title>
      {
        adminResponse !== ""
          ? (
            <>
              <SubTitle style={{ color: `var(--green-color)`}}>{id} Numaralı Şikayetiniz Yanıtlanmıştır!</SubTitle>
              <QueryExplanation>{adminResponse}</QueryExplanation>
            </>
          )
          : (
            <>
              <SubTitle style={{ color: `var(--orange-color)`}}>{id} Numaralı Şikayetiniz Henüz Yanıtlanmamıştır!</SubTitle>
            </>
          )
      }
    </>
  );
}

export default ComplaintQueryResult;
