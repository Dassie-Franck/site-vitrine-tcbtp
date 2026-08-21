import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTestimonials } from "../../../hooks/useTestimonials";
import { keyframes } from "@mui/system";

// ============================================
// ANIMATIONS VARIÉES - STYLE POWERPOINT
// ============================================

// 1. FADE IN UP (légère montée)
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// 2. SLIDE IN LEFT (glissement depuis la gauche)
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-60px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

// 3. SLIDE IN RIGHT (glissement depuis la droite)
const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(60px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

// 4. ZOOM IN (zoom entrant)
const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-5deg);
  }
  50% {
    transform: scale(1.05) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// 5. FLIP IN (effet retournement 3D)
const flipIn = keyframes`
  0% {
    opacity: 0;
    transform: perspective(400px) rotateY(90deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: perspective(400px) rotateY(0deg) scale(1);
  }
`;

// 6. BOUNCE IN (rebond)
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

// 7. FADE IN DOWN (apparition depuis le haut)
const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// 8. ROTATE IN (rotation entrante)
const rotateIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

// 9. FADE IN (apparition simple)
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 10. GLOW IN (apparition avec lueur)
const glowIn = keyframes`
  0% {
    opacity: 0;
    filter: blur(10px);
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

export function TestimonialsSection() {
  const { data: testimonials, isLoading, isError, error } = useTestimonials();
  const [activeSlide, setActiveSlide] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observer pour déclencher les animations au scroll
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

  // Sélection aléatoire d'une animation parmi les 10 disponibles
  const getRandomAnimation = (index) => {
    const animations = [
      fadeInUp,
      slideInLeft,
      slideInRight,
      zoomIn,
      flipIn,
      bounceIn,
      fadeInDown,
      rotateIn,
      fadeIn,
      glowIn,
    ];
    // Sélection basée sur l'index pour une répartition cohérente
    return animations[index % animations.length];
  };

  // Animation pour l'en-tête de section
  const getHeaderAnimation = () => {
    const animations = [fadeInUp, slideInLeft, fadeInDown, zoomIn];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <Container 
      maxWidth="xl" 
      ref={sectionRef}
      sx={{ 
        py: 10, 
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ==========================================
          EN-TÊTE DE SECTION AVEC ANIMATION FLIP
          ========================================== */}
      <Box 
        sx={{ 
          textAlign: "center", 
          mb: 8,
          animation: isVisible ? `${flipIn} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
          opacity: 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: 13,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#1E293B",
            mb: 1,
            animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
          }}
        >
          TÉMOIGNAGES CLIENTS
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 28, sm: 36, md: 42 },
            color: "#1A2536",
            lineHeight: 1.2,
            mb: 2.5,
            animation: isVisible ? `${zoomIn} 1s ease-out 0.5s both` : 'none',
          }}
        >
          Ce Que Disent Nos<br /> Clients
        </Typography>

        {/* Ligne de séparation avec animation GLOW */}
        <Box
          sx={{
            position: "relative",
            width: 70,
            height: 10,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: isVisible ? `${glowIn} 1.2s ease-out 0.7s both` : 'none',
          }}
        >
          <Box sx={{ width: 40, height: 3, bgcolor: "#FC9615", borderRadius: 2 }} />
          <Box sx={{ width: 30, height: 3, bgcolor: "#ADC4F0", borderRadius: 2 }} />
          <Box
            sx={{
              position: "absolute",
              left: 20,
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#7E7D7C",
              animation: isVisible ? `${bounceIn} 0.8s ease-out 1s both` : 'none',
            }}
          />
        </Box>
      </Box>

      {/* État de chargement */}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress sx={{ color: "#7E7D7C" }} />
        </Box>
      )}

      {/* État d'erreur */}
      {isError && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <Alert severity="error" sx={{ maxWidth: 500 }}>
            {error?.message || "Une erreur est survenue lors du chargement des témoignages."}
          </Alert>
        </Box>
      )}

      {/* ==========================================
          GRILLE DES AVIS AVEC ANIMATIONS VARIÉES
          ========================================== */}
      {testimonials && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 4,
            maxWidth: 1140,
            mx: "auto",
          }}
        >
          {testimonials.map((item, idx) => {
            const name = item.name || item.authorName || item.client_name || item.author_name || "Client";
            const role = item.role || item.authorRole || item.company || item.projectType || "Client";
            const text = item.text || item.content || item.message || "";
            const avatarSrc =
              item.avatar ||
              item.avatar_url ||
              item.avatarUrl ||
              item.photo ||
              item.photo_url ||
              item.image;

            // Chaque carte reçoit une animation différente
            const cardAnimation = getRandomAnimation(idx + 2);

            return (
              <Box
                key={item.id || idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 0,
                  opacity: 0,
                  animation: isVisible 
                    ? `${cardAnimation} 0.9s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * (idx + 1)}s forwards` 
                    : 'none',
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  },
                }}
              >
                {/* ====== CARTE TÉMOIGNAGE AVEC ANIMATION ROTATE ====== */}
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 3,
                    bgcolor: "#FFFFFF",
                    borderRadius: 2,
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.05)",
                    textAlign: "center",
                    mb: 3,
                    width: "100%",
                    boxSizing: "border-box",
                    minHeight: 220,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.12)",
                      transform: "scale(1.03)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: "50%",
                      transform: "translateX(-50%) rotate(45deg)",
                      width: 20,
                      height: 20,
                      bgcolor: "#FFFFFF",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.02)",
                    },
                  }}
                >
                  {/* Badge Citation avec animation BOUNCE */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      animation: isVisible 
                        ? `${bounceIn} 0.8s ease-out ${0.3 + 0.15 * idx}s both` 
                        : 'none',
                    }}
                  >
                    <Box sx={{ width: 40, height: 1, bgcolor: "#CBD5E1" }} />
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        bgcolor: "#7E7D7C",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        mx: 2,
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "#FC9615",
                          transform: "rotate(360deg) scale(1.1)",
                        },
                      }}
                    >
                      <FormatQuoteIcon sx={{ fontSize: 26, transform: "rotate(180deg)" }} />
                    </Box>
                    <Box sx={{ width: 40, height: 1, bgcolor: "#CBD5E1" }} />
                  </Box>

                  {/* Message */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#475569",
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                      animation: isVisible 
                        ? `${fadeIn} 0.6s ease-out ${0.4 + 0.15 * idx}s both` 
                        : 'none',
                    }}
                  >
                    {text}
                  </Typography>
                </Paper>

                {/* ====== AVATAR & NOM AVEC ANIMATION FLIP ====== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    animation: isVisible 
                      ? `${flipIn} 0.8s ease-out ${0.5 + 0.15 * idx}s both` 
                      : 'none',
                  }}
                >
                  <Avatar
                    src={avatarSrc}
                    alt={name}
                    sx={{
                      width: 72,
                      height: 72,
                      mb: 1.5,
                      border: "3px solid #FFFFFF",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                      bgcolor: "#CBD5E1",
                      fontWeight: 700,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1) rotate(10deg)",
                        boxShadow: "0px 8px 25px rgba(252, 150, 21, 0.3)",
                      },
                    }}
                  >
                    {name ? name.charAt(0).toUpperCase() : "C"}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: 18,
                      color: "#0F172A",
                      mb: 0.2,
                    }}
                  >
                    {name}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#FC9615",
                    }}
                  >
                    {role}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {/* ==========================================
          PAGINATION AVEC ANIMATION FADE
          ========================================== */}
      {testimonials && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 5,
            animation: isVisible ? `${fadeInUp} 0.8s ease-out 1s both` : 'none',
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
            {[0, 1, 2, 3, 4].map((index) => (
              <Box
                key={index}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: index === activeSlide ? 32 : 20,
                  height: 4,
                  borderRadius: 2,
                  bgcolor: index === activeSlide ? "#FC9615" : "#ADC4F0",
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    bgcolor: index === activeSlide ? "#FC9615" : "#90A4AE",
                    transform: "scaleY(2)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default TestimonialsSection;