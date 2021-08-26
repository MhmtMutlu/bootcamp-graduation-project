
export interface IFormValues {
  firstName: string;
  lastName: string;
  identityNumber: string;
  age: number;
  complaintDetail: string;
  complaintTitle: string;
  address: string;
  email: string;
  documents: FileList | null;
};

export interface IComplaintContext {
  formValues: IFormValues;
  step: string;
  addData: (i: IFormValues) => void;
  changeStep: (i: string) => void;
};

