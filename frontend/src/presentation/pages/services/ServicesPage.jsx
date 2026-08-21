import { useState, useMemo, useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { keyframes } from "@mui/system";

// Importation depuis la couche infrastructure
import { serviceCategoriesData } from "../../../infrastructure/mock/data/serviceCategories.data";

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

export function ServicesPage() {
  const [searchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

    // Simuler le chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Filtrer les services par recherche
  const filteredServices = useMemo(() => {
    return serviceCategoriesData.filter((service) => {
      const matchesSearch = service.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  // Sélection d'une animation pour chaque carte
  const getCardAnimation = (index) => {
    const animations = [flipIn, zoomIn, bounceIn, rotateIn, scaleIn, slideInRight];
    return animations[index % animations.length];
  };

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        pt: 5, 
        pb: 8, 
        bgcolor: "#FFFFFF", 
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* ==========================================
            EN-TÊTE
            ========================================== */}
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: 5,
            opacity: 0,
            animation: isVisible ? `${fadeInUp} 1s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 1.5,
              color: "#999999",
              textTransform: "uppercase",
              mb: 0.5,
              opacity: 0,
              animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
            }}
          >
            Nos Services
          </Typography>

          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 900, 
              color: "#0F172A",
              opacity: 0,
              animation: isVisible ? `${glowIn} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Nos Catégories de Services
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: "#D97706",
              mx: "auto",
              mt: 2,
              borderRadius: "2px",
              opacity: 0,
              animation: isVisible ? `${bounceIn} 0.8s ease-out 0.7s both` : 'none',
              transition: "all 0.3s ease",
              "&:hover": {
                width: 100,
              },
            }}
          />
        </Box>

        {/* ==========================================
            GRILLE DES SERVICES
            ========================================== */}
        {isLoading ? (
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              py: 8,
              opacity: 0,
              animation: isVisible ? `${fadeIn} 0.6s ease-out 0.8s both` : 'none',
            }}
          >
            <CircularProgress sx={{ color: "#D97706" }} />
          </Box>
        ) : (
          <>
            {filteredServices.length > 0 ? (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                  gap: 3,
                  maxWidth: 1140,
                  mx: "auto",
                  mb: 8,
                }}
              >
                {filteredServices.map((service, index) => {
                  const cardAnimation = getCardAnimation(index);

                  return (
                    <Box
                      key={service.id}
                      sx={{
                        position: "relative",
                        height: 230,
                        borderRadius: "2px",
                        overflow: "hidden",
                        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                        textDecoration: "none",
                        display: "block",
                        opacity: 0,
                        animation: isVisible 
                          ? `${cardAnimation} 0.9s cubic-bezier(0.23, 1, 0.32, 1) ${0.2 + 0.1 * index}s forwards` 
                          : 'none',
                        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                        "&:hover": { 
                          transform: "translateY(-8px) scale(1.03)",
                          boxShadow: "0px 12px 30px rgba(0,0,0,0.18)",
                          "& .service-image": {
                            transform: "scale(1.08)",
                          },
                          "& .service-overlay": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      <Box
                        className="service-image"
                        sx={{ 
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                      />

                      {/* Overlay au survol */}
                      <Box
                        className="service-overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "rgba(217, 119, 6, 0.85)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          p: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: 12,
                            textAlign: "center",
                            color: "#FFFFFF",
                            lineHeight: 1.6,
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0) 60%)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          p: 2.5,
                        }}
                      >
                        <Typography
                          sx={{
                            alignSelf: "flex-end",
                            bgcolor: "#D97706",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: 10,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "2px",
                            textTransform: "uppercase",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                              bgcolor: "#B45309",
                            },
                          }}
                        >
                          {service.id.replace(/-/g, ' ')}
                        </Typography>
                        <Typography 
                          sx={{ 
                            color: "#FFFFFF", 
                            fontWeight: 800, 
                            fontSize: 18,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "#D97706",
                            },
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <Box 
                sx={{ 
                  textAlign: "center", 
                  py: 6,
                  opacity: 0,
                  animation: isVisible ? `${bounceIn} 0.8s ease-out 0.8s both` : 'none',
                }}
              >
                <Typography sx={{ color: "#888888", fontSize: 15 }}>
                  Aucun service trouvé.
                </Typography>
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

export default ServicesPage;