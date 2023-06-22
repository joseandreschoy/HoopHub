import React from "react";
import { Link, Image } from "@nextui-org/react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#1976D2",
        color: "white",
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <Image
            src="/hoophub-logo.png"
            alt="HoopHub Logo"
            height={30}
            width={30}
          />
        </Link>
        <div style={{ marginLeft: "1rem" }}>
          <Link href="/" color="inherit" underline>
            Home
          </Link>
          <Link href="/explore" color="inherit" underline>
            Explore
          </Link>
          <Link href="/notifications" color="inherit" underline>
            Notifications
          </Link>
          <Link href="/messages" color="inherit" underline>
            Messages
          </Link>
          <Link href="/profile" color="inherit" underline>
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
