import React from "react";
import { Text, Link, Divider, Avatar } from "@nextui-org/react";

const Sidebar = () => {
  return (
    <div>
      <Text h4 weight="bold" marginBottom="2">
        Trends
      </Text>
      <Link href="/trends/1" color underline>
        #HoopHub
      </Link>
      <Divider marginTop="2" marginBottom="4" />
      <Text h4 weight="bold" marginBottom="2">
        Who to follow
      </Text>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "2" }}>
        <Avatar size="medium" src="/avatar.png" alt="User Avatar" />
        <div style={{ marginLeft: "1rem" }}>
          <Text weight="bold">John Doe</Text>
          <Text color="secondary">@johndoe</Text>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar size="medium" src="/avatar.png" alt="User Avatar" />
        <div style={{ marginLeft: "1rem" }}>
          <Text weight="bold">Jane Smith</Text>
          <Text color="secondary">@janesmith</Text>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
