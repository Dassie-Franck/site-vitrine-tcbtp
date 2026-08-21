import { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Paper, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { keyframes } from "@mui/system";

// Importation des données depuis le fichier externe
import { projectsData } from "../../../../infrastructure/mock/data/projects.data";

// ============================================
// ANIMATIONS VARIÉES - STYLE POWERPOINT
// ============================================

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-5deg);
  }
  50% {
    transform: scale(1.05) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

const flipIn = keyframes`
  0% {
    opacity: 0;
    transform: perspective(600px) rotateY(90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: perspective(600px) rotateY(0deg) scale(1);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const glowIn = keyframes`
  0% {
    opacity: 0;
    filter: blur(15px);
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
`;

const rotateIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-200deg) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

export function ProjectsGallerySection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ============================================
  // TRANSFORMATION DES DONNÉES POUR LA SECTION
  // ============================================
  
  const getUniqueCategories = () => {
    const categories = {};
    const uniqueProjects = [];
    
    for (const project of projectsData) {
      if (!categories[project.category]) {
        categories[project.category] = true;
        uniqueProjects.push(project);
      }
      if (uniqueProjects.length >= 6) break;
    }
    
    return uniqueProjects;
  };

  const buildGalleryItems = () => {
    const uniqueProjects = getUniqueCategories();
    
    let selectedProjects = [...uniqueProjects];
    if (selectedProjects.length < 6) {
      const remaining = projectsData.filter(
        p => !selectedProjects.includes(p)
      );
      selectedProjects = [...selectedProjects, ...remaining.slice(0, 6 - selectedProjects.length)];
    }

    const animations = [flipIn, zoomIn, bounceIn, rotateIn, scaleIn, slideInRight];

    return selectedProjects.map((project, index) => ({
      id: project.id,
      title: project.displayTitle || project.title,
      category: project.displayCategory || project.category,
      image: project.image,
      animation: animations[index % animations.length],
      originalData: project,
    }));
  };

  const galleryItems = buildGalleryItems();
  const displayedProjects = galleryItems.slice(0, 3);
  const currentItem = galleryItems[activeSlide] || galleryItems[0];

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        position: "relative", 
        mb: 8,
        overflow: "hidden",
      }}
    >
      {/* ==========================================
          BANNIÈRE AVEC FOND DYNAMIQUE
          ========================================== */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(182, 134, 71, 0.85), rgba(133, 111, 16, 0.45)), url(${currentItem?.image || '/assets/default.jpg'})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          pt: { xs: 6, md: 10 },
          pb: { xs: 16, md: 20 },
          color: "#FFFFFF",
          position: "relative",
          opacity: 0,
          animation: isVisible ? `${glowIn} 1.2s ease-out forwards` : 'none',
        }}
      >
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              mb: 1,
              opacity: 0,
              animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
            }}
          >
            NOS RÉALISATIONS
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 26, sm: 34, md: 40 },
              mb: 2.5,
              opacity: 0,
              animation: isVisible ? `${bounceIn} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Nos Meilleurs Chantiers &<br /> Projets Livrés
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: 80,
              height: 12,
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              animation: isVisible ? `${slideInRight} 0.8s ease-out 0.7s both` : 'none',
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 3,
                bgcolor: "rgba(255,255,255,0.5)",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: "#FFFFFF",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.5)",
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ==========================================
          GRILLE DES CARTES + PAGINATION
          ========================================== */}
      <Container maxWidth="xl" sx={{ mt: -10, position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: 1140,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* ====== GRILLE DES PROJETS ====== */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: 3,
              width: "100%",
            }}
          >
            {displayedProjects.map((project, idx) => {
              const cardAnimation = project.animation || fadeInUp;

              return (
                <Paper
                  key={project.id || idx}
                  elevation={4}
                  sx={{
                    position: "relative",
                    height: 300,
                    borderRadius: 1.5,
                    overflow: "hidden",
                    backgroundImage: `linear-gradient(to top, rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.3)), url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    color: "#FFFFFF",
                    cursor: "default",
                    opacity: 0,
                    animation: isVisible 
                      ? `${cardAnimation} 1s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx}s forwards` 
                      : 'none',
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.03)",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                      "& .project-overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Superposition au survol */}
                  <Box
                    className="project-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(206, 143, 61, 0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: 14,
                        textTransform: "uppercase",
                        letterSpacing: 2,
                      }}
                    >
                   
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 800, 
                        fontSize: 18, 
                        mb: 0.5,
                        opacity: 0,
                        animation: isVisible 
                          ? `${fadeIn} 0.6s ease-out ${0.3 + 0.15 * idx}s both` 
                          : 'none',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: "#f5f3f4", 
                        fontWeight: 700, 
                        fontSize: 13,
                        opacity: 0,
                        animation: isVisible 
                          ? `${fadeInUp} 0.6s ease-out ${0.4 + 0.15 * idx}s both` 
                          : 'none',
                      }}
                    >
                      {project.category}
                    </Typography>
                  </Box>
                </Paper>
              );
            })}
          </Box>

          {/* ====== PAGINATION ====== */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 4,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.8s both` : 'none',
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
                width: { xs: "100%", md: "33.33%" },
                mx: "auto",
              }}
            >
              {galleryItems.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  sx={{
                    width: index === activeSlide ? 32 : 20,
                    height: 4,
                    borderRadius: 2,
                    bgcolor: index === activeSlide ? "#FC9615" : "#ADC4F0",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      bgcolor: index === activeSlide ? "#FC9615" : "#90A4AE",
                      transform: "scaleY(2)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* ====== BOUTON "VOIR TOUS LES PROJETS" ====== */}
          <Box
            sx={{
              mt: 3,
              opacity: 0,
              animation: isVisible ? `${bounceIn} 1s ease-out 1s both` : 'none',
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(252, 150, 21, 0.3)",
                  zIndex: 0,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translate(-4px, -4px)",
                    bgcolor: "rgba(252, 150, 21, 0.4)",
                  },
                }}
              />
              <Paper
                component="button"
                elevation={0}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  bgcolor: "#dddcd9",
                  color: "#E8830A",
                  fontWeight: 700,
                  px: 4,
                  py: 1.8,
                  borderRadius: 0.5,
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "scale(1.05) translateY(-2px)",
                    boxShadow: "0px 10px 30px rgba(252, 150, 21, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
                onClick={() => window.location.href = "/realisations"}
              >
                Voir Tous Nos Projets
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectsGallerySection;