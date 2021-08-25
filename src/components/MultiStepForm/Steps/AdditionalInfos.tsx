import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { IFormValues } from "../../../types";
import {
  ContinueButton,
  InputField,
  ButtonWrapper,
  Label,
  BackButton,
} from "./styles";
import { ComplaintContext } from "../../../context/ComplaintContext";

function AdditionalInfos() {
  const { handleSubmit, register } = useForm<IFormValues>();
  const { formValues, addData } = useContext(ComplaintContext);
  const history = useHistory();
  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Adresiniz</Label>
      <InputField
        placeholder="Adresini giriniz..."
        {...register("address")}
        defaultValue={formValues.address}
      />
      <Label>Emailiniz</Label>
      <InputField
        placeholder="Emailinizi giriniz..."
        {...register("email")}
        defaultValue={formValues.email}
      />
      <Label>Ek Belge</Label>
      <InputField
        type="file"
        placeholder="Ek belge giriniz..."
        {...register("documents")}
        defaultValue={formValues.documents}
      />
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(AdditionalInfos);
