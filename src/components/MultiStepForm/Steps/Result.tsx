import React, { useContext } from "react";
import { ComplaintDetail, ComplaintView, Title } from "./styles";
import { ComplaintContext } from "../../../context/ComplaintContext";

function Result() {
  const { formValues, changeStep } = useContext(ComplaintContext);

  changeStep("");

  return (
    <ComplaintView>
      <Title>
        Sayın {formValues.firstName} {formValues.lastName} şikayetiniz alınmıştır.
      </Title>
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
