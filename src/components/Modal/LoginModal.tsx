import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { Modal, ModalBody } from "reactstrap";
import { ILoginValues } from "../../types";
import { ButtonWrapper, CloseButton, CloseButtonWrapper, ContinueButton, ErrorMessage, Icon, Input, Label } from "./styles";
import "../../index.css";
import { authAdmin } from "../../services/firestore";

const FormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email adresinizi girmek zorundasınız!"),
  password: yup
    .string()
    .required("Şifrenizi girmek zorundasınız!")
});

function LoginModal({ visible, handleModalVisibilty }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginValues>({ resolver: yupResolver(FormSchema) });
  const history = useHistory();

  const onSubmit = (data: ILoginValues) => {
    authAdmin(data)
    history.push("/admin/complaint-list");
  };

  return (
    <>
      <Modal contentClassName="modal" isOpen={visible} toggle={handleModalVisibilty} centered >
        <ModalBody>
          <CloseButtonWrapper>
            <CloseButton onClick={handleModalVisibilty}>
              <Icon icon={faTimes} size="2x" />
            </CloseButton>
          </CloseButtonWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="kodluyoruz@patika.dev"
              {...register("email")}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <Label>Şifre</Label>
            <Input
              type="password"
              placeholder="bootcamp109"
              {...register("password")}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            <ButtonWrapper>
              <ContinueButton type="submit">Giriş Yap</ContinueButton>
            </ButtonWrapper>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default LoginModal;
