import React, { useState } from "react";

function SecureForm() {
  const [input, setInput] = useState("");

  // Handle form submission securely
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yo, form submitted securely:", input);
    // Use proper sanitization here before sending to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userInput">Enter something:</label>
      <input
        type="text"
        id="userInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SecureForm;