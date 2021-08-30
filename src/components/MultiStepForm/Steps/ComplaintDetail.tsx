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
import { SecondStep } from "../../../validation/Validations";

function ComplaintDetail() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(SecondStep) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  useEffect(() => {
    changeStep("secondStep");
  }, [changeStep])

  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/create-complaint/complaint-title");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Şikayet Detayı</Label>
      <InputField
        placeholder="Ürün veya hizmetle ilgili nasıl bir sorun yaşadınız?"
        {...register("complaintDetail")}
        defaultValue={formValues.complaintDetail}
      />
      {errors.complaintDetail && (
        <ErrorMessage>{errors.complaintDetail.message}</ErrorMessage>
      )}
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(ComplaintDetail);
