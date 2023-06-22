import React from "react";
import { Container, Link, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "dark",
        color: "white",
        padding: "16px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text color="black">&copy; 2023 HoopHub. All rights reserved.</Text>
          <div style={{ marginLeft: "10px" }}>
            <Link
              href="/terms"
              color="black"
              underline
              style={{ paddingRight: "10px" }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              color="black"
              underline
              style={{ paddingRight: "10px" }}
            >
              Privacy
            </Link>
            <Link href="/contact" color="black" underline>
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
