import React from "react";
import { Box, Text, Link, Divider } from "@nextui-org/react";

const Sidebar = () => {
  return (
    <Box>
      <Text weight="bold" marginBottom="2">
        Trends
      </Text>
      <Link href="/trends/1" underline>
        #HoopHub
      </Link>
      <Divider marginTop="2" marginBottom="4" />
      <Text weight="bold" marginBottom="2">
        Who to follow
      </Text>
      <Box display="flex" alignItems="center" marginBottom="2">
        <Box marginRight="2">
          <img
            src="/avatar.png"
            alt="User Avatar"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box>
          <Text weight="bold">John Doe</Text>
          <Text color="secondary">@johndoe</Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box marginRight="2">
          <img
            src="/avatar.png"
            alt="User Avatar"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box>
          <Text weight="bold">Jane Smith</Text>
          <Text color="secondary">@janesmith</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
