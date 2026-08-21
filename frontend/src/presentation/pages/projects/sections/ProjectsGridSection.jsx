import React from "react";
import { Box, Container, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import { useProjects } from "../../../hooks/useProjects";
import { ProjectCard } from "../../../components/common/ProjectCard";

// Thème de couleurs BTP / Construction
const themeColors = {
  primary: "#D97706",    // Orange/Ambre BTP principal
  secondary: "#1E293B",  // Gris ardoise / Métal sombre
  accent: "#0F172A",     // Bleu/Gris nuit très sombre
  surfaceBg: "#F8FAFC",  // Fond gris très clair
};

export function ProjectsGridSection() {
  const { data: projects, isLoading, isError, error } = useProjects();

  return (
    <Box component="section" sx={{ bgcolor: themeColors.surfaceBg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: themeColors.primary, fontWeight: 700, mb: 1 }}
          >
            Nos Réalisations
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 800, fontSize: { xs: 28, md: 36 }, color: themeColors.accent, mb: 2 }}
          >
            Nos Meilleurs Chantiers & Projets Livrés
          </Typography>
          <Box sx={{ width: 70, height: 4, bgcolor: themeColors.primary, mx: "auto", borderRadius: 2 }} />
        </Box>

        {isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: themeColors.primary }} />
          </Box>
        )}

        {isError && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <Alert severity="error" sx={{ maxWidth: 500, width: "100%" }}>
              {error?.message || "Une erreur est survenue lors du chargement des projets."}
            </Alert>
          </Box>
        )}

        {projects && (
          <Grid container spacing={3.5}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id || project.title}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default ProjectsGridSection;