import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import { useBlogPosts } from "../../../hooks/useBlogPosts";
import { BlogPostCard } from "../../../components/common/BlogPostCard";
import { keyframes } from "@mui/system";

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

export function BlogListSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { data: posts, isLoading, isError, error } = useBlogPosts();

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
        bgcolor: "#FFFFFF",
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
            Notre Blog
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
            Conseils, Actualités & Guides Chantier
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
              {error?.message || "Une erreur est survenue lors du chargement des articles."}
            </Alert>
          </Box>
        )}

        {/* ==========================================
            GRILLE DES ARTICLES
            ========================================== */}
        {posts && (
          <Grid container spacing={3}>
            {posts.map((post, index) => {
              const cardAnimation = getCardAnimation(index);
              
              return (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  key={post.id}
                  sx={{
                    opacity: 0,
                    animation: isVisible 
                      ? `${cardAnimation} 0.9s cubic-bezier(0.23, 1, 0.32, 1) ${0.2 + 0.15 * index}s forwards` 
                      : 'none',
                  }}
                >
                  <BlogPostCard 
                    post={post} 
                    sx={{
                      transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* ==========================================
            BOUTON "VOIR TOUS LES ARTICLES"
            ========================================== */}
        {posts && posts.length > 0 && (
          <Box 
            sx={{ 
              textAlign: "center", 
              mt: 6,
              opacity: 0,
              animation: isVisible ? `${bounceIn} 1s ease-out 1.2s both` : 'none',
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
                  bgcolor: "rgba(217, 119, 6, 0.3)",
                  zIndex: 0,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translate(-4px, -4px)",
                    bgcolor: "rgba(217, 119, 6, 0.4)",
                  },
                }}
              />
              <Box
                component="button"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  bgcolor: "#D97706",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  px: 4,
                  py: 1.8,
                  borderRadius: 0.5,
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    bgcolor: "#B45309",
                    transform: "scale(1.05) translateY(-2px)",
                    boxShadow: "0px 10px 30px rgba(217, 119, 6, 0.4)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
                onClick={() => window.location.href = "/blog"}
              >
                Voir Tous Nos Articles
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default BlogListSection;