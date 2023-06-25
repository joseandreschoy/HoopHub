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
          username={tweet.user_id}
          displayName={tweet.displayName}
          text={tweet.content}
        />
      ))}
    </div>
  );
};

export default PostList;
