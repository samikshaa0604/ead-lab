import React, { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const evaluateStrength = (password) => {
    if (!password) return "";
    if (password.length < 6) return "Weak Password";
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) return "Strong Password";
    return "Moderate Password";
  };

  const handleChange = (e) => {
    const newPassword = e.target.value; 
    setPassword(newPassword);
    setStrength(evaluateStrength(newPassword));
  };
return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <p>{strength}</p>
    </div>
  );
};

export default PasswordStrength;
