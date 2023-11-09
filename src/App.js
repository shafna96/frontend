import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  AddProducts,
  EditProduct,
  FavProducts,
  Products,
  SearchProducts,
} from "./pages";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate to={"/products"} replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/fav-products" element={<FavProducts />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/search-products" element={<SearchProducts />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
