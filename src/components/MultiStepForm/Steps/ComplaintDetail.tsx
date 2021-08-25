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

function ComplaintDetail() {
  const { handleSubmit, register } = useForm<IFormValues>();
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
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(ComplaintDetail);
