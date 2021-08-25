import React from 'react';
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../helper/UpdateAction";

function Result() {
  const { state } = useStateMachine({ updateAction });
  

  return (
    <div>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default Result;
