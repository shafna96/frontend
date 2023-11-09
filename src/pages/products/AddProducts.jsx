import React, { useState } from "react";
import { Layout } from "../../components";
import { useAddProductMutation } from "../../redux/api";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  Typography,
} from "@mui/material";

function AddProducts() {
  const [addProduct, { isLoading: isCreating }] = useAddProductMutation();

  const [formData, setFormData] = useState({
    SKU: "",
    quantity: 0,
    productName: "",
    image: null,
    productDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file input (image), set the file in the state
    if (name === "image" && files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreating) {
      return;
    }
    try {
      await addProduct(formData).unwrap();
      console.log("Product added successfully");
      // You can add additional logic or redirect after adding the product
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <Layout
        title={"products"}
        breadcrumbs={true}
        secTitle={"Add new product"}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Add Product
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
              Add Product
            </Button>
          </Box>
        </form>
      </Layout>
    </div>
  );
}

export default AddProducts;
