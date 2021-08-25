import { GlobalState } from "little-state-machine";

export default function updateFirstLastName(
  state: GlobalState,
  payload: {
    firstName: string;
    lastName: string;
    identityNumber: string;
    age: number;
    complaintDetail: string;
    complaintTitle: string;
    address: string;
    email: string;
    documents: string;
  }
) {
  return {
    ...state,
    yourDetails: {
      ...state.yourDetails,
      ...payload,
    }
  };
}