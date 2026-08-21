import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopBar from "./TopBar";
import { featureFlags } from "../../../shared/constants/featureFlags";

import { useDevisModal } from "../../components/common/DevisModal";

const baseNavLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Matériel BTP", to: "/materiel-btp" },
];

if (featureFlags.showBlog) {
  baseNavLinks.push({ label: "Blog", to: "/blog" });
}

baseNavLinks.push({ label: "Contact", to: "/contact" });

const navLinks = baseNavLinks;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const { openModal } = useDevisModal();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
      <TopBar />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.04)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "75px", sm: "85px", md: "100px" },
              justifyContent: "space-between",
              px: { xs: 1.5, sm: 2, md: 0 }, 
            }}
          >
            {/* Logo TC BTP */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexShrink: 0,
                py: 1,
              }}
            >
              <Box
                component="img"
                src="/assets/logo.png"
                alt="TC BTP - Built with Excellence"
                sx={{
                  height: { xs: 55, sm: 70, md: 85, lg: 95 },
                  maxHeight: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Navigation Desktop */}
            <Stack
              direction="row"
              spacing={{ md: 2.5, lg: 4 }}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Button
                    key={link.to}
                    component={RouterLink}
                    to={link.to}
                    disableRipple
                    sx={{
                      color: isActive ? "#CA891C" : "#1A1A1A",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      p: 0,
                      minWidth: "auto",
                      textTransform: "none",
                      fontFamily: "'Poppins', 'Inter', sans-serif",
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#EFAD2C",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Stack>

            {/* Bouton Devis + Menu Burger */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="contained"
                onClick={openModal} 
                disableElevation
                sx={{
                  bgcolor: "#e0830f",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                  textTransform: "none",
                  px: { xs: 1.5, sm: 2, md: 3 },
                  py: { xs: 0.8, sm: 1, md: 1.2 },
                  borderRadius: "6px",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "#EFAD2C" },
                  cursor: "pointer",
                }}
              >
                Demande Un Devis
              </Button>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" }, color: "#1A1A1A", ml: 0.5 }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Mobile élargi à 50% de l'écran (ou plus sur petits mobiles) */}
      {/* Drawer Mobile élargi */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: "60vw", sm: "50vw", md: "350px" }, // Largeur en pourcentage de l'écran
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.to}
                onClick={handleDrawerToggle}
                selected={location.pathname === link.to}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: location.pathname === link.to ? "#EFAD2C" : "#1A1A1A",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Header;