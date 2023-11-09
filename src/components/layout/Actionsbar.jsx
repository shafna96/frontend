import React from "react";
import FlexBetween from "../common/FlexBetween";
import { Box, Button, InputBase } from "@mui/material";
import FlexEnd from "../common/FlexEnd";
import { useTheme } from "@emotion/react";
import { search, starred } from "../../assets";

function Actionsbar() {
  const theme = useTheme();
  return (
    <FlexBetween>
      {/* SEARCH CONTAINER */}
      <Box
        sx={{
          ...searchContainerStyle,
          backgroundColor: theme.palette.background.main,
        }}
      >
        <InputBase
          sx={{
            ...inputBaseStyle,
            "::placeholder": {
              color: theme.palette.neutral.main,
              fontSize: "19px",
              fontWeight: 500,
            },
          }}
          placeholder="Search for products"
        />
        <Button
          sx={{
            ...searchIconWrapperStyle,
            ...typographyStyle,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.white.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              opacity: 0.5,
            },
          }}
          startIcon={<Box component="img" alt="search" src={search} />}
        >
          Search
        </Button>
      </Box>

      {/* NEW PRODUCT */}
      <FlexEnd>
        <FlexBetween sx={{ gap: "12px" }}>
          <Button
            sx={{
              ...productBtnStyle,
              ...typographyStyle,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.white.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                opacity: 0.5,
              },
            }}
          >
            New Product
          </Button>
          <Box
            component="img"
            alt="starred"
            src={starred}
            sx={{
              ...starredStyle,
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          />
        </FlexBetween>
      </FlexEnd>
    </FlexBetween>
  );
}

export default Actionsbar;

const searchContainerStyle = {
  borderRadius: "50px",
  justifyContent: "space-between",
  width: "757px",
  padding: "10px",
  display: "flex",
};

const searchIconWrapperStyle = {
  borderRadius: "80px",
  width: "180px",
  padding: "11px 40px",
  gap: "10px",
};
const typographyStyle = {
  textTransform: "capitalize",
  fontWeight: 700,
  fontSize: "19px",
};
const inputBaseStyle = {
  padding: "8px 12px",
  width: "100%",
};
const productBtnStyle = {
  borderRadius: "10px",
  width: "249px",
  padding: "15px 45px",
  gap: "10px",
};

const starredStyle = {
  width: "72px",
  height: "60px",
  borderRadius: "10px",
  padding: "15px 5px",
};
