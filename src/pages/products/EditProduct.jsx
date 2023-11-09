import React, { useState, useEffect } from "react";
import { Layout } from "../../components";
import { useUpdateProductMutation, useGetProductsQuery } from "../../redux/api";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const { data: initialProductData, error } = useGetProductsQuery(productId);

  const [formData, setFormData] = useState({
    SKU: "",
    quantity: 0,
    productName: "",
    image: "",
    productDescription: "",
  });

  useEffect(() => {
    if (initialProductData) {
      setFormData(initialProductData); // Assuming the API response structure matches the form data
    }
  }, [initialProductData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) {
      return;
    }
    try {
      await updateProduct({ productId, ...formData }).unwrap();
      console.log("Product updated successfully");
      // You can add additional logic or redirect after updating the product
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <Layout
        title={"products"}
        breadcrumbs={true}
        secTitle={"update production"}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Update Product
          </Typography>
          <FormControl margin="normal" sx={{ display: "flex" }}>
            <label htmlFor="SKU" sx={{ marginRight: "10px", width: "20%" }}>
              SKU
            </label>
            <FilledInput
              id="SKU"
              name="SKU"
              value={formData.SKU}
              onChange={handleChange}
              sx={{ width: "80%" }}
            />
          </FormControl>
          <FilledInput
            id="quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            fullWidth
            placeholder="Quantity"
          />
          <FilledInput
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            fullWidth
            placeholder="Product Name"
          />
          <FilledInput
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            placeholder="Image URL"
          />
          <FilledInput
            id="productDescription"
            name="productDescription"
            multiline
            rows={4}
            value={formData.productDescription}
            onChange={handleChange}
            fullWidth
            placeholder="Product Description"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Update Product
            </Button>
          </Box>
        </form>
      </Layout>
    </div>
  );
}

export default EditProduct;
