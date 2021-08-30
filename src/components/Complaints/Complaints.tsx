import React from "react";
import { card } from "../../motion/Variants";
import { IProps } from "../../types";
import {
  ComplaintCard,
  ComplaintId,
  ComplaintTitle,
  ComplaintOwner,
  ComplaintDetail,
  CardButton,
} from "./styles";

function Complaints({
  firstName,
  lastName,
  complaintTitle,
  complaintDetail,
  id,
  adminResponse,
}: IProps) {
  return (
    <ComplaintCard
      layout
      variants={card}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
    >
      {adminResponse !== "" ? (
        <ComplaintId style={{ color: `var(--green-color)` }}>{id}</ComplaintId>
      ) : (
        <ComplaintId style={{ color: `var(--orange-color)` }}>{id}</ComplaintId>
      )}
      <ComplaintTitle>{complaintTitle}</ComplaintTitle>
      <ComplaintOwner>{`${firstName} ${lastName}`}</ComplaintOwner>
      <ComplaintDetail>{complaintDetail}</ComplaintDetail>
      {adminResponse !== "" ? (
        <CardButton
          to={`/admin/complaint-details/${id}`}
          style={{ color: `var(--green-color)`}}
        >
          Detay
        </CardButton>
      ) : (
        <CardButton
          to={`/admin/complaint-details/${id}`}
          style={{ color: `var(--orange-color)`}}
        >
          Cevapla
        </CardButton>
      )}
    </ComplaintCard>
  );
}

export default Complaints;
