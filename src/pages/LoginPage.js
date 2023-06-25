import React, { useState } from "react";
import { Text, Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { styled } from "@nextui-org/react";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  width: 300px;
  padding: 1rem;
  text-align: center;
`;

const CustomText = styled(Text)`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #1c1e21;
  text-align: center;
`;

const CustomButton = styled(Button)`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

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
      <LoginPageContainer>
        <LoginFormContainer>
          <CustomText h2 weight="bold" marginBottom="2rem">
            {isRegistering ? "Register" : "Login"}
          </CustomText>
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
            <CustomButton
              color="orange"
              auto
              type="submit"
              style={{ width: "100%", marginBottom: "1rem" }}
            >
              <CustomText color="white" weight="bold">
                {isRegistering ? "Register" : "Login"}
              </CustomText>
            </CustomButton>
          </form>
          <CustomText>
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account yet?"}{" "}
            <CustomText
              color="primary"
              weight="bold"
              underline
              onClick={() => setIsRegistering(!isRegistering)}
              style={{ cursor: "pointer" }}
            >
              {isRegistering ? "Login" : "Register"}
            </CustomText>
          </CustomText>
        </LoginFormContainer>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;
