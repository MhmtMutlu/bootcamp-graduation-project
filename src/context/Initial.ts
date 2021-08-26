import { IComplaintContext } from "../types";

const InitialState:IComplaintContext = {
  formValues: {
    firstName: "",
    lastName: "",
    identityNumber: "",
    age: 0,
    complaintDetail: "",
    complaintTitle: "",
    address: "",
    email: "",
    documents: null
  },
  step: "",
  addData: () => {},
  changeStep: () => {}
};

export default InitialState;