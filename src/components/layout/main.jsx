import React, { useState } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import { Box } from "@mui/material";
import Actionsbar from "./Actionsbar";
import { useNavigate } from "react-router-dom";

function Layout({
  title,
  children,
  breadcrumbs,
  secTitle,
  onSearchChange,
  searchValue,
  handleSearchSubmit,
}) {
  const navigate = useNavigate();
  // const [searchText, setSearchText] = useState("");

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   handleSearch(searchText);
  // };

  // const handleSearch = (text) => {
  //   // Your logic to handle the search
  //   // This function should execute the actual search functionality
  //   // This is the function that needs to be passed to Actionsbar
  // };

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
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          handleSearchSubmit={handleSearchSubmit}
        />
        <Box sx={{ paddingY: "30px" }}>{children}</Box>
      </Box>
    </>
  );
}

export default Layout;
