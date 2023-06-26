import React from "react";
import { Avatar, Text } from "@nextui-org/react";

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
};

const Tweet = ({ username, displayName, text }) => {
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
      </div>
    </div>
  );
};

export default Tweet;
