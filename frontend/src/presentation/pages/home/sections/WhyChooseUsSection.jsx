import { Box, Container, Typography, LinearProgress, Stack } from "@mui/material";
import { keyframes } from "@mui/system";
import { useState, useEffect, useRef } from "react";

// ============================================
// ANIMATIONS VARIÉES - STYLE POWERPOINT
// ============================================

// 1. FADE IN SLIDE LEFT
const fadeInSlideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

// 2. FADE IN SLIDE RIGHT
const fadeInSlideRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

// 3. ZOOM IN AVEC ROTATION
const zoomInRotate = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-10deg);
  }
  50% {
    transform: scale(1.05) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// 4. FLIP IN 3D
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

// 5. BOUNCE IN
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

// 6. FADE IN UP
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

// 8. SLIDE DOWN
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

// 9. ROTATE IN
const rotateIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.4);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

// 10. FADE IN
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// ============================================
// ANIMATION POUR LES BARRES DE PROGRÈS
// ============================================
const progressGrow = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const skills = [
  { label: "Carrelage & Revêtements", value: 90 },
  { label: "Construction de Bâtiments", value: 85 },
  { label: "Finitions & Matériel BTP", value: 80 },
];

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [progressTriggered, setProgressTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Déclencher les barres de progression après un court délai
          setTimeout(() => setProgressTriggered(true), 500);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ==========================================
              IMAGE GAUCHE - ANIMATION FLIP IN
              ========================================== */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              position: "relative",
              zIndex: 1,
              opacity: 0,
              animation: isVisible ? `${flipIn} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
              "&:hover": {
                transform: "scale(1.02) rotate(-1deg)",
                transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              },
            }}
          >
            <Box
              component="img"
              src="/assets/5.webp"
              alt="Ingénieur BTP sur chantier"
              sx={{
                width: "100%",
                height: { xs: 350, sm: 450, md: 520 },
                objectFit: "cover",
                boxShadow: "0px 15px 35px rgba(0,0,0,0.1)",
                borderRadius: "4px",
                transition: "all 0.5s ease",
                "&:hover": {
                  boxShadow: "0px 25px 60px rgba(252, 150, 21, 0.2)",
                },
              }}
            />
            
            {/* Badge décoratif avec animation BOUNCE */}
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                right: -10,
                bgcolor: "#FC9615",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: 12,
                textTransform: "uppercase",
                px: 3,
                py: 1.5,
                borderRadius: "2px",
                boxShadow: "0px 8px 20px rgba(252, 150, 21, 0.3)",
                opacity: 0,
                animation: isVisible ? `${bounceIn} 0.8s ease-out 0.8s both` : 'none',
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              +10 Ans d'Expertise
            </Box>
          </Box>

          {/* ==========================================
              BLOC CONTENU - ANIMATION ZOOM + ROTATE
              ========================================== */}
          <Box
            sx={{
              width: { xs: "100%", md: "58%" },
              bgcolor: "#FFFFFF",
              p: { xs: 3, sm: 5, md: 6 },
              ml: { md: -8 },
              mt: { xs: -4, md: 0 },
              position: "relative",
              zIndex: 2,
              boxShadow: { xs: "0px 10px 25px rgba(0,0,0,0.08)", md: "none" },
              opacity: 0,
              animation: isVisible ? `${zoomInRotate} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards` : 'none',
              "&:hover": {
                transform: "scale(1.01)",
                transition: "transform 0.4s ease",
              },
            }}
          >
            {/* ====== BADGE ====== */}
            <Typography
              sx={{
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: 13,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#1A1A1A",
                mb: 1,
                opacity: 0,
                animation: isVisible ? `${slideDown} 0.8s ease-out 0.4s both` : 'none',
              }}
            >
              POURQUOI NOUS CHOISIR
            </Typography>

            {/* ====== TITRE ====== */}
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 26, sm: 34, md: 38 },
                lineHeight: 1.25,
                color: "#1A1A1A",
                mb: 2.5,
                opacity: 0,
                animation: isVisible ? `${glowIn} 1s ease-out 0.6s both` : 'none',
              }}
            >
              Des Chantiers Fiables,<br />
              Livrés Dans Les{" "}
              <Box 
                component="span" 
                sx={{ 
                  color: "#FC9615",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 2,
                    left: 0,
                    width: "100%",
                    height: 3,
                    bgcolor: "#FC9615",
                    opacity: 0.3,
                    borderRadius: 2,
                  }
                }}
              >
                Délais
              </Box>
            </Typography>

            {/* ====== LIGNE DÉCORATIVE ====== */}
            <Stack 
              direction="row" 
              alignItems="center" 
              spacing={0} 
              sx={{ 
                mb: 3,
                opacity: 0,
                animation: isVisible ? `${fadeInSlideLeft} 0.8s ease-out 0.8s both` : 'none',
              }}
            >
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#FC9615" }} />
              <Box sx={{ width: 60, height: 2, bgcolor: "#ADC4F0" }} />
            </Stack>

            {/* ====== DESCRIPTION ====== */}
            <Box
              sx={{
                borderLeft: "3px solid #FC9615",
                pl: 2.5,
                mb: 4,
                opacity: 0,
                animation: isVisible ? `${fadeInSlideRight} 0.8s ease-out 1s both` : 'none',
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: 14.5,
                  color: "#555555",
                  lineHeight: 1.75,
                }}
              >
                Forts de notre expertise historique et de notre accompagnement rigoureux, nous pilotons chaque projet à Douala et au Cameroun pour garantir la satisfaction de nos clients et la qualité des ouvrages.
              </Typography>
            </Box>

            {/* ==========================================
                BARRES DE PROGRÈS AVEC ANIMATION SÉQUENTIELLE
                ========================================== */}
            <Stack spacing={3}>
              {skills.map((skill, index) => {
                // Sélection d'une animation différente pour chaque barre
                const animations = [
                  fadeInSlideRight,
                  fadeInUp,
                  bounceIn,
                ];
                const selectedAnimation = animations[index % animations.length];

                return (
                  <Box 
                    key={index}
                    sx={{
                      opacity: 0,
                      animation: isVisible 
                        ? `${selectedAnimation} 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${0.3 + 0.2 * index}s forwards` 
                        : 'none',
                    }}
                  >
                    {/* ====== LABEL AVEC ANIMATION ====== */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#1A1A1A",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#FC9615",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        {skill.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 14,
                          color: "#FC9615",
                          opacity: 0,
                          animation: progressTriggered 
                            ? `${fadeIn} 0.5s ease-out ${0.5 + 0.2 * index}s both` 
                            : 'none',
                        }}
                      >
                        {skill.value}%
                      </Typography>
                    </Box>

                    {/* ====== BARRE DE PROGRÈS ====== */}
                    <LinearProgress
                      variant="determinate"
                      value={progressTriggered ? skill.value : 0}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: "#E0E0E0",
                        "& .MuiLinearProgress-bar": {
                          bgcolor: "#FC9615",
                          borderRadius: 3,
                          transition: "transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
                          transform: progressTriggered ? "scaleX(1)" : "scaleX(0)",
                          transformOrigin: "left",
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChooseUsSection;