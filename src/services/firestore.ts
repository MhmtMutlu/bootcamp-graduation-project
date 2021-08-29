/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "./firebase";
import { IFormValues } from "../types/index";

const database = firebase.firestore();

const complaintFormsRef = database.collection("complaint-forms");

export const addComplaintToDb = async (data: IFormValues) => {
  let ID;
  await complaintFormsRef
    .add({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      identityNumber: data.identityNumber,
      complaintDetail: data.complaintDetail,
      complaintTitle: data.complaintTitle,
      address: data.address,
      email: data.email,
      adminResponse: "",
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((form) => {
      ID = form.id;
    });

  return ID;
};

export const getComplaints = (callback:Function) => {
  const complaintsArray: Array<Object> = [];

  complaintFormsRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      complaintsArray.push({
        ...doc.data(),
        key: doc.id
      });
    });
    callback(complaintsArray)
  });
};

export const getData = (formId: string) => {
  let formData;

  complaintFormsRef
    .doc(formId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        formData = doc.data();
        console.log(formData)
      } else {
        formData = "";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
    
  return formData;
};
