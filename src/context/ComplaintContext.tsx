import React, { createContext, useState } from "react";
import { IFormValues } from "../types";
import InitialState from "./Initial";

export const ComplaintContext = createContext(InitialState);

const initialValues: IFormValues = {
  firstName: "",
  lastName: "",
  identityNumber: "",
  age: 0,
  complaintDetail: "",
  complaintTitle: "",
  address: "",
  email: "",
  documents: null,
};

const ComplaintContextProvider: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState<IFormValues>(initialValues);
  const [step, setStep] = useState<string>("firstStep");

  const addData = (data: any) => {
    setFormValues({ ...formValues, ...data });
  };

  const changeStep = (newStep: string) => {
    setStep(newStep);
  };

  return (
    <ComplaintContext.Provider value={{ formValues, addData, step, changeStep }}>
      {children}
    </ComplaintContext.Provider>
  );
};

export default ComplaintContextProvider;
