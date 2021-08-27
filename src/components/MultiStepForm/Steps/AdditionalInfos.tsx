import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import * as yup from "yup";
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

const FormSchema = yup.object().shape({
  address: yup
    .string()
    .min(10, "Adresiniz en az 10 karakter olmalıdır!")
    .required("Adresinizi girmek zorundasınız!"),
  email: yup
    .string()
    .email("Doğru bir email adresini girmediniz!")
    .required("Emailinizi girmek zorundasınız!"),
});

function AdditionalInfos() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(FormSchema) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  changeStep("fourthStep");

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
