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
    documents: ""
  },
  addData: () => {}
};

export default InitialState;