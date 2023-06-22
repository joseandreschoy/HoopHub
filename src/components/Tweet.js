import React from "react";
import { Box, Avatar, Text } from "@nextui-org/react";

const Tweet = ({ username, displayName, text }) => {
  return (
    <Box display="flex" alignItems="center" marginBottom="3">
      <Avatar size="small" src="/avatar.png" alt="User Avatar" />
      <Box marginLeft="2">
        <Text weight="bold">{displayName}</Text>
        <Text color="secondary">@{username}</Text>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

export default Tweet;
