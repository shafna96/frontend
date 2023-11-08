import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Products from "./pages/Products";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Products />
      </ThemeProvider>
    </div>
  );
}

export default App;
