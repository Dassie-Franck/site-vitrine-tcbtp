import { Box, Container, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import { useServiceCategories } from "../../../hooks/useServiceCategories";
import { keyframes } from "@mui/system";
import { useState, useEffect, useRef } from "react";

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

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-60px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

export function ServiceCategoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { data: categories, isLoading, isError, error } = useServiceCategories();

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

  // Sélection d'une animation pour chaque carte
  const getCardAnimation = (index) => {
    const animations = [flipIn, zoomIn, bounceIn, rotateIn, scaleIn, slideInRight];
    return animations[index % animations.length];
  };

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: "#F8FAFC",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* ==========================================
            EN-TÊTE DE SECTION
            ========================================== */}
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: 6,
            opacity: 0,
            animation: isVisible ? `${fadeInUp} 1s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
          }}
        >
          <Typography
            sx={{ 
              fontSize: 14, 
              letterSpacing: 1, 
              textTransform: "uppercase", 
              color: "text.secondary", 
              mb: 1,
              opacity: 0,
              animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
            }}
          >
            Nos Services
          </Typography>
          
          <Typography
            variant="h3"
            component="h2"
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: 28, md: 34 }, 
              color: "secondary.main", 
              mb: 2,
              opacity: 0,
              animation: isVisible ? `${glowIn} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Nos Catégories de Services
          </Typography>
          
          <Box 
            sx={{ 
              width: 70, 
              height: 3, 
              bgcolor: "primary.main", 
              mx: "auto",
              opacity: 0,
              animation: isVisible ? `${bounceIn} 0.8s ease-out 0.7s both` : 'none',
              transition: "all 0.3s ease",
              "&:hover": {
                width: 120,
                bgcolor: "#D97706",
              },
            }} 
          />
        </Box>

        {/* ==========================================
            ÉTAT DE CHARGEMENT
            ========================================== */}
        {isLoading && (
          <Box 
            sx={{ 
              textAlign: "center",
              opacity: 0,
              animation: isVisible ? `${fadeIn} 0.6s ease-out 0.8s both` : 'none',
            }}
          >
            <CircularProgress sx={{ color: "#D97706" }} />
          </Box>
        )}

        {/* ==========================================
            ÉTAT D'ERREUR
            ========================================== */}
        {isError && (
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center",
              opacity: 0,
              animation: isVisible ? `${fadeIn} 0.6s ease-out 0.8s both` : 'none',
            }}
          >
            <Alert 
              severity="error" 
              sx={{ 
                maxWidth: 500,
                "& .MuiAlert-icon": {
                  animation: `${bounceIn} 0.6s ease-out`,
                },
              }}
            >
              {error?.message || "Une erreur est survenue lors du chargement des catégories."}
            </Alert>
          </Box>
        )}

        {/* ==========================================
            GRILLE DES CATÉGORIES
            ========================================== */}
        {categories && (
          <Grid container spacing={3}>
            {categories.map((category, index) => {
              const cardAnimation = getCardAnimation(index);

              return (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  key={category.id}
                  sx={{
                    opacity: 0,
                    animation: isVisible 
                      ? `${cardAnimation} 0.9s cubic-bezier(0.23, 1, 0.32, 1) ${0.2 + 0.15 * index}s forwards` 
                      : 'none',
                  }}
                >
                  <Box 
                    sx={{ 
                      position: "relative", 
                      height: { xs: 260, md: 280 }, 
                      borderRadius: "4px", 
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.03)",
                        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
                        "& .category-image": {
                          transform: "scale(1.1)",
                        },
                        "& .category-overlay": {
                          opacity: 0.4,
                        },
                        "& .category-label": {
                          bgcolor: "#D97706",
                          color: "#FFFFFF",
                          transform: "translateX(-50%) translateY(-4px)",
                        },
                      },
                    }}
                  >
                    {/* Image avec zoom au survol */}
                    <Box
                      className="category-image"
                      component="img"
                      src={category.image}
                      alt={category.title}
                      sx={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    />

                    {/* Overlay sombre */}
                    <Box
                      className="category-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0, 0, 0, 0.2)",
                        transition: "opacity 0.4s ease",
                      }}
                    />

                    {/* Badge "Nouveau" ou "Populaire" */}
                    {index % 2 === 0 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: "#D97706",
                          color: "#FFFFFF",
                          fontSize: 10,
                          fontWeight: 700,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "2px",
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                          opacity: 0,
                          animation: isVisible 
                            ? `${bounceIn} 0.6s ease-out ${0.5 + 0.15 * index}s both` 
                            : 'none',
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        {index === 0 ? "Populaire" : "Nouveau"}
                      </Box>
                    )}

                    {/* Étiquette blanche en bas */}
                    <Box
                      className="category-label"
                      sx={{
                        position: "absolute",
                        left: "50%",
                        bottom: 20,
                        transform: "translateX(-50%)",
                        width: "88%",
                        bgcolor: "rgba(255,255,255,0.92)",
                        py: 2,
                        px: 2,
                        textAlign: "center",
                        transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <Typography
                        sx={{ 
                          fontWeight: 700, 
                          fontSize: 14, 
                          letterSpacing: 0.5, 
                          textTransform: "uppercase", 
                          color: "secondary.main",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {category.title}
                      </Typography>
                      
                      {/* Petite ligne décorative sous le titre */}
                      <Box
                        sx={{
                          width: 30,
                          height: 2,
                          bgcolor: "#D97706",
                          mx: "auto",
                          mt: 0.5,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            width: 50,
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default ServiceCategoriesSection;