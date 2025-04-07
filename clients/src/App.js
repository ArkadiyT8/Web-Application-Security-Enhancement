import React from "react";
import SecureForm from "./components/SecureForm";

function App() {
  return (
    <div className="App">
      <h1>Yo, this is a secure app!</h1>
      {/* Secure form to prevent XSS and CSRF */}
      <SecureForm />
    </div>
  );
}

export default App;