import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormValues } from "../../../types";
import {
  ContinueButton,
  ButtonWrapper,
  InputField,
  Label,
  ErrorMessage,
} from "./styles";
import { ComplaintContext } from "../../../context/ComplaintContext";
import FormSchema from "../../../helper/YupSchemas";

function PersonalInfos() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(FormSchema) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  changeStep("firstStep");

  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/complaint-detail");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Adınız</Label>
      <InputField
        type="string"
        placeholder="Adınızı giriniz..."
        {...register("firstName")}
        defaultValue={formValues.firstName}
      />
      {errors.firstName && (
        <ErrorMessage>{errors.firstName.message}</ErrorMessage>
      )}
      <Label>Soyadınız</Label>
      <InputField
        type="string"
        placeholder="Soyadınızı giriniz..."
        {...register("lastName")}
        defaultValue={formValues.lastName}
      />
      {errors.lastName && (
        <ErrorMessage>{errors.lastName.message}</ErrorMessage>
      )}
      <Label>TC Kimlik Numaranız</Label>
      <InputField
        type="string"
        placeholder="TC Kimlik Numaranızı giriniz..."
        {...register("identityNumber")}
        defaultValue={formValues.identityNumber}
      />
      {errors.identityNumber && (
        <ErrorMessage>{errors.identityNumber.message}</ErrorMessage>
      )}
      <Label>Yaşınız</Label>
      <InputField
        type="number"
        placeholder="Yaşınızı giriniz..."
        {...register("age")}
        defaultValue={formValues.age}
      />
      {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
      <ButtonWrapper>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(PersonalInfos);
