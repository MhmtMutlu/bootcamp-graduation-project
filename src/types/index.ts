
export interface IFormValues {
  firstName: string;
  lastName: string;
  identityNumber: string;
  age: number;
  complaintDetail: string;
  complaintTitle: string;
  address: string;
  email: string;
};

export interface ILoginValues {
  email: string;
  password: string;
};

export interface IComplaintContext {
  formValues: IFormValues;
  step: string;
  addData: (i: IFormValues) => void;
  changeStep: (i: string) => void;
};

