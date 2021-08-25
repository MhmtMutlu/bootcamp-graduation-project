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
  complaintDetail: yup.string().min(20, "Şikayet detayı en az 20 karakter olmalıdır!").required('Şikayet detayını girmek zorundasınız!')
});

function ComplaintDetail() {
  const { handleSubmit, register, formState: { errors } } = useForm<IFormValues>({ resolver: yupResolver(FormSchema) });
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  changeStep("secondStep");

  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/complaint-title");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Şikayet Detayı</Label>
      <InputField
        placeholder="Ürün veya hizmetle ilgili nasıl bir sorun yaşadınız?"
        {...register("complaintDetail")}
        defaultValue={formValues.complaintDetail}
      />
      {errors.complaintDetail && <ErrorMessage>{errors.complaintDetail.message}</ErrorMessage>}
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(ComplaintDetail);
