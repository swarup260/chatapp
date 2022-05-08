import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import TabPanel from "./TabPanel";

import MessageListWindow from "./MessageListWindow";
import ChatForm from "./ChatForm";
import { useSelector } from "react-redux";
import { roomList } from "../../store/chat";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  // const chatRooms = useSelector(roomList);
  const chatRooms = ["pulic","new public"];

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical"
        sx={{ borderRight: 2, borderColor: "divider",width:"200px" }}
      >
        {chatRooms.map((val,index) => (
          <Tab label={`Chat Room: ${val}`} {...a11yProps(val)} key={index} />
        ))}
      </Tabs>
      {chatRooms.map((val,index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            <MessageListWindow />
            <ChatForm />
          </TabPanel>
        );
      })}
    </Box>
  );
}
