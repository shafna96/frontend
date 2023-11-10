// Products.jsx

import React, { useEffect, useState } from "react";
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
  useTheme,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/productSlice";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/api";
import { deleteIcon, editIcon, starred, starredOutline } from "../../assets";
import { useNavigate } from "react-router-dom";
import DeletePopUp from "../../components/action/DeletePopUp";

const Products = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data, error } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const updateProductMutation = useUpdateProductMutation();
  const navigate = useNavigate();

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const openDeleteDialog = (productId) => {
    setDeleteDialogOpen(true);
    setSelectedProductId(productId);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedProductId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedProductId) {
      try {
        console.log("Deleting product from API...");
        await deleteProduct(selectedProductId).unwrap();
        console.log("Product deleted from API.");
        closeDeleteDialog();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
    if (error) {
      console.error("Error fetching products:", error);
    }
  }, [data, error, dispatch]);

  const handleEdit = (productId) => {
    console.log("Edit product with ID:", productId);
    const productToUpdate = products.find(
      (product) => product._id === productId
    );

    if (productToUpdate) {
      navigate(`/edit-product/${productId}`); // Navigating to the EditProduct page
    } else {
      console.error("Product not found for editing");
    }
  };

  const handleFavorite = async (productId, isFav) => {
    try {
      // Use updateProductMutation to update both product and favorite status
      await updateProductMutation({
        productId,
        isFav,
      }).unwrap();

      // Handle response or dispatch actions if needed
      // dispatch(updateProductFavorite(response));
      // console.log("Favorite status updated successfully", response);
    } catch (error) {
      // Handle error
      console.error("Error updating favorite status:", error);
    }
  };

  return (
    <div>
      <Layout title={"products"}>
        <Box sx={{ padding: "20px 15px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      ...tableHeadStyle,
                      color: theme.palette.primary.main,
                      width: "20%",
                    }}
                  >
                    SKU
                  </TableCell>
                  <TableCell
                    sx={{
                      ...tableHeadStyle,
                      color: theme.palette.primary.main,
                      width: "15%",
                    }}
                  >
                    Image
                  </TableCell>
                  <TableCell
                    sx={{
                      ...tableHeadStyle,
                      color: theme.palette.primary.main,
                      width: "25%",
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    sx={{
                      ...tableHeadStyle,
                      color: theme.palette.primary.main,
                      width: "15%",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell sx={{ width: "20%" }} />
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell sx={{ ...contentStyle, opacity: 0.5 }}>
                      {product.SKU}
                    </TableCell>
                    <TableCell>
                      {product.image && (
                        <img
                          src={`http://localhost:5000/uploads/${product.image}`}
                          alt={product.productName}
                          style={{
                            width: "66px",
                            height: "66px",
                            overflow: "hidden",
                            borderRadius: "6px",
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell sx={contentStyle}>
                      {product.productName}
                    </TableCell>
                    <TableCell sx={contentStyle}>{product.quantity}</TableCell>
                    <TableCell>
                      <Button onClick={() => openDeleteDialog(product._id)}>
                        <Box
                          component="img"
                          alt="delete"
                          src={deleteIcon}
                          sx={iconStyle}
                        />
                      </Button>
                      <Button onClick={() => handleEdit(product._id)}>
                        <Box
                          component="img"
                          alt="edit"
                          src={editIcon}
                          sx={iconStyle}
                        />
                      </Button>
                      <Button
                        onClick={() =>
                          handleFavorite(product._id, product.isFav)
                        }
                      >
                        <Box
                          component="img"
                          alt="starred"
                          src={product.isFav ? starred : starredOutline}
                          sx={iconStyle}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* Confirmation Dialog */}
        <DeletePopUp
          open={isDeleteDialogOpen}
          onClose={closeDeleteDialog}
          onConfirm={handleConfirmDelete}
        />
      </Layout>
    </div>
  );
};

export default Products;

const tableHeadStyle = {
  fontWeight: 700,
  fontSize: "19px",
};

const contentStyle = {
  fontWeight: 500,
  fontSize: "19px",
};

const iconStyle = { width: "25px", height: "25px" };
