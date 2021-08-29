import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComplaintDetail from "../../../components/ComplaintDetail/ComplaintDetail";
import DetailsSideBar from "../../../components/DetailsSideBar/DetailsSideBar";
import { getData } from "../../../services/firestore";
import { IComplaintId, IFormValues } from "../../../types";
import { ComplaintDetailsContainer, ComplaintDetailsContainerNavbar, ComplaintDetailsWrapper, NavbarButton } from "./styles";

function ComplaintDetails() {
  const { id }: IComplaintId = useParams();
  const [complaintData, setComplaintData] = useState<IFormValues>();

  useEffect(() => {
    getData(id, setComplaintData);
  }, [id]);

  return (
    <ComplaintDetailsWrapper>
      {complaintData && (
        <DetailsSideBar
          firstName={complaintData.firstName}
          lastName={complaintData.lastName}
          age={complaintData.age}
          identityNumber={complaintData.identityNumber}
          complaintDetail={complaintData.complaintDetail}
          complaintTitle={complaintData.complaintTitle}
          address={complaintData.address}
          email={complaintData.email}
          id={id}
          adminResponse={complaintData.adminResponse}
        />
      )}
      <ComplaintDetailsContainer>
        <ComplaintDetailsContainerNavbar>
          <NavbarButton to="/">Ana Sayfa</NavbarButton>
        </ComplaintDetailsContainerNavbar>
        {complaintData && (
          <ComplaintDetail
            adminResponse={complaintData.adminResponse}
            id={id}
          />
        )}
      </ComplaintDetailsContainer>
    </ComplaintDetailsWrapper>
  );
}

export default ComplaintDetails;
