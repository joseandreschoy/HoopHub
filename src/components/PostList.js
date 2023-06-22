import React from "react";
import Tweet from "./Tweet";

const PostList = ({ tweets }) => {
  if (!tweets || tweets.length === 0) {
    return <div>No tweets to display</div>;
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          username={tweet.username}
          displayName={tweet.displayName}
          text={tweet.text}
        />
      ))}
    </div>
  );
};

export default PostList;
