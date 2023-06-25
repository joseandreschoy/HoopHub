import React from "react";
import { Avatar, Text } from "@nextui-org/react";

const tweetStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: 3,
    border: "1px solid orange",
    padding: "0.5rem",
  },
  avatar: {
    marginRight: 2,
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
      <div style={{ marginLeft: 2 }}>
        <Text weight="bold">{displayName}</Text>
        <Text color="secondary">@{username}</Text>
        <Text>{text}</Text>
      </div>
    </div>
  );
};

export default Tweet;
