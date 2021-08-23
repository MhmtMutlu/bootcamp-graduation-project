import React from 'react';
import { IDefaultData, IStep } from '../../types';

const steps:IStep[] = [
  { id: "personalInfos" },
  { id: "complaintDetail" },
  { id: "complaintTitle" },
  { id: "additionalInfos" }
];

const defaultData:IDefaultData = {
  firstName: "",
  lastName: "",
  identityNumber: "",
  age: 0,
  complaintDetail: "",
  complaintTitle: "",
  address: "",
  email: "",
  documents: ""
}

function MultiStepForm() {
  return (
    <div>
      
    </div>
  )
}

export default MultiStepForm;
