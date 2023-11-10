import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import { seperator } from "../../assets";

const ProductCard = ({ product, isLast, totalResults }) => {
  const theme = useTheme();
  const { id, SKU, productName, productDescription } = product;

  return (
    <Box
      sx={{
        p: 0,
        "& .MuiCard-root": {
          boxShadow: "none",
          border: "none",
        },
        "& .divider": {
          margin: "10px 0",
          border: "1px solid #ccc",
        },
      }}
    >
      <Card key={id}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                }}
              >
                {SKU}
              </Typography>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: theme.palette.secondary.main,
                }}
              >
                {productName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  opacity: "50%",
                }}
              >
                {productDescription}
              </Typography>
            </Box>
            <Box component="img" alt="seperator" src={seperator} />
          </Box>
        </CardContent>
      </Card>
      {isLast ? null : <Divider className="divider" />}
    </Box>
  );
};

export default ProductCard;
