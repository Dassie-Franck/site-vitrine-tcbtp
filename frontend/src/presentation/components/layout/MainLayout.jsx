import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DevisModalProvider } from "../../components/common/DevisModal";

export function MainLayout() {
  return (
    <DevisModalProvider>
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          minHeight: "100vh", 
          bgcolor: "#FFFFFF",
          overflowX: "hidden", 
        }}
      >
        <Header />
        <Box 
          component="main" 
          sx={{ 
            flex: 1, 
            width: "100%",
            py: { xs: 2, sm: 3, md: 4 }, 
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </DevisModalProvider>
  );
}