import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import { Box } from "@mui/material";
import Actionsbar from "./Actionsbar";
import { useNavigate } from "react-router-dom";

function Layout({ title, children, breadcrumbs, secTitle }) {
  const navigate = useNavigate();

  const handleNewProdClick = () => {
    navigate("/add-products");
  };

  const handleSearchProdClick = () => {
    navigate("/search-products");
  };

  const handleFavProdClick = () => {
    navigate("/fav-products");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ paddingX: "83px" }}>
        <Title title={title} breadcrumbs={breadcrumbs} secTitle={secTitle} />
        <Actionsbar
          newProdClick={handleNewProdClick}
          searchProdClick={handleSearchProdClick}
          favProdClick={handleFavProdClick}
        />
        {children}
      </Box>
    </>
  );
}

export default Layout;
