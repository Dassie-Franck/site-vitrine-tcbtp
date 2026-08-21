import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export function ContactFormSection() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FFFFFF", py: 8, px: { xs: 2, sm: 4 } }}>
      <Container maxWidth="lg">
        {/* SECTION EN-TÊTE */}
        <Box sx={{ maxWidth: "800px", mx: "auto", mb: 8, textAlign: "center" }}>
          {/* Surtitre Charte BTP */}
          <Typography
            sx={{
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#1E293B",
              mb: 1,
            }}
          >
            DISCUTONS DE VOTRE PROJET
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.25rem", md: "3rem" },
              color: "#0F172A",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Contactez Notre Équipe BTP
          </Typography>
          
          <Typography
            sx={{
              color: "#475569",
              fontSize: "0.95rem",
              maxWidth: "650px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Vous avez un projet de construction, de rénovation ou d'aménagement ? 
            Rendez-nous visite ou contactez directement nos experts pour obtenir un accompagnement personnalisé.
          </Typography>
        </Box>

        {/* SECTION CARTE MAPS PLEINE LARGEUR */}
        <Box 
          sx={{ 
            width: "100%", 
            mx: "auto", 
            display: "flex", 
            flexDirection: "column", 
            flex: 1 
          }}
        >
          <Box sx={{ textAlign: "center", mb: 5, maxWidth: "lg", mx: "auto", px: 2 }}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#FC9615",
                fontWeight: 700,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              NOTRE LOCALISATION
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.5rem" }, color: "#0F172A" }}>
              Rendez-nous visite au siège
            </Typography>
          </Box>

          {/* CARTE GOOGLE MAPS INTÉGRÉE */}
          <Box
            sx={{
              width: "100vw",
              position: "relative",
              left: "50%",
              right: "50%",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              px: 0,
              flex: 1,
              display: "flex", 
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                borderRadius: { xs: "0", md: "12px" }, 
                overflow: "hidden",
                width: "100%",
                flex: 1,
                minHeight: "400px", 
                boxShadow: "none", 
                border: "none",
                position: "relative",
              }}
            >
              <iframe
                title="Siège BTP Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.46782485542!2d11.500000!3d3.866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a1f111111%3A0x1b576e330f81d113!2sBTP%20Si%C3%A8ge!5e0!3m2!1sfr!2scm!4v1680000000000!5m2!1sfr!2scm"
                width="100%"
                height="100%"
                style={{ border: 0, flex: 1 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box>
          </Box>

          {/* COORDONNÉES ET CONTACTS */}
          <Box
            sx={{
              maxWidth: "lg",
              mx: "auto",
              mt: 5,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              flexWrap: "wrap",
              gap: 3,
              px: 2,
              pb: 4,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "0.75rem", color: "#FC9615", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Adresse du Siège
              </Typography>
              <Typography sx={{ fontWeight: 600, color: "#1A2536", fontSize: "1rem" }}>
                Avenue des Travaux, Yaoundé, Cameroun
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "0.75rem", color: "#FC9615", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Email
              </Typography>
              <Typography
                component="a"
                href="mailto:contact@btp-construction.com"
                sx={{
                  fontWeight: 600,
                  color: "#FC9615",
                  fontSize: "1rem",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                contact@talem-construction-btp.com
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "0.75rem", color: "#FC9615", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Téléphone
              </Typography>
              <Typography
                component="a"
                href="tel: + +237 6 87 84 97 21"
                sx={{
                  fontWeight: 600,
                  color: "#1A2536",
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                 +237 6 99 63 38 82
              </Typography>
            </Box>

            {/* RÉSEAUX SOCIAUX */}
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              {[
                <FacebookIcon key="fb" fontSize="small" />,
                <TwitterIcon key="tw" fontSize="small" />,
                <LinkedInIcon key="in" fontSize="small" />,
                <YouTubeIcon key="yt" fontSize="small" />,
                <InstagramIcon key="ig" fontSize="small" />,
              ].map((icon, idx) => (
                <IconButton
                  key={idx}
                  sx={{
                    bgcolor: "#F8FAFC",
                    color: "#1A2536",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": { 
                      bgcolor: "#FC9615", 
                      color: "#FFFFFF", 
                      borderColor: "#FC9615" 
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactFormSection;