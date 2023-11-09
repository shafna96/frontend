import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import { Box } from "@mui/material";
import Actionsbar from "./Actionsbar";

function Layout({ title, children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ paddingX: "83px" }}>
        <Title title={title} />
        <Actionsbar />
        {children}
      </Box>
    </>
  );
}

export default Layout;
