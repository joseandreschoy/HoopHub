// pages/Homepage.js
import React from "react";
import { Container, Box, Button } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TweetList from "../components/PostList";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  // Sample data for tweets
  const tweets = [
    {
      id: 1,
      username: "john_doe",
      displayName: "John Doe",
      text: "Hello, world!",
    },
    {
      id: 2,
      username: "jane_smith",
      displayName: "Jane Smith",
      text: "Welcome to HoopHub!",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Box width="70%" paddingRight="4">
            <Box marginBottom="4">
              <Button color="error" shadow>
                Create Tweet
              </Button>
            </Box>
            <PostList tweets={tweets} />
          </Box>
          <Box width="30%">
            <Sidebar />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
