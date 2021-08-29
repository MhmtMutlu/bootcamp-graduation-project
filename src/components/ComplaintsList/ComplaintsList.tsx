import React, { useEffect, useState } from 'react';
import { getComplaints } from '../../services/firestore';
import Complaints from '../Complaints/Complaints';
import { ComplaintsListWrapper, Title } from './styles';

function ComplaintsList() {
  const [complaintList, setComplaintList] = useState([]);

  useEffect(() => {
    getComplaints(setComplaintList);
  }, [])
  
  return (
    <>
      <Title>Şikayetler</Title>
      <ComplaintsListWrapper>
        {
          complaintList && complaintList.map(({
            firstName,
            lastName,
            complaintTitle,
            complaintDetail,
            key,
            adminResponse
          }) => (
            <Complaints 
              key={firstName}
              firstName={firstName}
              lastName={lastName}
              complaintTitle={complaintTitle}
              complaintDetail={complaintDetail}
              id={key}
              adminResponse={adminResponse}
            />
          ))
        }
      </ComplaintsListWrapper>
    </>
  )
}

export default ComplaintsList;
