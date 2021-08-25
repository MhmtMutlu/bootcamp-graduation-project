import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter, useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../helper/UpdateAction";
import { FormValues } from '../../../types';
import { ContinueButton, InputField, ButtonWrapper, Label, BackButton } from './styles';

function ComplaintDetail() {
  const { register, handleSubmit } = useForm<FormValues>();
  const { state, actions } = useStateMachine({ updateAction });
  const history = useHistory();
  const onSubmit = (data: FormValues) => {
    actions.updateAction(data);
    history.push("/complaint-title");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Şikayet Detayı</Label>
      <InputField
        placeholder="Ürün veya hizmetle ilgili nasıl bir sorun yaşadınız?"
        {...register("complaintDetail")}
        defaultValue={state.yourDetails.complaintDetail}
      />
      <ButtonWrapper>
        <BackButton onClick={() => history.goBack()}>Geri Dön</BackButton>
        <ContinueButton type="submit">Devam Et</ContinueButton>
      </ButtonWrapper>
    </form>
  )
}

export default withRouter(ComplaintDetail);
