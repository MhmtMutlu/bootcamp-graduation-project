import 'little-state-machine';

declare module "little-state-machine" {
  interface GlobalState {
    yourDetails: {
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
  }
}