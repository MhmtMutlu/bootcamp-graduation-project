import React from 'react';
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../helper/UpdateAction";
import { ComplaintDetail, ComplaintView, Title } from './styles';

function Result() {
  const { state } = useStateMachine({ updateAction });

  return (
    <ComplaintView>
      <Title>Sayın {state.yourDetails.firstName} {state.yourDetails.lastName} şikayetiniz alınmıştır.</Title>
      <ComplaintDetail><strong>Email:</strong> {state.yourDetails.email}</ComplaintDetail>
      <ComplaintDetail><strong>Şikayetin Konusu:</strong> {state.yourDetails.complaintTitle}</ComplaintDetail>
      <ComplaintDetail><strong>Şikayetin Detayı:</strong> {state.yourDetails.complaintDetail}</ComplaintDetail>
    </ComplaintView>
  )
}

export default Result;
