import React from "react";
import { Card, Text, Avatar, Col, Row } from "@nextui-org/react";

const PostList = ({ tweets }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Col span={6}>
        {tweets.map((tweet) => (
          <Card
            key={tweet.id}
            shadow
            style={{
              marginBottom: "1rem",
              border: "2px solid orange",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <Card.Body>
              <Row alignItems="center" marginBottom="0.5rem">
                <Avatar
                  src={tweet.avatar}
                  alt={tweet.username}
                  width="32px"
                  height="32px"
                />
                <Text h6>{tweet.username}</Text>
              </Row>
              <Text>{tweet.content}</Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </div>
  );
};

export default PostList;
