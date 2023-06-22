// pages/ProfilePage.js
import React from "react";
import { Container, Box, Text } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box marginTop="4">
          <Text h1>Profile Page</Text>
          <Box marginTop="2">
            <Text weight="bold">Username:</Text>
            <Text>john_doe</Text>
          </Box>
          <Box marginTop="2">
            <Text weight="bold">Display Name:</Text>
            <Text>John Doe</Text>
          </Box>
          <Box marginTop="2">
            <Text weight="bold">Bio:</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
