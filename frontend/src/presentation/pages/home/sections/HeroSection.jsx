import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Button, Stack, Card } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FoundationIcon from "@mui/icons-material/Foundation";
import ConstructionIcon from "@mui/icons-material/Construction";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import RoofingIcon from "@mui/icons-material/Roofing";
import { useDevisModal } from "../../../components/common/DevisModal";
import { keyframes } from "@mui/system";

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

// ============================================
// ANIMATION DE ZOOM SUR L'IMAGE DE FOND
// ============================================
const heroZoom = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const heroServices = [
  {
    icon: <FoundationIcon />,
    title: "Carrelage & Revêtements",
    desc: "Pose de carrelage au sol et mural, revêtements et finitions selon l'expertise historique de notre promoteur.",
    animation: flipIn,
  },
  {
    icon: <ConstructionIcon />,
    title: "Construction de Bâtiments",
    desc: "Accompagnement dans la réalisation de vos projets de construction et de bâtiments clés en main.",
    animation: zoomIn,
  },
  {
    icon: <ElectricBoltIcon />,
    title: "Finition de Bâtiments",
    desc: "Travaux nécessaires à la finition pour assurer l'aspect esthétique et la fonctionnalité de vos ouvrages.",
    animation: rotateIn,
  },
  {
    icon: <RoofingIcon />,
    title: "Vente & Location Matériel BTP",
    desc: "Mise à disposition d'équipements et matériels adaptés aux besoins de vos chantiers.",
    animation: scaleIn,
  },
];

export function HeroSection() {
  const { openModal } = useDevisModal();
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
        bgcolor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* ==========================================
          SECTION HERO AVEC IMAGE DE FOND
          ========================================== */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 480, sm: 520, md: 560, lg: 600 },
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            animation: isVisible ? `${heroZoom} 8s ease-out forwards` : 'none',
            transform: "scale(1.1)",
          },
        }}
      >
        {/* Voile orange avec animation FADE */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: "linear-gradient(135deg, rgba(245,166,35,0.5) 0%, rgba(245,166,35,0.1) 50%, rgba(245,166,35,0) 70%)",
              md: "linear-gradient(135deg, rgba(245,166,35,0.6) 0%, rgba(245,166,35,0.15) 45%, rgba(245,166,35,0) 60%)",
            },
            opacity: 0,
            animation: isVisible ? `${fadeIn} 1s ease-out 0.3s forwards` : 'none',
          }}
        />
        
        {/* Voile sombre */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 100%)",
              md: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0) 60%)",
            },
            opacity: 0,
            animation: isVisible ? `${fadeIn} 0.8s ease-out 0.5s forwards` : 'none',
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", height: "100%" }}>
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              maxWidth: { xs: "100%", md: 550 },
              pt: { xs: 6, sm: 8, md: 10 },
              pb: { xs: 3, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* ====== TITRE AVEC ANIMATION SLIDE LEFT ====== */}
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 26, sm: 32, md: 42 },
                color: "#FFFFFF",
                lineHeight: 1.2,
                mb: 2,
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                opacity: 0,
                animation: isVisible ? `${slideInLeft} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards` : 'none',
              }}
            >
              Votre Partenaire de Confiance en Bâtiment et Travaux Publics
            </Typography>

            {/* ====== SOUS-TITRE AVEC ANIMATION FADE IN UP ====== */}
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: 13, md: 14 },
                mb: 3,
                maxWidth: { xs: "100%", md: 460 },
                mx: { xs: "auto", md: 0 },
                lineHeight: 1.5,
                opacity: 0,
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.8s forwards` : 'none',
              }}
            >
              De la construction au carrelage et aux finitions, TC BTP vous accompagne avec rigueur et engagement à Douala et partout au Cameroun.
            </Typography>

            {/* ====== TÉLÉPHONE AVEC ANIMATION BOUNCE ====== */}
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ 
                mb: 2.5,
                opacity: 0,
                animation: isVisible ? `${bounceIn} 0.8s ease-out 1s forwards` : 'none',
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  bgcolor: "#BCBBBA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#FC9615",
                    transform: "scale(1.1) rotate(10deg)",
                  },
                }}
              >
                <PhoneIcon sx={{ color: "#FFFFFF", fontSize: 17 }} />
              </Box>
              <Typography sx={{ 
                color: "#FFFFFF", 
                fontWeight: 700, 
                fontSize: { xs: 16, md: 18 },
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#FC9615",
                },
              }}>
                 +237 6 99 63 38 82
              </Typography>
            </Stack>

            {/* ====== BOUTONS AVEC ANIMATIONS ====== */}
            <Stack
              direction="row"
              spacing={4}
              justifyContent={{ xs: "center", md: "flex-start" }}
              flexWrap="wrap"
              useFlexGap
            >
              {/* Bouton "Demander un devis" */}
              <Box 
                sx={{ 
                  position: "relative", 
                  display: "inline-block",
                  opacity: 0,
                  animation: isVisible ? `${slideDown} 0.8s ease-out 1.2s forwards` : 'none',
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -8,
                    left: -8,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#FCE3C5",
                    zIndex: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translate(4px, 4px)",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={openModal}
                  disableElevation
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    fontWeight: 700,
                    px: { xs: 3, md: 4.5 },
                    py: 1.6,
                    borderRadius: 0,
                    bgcolor: "#FC9615",
                    color: "#FFFFFF",
                    fontSize: { xs: "0.9rem", md: "1.05rem" },
                    textTransform: "none",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      bgcolor: "#e0830f",
                      transform: "scale(1.05) translateY(-2px)",
                      boxShadow: "0px 10px 30px rgba(252, 150, 21, 0.4)",
                    },
                  }}
                >
                  Demander un devis
                </Button>
              </Box>

              {/* Bouton "Nous contacter" */}
              <Box 
                sx={{ 
                  position: "relative", 
                  display: "inline-block",
                  opacity: 0,
                  animation: isVisible ? `${slideDown} 0.8s ease-out 1.4s forwards` : 'none',
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -8,
                    left: -8,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#FCE3C5",
                    zIndex: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translate(4px, 4px)",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    fontWeight: 700,
                    px: { xs: 3, md: 4.5 },
                    py: 1.6,
                    borderRadius: 0,
                    bgcolor: "#FFFFFF",
                    color: "#FC9615",
                    fontSize: { xs: "0.9rem", md: "1.05rem" },
                    textTransform: "none",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      bgcolor: "#f8f8f8",
                      transform: "scale(1.05) translateY(-2px)",
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  Nous contacter
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ==========================================
          CARTES DE SERVICES AVEC ANIMATIONS VARIÉES
          ========================================== */}
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 2, md: -8 },
          position: "relative",
          zIndex: 3,
          pb: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {heroServices.map((item, index) => {
            const cardAnimation = item.animation || fadeInUp;

            return (
              <Card
                key={index}
                elevation={4}
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 0,
                  bgcolor: "#FFFFFF",
                  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.08)",
                  height: "100%",
                  opacity: 0,
                  animation: isVisible 
                    ? `${cardAnimation} 1s cubic-bezier(0.23, 1, 0.32, 1) ${0.2 + 0.15 * index}s forwards` 
                    : 'none',
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0px 20px 50px rgba(252, 150, 21, 0.15)",
                  },
                }}
              >
                {/* ====== ICÔNE AVEC ANIMATION BOUNCE ====== */}
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 48,
                    opacity: 0,
                    animation: isVisible 
                      ? `${bounceIn} 0.8s ease-out ${0.4 + 0.15 * index}s both` 
                      : 'none',
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: {
                      fontSize: 42,
                      color: "#FC9615",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2) rotate(15deg)",
                        color: "#E8830A",
                      },
                    },
                  })}
                </Box>

                {/* ====== TITRE ====== */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    mb: 1.5,
                    color: "#1A1A1A",
                    lineHeight: 1.2,
                    opacity: 0,
                    animation: isVisible 
                      ? `${fadeIn} 0.6s ease-out ${0.5 + 0.15 * index}s both` 
                      : 'none',
                  }}
                >
                  {item.title}
                </Typography>

                {/* ====== DESCRIPTION ====== */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.85rem",
                    color: "#555555",
                    lineHeight: 1.5,
                    opacity: 0,
                    animation: isVisible 
                      ? `${fadeInUp} 0.6s ease-out ${0.6 + 0.15 * index}s both` 
                      : 'none',
                  }}
                >
                  {item.desc}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;