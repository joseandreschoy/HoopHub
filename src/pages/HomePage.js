import React, { useState, useEffect, useContext } from "react";
import { Container, Button, Modal, Input } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import NBAFixtures from "../components/NBAFixtures";
import axios from "axios";
import { SessionContext } from "../context/SessionContext";

const HomePage = () => {
  const [session] = useContext(SessionContext);
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
          userId: session.user.id,
          username: session.user.username,
          content: tweetContent,
        },
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
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
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <Container style={{ maxWidth: "90%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              flex: "0 0 20%",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <NBAFixtures />
            <Button
              color="error"
              shadow
              onClick={handlePostButtonClick}
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              POST!
            </Button>
          </div>
          <div
            style={{
              flex: "0 0 60%",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <PostList tweets={tweets} />
          </div>
          <div
            style={{
              flex: "0 0 100%",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
            }}
          >
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
