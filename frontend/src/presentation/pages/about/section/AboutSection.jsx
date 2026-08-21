import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
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

  const themeColors = {
    primary: "#D97706",
    primaryDark: "#B45309",
    secondary: "#1E293B",
    accent: "#0F172A",
    surfaceBg: "#F8FAFC",
  };

  const values = [
    { label: "Sérieux & Rigueur", icon: <SecurityIcon fontSize="large" />, color: themeColors.primary },
    { label: "Expertise Carrelage", icon: <EngineeringIcon fontSize="large" />, color: themeColors.secondary },
    { label: "Engagement Client", icon: <HandshakeIcon fontSize="large" />, color: themeColors.primaryDark },
    { label: "Qualité & Matériaux", icon: <PrecisionManufacturingIcon fontSize="large" />, color: themeColors.secondary },
    { label: "Respect des Normes", icon: <VerifiedIcon fontSize="large" />, color: themeColors.primary },
    { label: "Esprit d'équipe", icon: <GroupsIcon fontSize="large" />, color: themeColors.secondary },
  ];

  const ambitions = [
    "Se positionner parmi les meilleures entreprises BTP du Cameroun",
    "Développer notre présence au-delà de Douala vers d'autres régions",
    "Intervenir sur des projets de plus grande envergure et participer à des appels d'offres",
    "Proposer des solutions complètes : construction, finitions et offres clés en main",
    "Développer davantage la vente et la location de matériel et équipements BTP",
    "Construire une équipe de professionnels qualifiés et une image de marque forte et durable",
  ];

  // Sélection d'une animation pour les cartes de valeurs
  const getValueAnimation = (index) => {
    const animations = [flipIn, zoomIn, bounceIn, rotateIn, scaleIn, slideInRight];
    return animations[index % animations.length];
  };

  return (
    <Box 
      ref={sectionRef}
      component="main" 
      sx={{ 
        bgcolor: themeColors.surfaceBg, 
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        
        {/* ==========================================
            SECTION 1 : QUI SOMMES-NOUS & HISTOIRE
            ========================================== */}
        <Box 
          component="section" 
          sx={{ 
            mb: 10,
            opacity: 0,
            animation: isVisible ? `${fadeInUp} 1s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
          }}
        >
          <Typography
            variant="caption"
            sx={{ 
              letterSpacing: 2, 
              textTransform: "uppercase", 
              color: themeColors.primary, 
              fontWeight: 700,
              opacity: 0,
              animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.3s both` : 'none',
            }}
          >
            À propos de TC BTP
          </Typography>
          
          <Typography
            variant="h3"
            component="h1"
            sx={{ 
              fontWeight: 800, 
              mb: 4, 
              color: themeColors.accent, 
              mt: 0.5,
              opacity: 0,
              animation: isVisible ? `${glowIn} 1s ease-out 0.5s both` : 'none',
            }}
          >
            Notre Histoire & Notre Identité
          </Typography>

          <Typography 
            paragraph 
            sx={{ 
              color: "#475569", 
              fontSize: "1.05rem", 
              lineHeight: 1.8,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.7s both` : 'none',
            }}
          >
            Spécialisée dans le secteur du Bâtiment et des Travaux Publics (BTP), <strong>TC BTP</strong> tire la force de son expertise de l'expérience de terrain de son promoteur. Carreleur de métier, il a développé son savoir-faire avec passion avant de structurer progressivement cette maîtrise technique au sein de l'entreprise.
          </Typography>

          <Typography 
            paragraph 
            sx={{ 
              color: "#475569", 
              fontSize: "1.05rem", 
              lineHeight: 1.8,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.9s both` : 'none',
            }}
          >
            Notre choix de développer cette activité repose sur une ambition claire : transformer une expérience professionnelle authentique en une structure rigoureuse, capable de répondre avec excellence à différents besoins de construction, de carrelage et de finition.
          </Typography>

          <Typography 
            sx={{ 
              color: "#475569", 
              fontSize: "1.05rem", 
              lineHeight: 1.8,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 1.1s both` : 'none',
            }}
          >
            La philosophie de TC BTP repose sur une conviction profonde : aimer son métier et l'exercer avec un sérieux absolu, de la rigueur et de l'engagement pour garantir des prestations irréprochables à chaque client.
          </Typography>
        </Box>

        {/* ==========================================
            SECTION 2 : NOS VALEURS & NOTRE VISION
            ========================================== */}
        <Box 
          component="section" 
          sx={{ 
            mb: 10,
            opacity: 0,
            animation: isVisible ? `${fadeInUp} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards` : 'none',
          }}
        >
          <Typography
            variant="caption"
            sx={{ 
              letterSpacing: 2, 
              textTransform: "uppercase", 
              color: themeColors.primary, 
              fontWeight: 700,
              opacity: 0,
              animation: isVisible ? `${slideInRight} 0.8s ease-out 0.4s both` : 'none',
            }}
          >
            Cap sur l'excellence
          </Typography>
          
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              color: themeColors.accent, 
              mt: 0.5,
              opacity: 0,
              animation: isVisible ? `${bounceIn} 1s ease-out 0.6s both` : 'none',
            }}
          >
            Nos Valeurs & Notre Vision
          </Typography>

          <Typography 
            paragraph 
            sx={{ 
              color: "#475569", 
              fontSize: "1.05rem", 
              maxWidth: "900px", 
              mb: 5,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.8s both` : 'none',
            }}
          >
            Nous bâtissons notre réputation sur la durabilité de nos ouvrages, l'amour du travail bien fait et le respect de la confiance accordée par nos partenaires et maîtres d'ouvrage.
          </Typography>

          {/* ====== GRILLE DES VALEURS ====== */}
          <Grid container spacing={2} sx={{ mb: 8 }}>
            {values.map((item, index) => {
              const cardAnimation = getValueAnimation(index);
              
              return (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: item.color,
                      color: "#FFF",
                      p: 3,
                      height: "140px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 2,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      opacity: 0,
                      animation: isVisible 
                        ? `${cardAnimation} 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${0.3 + 0.15 * index}s forwards` 
                        : 'none',
                      transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.05)",
                        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2) rotate(10deg)",
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mt: 1.5, lineHeight: 1.2 }}>
                      {item.label}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>

          {/* ====== VISION & AMBITIONS ====== */}
          <Box 
            sx={{ 
              mt: 6,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.6s both` : 'none',
            }}
          >
            <Typography
              variant="caption"
              sx={{ 
                letterSpacing: 1.5, 
                textTransform: "uppercase", 
                color: themeColors.primary, 
                fontWeight: 700,
                opacity: 0,
                animation: isVisible ? `${slideInLeft} 0.8s ease-out 0.8s both` : 'none',
              }}
            >
              Perspective d'avenir
            </Typography>
            
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 800,
                color: themeColors.accent,
                mt: 0.5,
                mb: 3,
                borderBottom: `4px solid ${themeColors.primary}`,
                display: "inline-block",
                pb: 0.5,
                opacity: 0,
                animation: isVisible ? `${glowIn} 1s ease-out 1.0s both` : 'none',
              }}
            >
              Notre Vision & Nos Ambitions
            </Typography>
            
            <Typography 
              paragraph 
              sx={{ 
                color: "#475569", 
                fontSize: "1.05rem", 
                mb: 3,
                opacity: 0,
                animation: isVisible ? `${fadeInUp} 0.8s ease-out 1.2s both` : 'none',
              }}
            >
              TC BTP a pour vision de devenir l'une des entreprises de référence dans le secteur du BTP au Cameroun, en s'étendant progressivement au-delà de Douala pour bâtir une réputation solide à l'échelle nationale.
            </Typography>

            <Paper
              elevation={0}
              sx={{
                bgcolor: themeColors.secondary,
                color: "#FFFFFF",
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                borderLeft: `8px solid ${themeColors.primary}`,
                opacity: 0,
                animation: isVisible ? `${slideInRight} 0.8s ease-out 1.4s both` : 'none',
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(8px)",
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: themeColors.primary,
                  opacity: 0,
                  animation: isVisible ? `${fadeIn} 0.6s ease-out 1.6s both` : 'none',
                }}
              >
                Objectifs à moyen et long terme :
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0, "& li": { mb: 1.5, lineHeight: 1.6 } }}>
                {ambitions.map((text, idx) => (
                  <Typography 
                    component="li" 
                    key={idx} 
                    variant="body1" 
                    sx={{ 
                      color: "#E2E8F0",
                      opacity: 0,
                      animation: isVisible 
                        ? `${fadeInUp} 0.6s ease-out ${1.8 + 0.15 * idx}s both` 
                        : 'none',
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#FC9615",
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* ==========================================
            SECTION 3 : NOS DOMAINES D'EXPERTISE
            ========================================== */}
        <Box 
          component="section"
          sx={{
            opacity: 0,
            animation: isVisible ? `${fadeInUp} 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards` : 'none',
          }}
        >
          <Typography
            variant="caption"
            sx={{ 
              letterSpacing: 2, 
              textTransform: "uppercase", 
              color: themeColors.primary, 
              fontWeight: 700,
              opacity: 0,
              animation: isVisible ? `${slideInRight} 0.8s ease-out 0.5s both` : 'none',
            }}
          >
            Savoir-faire global
          </Typography>
          
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 4,
              color: themeColors.accent,
              mt: 0.5,
              borderBottom: `4px solid ${themeColors.primary}`,
              display: "inline-block",
              pb: 0.5,
              opacity: 0,
              animation: isVisible ? `${bounceIn} 1s ease-out 0.7s both` : 'none',
            }}
          >
            De la conception au clés en main
          </Typography>

          <Typography 
            paragraph 
            sx={{ 
              color: "#475569", 
              fontSize: "1.05rem", 
              lineHeight: 1.8,
              opacity: 0,
              animation: isVisible ? `${fadeInUp} 0.8s ease-out 0.9s both` : 'none',
            }}
          >
            Grâce à notre maîtrise technique, nous couvrons l'ensemble des étapes de vos chantiers. Du gros œuvre à la pose experte de carrelage, en passant par les finitions soignées et la mise à disposition de matériel BTP, nous vous offrons un interlocuteur unique et privilégié.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default AboutSection;