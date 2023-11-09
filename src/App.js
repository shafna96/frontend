import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Navigate, Route, Routes } from "react-router-dom";
import { FavProducts, Products } from "./pages";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate to={"/products"} replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/fav-products" element={<FavProducts />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
