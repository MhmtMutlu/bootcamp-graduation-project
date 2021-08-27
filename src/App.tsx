import React from "react";
import ComplaintContextProvider from "./context/ComplaintContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <ComplaintContextProvider>
      <Routes />
    </ComplaintContextProvider>
  );
}

export default App;
