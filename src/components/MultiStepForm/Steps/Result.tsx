import React, { useContext, useEffect, useState } from "react";
import { ComplaintDetail, ComplaintView, Title } from "./styles";
import { ComplaintContext } from "../../../context/ComplaintContext";
import addComplaintToDb from "../../../services/firestore";

function Result() {
  const { formValues, changeStep } = useContext(ComplaintContext);
  const [identity, setIdentity] = useState<string>();

  useEffect(() => {
    addComplaintToDb(formValues).then(id => {
      setIdentity(id);
    });
  }, [formValues])

  changeStep("");

  return (
    <ComplaintView>
      <Title>
        Sayın {formValues.firstName} {formValues.lastName} şikayetiniz alınmıştır.
      </Title>
      <ComplaintDetail>
        <strong>Şikayet Numaranız:</strong> {identity !== "" && identity}
      </ComplaintDetail>
      <ComplaintDetail>
        <strong>Email:</strong> {formValues.email}
      </ComplaintDetail>
      <ComplaintDetail>
        <strong>Şikayetin Konusu:</strong> {formValues.complaintTitle}
      </ComplaintDetail>
      <ComplaintDetail>
        <strong>Şikayetin Detayı:</strong> {formValues.complaintDetail}
      </ComplaintDetail>
    </ComplaintView>
  );
}

export default Result;
