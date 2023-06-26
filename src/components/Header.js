import React from "react";
import { Link, Image, Text, Button } from "@nextui-org/react";
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
        <Link href="/">
          <Image src={Logo} alt="HoopHub Logo" height={50} width={50} />
          HoopHub
        </Link>
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
          <Link href="/" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Home
            </Text>
          </Link>
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
          <Link href="/explore" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Explore
            </Text>
          </Link>
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
          <Link href="/notifications" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Notifications
            </Text>
          </Link>
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
          <Link href="/messages" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Messages
            </Text>
          </Link>
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
          <Link href="/profile" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Profile
            </Text>
          </Link>
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
          <Link href="/login" color="inherit">
            <Text size="1rem" color="white" weight="bold">
              Login
            </Text>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
