import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../helper/UpdateAction";
import { FormValues } from '../../../types';
import { ContinueButton, InputField, ButtonWrapper, Label, BackButton } from './styles';

function AdditionalInfos() {
  const { handleSubmit, register } = useForm<FormValues>();
  const { state, actions } = useStateMachine({ updateAction });
  const history = useHistory();
  const onSubmit = (data: FormValues) => {
    actions.updateAction(data);
    history.push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Adresiniz</Label>
      <InputField
        placeholder="Adresini giriniz..."
        {...register("address")}
        defaultValue={state.yourDetails.address}
      />
      <Label>Emailiniz</Label>
      <InputField
        placeholder="Emailinizi giriniz..."
        {...register("email")}
        defaultValue={state.yourDetails.email}
      />
      <Label>Ek Belge</Label>
      <InputField
        type="file"
        placeholder="Ek belge giriniz..."
        {...register("documents")}
        defaultValue={state.yourDetails.documents}
      />
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  )
}

export default withRouter(AdditionalInfos);
