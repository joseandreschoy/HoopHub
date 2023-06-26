import React, { useState, useContext } from "react";
import { Text, Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { SessionContext } from "../context/SessionContext";

const LoginPage = () => {
  const [_session, setSession] = useContext(SessionContext);
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, {
        username,
        email,
        password,
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      setSession(response.data);
      // Store the authentication token securely
      localStorage.setItem("authToken", token);

      // Redirect to the homepage
      navigate("/");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      setSession(response.data);
      // Store the authentication token securely
      localStorage.setItem("authToken", token);

      // Redirect to the homepage
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
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
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            {isRegistering ? "Register" : "Login"}
          </Text>
          <form
            onSubmit={isRegistering ? handleLoginSubmit : handleRegisterSubmit}
          >
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
              type="submit"
              style={{
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "orange",
              }}
              font="body"
            >
              <Text color="white" weight="bold">
                {isRegistering ? "Register" : "Login"}
              </Text>
            </Button>
          </form>
          <Text
            font="body"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
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
