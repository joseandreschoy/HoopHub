import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Input } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import NBAFixtures from "../components/NBAFixtures";
import axios from "axios";

// Example implementation of getUserIdFromAuthToken
const getUserIdFromAuthToken = (authToken) => {
  // Parse the authentication token and extract the user ID
  // Implement the logic specific to your authentication mechanism
  // Return the user ID
};

const HomePage = () => {
  const [tweets, setTweets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tweetContent, setTweetContent] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
    fetchTweets();
  }, []);

  const checkAuthentication = () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const fetchTweets = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/tweets`
      );
      setTweets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTweet = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        console.log("User is not authenticated. Redirect to login page.");
        return;
      }

      const userId = getUserIdFromAuthToken(authToken);

      if (!userId) {
        console.log("Invalid authentication token. Redirect to login page.");
        return;
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/tweets`,
        {
          userId,
          content: tweetContent,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const newTweet = response.data;
      setTweets((prevTweets) => [newTweet, ...prevTweets]);
      setTweetContent("");
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTweet();
    }
  };

  const handlePostButtonClick = () => {
    if (isAuthenticated) {
      setShowModal(true);
    } else {
      console.log("User is not authenticated. Redirect to login page.");
    }
  };

  return (
    <>
      <Header />
      <Container style={{ maxWidth: "80%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: "0 0 30%",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <NBAFixtures />
          </div>
          <div
            style={{
              flex: "0 0 50%",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <PostList tweets={tweets} />
          </div>
          <div
            style={{
              flex: "0 0 20%",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Sidebar />
          </div>
        </div>
        <Button
          color="error"
          shadow
          onClick={handlePostButtonClick}
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          POST!
        </Button>
      </Container>
      <Footer />

      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          title="Create Tweet"
          actions={[
            {
              name: "Cancel",
              action: () => setShowModal(false),
            },
            {
              name: "Create",
              action: createTweet,
              primary: true,
            },
          ]}
        >
          <Input
            value={tweetContent}
            placeholder="Enter your baller talk..."
            onChange={(e) => setTweetContent(e.target.value)}
            fullWidth
            onPress={handleKeyPress}
            style={{ fontFamily: "Arial, sans-serif" }}
          />
          <Button
            color="error"
            onClick={createTweet}
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Submit
          </Button>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
