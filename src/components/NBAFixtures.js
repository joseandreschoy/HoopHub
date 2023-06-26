import React, { useState, useEffect } from "react";
import { Text, Card, Avatar, Col, Row } from "@nextui-org/react";
import axios from "axios";

const NBAFixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetchFixtures();
  }, []);

  const fetchFixtures = async () => {
    try {
      const response = await axios.get(
        "https://api-nba-v1.p.rapidapi.com/games/live",
        {
          headers: {
            "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
            "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
          },
        }
      );
      setFixtures(response.data.api.games);
    } catch (error) {
      console.error("Error fetching fixtures:", error);
    }
  };

  return (
    <div>
      <Text h4 style={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
        NBA Fixtures
      </Text>
      {fixtures.length === 0 ? (
        <Text>No live games</Text>
      ) : (
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
            {fixtures.map((fixture) => (
              <Card
                key={fixture.gameId}
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
                      src={fixture.avatar}
                      alt={fixture.username}
                      width="32px"
                      height="32px"
                    />
                    <Text h6>
                      {fixture.vTeam.fullName} vs {fixture.hTeam.fullName}
                    </Text>
                  </Row>
                  <Text>{fixture.startTimeUTC}</Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </div>
      )}
    </div>
  );
};

export default NBAFixtures;
