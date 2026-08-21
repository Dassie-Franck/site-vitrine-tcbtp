import { Box, Container, Typography, Stack, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { keyframes } from "@mui/system";
import { useState, useEffect, useRef } from "react";

// ============================================
// ANIMATIONS VARIÉES - STYLE POWERPOINT
// ============================================

// 1. FADE IN UP
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
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
    transform: translateX(-100px) scale(0.9);
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
    transform: translateX(100px) scale(0.9);
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

// 9. FADE IN (CORRIGÉ)
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 10. SCALE IN
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

// 11. SLIDE DOWN
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

// 12. FADE IN WITH SCALE
const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const checklistItems = [
  "Expertise reconnue dans le carrelage et les revêtements",
  "Accompagnement personnalisé pour chaque projet de construction",
  "Services professionnels de finitions et de vente/location de matériel BTP",
];

export function AboutSection() {
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
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "flex-start",
            gap: { xs: 6, md: 0 },
          }}
        >
          {/* ==========================================
              COLONNE TEXTE
              ========================================== */}
          <Box 
            sx={{ 
              width: { xs: "100%", md: "50%" }, 
              flexShrink: 0, 
              zIndex: 2,
              opacity: 0,
              animation: isVisible ? `${slideInLeft} 1s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
            }}
          >
            {/* ====== BADGE ====== */}
            <Typography
              sx={{
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: 14,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#1A1A1A",
                mb: 1,
                opacity: 0,
                animation: isVisible ? `${slideDown} 0.8s ease-out 0.3s both` : 'none',
              }}
            >
              À PROPOS
            </Typography>

            {/* ====== TITRE ====== */}
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 28, sm: 36, md: 42 },
                lineHeight: 1.2,
                color: "#1A1A1A",
                mb: 2.5,
                opacity: 0,
                animation: isVisible ? `${glowIn} 1s ease-out 0.5s both` : 'none',
              }}
            >
              Excellence & Savoir-Faire En<br />
              Construction &{" "}
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
                Bâtiment
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
                animation: isVisible ? `${slideInRight} 0.8s ease-out 0.7s both` : 'none',
              }}
            >
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#FC9615" }} />
              <Box sx={{ width: 60, height: 2, bgcolor: "#ADC4F0" }} />
            </Stack>

            {/* ====== CITATION ====== */}
            <Box
              sx={{
                borderLeft: "3px solid #FC9615",
                pl: 2.5,
                mb: 4,
                maxWidth: 480,
                opacity: 0,
                animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.8s both` : 'none',
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: 14, md: 15 },
                  color: "#555555",
                  lineHeight: 1.8,
                }}
              >
                Fort d'une solide expérience historique en carrelage et revêtements, TC BTP accompagne particuliers et professionnels dans la réalisation de leurs chantiers à Douala et partout au Cameroun. Notre engagement : un travail soigné, de qualité et le respect de vos exigences.
              </Typography>
            </Box>

            {/* ====== ICÔNES QUALITÉ ====== */}
            <Box 
              sx={{ 
                display: "flex", 
                gap: 3, 
                mb: 4, 
                maxWidth: 480,
              }}
            >
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center"
                sx={{
                  opacity: 0,
                  animation: isVisible ? `${bounceIn} 0.8s ease-out 0.9s both` : 'none',
                }}
              >
                <ConstructionIcon 
                  sx={{ 
                    fontSize: 38, 
                    color: "#FC9615",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2) rotate(15deg)",
                    },
                  }} 
                />
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", lineHeight: 1.2 }}>
                  Qualité des<br />Matériaux
                </Typography>
              </Stack>
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center"
                sx={{
                  opacity: 0,
                  animation: isVisible ? `${bounceIn} 0.8s ease-out 1.0s both` : 'none',
                }}
              >
                <EngineeringIcon 
                  sx={{ 
                    fontSize: 38, 
                    color: "#FC9615",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2) rotate(15deg)",
                    },
                  }} 
                />
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", lineHeight: 1.2 }}>
                  Suivi de<br />Chantier
                </Typography>
              </Stack>
            </Box>

            {/* ====== CHECKLIST ====== */}
            <Stack spacing={1.5} sx={{ mb: 5 }}>
              {checklistItems.map((text, index) => (
                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  alignItems="center" 
                  key={text}
                  sx={{
                    opacity: 0,
                    animation: isVisible 
                      ? `${slideInRight} 0.6s ease-out ${1.0 + 0.15 * index}s both` 
                      : 'none',
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <CheckCircleOutlineIcon 
                    sx={{ 
                      color: "#FC9615", 
                      fontSize: 20,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.3) rotate(20deg)",
                      },
                    }} 
                  />
                  <Typography sx={{ fontSize: 14.5, color: "#444444", fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* ====== BOUTON ====== */}
            <Box 
              sx={{ 
                display: "inline-block", 
                position: "relative",
                opacity: 0,
                animation: isVisible ? `${bounceIn} 1s ease-out 1.2s both` : 'none',
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: -5,
                  right: -5,
                  width: "100%",
                  height: "100%",
                  bgcolor: "#1A2238",
                  zIndex: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translate(5px, 5px)",
                  },
                }}
              />
              <Button
                variant="contained"
                disableElevation
                sx={{
                  position: "relative",
                  zIndex: 2,
                  bgcolor: "#FC9615",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    bgcolor: "#e0830f",
                    transform: "scale(1.05) translateY(-2px)",
                    boxShadow: "0px 10px 30px rgba(252, 150, 21, 0.4)",
                  },
                }}
              >
                En Savoir Plus
              </Button>
            </Box>
          </Box>

          {/* ==========================================
              COLONNE PHOTO AVEC ANIMATIONS
              ========================================== */}
          <Box 
            sx={{ 
              width: { xs: "100%", md: "50%" }, 
              display: "flex", 
              justifyContent: "flex-start",
              opacity: 0,
              animation: isVisible ? `${flipIn} 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards` : 'none',
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 580,
                height: { xs: 440, sm: 520, md: 560 },
                ml: { md: -8, lg: -12 },
              }}
            >
              {/* ====== PHOTO PRINCIPALE ====== */}
              <Box
                component="img"
                src="/assets/4.webp"
                alt="Construction principal"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: { xs: 0, md: "8%" },
                  width: { xs: 300, sm: 380, md: 440 },
                  height: { xs: 300, sm: 380, md: 440 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0px 12px 35px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  zIndex: 1,
                  opacity: 0,
                  animation: isVisible ? `${zoomIn} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards` : 'none',
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.05) rotate(-2deg)",
                    boxShadow: "0px 20px 50px rgba(252, 150, 21, 0.2)",
                  },
                }}
              />

              {/* ====== PHOTO MOYENNE ====== */}
              <Box
                component="img"
                src="/assets/2.webp"
                alt="Technicien BTP"
                sx={{
                  position: "absolute",
                  bottom: "2%",
                  left: "12%",
                  width: { xs: 190, sm: 240, md: 260 },
                  height: { xs: 190, sm: 240, md: 260 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "7px solid #FFFFFF",
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
                  zIndex: 2,
                  opacity: 0,
                  animation: isVisible ? `${rotateIn} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.8s forwards` : 'none',
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.08) rotate(5deg)",
                    boxShadow: "0px 20px 50px rgba(0,0,0,0.25)",
                  },
                }}
              />

              {/* ====== PETITE PHOTO ====== */}
              <Box
                component="img"
                src="/assets/3.webp"
                alt="Outillage"
                sx={{
                  position: "absolute",
                  bottom: "0%",
                  left: "0%",
                  width: { xs: 110, sm: 135, md: 150 },
                  height: { xs: 110, sm: 135, md: 150 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "5px solid #FFFFFF",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                  zIndex: 3,
                  opacity: 0,
                  animation: isVisible ? `${scaleIn} 1s cubic-bezier(0.23, 1, 0.32, 1) 1.0s forwards` : 'none',
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.15) rotate(-10deg)",
                    boxShadow: "0px 15px 30px rgba(252, 150, 21, 0.3)",
                  },
                }}
              />

              {/* ====== BADGE DÉCORATIF ====== */}
              <Box
                sx={{
                  position: "absolute",
                  top: "15%",
                  right: "5%",
                  zIndex: 4,
                  bgcolor: "#FC9615",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: 12,
                  textTransform: "uppercase",
                  px: 2.5,
                  py: 1.2,
                  borderRadius: "2px",
                  boxShadow: "0px 8px 20px rgba(252, 150, 21, 0.3)",
                  opacity: 0,
                  animation: isVisible ? `${bounceIn} 0.8s ease-out 1.2s both` : 'none',
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1) rotate(-3deg)",
                  },
                }}
              >
                +10 Ans d'Expérience
              </Box>

              {/* ====== EFFET DÉCORATIF : BULLES SVG ====== */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "38%",
                  left: "-4%",
                  zIndex: 1,
                  opacity: 0,
                  animation: isVisible ? `${fadeIn} 1s ease-out 0.5s forwards` : 'none',
                }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  <circle cx="30" cy="30" r="12" stroke="#FC9615" strokeWidth="3" opacity="0.5" />
                  <circle cx="65" cy="20" r="8" stroke="#FC9615" strokeWidth="2" opacity="0.3" />
                  <circle cx="20" cy="65" r="6" stroke="#FC9615" strokeWidth="2" opacity="0.4" />
                  <circle cx="50" cy="55" r="16" stroke="#FC9615" strokeWidth="3" opacity="0.2" />
                </svg>
              </Box>

              {/* ====== CERCLE DÉCORATIF ====== */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "-5%",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "2px dashed rgba(252, 150, 21, 0.2)",
                  zIndex: 0,
                  opacity: 0,
                  animation: isVisible ? `${rotateIn} 2s linear 0.5s forwards` : 'none',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSection;