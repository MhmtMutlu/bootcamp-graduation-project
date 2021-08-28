import React from "react";
import ComplaintContextProvider from "./context/ComplaintContext";
import LoginContextProvider from "./context/LoginContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <ComplaintContextProvider>
      <LoginContextProvider>
        <Routes />
      </LoginContextProvider>
    </ComplaintContextProvider>
  );
}

export default App;
