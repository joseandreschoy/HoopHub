import React from "react";
import { Avatar, Text } from "@nextui-org/react";

const Tweet = ({ username, displayName, text }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
      <Avatar size="small" src="/avatar.png" alt="User Avatar" />
      <div style={{ marginLeft: 2 }}>
        <Text weight="bold">{displayName}</Text>
        <Text color="secondary">@{username}</Text>
        <Text>{text}</Text>
      </div>
    </div>
  );
};

export default Tweet;
