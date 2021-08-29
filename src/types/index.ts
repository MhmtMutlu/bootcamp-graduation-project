import React from "react";

export interface IFormValues {
  firstName: string;
  lastName: string;
  identityNumber: string;
  age: number;
  complaintDetail: string;
  complaintTitle: string;
  address: string;
  email: string;
}

export interface ILoginValues {
  userName: string;
  password: string;
}

export interface IComplaintContext {
  formValues: IFormValues;
  step: string;
  addData: (i: IFormValues) => void;
  changeStep: (i: string) => void;
}

export interface ILoginContext {
  isLoggedIn: string;
  checkIsLogin: (i: ILoginValues) => boolean;
  logOutAdmin: () => void;
}

export interface IPrivateRoute {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
}

export interface IProps {
  firstName: string;
  lastName: string;
  complaintTitle: string;
  complaintDetail: string;
  id: string;
  adminResponse: string;
}
