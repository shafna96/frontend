import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#001EB9" },
    secondary: { main: "#162427" },
    neutral: { main: "#969191" },
    background: { main: "#F7F7F7" },
    white: { main: "#FFFFFF" },
  },
  typography: {
    fontFamily: '"Satoshi", sans-serif', // Use "Satoshi" as the default font
  },
});
