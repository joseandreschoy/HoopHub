import React from "react";
import { Container, Button } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const posts = [
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "70%", paddingRight: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Button color="error" shadow>
                Create Tweet
              </Button>
            </div>
            <PostList posts={posts} />
          </div>
          <div style={{ width: "30%" }}>
            <Sidebar />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
