import React, { createContext, useState } from "react";
import { IFormValues } from "../types";
import InitialState from "./Initial";

export const ComplaintContext = createContext(InitialState);

const initialValues:IFormValues = {
  firstName: "",
  lastName: "",
  identityNumber: "",
  age: 0,
  complaintDetail: "",
  complaintTitle: "",
  address: "",
  email: "",
  documents: "",
};

const ComplaintContextProvider: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState<IFormValues>(initialValues);

  const addData = (data: any) => {
    setFormValues({ ...formValues, ...data });
  };

  return (
    <ComplaintContext.Provider value={{ formValues, addData }}>
      {children}
    </ComplaintContext.Provider>
  );
};

export default ComplaintContextProvider;
