import React, { useEffect } from "react";
import { Layout } from "../../components";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setProducts } from "../../redux/reducers/productSlice";
import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/api";
import { deleteIcon, editIcon, starred } from "../../assets";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data, error } = useGetProductsQuery();
  // const deleteProductMutation = useDeleteProductMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      // Dispatch the setProducts action to update the Redux store
      // const rowsWithId = data.map((row) => ({ ...row, id: row._id }));
      dispatch(setProducts(data));
    }
    if (error) {
      console.error("Error fetching products:", error);
    }
  }, [data, error, dispatch]);

  const handleEdit = (productId) => {
    // Implement the logic for editing a product
    console.log("Edit product with ID:", productId);
    navigate("/edit-product");
  };

  const handleDelete = async (productId) => {
    try {
      console.log("Deleting product from API...");
      await deleteProduct(productId).unwrap();
      console.log("Product deleted from API.");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const handleFavorite = (productId) => {
    // Implement the logic for marking a product as favorite
    console.log("Favorite product with ID:", productId);
  };

  return (
    <div>
      <Layout title={"products"}>
        <Box sx={{ padding: "20px 15px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SKU</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>{product.SKU}</TableCell>
                    <TableCell />
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleDelete(product._id)}>
                        <Box component="img" alt="starred" src={deleteIcon} />
                      </Button>
                      <Button onClick={handleEdit}>
                        <Box component="img" alt="starred" src={editIcon} />
                      </Button>
                      <Button onClick={handleFavorite}>
                        <Box component="img" alt="starred" src={starred} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </div>
  );
};

export default Products;
