import React, { useEffect, useState } from "react";
import { Text, Link, Divider, Avatar } from "@nextui-org/react";
import axios from "axios";

const sidebarStyles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    border: "0.125rem solid orange",
    padding: "1.5rem",
    width: "18rem",
    borderRadius: "1rem",
  },
  trendTitle: {
    marginBottom: "1.5rem",
    fontWeight: "bold",
  },
  trendLink: {
    marginBottom: "1.5rem",
    color: "inherit",
    textDecoration: "underline",
  },
  divider: {
    marginTop: "1.5rem",
    marginBottom: "3rem",
  },
  whoToFollowTitle: {
    marginBottom: "1.5rem",
    fontWeight: "bold",
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  avatar: {
    marginRight: "1rem",
  },
};

const Sidebar = () => {
  const [trends, setTrends] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/trends`
        );
        setTrends(response.data);
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchTrends();
    fetchUsers();
  }, []);

  return (
    <div style={sidebarStyles.container}>
      <Text h4 style={sidebarStyles.trendTitle} weight="bold">
        Trends
      </Text>
      {trends.map((trend) => (
        <Link
          key={trend.id}
          href={`/trends/${trend.id}`}
          style={sidebarStyles.trendLink}
        >
          #{trend.name}
        </Link>
      ))}
      <Divider style={sidebarStyles.divider} />
      <Text h4 style={sidebarStyles.whoToFollowTitle} weight="bold">
        Who to follow
      </Text>
      {users.map((user) => (
        <div key={user.id} style={sidebarStyles.userContainer}>
          <Avatar
            size="medium"
            src={user.avatar}
            alt="User Avatar"
            style={sidebarStyles.avatar}
          />
          <div>
            <Text weight="bold">{user.username}</Text>
            <Text color="secondary">@{user.username}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
