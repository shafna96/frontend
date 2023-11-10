import React, { useEffect, useState } from "react";
import { Layout, ProductCard } from "../../components";
import { useGetProductsQuery } from "../../redux/api";

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
    <div>
      <Layout
        title={"products"}
        onSearchChange={(e) => handleSearch(e.target.value)}
        searchValue={searchText}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isLast={index === filteredProducts.length - 1}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Layout>
    </div>
  );
}

export default SearchProducts;
