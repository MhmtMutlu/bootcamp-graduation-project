import firebase from './firebase';
import { IFormValues, ILoginValues } from '../types/index';

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
    createdDate: firebase.firestore.Timestamp.now(),
  })
  .then(form => {
    ID = form.id;
  });

  return ID;
};

export const authAdmin = async (data:ILoginValues) => {
  let user;
  const { email, password } = data;
  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential:any) => {
    user = userCredential.user;
    localStorage.setItem("user", JSON.stringify(user));
  })
  .catch(() => {
    alert("Email veya şifre hatalı!");
  });

  return user;
}

export default addComplaintToDb;