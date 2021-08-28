import { IComplaintContext, ILoginContext } from "../types";

export const InitialComplaintState:IComplaintContext = {
  formValues: {
    firstName: "",
    lastName: "",
    identityNumber: "",
    age: 0,
    complaintDetail: "",
    complaintTitle: "",
    address: "",
    email: ""
  },
  step: "",
  addData: () => {},
  changeStep: () => {}
};

export const InitialLoginState:ILoginContext = {
  isLoggedIn: "",
  checkIsLogin: () => !!{},
  logOutAdmin: () => {}
};
