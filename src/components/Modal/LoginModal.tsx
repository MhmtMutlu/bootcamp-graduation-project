import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { Modal, ModalBody } from "reactstrap";
import { ILoginValues } from "../../types";
import { ButtonWrapper, CloseButton, CloseButtonWrapper, ContinueButton, ErrorMessage, Icon, Input, Label } from "./styles";
import "../../index.css";
import { LoginContext } from "../../context/LoginContext";

const FormSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Kullanıcı adınızı girmek zorundasınız!"),
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
  const { checkIsLogin } = useContext(LoginContext);
  const history = useHistory();

  const onSubmit = (data: ILoginValues) => {
    if (checkIsLogin(data)) {
      history.push("/admin/complaint-list");
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
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
            <Label>Kulanıcı Adı</Label>
            <Input
              type="text"
              placeholder="kodluyoruz"
              {...register("userName")}
            />
            {errors.userName && (
              <ErrorMessage>{errors.userName.message}</ErrorMessage>
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
