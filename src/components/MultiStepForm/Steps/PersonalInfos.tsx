import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { IFormValues } from "../../../types";
import { ContinueButton, ButtonWrapper, InputField, Label } from "./styles";
import { ComplaintContext } from "../../../context/ComplaintContext";

function PersonalInfos() {
  const { handleSubmit, register } = useForm<IFormValues>();
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
      <Label>Soyadınız</Label>
      <InputField
        type="string"
        placeholder="Soyadınızı giriniz..."
        {...register("lastName")}
        defaultValue={formValues.lastName}
      />
      <Label>TC Kimlik Numaranız</Label>
      <InputField
        type="string"
        placeholder="TC Kimlik Numaranızı giriniz..."
        {...register("identityNumber")}
        defaultValue={formValues.identityNumber}
      />
      <Label>Yaşınız</Label>
      <InputField
        type="number"
        placeholder="Yaşınızı giriniz..."
        {...register("age")}
        defaultValue={formValues.age}
      />
      <ButtonWrapper>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(PersonalInfos);
