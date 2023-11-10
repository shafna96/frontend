// AddProducts.js
import React, { useState } from "react";
import { Layout, ProductForm } from "../../components";
import { useAddProductMutation } from "../../redux/api";

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
      const formDataForApi = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataForApi.append(key, value);
      });

      await addProduct(formDataForApi).unwrap();
      console.log("Product added successfully");
      // You can add additional logic or redirect after adding the product
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <Layout
        title={"products"}
        breadcrumbs={true}
        secTitle={"Add new product"}
      >
        <ProductForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          title="Add Product"
          buttonText="Add Product"
        />
      </Layout>
    </div>
  );
}

export default AddProducts;
