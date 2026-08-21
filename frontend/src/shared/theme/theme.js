import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DDA027",      // Or Doré TC BTP (Couleur principale)
      dark: "#8C590B",       // Or Sombre / Ombrage
      light: "#EBB036",      // Or Lumineux
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4F5154",      // Gris Métal Foncé TC BTP (Remplace le bleu marine)
      dark: "#2A2B2D",       // Anthracite très sombre
      light: "#8C8F92",      // Gris Métal Moyen
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",      // Fond légèrement gris pour détacher les cartes
    },
    text: {
      primary: "#2A2B2D",    // Texte principal en Anthracite Foncé (plus doux que le noir)
      secondary: "#6C757D",  // Texte secondaire
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 10,
          paddingBottom: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});