import React, { useState, useEffect } from "react";
import { Layout, ProductForm } from "../../components";
import { useUpdateProductMutation, useGetProductsQuery } from "../../redux/api";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const { data: initialProductData, error } = useGetProductsQuery(productId);

  const [formData, setFormData] = useState({
    SKU: "",
    quantity: 0,
    productName: "",
    image: null,
    productDescription: "",
  });

  useEffect(() => {
    if (initialProductData) {
      setFormData({
        SKU: initialProductData.SKU,
        quantity: initialProductData.quantity,
        productName: initialProductData.productName,
        image: initialProductData.image,
        productDescription: initialProductData.productDescription,
      });
    }
  }, [initialProductData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) {
      return;
    }
    try {
      const productData = new FormData();
      for (const key in formData) {
        productData.append(key, formData[key]);
      }
      await updateProduct({ productId, productData }).unwrap();
      console.log("Product updated successfully");
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
        <ProductForm
          formData={formData}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          buttonText="Update Product"
          isLoading={isUpdating}
          error={error}
        />
      </Layout>
    </div>
  );
}

export default EditProduct;
