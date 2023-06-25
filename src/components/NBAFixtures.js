import React, { useState, useEffect } from "react";
import { Text } from "@nextui-org/react";
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
        fixtures.map((fixture) => (
          <div key={fixture.gameId}>
            <Text>{fixture.startTimeUTC}</Text>
            <Text>
              {fixture.vTeam.fullName} vs {fixture.hTeam.fullName}
            </Text>
          </div>
        ))
      )}
    </div>
  );
};

export default NBAFixtures;
