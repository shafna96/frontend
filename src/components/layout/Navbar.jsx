import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import FlexBetween from "../common/FlexBetween";
import { arrowDown, profileImage, profileStatus } from "../../assets";
import { useTheme } from "@emotion/react";

function Navbar() {
  const theme = useTheme();
  return (
    <AppBar sx={appBarStyle}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <FlexBetween width="268px">
          <Box>
            <Button>
              <Typography
                sx={{
                  ...typographyStyle,
                  color: theme.palette.secondary.main,
                }}
              >
                ADMIN
              </Typography>
              <Box
                component="img"
                alt="arrow-down"
                src={arrowDown}
                sx={arrowDownStyle}
              />
            </Button>
          </Box>
          <Box position="relative" display="inline-block">
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              sx={profileImageStyle}
            />
            {/* Status image */}
            <Box
              component="img"
              alt="profileStatus"
              src={profileStatus}
              sx={profileStatusStyle}
            />
          </Box>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

/* STYLES */
const appBarStyle = {
  position: "static",
  background: "none",
  boxShadow: "none",
  padding: "2vw 4vw 3vw 0", //"33px 59px 41px 0px ",
};
const typographyStyle = {
  fontSize: "1vw", //"19px",
  fontWeight: 700,
  textAlign: "left",
  width: "64px",
  height: "26px",
  top: "17px",
  left: "44px",
};

const arrowDownStyle = {
  height: "24px",
  width: "24px",
  marginLeft: "10px",
};

const profileImageStyle = {
  height: "58px",
  width: "58px",
};

const profileStatusStyle = {
  position: "absolute",
  top: "42px",
  right: "-1px",
  width: "12px",
  height: "12px",
};
