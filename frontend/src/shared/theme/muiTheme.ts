import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#F5A623", // orange BATI-PRO (CTA, accents)
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1B2A4A", // bleu foncé (header, footer, textes forts)
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F7F7F7",
    },
    text: {
      primary: "#1B2A4A",
      secondary: "#5A6474",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
});