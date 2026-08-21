import { Box, Container, Typography, Button, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ConstructionIcon from "@mui/icons-material/Construction";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { keyframes } from "@mui/system";
import { useState, useEffect, useRef } from "react";

// ============================================
// ANIMATIONS VARIÉES - STYLE POWERPOINT
// ============================================

// 1. FADE IN UP
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

// 2. ZOOM IN
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

// 3. FLIP IN 3D
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

// 4. BOUNCE IN
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

// 5. SLIDE IN LEFT
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

// 6. SLIDE IN RIGHT
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

// 7. GLOW IN
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

// 8. ROTATE IN
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

// 9. FADE IN
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 10. COUNT UP (animation des nombres)
const countUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const stats = [
  {
    number: "41",
    label: "Chantiers Réalisés",
    bgImage: "/assets/1.webp",
    isOrange: true,
    icon: ConstructionIcon,
  },
  {
    number: "265 +",
    label: "Clients Satisfaits",
    isOrange: false,
    icon: PeopleIcon,
  },
  {
    number: "265 +",
    label: "Clients Fidèles",
    isOrange: false,
    icon: HandshakeIcon,
  },
  {
    number: "12",
    label: "Récompenses Professionnelles",
    bgImage: "/assets/2.webp",
    isOrange: true,
    icon: EmojiEventsIcon,
  },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Déclencher l'animation des nombres après un court délai
          setTimeout(() => {
            const newAnimated = {};
            stats.forEach((_, index) => {
              newAnimated[index] = true;
            });
            setAnimatedNumbers(newAnimated);
          }, 500);
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
    const animations = [flipIn, zoomIn, rotateIn, bounceIn];
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            maxWidth: 1140,
            mx: "auto",
          }}
        >
          {/* ==========================================
              GRILLE DE STATISTIQUES À GAUCHE
              ========================================== */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2.5,
            }}
          >
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              const cardAnimation = getCardAnimation(idx);

              return (
                <Paper
                  key={idx}
                  elevation={0}
                  sx={{
                    p: 3,
                    minHeight: 180,
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    opacity: 0,
                    animation: isVisible 
                      ? `${cardAnimation} 1s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * idx}s forwards` 
                      : 'none',
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.03)",
                      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    },
                    ...(stat.isOrange
                      ? {
                          backgroundImage: `linear-gradient(rgba(252, 150, 21, 0.92), rgba(252, 150, 21, 0.92)), url(${stat.bgImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          color: "#FFFFFF",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: "rgba(0,0,0,0.1)",
                            transition: "opacity 0.4s ease",
                          },
                          "&:hover::before": {
                            opacity: 0.5,
                          },
                        }
                      : {
                          bgcolor: "#EBF1FF",
                          color: "#1A2536",
                          "&:hover": {
                            bgcolor: "#E3EDFF",
                          },
                        }),
                  }}
                >
                  {/* Icône avec animation BOUNCE */}
                  <IconComp 
                    sx={{ 
                      fontSize: 36, 
                      mb: 1, 
                      color: stat.isOrange ? "#FFFFFF" : "#FC9615",
                      opacity: 0,
                      animation: isVisible 
                        ? `${bounceIn} 0.8s ease-out ${0.3 + 0.15 * idx}s both` 
                        : 'none',
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2) rotate(10deg)",
                      },
                    }} 
                  />
                  
                  {/* Nombre avec animation COUNT UP */}
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 800, 
                      mb: 0.5, 
                      fontSize: { xs: 28, md: 32 },
                      opacity: 0,
                      animation: animatedNumbers[idx] 
                        ? `${countUp} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards` 
                        : 'none',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: 600, 
                      fontSize: 13, 
                      opacity: 0.9,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              );
            })}
          </Box>

          {/* ==========================================
              CONTENU TEXTE À DROITE
              ========================================== */}
          <Box
            sx={{
              opacity: 0,
              animation: isVisible 
                ? `${fadeInUp} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards` 
                : 'none',
            }}
          >
            {/* Badge avec animation SLIDE IN LEFT */}
            <Typography
              sx={{
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#1A2536",
                mb: 1,
                opacity: 0,
                animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.5s both` : 'none',
              }}
            >
              TC BTP EN CHIFFRES
            </Typography>

            {/* Titre avec animation GLOW */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 24, sm: 32, md: 36 },
                color: "#1A2536",
                lineHeight: 1.2,
                mb: 2.5,
                opacity: 0,
                animation: isVisible ? `${glowIn} 1s ease-out 0.6s both` : 'none',
              }}
            >
              Une Entreprise À Votre Service,<br /> À Tout Moment
            </Typography>

            {/* Séparateur avec animation SLIDE */}
            <Stack 
              direction="row" 
              alignItems="center" 
              spacing={0} 
              sx={{ 
                mb: 3,
                opacity: 0,
                animation: isVisible ? `${slideInRight} 0.8s ease-out 0.7s both` : 'none',
              }}
            >
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#FC9615" }} />
              <Box sx={{ width: 60, height: 2, bgcolor: "#ADC4F0" }} />
            </Stack>

            {/* Citation avec animation FADE IN UP */}
            <Box
              sx={{
                borderLeft: "3px solid #FC9615",
                pl: 2,
                mb: 3,
                opacity: 0,
                animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.8s both` : 'none',
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  color: "#555555",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Notre croissance repose sur la satisfaction de nos clients et la qualité constante de nos réalisations, chantier après chantier.
              </Typography>
            </Box>

            {/* Puces de certification avec animation séquentielle */}
            <Stack spacing={1.5} sx={{ mb: 4 }}>
              {[
                "Respect des délais contractuels sur 98% des chantiers",
                "Équipe technique certifiée et régulièrement formée"
              ].map((text, idx) => (
                <Stack 
                  key={idx}
                  direction="row" 
                  spacing={1.5} 
                  alignItems="flex-start"
                  sx={{
                    opacity: 0,
                    animation: isVisible 
                      ? `${fadeInUp} 0.6s ease-out ${0.9 + 0.15 * idx}s both` 
                      : 'none',
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <CheckCircleIcon 
                    sx={{ 
                      color: "#FC9615", 
                      fontSize: 20, 
                      mt: 0.3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.3) rotate(20deg)",
                      },
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: 600, 
                      color: "#333333", 
                      fontSize: 14,
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#FC9615",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* Bouton CTA avec animation BOUNCE */}
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                opacity: 0,
                animation: isVisible ? `${bounceIn} 1s ease-out 1.2s both` : 'none',
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: "100%",
                  height: "100%",
                  bgcolor: "#FCE3C5",
                  zIndex: 0,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translate(-4px, -4px)",
                  },
                }}
              />
              <Button
                variant="contained"
                disableElevation
                sx={{
                  position: "relative",
                  zIndex: 1,
                  bgcolor: "#FC9615",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.2,
                  borderRadius: 0.5,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    bgcolor: "#e0830d",
                    transform: "scale(1.05) translateY(-2px)",
                    boxShadow: "0px 8px 25px rgba(252, 150, 21, 0.4)",
                  },
                }}
              >
                En Savoir Plus
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default StatsSection;