import { Typography, useTheme } from "@mui/material";
import React from "react";

function Title({ title }) {
  const theme = useTheme();
  return (
    <Typography
      sx={{ ...typographyStyle, color: theme.palette.secondary.main }}
    >
      {title.toUpperCase()}
    </Typography>
  );
}

export default Title;

const typographyStyle = {
  fontWeight: 900,
  fontSize: "36px",
  width: "241px",
  letterSpacing: "15%",
};
