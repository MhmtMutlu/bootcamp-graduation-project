
export interface IFormValues {
  firstName: string;
  lastName: string;
  identityNumber: string;
  age: number;
  complaintDetail: string;
  complaintTitle: string;
  address: string;
  email: string;
  documents: string;
};

export interface IComplaintContext {
  formValues: IFormValues;
  addData: (i: IFormValues) => void;
};

