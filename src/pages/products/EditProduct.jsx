import React, { useState, useEffect } from "react";
import { Layout, ProductForm } from "../../components";
import {
  useUpdateProductMutation,
  useGetProductByIdQuery,
} from "../../redux/api";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();

  const { data: productData } = useGetProductByIdQuery(productId);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [formData, setFormData] = useState({
    SKU: "",
    quantity: 0,
    productName: "",
    image: null,
    productDescription: "",
  });
  console.log("data", productData);
  useEffect(() => {
    if (productData) {
      setFormData({
        SKU: productData.SKU || "",
        quantity: productData.quantity || 0,
        productName: productData.productName || "",
        image: productData.image || null,
        productDescription: productData.productDescription || "",
      });
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: file,
        }));
      } else {
        console.error("Please upload an image file");
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) {
      return;
    }

    try {
      const productData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        productData.append(key, value);
      });

      const response = await updateProduct({
        productId,
        ...Object.fromEntries(productData),
      }).unwrap();
      console.log("Product updated successfully", response);
      // Add logic after successful update (e.g., redirect)
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle the error, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <Layout
        title={"products"}
        breadcrumbs={true}
        secTitle={"update production"}
      >
        <ProductForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Product"
          isLoading={isUpdating}
          error={null}
        />
      </Layout>
    </div>
  );
}

export default EditProduct;
