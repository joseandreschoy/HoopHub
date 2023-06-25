import React, { useState } from "react";
import { Text, Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Handle registration
      try {
        await axios.post("/api/register", { username, email, password });
        // Registration successful
        navigate("/login"); // Redirect to login page
      } catch (error) {
        console.error("Error registering:", error);
        // Handle registration error, show an error message
      }
    } else {
      // Handle login
      try {
        await axios.post("/api/login", { username, password });
        // Login successful
        navigate("/"); // Redirect to homepage
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle login error, show an error message
      }
    }
  };

  return (
    <>
      <Header fullWidth />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "300px", padding: "1rem", textAlign: "center" }}>
          <Text
            h2
            weight="bold"
            marginBottom="2rem"
            style={{ fontFamily: "Your Font Name" }} // Replace with your desired font
          >
            {isRegistering ? "Register" : "Login"}
          </Text>
          <form onSubmit={handleFormSubmit}>
            {isRegistering && (
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  fullWidth
                />
              </div>
            )}
            <div style={{ marginBottom: "1rem" }}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />
            </div>
            <Button
              color="orange"
              auto
              type="submit"
              style={{ width: "100%", marginBottom: "1rem" }}
              font="body"
            >
              <Text color="white" weight="bold">
                {isRegistering ? "Register" : "Login"}
              </Text>
            </Button>
          </form>
          <Text font="body">
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account yet?"}{" "}
            <Text
              color="primary"
              weight="bold"
              underline
              onClick={() => setIsRegistering(!isRegistering)}
              style={{ cursor: "pointer" }}
            >
              {isRegistering ? "Login" : "Register"}
            </Text>
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
