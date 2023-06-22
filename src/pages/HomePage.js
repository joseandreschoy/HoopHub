import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Input } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
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
      const response = await axios.get("/api/tweets");
      setTweets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTweet = async () => {
    try {
      const response = await axios.post("/api/tweets", {
        content: tweetContent,
      });
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "70%", paddingRight: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Button color="error" shadow onClick={() => setShowModal(true)}>
                Create Tweet
              </Button>
            </div>
            <PostList tweets={tweets} />
          </div>
          <div style={{ width: "30%" }}>
            <Sidebar />
          </div>
        </div>
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
            placeholder="Enter your tweet..."
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
