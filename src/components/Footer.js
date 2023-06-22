import React from "react";
import { Box, Container, Link, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <Box backgroundColor="dark" color="white" paddingY="2" marginTop="4">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 HoopHub. All rights reserved.</Text>
          <Box display="flex">
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
