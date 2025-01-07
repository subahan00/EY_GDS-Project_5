import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Main Page!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Main;
