import React from "react";
import { Image, Text, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/hoophubimage.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        color: "white",
        padding: "1rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/">
          <Image src={Logo} alt="HoopHub Logo" height={50} width={50} />
        </NavLink>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button
          color="white"
          auto
          style={{
            border: "2px solid white",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
          bordered
        >
          <NavLink to="/" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Home
            </Text>
          </NavLink>
        </Button>
        <Button
          color="white"
          auto
          style={{
            border: "2px solid white",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
          bordered
        >
          <NavLink to="/explore" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Explore
            </Text>
          </NavLink>
        </Button>
        <Button
          color="white"
          auto
          style={{
            border: "2px solid white",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
          bordered
        >
          <NavLink to="/notifications" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Notifications
            </Text>
          </NavLink>
        </Button>
        <Button
          color="white"
          auto
          style={{
            border: "2px solid white",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
          bordered
        >
          <NavLink to="/messages" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Messages
            </Text>
          </NavLink>
        </Button>
        <Button
          color="white"
          auto
          style={{
            border: "2px solid white",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
          bordered
        >
          <NavLink to="/profile" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Profile
            </Text>
          </NavLink>
        </Button>
        <Button
          color="white"
          auto
          style={{
            border: "2px solid white",
            borderRadius: "4px",
            backgroundColor: "transparent",
          }}
          bordered
        >
          <NavLink to="/login" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Login
            </Text>
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Header;
