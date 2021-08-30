import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormValues } from "../../../types";
import {
  ContinueButton,
  InputField,
  ButtonWrapper,
  Label,
  BackButton,
  ErrorMessage,
} from "./styles";
import { ComplaintContext } from "../../../context/ComplaintContext";
import { FourthStep } from "../../../validation/Validations";

function AdditionalInfos() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(FourthStep) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  useEffect(() => {
    changeStep("fourthStep");
  }, [changeStep])

  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/create-complaint/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Adresiniz</Label>
      <InputField
        placeholder="Adresini giriniz..."
        {...register("address")}
        defaultValue={formValues.address}
      />
      {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
      <Label>Emailiniz</Label>
      <InputField
        placeholder="Emailinizi giriniz..."
        {...register("email")}
        defaultValue={formValues.email}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(AdditionalInfos);
