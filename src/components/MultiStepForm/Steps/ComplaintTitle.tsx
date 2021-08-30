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
import { ThirtStep } from "../../../validation/Validations";

function ComplaintTitle() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(ThirtStep) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  useEffect(() => {
    changeStep("thirdStep");
  }, [changeStep])

  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/create-complaint/additonal-infos");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Şikayetin Konusu</Label>
      <InputField
        placeholder="Şikayetinizin konusu nedir?"
        {...register("complaintTitle")}
        defaultValue={formValues.complaintTitle}
      />
      {errors.complaintTitle && (
        <ErrorMessage>{errors.complaintTitle.message}</ErrorMessage>
      )}
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(ComplaintTitle);
