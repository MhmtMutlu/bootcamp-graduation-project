import React from "react";
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../helper/UpdateAction";
import { FormValues } from "../../../types";
import { ContinueButton, ButtonWrapper, InputField, Label } from "./styles";

function PersonalInfos() {
  const { register, handleSubmit } = useForm<FormValues>();
  const { state, actions } = useStateMachine({ updateAction });
  const history = useHistory();
  const onSubmit = (data: FormValues) => {
    actions.updateAction(data);
    history.push("/complaint-detail");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Adınız</Label>
      <InputField
        type="string"
        placeholder="Adınızı giriniz..."
        {...register("firstName")}
        defaultValue={state.yourDetails.firstName}
      />
      <Label>Soyadınız</Label>
      <InputField
        type="string"
        placeholder="Soyadınızı giriniz..."
        {...register("lastName")}
        defaultValue={state.yourDetails.lastName}
      />
      <Label>TC Kimlik Numaranız</Label>
      <InputField
        type="string"
        placeholder="TC Kimlik Numaranızı giriniz..."
        {...register("identityNumber")}
        defaultValue={state.yourDetails.identityNumber}
      />
      <Label>Yaşınız</Label>
      <InputField
        type="number"
        placeholder="Yaşınızı giriniz..."
        {...register("age")}
        defaultValue={state.yourDetails.age}
      />
      <ButtonWrapper>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  );
}

export default withRouter(PersonalInfos);
