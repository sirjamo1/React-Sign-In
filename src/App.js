import React from "react";
import Header from "./components/Header.js";
import LoginForm from "./components/LoginForm";

export default function App() {
  const adminUser = {
    email: "admin@admin",
    password: "admin123",
  };
  const [user, setUser] = React.useState({ name: "", email: "" });
  const [error, setError] = React.useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Deatails do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="app">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
