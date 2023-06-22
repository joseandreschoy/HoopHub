// pages/ProfilePage.js
import React from "react";
import { Container, Text } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Container>
        <div style={{ marginTop: "4" }}>
          <Text h1>Profile Page</Text>
          <div style={{ marginTop: "2" }}>
            <Text weight="bold">Username:</Text>
            <Text>john_doe</Text>
          </div>
          <div style={{ marginTop: "2" }}>
            <Text weight="bold">Display Name:</Text>
            <Text>John Doe</Text>
          </div>
          <div style={{ marginTop: "2" }}>
            <Text weight="bold">Bio:</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
