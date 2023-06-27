import React, { useState } from "react";
import { Avatar, Text, Button } from "@nextui-org/react";
import axios from "axios";

const tweetStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    border: "1px solid orange",
    borderRadius: "0.5rem",
    padding: "0.5rem",
  },
  avatar: {
    marginRight: "1rem",
  },
  displayName: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  username: {
    color: "#888",
    marginBottom: "0.5rem",
  },
  text: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "blue",
    textDecoration: "underline",
    marginLeft: "0.5rem",
  },
};

const Tweet = ({ tweet }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowComments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/tweets/${tweet.id}/comments`
      );
      setComments(response.data);
      setShowComments(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHideComments = () => {
    setShowComments(false);
  };

  return (
    <div style={tweetStyles.container}>
      <Avatar
        size="small"
        src="/avatar.png"
        alt="User Avatar"
        style={tweetStyles.avatar}
      />
      <div style={{ marginLeft: "1rem" }}>
        <Text style={tweetStyles.displayName}>{tweet.displayName}</Text>
        <Text style={tweetStyles.username}>@{tweet.username}</Text>
        <Text font="body" style={tweetStyles.text}>
          {tweet.content}
        </Text>
        {showComments ? (
          <Button style={tweetStyles.button} onClick={handleHideComments}>
            Hide comments
          </Button>
        ) : (
          <Button style={tweetStyles.button} onClick={handleShowComments}>
            Show comments
          </Button>
        )}
        {isLoading && <Text>Loading comments...</Text>}
        {showComments &&
          comments.map((comment) => (
            <div key={comment.id}>
              <Text>@{comment.username}</Text>
              <Text>{comment.content}</Text>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tweet;
