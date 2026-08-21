import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import RoofingIcon from "@mui/icons-material/Roofing";
import GridOnIcon from "@mui/icons-material/GridOn";
import BuildIcon from "@mui/icons-material/Build";
import HandymanIcon from "@mui/icons-material/Handyman";
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

// ============================================
// SERVICES ADAPTÉS POUR TC BTP
// ============================================

const services = [
  {
    title: "Carrelage & Revêtements",
    description: "Pose de carrelage sol et mural, revêtements, rénovation et remplacement pour bâtiments résidentiels, commerciaux et professionnels.",
    icon: GridOnIcon,
    highlighted: true,
    animation: flipIn,
  },
  {
    title: "Construction de Bâtiments",
    description: "Construction de bâtiments neufs, de la fondation à la structure, en respectant les normes et les délais contractuels.",
    icon: HomeRepairServiceIcon,
    highlighted: false,
    animation: zoomIn,
  },
  {
    title: "Finition de Bâtiments",
    description: "Travaux de finition esthétique et fonctionnelle : enduits, peinture, pose de revêtements et aménagements intérieurs.",
    icon: FormatPaintIcon,
    highlighted: true,
    animation: bounceIn,
  },
  {
    title: "Construction Clés en Main",
    description: "Accompagnement complet de la construction jusqu'à la finition. Un interlocuteur unique pour coordonner toutes les étapes de votre projet.",
    icon: BuildIcon,
    highlighted: false,
    animation: rotateIn,
  },
  {
    title: "Vente de Matériel BTP",
    description: "Vente de matériels et équipements professionnels pour chantiers : outils, engins, et matériaux de qualité.",
    icon: HandymanIcon,
    highlighted: true,
    animation: scaleIn,
  },
  {
    title: "Location de Matériel BTP",
    description: "Location de matériels et équipements BTP : bétonnières, compresseurs, échafaudages et outils spécialisés.",
    icon: CarpenterIcon,
    highlighted: false,
    animation: slideInRight,
  },
];

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

export function ServicesSection() {
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

  // Sélection d'une animation pour l'en-tête
  const getHeaderAnimation = () => {
    const animations = [fadeInUp, glowIn, bounceIn];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        pt: { xs: 8, md: 12 },
        pb: { xs: 12, md: 16 },
        backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.92), rgba(30, 41, 59, 0.88), rgba(220, 120, 10, 0.85)), url('/assets/6.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* ==========================================
            EN-TÊTE AVEC ANIMATIONS
            ========================================== */}
        <Box
          sx={{
            textAlign: "center",
            mb: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0,
            animation: isVisible 
              ? `${getHeaderAnimation()} 1s cubic-bezier(0.23, 1, 0.32, 1) forwards` 
              : 'none',
          }}
        >
          {/* Badge avec animation SLIDE LEFT */}
          <Typography
            sx={{
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#FFFFFF",
              opacity: 0.9,
              mb: 1,
              opacity: 0,
              animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
            }}
          >
            NOS SERVICES
          </Typography>

          {/* Titre avec animation GLOW */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 26, sm: 34, md: 40 },
              color: "#FFFFFF",
              mb: 2.5,
              textAlign: "center",
              opacity: 0,
              animation: isVisible ? `${glowIn} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Une Offre Complète De Services BTP
          </Typography>

          {/* Trait décoratif avec animation BOUNCE */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            sx={{ 
              width: "fit-content", 
              mx: "auto",
              opacity: 0,
              animation: isVisible ? `${bounceIn} 0.8s ease-out 0.7s both` : 'none',
            }}
          >
            <Box 
              sx={{ 
                width: 8, 
                height: 8, 
                borderRadius: "50%", 
                bgcolor: "#FC9615",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.5)",
                },
              }} 
            />
            <Box sx={{ width: 60, height: 2, bgcolor: "#ADC4F0" }} />
          </Stack>
        </Box>

        {/* ==========================================
            GRILLE DES CARTES DE SERVICES
            ========================================== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            maxWidth: 1140,
            mx: "auto",
          }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isOrange = service.highlighted;
            const cardAnimation = service.animation || fadeInUp;

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  opacity: 0,
                  animation: isVisible 
                    ? `${cardAnimation} 1s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 * index}s forwards` 
                    : 'none',
                  /* Cadre/Ombre Orange décalé en arrière-plan */
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    right: -8,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#FC9615",
                    zIndex: 0,
                    borderRadius: 0.5,
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  },
                  "&:hover::after": {
                    bottom: -12,
                    right: -12,
                    bgcolor: "#E8830A",
                  },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: { xs: 2.5, md: 3 },
                    height: "100%",
                    borderRadius: 0.5,
                    bgcolor: isOrange ? "#FC9615" : "#FFFFFF",
                    color: isOrange ? "#FFFFFF" : "#1A1A1A",
                    display: "flex",
                    alignItems: "flex-start",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.02)",
                      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    {/* Icône avec animation BOUNCE */}
                    <IconComponent
                      sx={{
                        fontSize: 42,
                        color: isOrange ? "#FFFFFF" : "#FC9615",
                        flexShrink: 0,
                        mt: 0.5,
                        opacity: 0,
                        animation: isVisible 
                          ? `${bounceIn} 0.8s ease-out ${0.3 + 0.15 * index}s both` 
                          : 'none',
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2) rotate(10deg)",
                        },
                      }}
                    />
                    <Box>
                      {/* Titre avec animation FADE IN */}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 800,
                          fontSize: 17,
                          mb: 1,
                          lineHeight: 1.25,
                          opacity: 0,
                          animation: isVisible 
                            ? `${fadeIn} 0.6s ease-out ${0.4 + 0.15 * index}s both` 
                            : 'none',
                        }}
                      >
                        {service.title}
                      </Typography>
                      
                      {/* Description avec animation FADE IN UP */}
                      <Typography
                        sx={{
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: isOrange ? "rgba(255,255,255,0.95)" : "#555555",
                          fontWeight: 500,
                          opacity: 0,
                          animation: isVisible 
                            ? `${fadeInUp} 0.6s ease-out ${0.5 + 0.15 * index}s both` 
                            : 'none',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            );
          })}
        </Box>

        {/* ==========================================
            BOUTON CTA EN BAS DE SECTION
            ========================================== */}
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
              onClick={() => window.location.href = "/services/"}
            >
              Découvrir Tous Nos Services
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesSection;