import React from "react";
import { Box, Container, Link, Image, Spacer } from "@nextui-org/react";

const Header = () => {
  return (
    <Box backgroundColor="primary" color="white" paddingY="2" marginBottom="4">
      <Container>
        <Box display="flex" alignItems="center">
          <Link href="/">
            <Image
              src="/hoophub-logo.png"
              alt="HoopHub Logo"
              height={30}
              width={30}
            />
          </Link>
          <Spacer inline x={0.5} />
          <Link href="/" color="inherit" underline>
            Home
          </Link>
          <Spacer inline x={0.5} />
          <Link href="/explore" color="inherit" underline>
            Explore
          </Link>
          <Spacer inline x={0.5} />
          <Link href="/notifications" color="inherit" underline>
            Notifications
          </Link>
          <Spacer inline x={0.5} />
          <Link href="/messages" color="inherit" underline>
            Messages
          </Link>
          <Spacer inline x={0.5} />
          <Link href="/profile" color="inherit" underline>
            Profile
          </Link>
          <Spacer inline x={0.5} />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
