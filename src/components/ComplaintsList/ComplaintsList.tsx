import React, { useEffect, useState } from 'react';
import { complaintCards } from '../../motion/Variants';
import { getComplaints } from '../../services/firestore';
import Complaints from '../Complaints/Complaints';
import Loading from '../Loading/Loading';
import { ComplaintsListWrapper, Title } from './styles';

function ComplaintsList() {
  const [complaintList, setComplaintList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getComplaints(setComplaintList);
  }, [])

  useEffect(() => {
    if (complaintList.length) {
      setIsLoaded(true)
    }
  }, [complaintList])
  
  return (
    <>
      <Title>Şikayetler</Title>
      {complaintList.length > 0 || <Loading />}
      <ComplaintsListWrapper variants={complaintCards} initial="hidden"  animate={isLoaded ? "show" : "hidden"}>
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
