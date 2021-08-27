import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import { ComplaintContext } from "../../context/ComplaintContext";
import { IFormValues } from "../../types";
import SideBar from "../../components/SideBar/SideBar";
import {
  NavbarButton,
  PageContainer,
  PageContainerNavbar,
  PageWrapper,
} from "./styles";

const initialValue: IFormValues = {
  firstName: "",
  lastName: "",
  identityNumber: "",
  age: 0,
  complaintDetail: "",
  complaintTitle: "",
  address: "",
  email: ""
};

function CreateComplaint() {
  const history = useHistory();
  const { addData } = useContext(ComplaintContext);
  const homePageButton = () => {
    history.push("/");
    addData(initialValue);
  };

  return (
    <PageWrapper>
      <SideBar />
      <PageContainer>
        <PageContainerNavbar>
          <NavbarButton onClick={homePageButton}>Ana Sayfa</NavbarButton>
        </PageContainerNavbar>
        <MultiStepForm />
      </PageContainer>
    </PageWrapper>
  );
}

export default CreateComplaint;
