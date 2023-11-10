import React, { useEffect, useState } from "react";
import { Layout, ProductCard } from "../../components";
import { useGetProductsQuery } from "../../redux/api";
import { Typography } from "@mui/material";

function SearchProducts() {
  const [searchText, setSearchText] = useState("");
  const { data: products, isLoading } = useGetProductsQuery();

  const filteredProducts = products?.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchText.toLowerCase()) ||
      product.SKU.toLowerCase().includes(searchText.toLowerCase()) ||
      product.productDescription
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  const handleSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    handleSearch(""); // Initial empty search to fetch all products
  }, []);

  return (
    <Layout
      title={"products"}
      onSearchChange={(e) => handleSearch(e.target.value)}
      searchValue={searchText}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredProducts.length > 0 ? (
        <>
          <Typography
            sx={{
              opacity: 0.5,
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: "8%",
            }}
          >{`${filteredProducts.length} results found for ‘Books’`}</Typography>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isLast={index === filteredProducts.length - 1}
              totalResults={filteredProducts.length}
            />
          ))}
        </>
      ) : (
        <p>No products found.</p>
      )}
    </Layout>
  );
}

export default SearchProducts;
