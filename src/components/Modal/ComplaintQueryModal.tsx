import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody } from "reactstrap";
import { IComplaintId } from "../../types";
import { ButtonWrapper, CloseButton, CloseButtonWrapper, ContinueButton, ErrorMessage, Icon, Input, Label } from "./styles";
import { QuerySchema } from "../../validation/Validations";
import "../../index.css";

function ComplaintQueryModal({ visibleQuery, handleQueryModalVisibilty }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IComplaintId>({ resolver: yupResolver(QuerySchema) });
  const history = useHistory();

  const onSubmit = (data: IComplaintId) => {
    if (data.id) {
      history.push(`/complaint-query/${data.id.trim()}`)
    } 
  };

  return (
    <>
      <Modal contentClassName="modal" isOpen={visibleQuery} toggle={handleQueryModalVisibilty} centered >
        <ModalBody>
          <CloseButtonWrapper>
            <CloseButton onClick={handleQueryModalVisibilty}>
              <Icon icon={faTimes} size="2x" />
            </CloseButton>
          </CloseButtonWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Şikayet Kodunuz</Label>
            <Input
              type="text"
              placeholder="Şikayet kodunuzu giriniz..."
              {...register("id")}
            />
            {errors.id && (
              <ErrorMessage>{errors.id.message}</ErrorMessage>
            )}
            <ButtonWrapper>
              <ContinueButton type="submit">Sorgula</ContinueButton>
            </ButtonWrapper>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ComplaintQueryModal;
