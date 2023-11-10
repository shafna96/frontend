import React from "react";
import { Box, Button, FilledInput, FormControl, Grid } from "@mui/material";

function ProductForm({
  formData,
  handleChange,
  handleSubmit,
  buttonText,
  isLoading,
  error,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>Error: {error.message}</div>}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl sx={{ width: "50%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="SKU">SKU</label>
              <FilledInput
                id="SKU"
                name="SKU"
                value={formData.SKU}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="quantity">Quantity</label>
              <FilledInput
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="productName">Product Name</label>
              <FilledInput
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="productDescription">Product Description</label>
              <FilledInput
                id="productDescription"
                name="productDescription"
                multiline
                rows={4}
                value={formData.productDescription}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <label htmlFor="image">Product Images</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  inputProps={{ accept: "image/*" }}
                  style={{ display: "none" }}
                />
                <label htmlFor="image">
                  <Button variant="outlined" component="span" color="primary">
                    Add Image
                  </Button>
                </label>
              </Box>
              {/* Display the preview of uploaded images */}
              {formData.image instanceof Blob &&
                formData.image.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
            </Box>
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : buttonText}
        </Button>
      </Box>
    </form>
  );
}

export default ProductForm;
