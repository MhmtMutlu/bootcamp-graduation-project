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
  complaintTitle: yup
    .string()
    .min(5, "Şikayetin konusu en az 5 karakter olmalıdır!")
    .required("Şikayet konusunu girmek zorundasınız!"),
});

function ComplaintTitle() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(FormSchema) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  changeStep("thirdStep");

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
