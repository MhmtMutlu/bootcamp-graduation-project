import React from 'react';
import { IProps } from '../../types';
import { ComplaintCard, ResponsedComplaintId, ComplaintTitle, ComplaintOwner, ComplaintDetail, UnesponsedComplaintId, DetailButton, ResponseButton } from './styles';

function Complaints({ firstName, lastName, complaintTitle, complaintDetail, id, adminResponse}:IProps) {

  return (
    <ComplaintCard>
      {
        adminResponse !== "" 
        ? <ResponsedComplaintId>{id}</ResponsedComplaintId>
        : <UnesponsedComplaintId>{id}</UnesponsedComplaintId>
      }
      <ComplaintTitle>{complaintTitle}</ComplaintTitle>
      <ComplaintOwner>{`${firstName} ${lastName}`}</ComplaintOwner>
      <ComplaintDetail>{complaintDetail}</ComplaintDetail>
      {
        adminResponse !== "" 
        ? <DetailButton to={`/admin/complaint-details/${id}`}>Detay</DetailButton>
        : <ResponseButton to={`/admin/complaint-details/${id}`}>Cevapla</ResponseButton>
      }
    </ComplaintCard>
  )
}

export default Complaints
