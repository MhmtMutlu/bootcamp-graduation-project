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

function ComplaintTitle() {
  const { handleSubmit, register } = useForm<IFormValues>();
  const { formValues, addData, changeStep } = useContext(ComplaintContext);
  const history = useHistory();

  changeStep("thirdStep");

  const onSubmit = (data: IFormValues) => {
    addData(data);
    history.push("/additonal-infos");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Şikayetin Konusu</Label>
      <InputField
        placeholder="Şikayetinizin konusu nedir?"
        {...register("complaintTitle")}
        defaultValue={formValues.complaintTitle}
      />
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(ComplaintTitle);
