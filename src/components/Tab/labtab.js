import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomizedTables from "../Table/table";
import ProcessDetail from "../ProcessDetail/ProcessDetail";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        backgroundColor: "white",
        color: "black",
        borderRadius: "0px 0px 10px 10px",
        height: "400px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Действия" value="1" />
            <Tab label="История P/L" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProcessDetail />
        </TabPanel>
        <TabPanel value="2">
          <CustomizedTables />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
