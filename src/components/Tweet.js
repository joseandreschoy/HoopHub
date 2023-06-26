import React, { useState } from "react";
import { Avatar, Text } from "@nextui-org/react";
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

const Tweet = ({ username, displayName, text, tweetId }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetComments = async () => {
    if (comments.length > 0) {
      setShowComments(!showComments);
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/tweets/${tweetId}/comments`
      );
      setComments(response.data);
      setShowComments(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
        <Text style={tweetStyles.displayName}>{displayName}</Text>
        <Text style={tweetStyles.username}>@{username}</Text>
        <Text font="body" style={tweetStyles.text}>
          {text}
        </Text>
        <button style={tweetStyles.button} onClick={handleGetComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {isLoading && <Text>Loading comments...</Text>}
        {showComments &&
          comments.map((comment) => (
            <div key={comment.id}>
              <Text>{comment.content}</Text>
              <Text>@{comment.username}</Text>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tweet;
