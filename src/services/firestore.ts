import firebase from './firebase';
import { IFormValues } from '../types/index';

const database = firebase.firestore();

const complaintFormsRef = database.collection("complaint-forms");

const addComplaintToDb = async (data:IFormValues) => {
  let ID;
  await complaintFormsRef.add({
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    identityNumber: data.identityNumber,
    complaintDetail: data.complaintDetail,
    complaintTitle: data.complaintTitle,
    address: data.address,
    email: data.email,
    documents: data.documents,
    createdDate: firebase.firestore.Timestamp.now(),
  })
  .then(form => {
    ID = form.id;
  });

  return ID;
}

export default addComplaintToDb;