import { Box, Breadcrumbs, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { seperator } from "../../assets";

function Title({ title, breadcrumbs, secTitle }) {
  const theme = useTheme();
  return (
    <>
      {breadcrumbs ? (
        <Breadcrumbs
          separator={<Box component="img" alt="seperator" src={seperator} />}
          aria-label="breadcrumb"
        >
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            key="1"
            color="inherit"
          >
            <Typography
              sx={{ ...typographyStyle, color: theme.palette.secondary.main }}
            >
              {title}
            </Typography>
          </Link>
          <Typography
            sx={{ ...breadcrumbLinkStyle, color: theme.palette.primary.main }}
          >
            {secTitle}
          </Typography>
        </Breadcrumbs>
      ) : (
        <Typography
          sx={{ ...typographyStyle, color: theme.palette.secondary.main }}
        >
          {title}
        </Typography>
      )}
    </>
  );
}

export default Title;

const typographyStyle = {
  fontWeight: 900,
  fontSize: "36px",
  //width: "241px",
  letterSpacing: "15%",
  textTransform: "uppercase",
};

const breadcrumbLinkStyle = {
  textDecoration: "none",
  width: "220px",
  fontWeight: 700,
  fontSize: "24px",
  letterSpacing: "8%",
};
