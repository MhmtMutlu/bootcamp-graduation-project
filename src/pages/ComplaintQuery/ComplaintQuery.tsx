import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComplaintQueryResult from "../../components/ComplaintQuery/ComplaintQueryResult";
import DetailsSideBar from "../../components/DetailsSideBar/DetailsSideBar";
import Loading from "../../components/Loading/Loading";
import { getData } from "../../services/firestore";
import { IComplaintId, IFormValues } from "../../types";
import NotFound from "../NotFound/NotFound";
import {
  ComplaintQueryContainer,
  ComplaintQueryContainerNavbar,
  ComplaintQueryWrapper,
  NavbarButton,
} from "./styles";

function ComplaintQuery() {
  const { id }: IComplaintId = useParams();
  const [complaintQueryData, setComplaintQueryData] = useState<IFormValues>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(id, setComplaintQueryData);
    if (complaintQueryData) {
      setLoading(false);
    }
  }, [id, complaintQueryData]);

  return (
    <ComplaintQueryWrapper>
      {loading && <Loading />}
      {complaintQueryData ? (
        <>
          <DetailsSideBar
            firstName={complaintQueryData.firstName}
            lastName={complaintQueryData.lastName}
            age={complaintQueryData.age}
            identityNumber={complaintQueryData.identityNumber}
            complaintDetail={complaintQueryData.complaintDetail}
            complaintTitle={complaintQueryData.complaintTitle}
            address={complaintQueryData.address}
            email={complaintQueryData.email}
            id={id}
            adminResponse={complaintQueryData.adminResponse}
          />
          <ComplaintQueryContainer>
            <ComplaintQueryContainerNavbar>
              <NavbarButton to="/">Ana Sayfa</NavbarButton>
            </ComplaintQueryContainerNavbar>

            <ComplaintQueryResult
              adminResponse={complaintQueryData.adminResponse}
              id={id}
            />
          </ComplaintQueryContainer>
        </>
      ) : (
        <NotFound />
      )}
    </ComplaintQueryWrapper>
  );
}

export default ComplaintQuery;
