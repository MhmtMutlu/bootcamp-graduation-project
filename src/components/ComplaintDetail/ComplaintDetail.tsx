import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IProps, IUpdataValue } from "../../types";
import { ButtonWrapper, ErrorMessage, InputField, SaveButton, Title } from "./styles";
import { updateComplaints } from "../../services/firestore";
import { DetailSchema } from "../../validation/Validations";

function ComplaintDetail({ adminResponse, id }:IProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUpdataValue>({ resolver: yupResolver(DetailSchema) });
  const history = useHistory();

  const onSubmit = (data: IUpdataValue) => {
    updateComplaints(data, id);
    history.push("/admin/complaint-list");
  };

  return (
    <>
      <Title>Şikayet Yanıtı</Title>
      {
        adminResponse !== ""
          ? <InputField value={adminResponse} disabled/>
          : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField 
                type="text" 
                placeholder="Şikayet yanıtınızı yazınız..."
                {...register("adminResponse")}
              />
              {errors.adminResponse && (
                <ErrorMessage>{errors.adminResponse.message}</ErrorMessage>
              )}
              <ButtonWrapper>
                <SaveButton type="submit">Gönder</SaveButton>
              </ButtonWrapper>
            </form>
          )
      }
    </>
  );
}

export default ComplaintDetail;
