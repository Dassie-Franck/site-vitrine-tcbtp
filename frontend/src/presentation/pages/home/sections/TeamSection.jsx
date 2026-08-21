import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { keyframes } from "@mui/system";

// ============================================
// ANIMATIONS VARIÉES - STYLE POWERPOINT
// ============================================

// 1. FADE IN UP (montée)
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

// 2. ZOOM IN (zoom entrant)
const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.4) rotate(-5deg);
  }
  50% {
    transform: scale(1.05) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// 3. FLIP IN 3D (retournement)
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

// 4. BOUNCE IN (rebond)
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

// 5. SLIDE IN LEFT (glissement gauche)
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

// 6. SLIDE IN RIGHT (glissement droite)
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

// 7. GLOW IN (apparition avec lueur)
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

// 8. ROTATE IN (rotation entrante)
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

// 9. FADE IN DOWN (apparition depuis le haut)
const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// 10. FADE IN (apparition simple)
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 11. SLIDE UP (glissement vers le haut)
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 12. SCALE IN (mise à l'échelle)
const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

const socialIcons = [
  { icon: FacebookIcon, label: "Facebook", key: "facebook", color: "#1877F2" },
  { icon: TwitterIcon, label: "Twitter", key: "twitter", color: "#1DA1F2" },
  { icon: LinkedInIcon, label: "LinkedIn", key: "linkedin", color: "#0A66C2" },
];

export function TeamSection() {
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

  const teamMembers = [
    {
      id: 1,
      name: "Jean KAMENI",
      role: "Directeur Général & Fondateur",
      image: "/assets/20.jpg",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Marcelle Kameni",
      role: "Ingénieure Génie Civil",
      image: "/assets/21.jpg",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Alain Mbarga",
      role: "Chef de Chantier Senior",
      image: "/assets/5.webp",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  // Sélection d'une animation pour chaque carte
  const getCardAnimation = (index) => {
    const animations = [flipIn, zoomIn, bounceIn, rotateIn, scaleIn];
    return animations[index % animations.length];
  };

  // Sélection d'une animation pour les réseaux sociaux
  const getSocialAnimation = (index) => {
    const animations = [fadeInUp, slideInLeft, slideInRight, bounceIn];
    return animations[index % animations.length];
  };

  return (
    <Box 
      component="section" 
      ref={sectionRef}
      sx={{ 
        position: "relative", 
        mb: 12,
        overflow: "hidden",
      }}
    >
      {/* ==========================================
          BANNIÈRE D'EN-TÊTE AVEC ANIMATION GLOW
          ========================================== */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.92), rgba(163, 163, 163, 0.88), rgba(220, 120, 10, 0.85)), url('/assets/12.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pt: { xs: 8, md: 9 },
          pb: { xs: 18, md: 22 },
          color: "#FFFFFF",
          position: "relative",
          opacity: 0,
          animation: isVisible ? `${glowIn} 1.2s ease-out forwards` : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              gap: 3,
              maxWidth: 1140,
              mx: "auto",
            }}
          >
            {/* ====== TITRE & SOUS-TITRE ====== */}
            <Box>
              {/* Badge avec animation SLIDE LEFT */}
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 1.5, 
                  mb: 1,
                  opacity: 0,
                  animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
                }}
              >
                <Box sx={{ width: 30, height: 3, bgcolor: "#FC9615" }} />
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 13,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  NOTRE ÉQUIPE
                </Typography>
              </Box>

              {/* Titre avec animation BOUNCE */}
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 28, sm: 36, md: 40 },
                  lineHeight: 1.2,
                  opacity: 0,
                  animation: isVisible ? `${bounceIn} 1s ease-out 0.5s both` : 'none',
                }}
              >
                Une Équipe Qualifiée et<br /> Expérimentée
              </Typography>
            </Box>

            {/* ====== BOUTON "TOUTE L'ÉQUIPE" ====== */}
            <Box 
              sx={{ 
                position: "relative", 
                pr: 1, 
                pb: 1,
                opacity: 0,
                animation: isVisible ? `${slideInRight} 0.8s ease-out 0.7s both` : 'none',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                disableRipple
                sx={{
                  bgcolor: "#FC9615",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 16,
                  px: 4,
                  py: 1.8,
                  borderRadius: 0,
                  textTransform: "none",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 6,
                    left: 6,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#0B2247",
                    zIndex: -1,
                    transition: "all 0.3s ease",
                  },
                  "&:hover": {
                    bgcolor: "#FC9615",
                    transform: "scale(1.05) translateY(-2px)",
                    "&::before": {
                      top: 3,
                      left: 3,
                    },
                  },
                }}
              >
                Toute L'Équipe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ==========================================
          GRILLE DES MEMBRES AVEC ANIMATIONS VARIÉES
          ========================================== */}
      <Container maxWidth="xl" sx={{ mt: -14, position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 3.5,
            maxWidth: 1140,
            mx: "auto",
          }}
        >
          {teamMembers.map((member, index) => {
            const cardAnimation = getCardAnimation(index);
            const socialAnimation = getSocialAnimation(index);

            return (
              <Paper
                key={member.id}
                elevation={0}
                sx={{
                  borderRadius: "0px 0px 6px 6px",
                  overflow: "hidden",
                  bgcolor: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  opacity: 0,
                  animation: isVisible 
                    ? `${cardAnimation} 1s cubic-bezier(0.23, 1, 0.32, 1) ${0.2 + 0.15 * index}s forwards` 
                    : 'none',
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                {/* ====== PHOTO AVEC ZOOM AU SURVOL ====== */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.08)",
                      filter: "brightness(1.05)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      height: 350,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s ease",
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/assets/20.jpg";
                    }}
                  />
                  
                  {/* Badge de rôle avec animation FADE IN */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "rgba(252, 150, 21, 0.9)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      textAlign: "center",
                      py: 1,
                      transform: "translateY(100%)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {member.role}
                  </Box>
                </Box>

                {/* ====== BLOC TEXTES ET ICÔNES ====== */}
                <Box
                  sx={{
                    py: 3.5,
                    px: 2,
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  {/* Nom avec animation FADE IN UP */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: 21,
                      color: "#0B132A",
                      mb: 0.5,
                      opacity: 0,
                      animation: isVisible 
                        ? `${fadeInUp} 0.8s ease-out ${0.5 + 0.15 * index}s both` 
                        : 'none',
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#FC9615",
                      },
                    }}
                  >
                    {member.name}
                  </Typography>

                  {/* Rôle avec animation FADE IN */}
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      letterSpacing: 1,
                      color: "#475569",
                      display: "block",
                      mb: 2.5,
                      opacity: 0,
                      animation: isVisible 
                        ? `${fadeIn} 0.6s ease-out ${0.6 + 0.15 * index}s both` 
                        : 'none',
                    }}
                  >
                    {member.role}
                  </Typography>

                  {/* ====== RÉSEAUX SOCIAUX ====== */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1.5,
                      width: "100%",
                      mx: "auto",
                      opacity: 0,
                      animation: isVisible 
                        ? `${socialAnimation} 0.6s ease-out ${0.7 + 0.15 * index}s both` 
                        : 'none',
                    }}
                  >
                    {socialIcons.map((social, iconIdx) => {
                      const IconComponent = social.icon;
                      const link = member.socialLinks?.[social.key] || "#";

                      return (
                        <IconButton
                          key={iconIdx}
                          component="a"
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          aria-label={social.label}
                          sx={{
                            bgcolor: "#FC9615",
                            color: "#FFFFFF",
                            borderRadius: "4px",
                            width: 38,
                            height: 38,
                            transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                            "&:hover": {
                              bgcolor: social.color,
                              transform: "scale(1.2) rotate(10deg) translateY(-3px)",
                              boxShadow: `0px 8px 20px ${social.color}40`,
                            },
                          }}
                        >
                          <IconComponent sx={{ fontSize: 18 }} />
                        </IconButton>
                      );
                    })}
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default TeamSection;