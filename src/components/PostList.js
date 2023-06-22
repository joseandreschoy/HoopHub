import React from "react";
import { Box } from "@nextui-org/react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <Box>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          username={tweet.username}
          displayName={tweet.displayName}
          text={tweet.text}
        />
      ))}
    </Box>
  );
};

export default TweetList;
