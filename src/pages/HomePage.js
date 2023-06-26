import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Input } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import NBAFixtures from "../components/NBAFixtures"; // Importing the NBAFixtures component
import axios from "axios";

const HomePage = () => {
  const [tweets, setTweets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tweetContent, setTweetContent] = useState("");

  useEffect(() => {
    fetchTweets();
  }, []);

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
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/tweets`,
        {
          content: tweetContent,
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

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div style={{ flex: "0 0 30%" }}>
            <NBAFixtures />
          </div>
          <div style={{ flex: "0 0 50%" }}>
            <PostList tweets={tweets} />
          </div>
          <div style={{ flex: "0 0 20%" }}>
            <Sidebar />
          </div>
        </div>
        <Button
          color="error"
          shadow
          onClick={() => setShowModal(true)}
          fullWidth
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
          />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
