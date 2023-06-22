import React from "react";
import { Container, Link, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "dark",
        color: "white",
        padding: "16px 0",
        marginTop: "32px",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>&copy; 2023 HoopHub. All rights reserved.</Text>
          <div style={{ display: "flex" }}>
            <Link href="/terms" color="inherit" underline>
              Terms
            </Link>
            <Text marginX="1">|</Text>
            <Link href="/privacy" color="inherit" underline>
              Privacy
            </Link>
            <Text marginX="1">|</Text>
            <Link href="/contact" color="inherit" underline>
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
