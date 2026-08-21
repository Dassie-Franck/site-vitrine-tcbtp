import { useState, useMemo, useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  InputBase,
  IconButton,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { projectsData, materialCategories } from "../../../infrastructure/mock/data/materiels.data";
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

export function EquipmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
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

    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Filtrage par catégorie et recherche textuelle
  const filteredEquipments = useMemo(() => {
    return projectsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "ALL" ||
        item.category?.toUpperCase() === selectedCategory.toUpperCase() ||
        item.operationType?.toUpperCase() === selectedCategory.toUpperCase();
      
      const matchesSearch = (item.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Sélection d'une animation pour chaque carte
  const getCardAnimation = (index) => {
    const animations = [flipIn, zoomIn, bounceIn, rotateIn, scaleIn, slideInRight];
    return animations[index % animations.length];
  };

  // Sélection d'une animation pour les boutons de filtre
  const getButtonAnimation = (index) => {
    const animations = [slideDown, bounceIn, fadeInUp, slideInLeft];
    return animations[index % animations.length];
  };

  return (
    <Box 
      ref={sectionRef}
      component="section" 
      sx={{ 
        width: "100%", 
        bgcolor: "#FFFFFF", 
        pt: 5,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* ==========================================
            1. EN-TÊTE DE SECTION
            ========================================== */}
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: 4, 
            maxWidth: 1140, 
            mx: "auto",
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
            NOS ÉQUIPEMENTS
          </Typography>

          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 26, sm: 32, md: 36 },
              color: "#000000",
              display: "inline-block",
              position: "relative",
              pb: 1,
              opacity: 0,
              animation: isVisible ? `${glowIn} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Matériel BTP
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 45,
                height: 4,
                bgcolor: "#FC9615",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                "&:hover": {
                  width: 80,
                },
              }}
            />
          </Typography>
        </Box>

        {/* ==========================================
            2. BOUTONS DE FILTRES DYNAMIQUES
            ========================================== */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 5,
            maxWidth: 1140,
            mx: "auto",
          }}
        >
          {materialCategories.map((cat, index) => {
            const isSelected = selectedCategory === cat.id;
            const buttonAnimation = getButtonAnimation(index);

            return (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                sx={{
                  bgcolor: isSelected ? "#E07E00" : "#FC9615",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: { xs: 11, sm: 13 },
                  textTransform: "none",
                  borderRadius: "2px",
                  px: 2.5,
                  py: 1.2,
                  boxShadow: "none",
                  opacity: 0,
                  animation: isVisible 
                    ? `${buttonAnimation} 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${0.3 + 0.08 * index}s forwards` 
                    : 'none',
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": { 
                    bgcolor: "#E07E00", 
                    boxShadow: "none",
                    transform: "scale(1.05) translateY(-2px)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                {cat.label}
              </Button>
            );
          })}
        </Box>

        {/* ==========================================
            3. GRILLE DU MATÉRIEL BTP
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
            <CircularProgress sx={{ color: "#FC9615" }} />
          </Box>
        ) : (
          <>
            {filteredEquipments.length > 0 ? (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 3,
                  maxWidth: 1140,
                  mx: "auto",
                  mb: 8,
                }}
              >
                {filteredEquipments.map((item, idx) => {
                  const cardAnimation = getCardAnimation(idx);

                  return (
                    <Box
                      key={item.id || idx}
                      sx={{
                        position: "relative",
                        height: 230,
                        borderRadius: "2px",
                        overflow: "hidden",
                        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                        cursor: "pointer",
                        opacity: 0,
                        animation: isVisible 
                          ? `${cardAnimation} 0.9s cubic-bezier(0.23, 1, 0.32, 1) ${0.2 + 0.1 * idx}s forwards` 
                          : 'none',
                        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                        "&:hover": {
                          transform: "translateY(-8px) scale(1.03)",
                          boxShadow: "0px 12px 30px rgba(0,0,0,0.18)",
                          "& .equipment-bg": {
                            transform: "scale(1.08)",
                          },
                          "& .equipment-overlay": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {/* Image de Fond */}
                      <Box
                        className="equipment-bg"
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${item.image || "/assets/placeholder.jpg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                      />

                      {/* Overlay au survol */}
                      <Box
                        className="equipment-overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "rgba(252, 150, 21, 0.85)",
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
                            color: "#FFFFFF",
                          }}
                        >
                        
                        </Typography>
                      </Box>

                      {/* Badge Type d'Opération */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: "#0B1B3D",
                          color: "#FFFFFF",
                          fontSize: 10,
                          fontWeight: 700,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "2px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                            bgcolor: "#FC9615",
                          },
                        }}
                      >
                        {item.operationType || item.category}
                      </Box>

                      {/* Titre & Dégradé Sombre en Bas */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 2,
                          background:
                            "linear-gradient(to top, rgba(11, 27, 61, 0.85) 0%, rgba(11, 27, 61, 0) 100%)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: 16,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "#FC9615",
                            },
                          }}
                        >
                          {item.title}
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
                  mb: 4,
                  opacity: 0,
                  animation: isVisible ? `${bounceIn} 0.8s ease-out 0.8s both` : 'none',
                }}
              >
                <Typography sx={{ color: "#888888", fontSize: 15 }}>
                  Aucun équipement trouvé pour cette catégorie.
                </Typography>
              </Box>
            )}
          </>
        )}
      </Container>

      {/* ==========================================
          4. BANDE DE RECHERCHE ORANGE EN BAS
          ========================================== */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#FC9615",
          py: 3.5,
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          animation: isVisible ? `${slideDown} 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards` : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 550,
              mx: "auto",
            }}
          >
            <InputBase
              placeholder="Rechercher un matériel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                bgcolor: "#FFFFFF",
                px: 2.5,
                py: 0.8,
                borderRadius: "2px 0px 0px 2px",
                width: "100%",
                fontSize: 14,
                color: "#333333",
                transition: "all 0.3s ease",
                "&:focus-within": {
                  boxShadow: "0px 0px 0px 3px rgba(255,255,255,0.3)",
                },
                "& input::placeholder": {
                  color: "#888888",
                  opacity: 1,
                },
              }}
            />

            <IconButton
              type="button"
              aria-label="search"
              sx={{
                bgcolor: "#0B1B3D",
                color: "#FFFFFF",
                borderRadius: "0px 2px 2px 0px",
                p: "10px 16px",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                "&:hover": {
                  bgcolor: "#061026",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <SearchIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default EquipmentsPage;