import React, { useEffect, useState } from "react";
import { Text, Link, Divider, Avatar } from "@nextui-org/react";
import axios from "axios"; // Import Axios

const sidebarStyles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    border: "0.125rem solid #FF6B01", // Orange border color
    padding: "1.5rem", // Adjust padding as needed
    width: "18rem", // Adjust the width as desired
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={sidebarStyles.container}>
      <Text h4 style={sidebarStyles.trendTitle} weight="bold">
        Trends
      </Text>
      <Link href="/trends/1" style={sidebarStyles.trendLink}>
        #HoopHub
      </Link>
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
            <Text weight="bold">{user.name}</Text>
            <Text color="secondary">@{user.username}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
