import { Box, Container, Grid, Typography, Stack, IconButton, Divider, Link, Fab } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const services = [
  "Nos Services",
  "Gros œuvre & Maçonnerie",
  "Travaux Publics & VRD",
  "Rénovation & Second œuvre",
  "Études & Conception BTP",
];

const recentPosts = [
  {
    title: "Optimiser l'étanchéité et l'isolation thermique en saison des pluies",
    date: "10 Août 2026",
  },
  {
    title: "L'importance des normes de sécurité EPI sur les chantiers modernes",
    date: "02 Août 2026",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const themeColors = {
    primary: "#D97706",
    primaryHover: "#B45309",
    footerBg: "#1E293B", // Gris ardoise sombre pour coller à l'ambiance BTP
  };

  // Numéro WhatsApp Business de TC BTP et message prérempli encodé
  const whatsappNumber = "237699633882";
  const whatsappMessage = encodeURIComponent(
    "Bonjour TC BTP, je viens de consulter votre site internet et je souhaite avoir plus d’informations concernant vos services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Box component="footer" sx={{ bgcolor: themeColors.footerBg, color: "#94A3B8", pt: 10, pb: 4, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          
          {/* Colonne 1 : Logo + Description + Réseaux Sociaux */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}>
              <Box
                component="img"
                src="/assets/logo.png"
                alt="Logo TC BTP"
                sx={{ height: 60, width: "auto" }}
              />
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#CBD5E1", mb: 3 }}>
              Expert en bâtiment et travaux publics, nous vous accompagnons de la conception à la livraison clé en main de vos projets.
            </Typography>

            <Stack direction="row" spacing={1}>
              {[
                { icon: FacebookIcon, key: "fb" },
                { icon: TwitterIcon, key: "tw" },
                { icon: LinkedInIcon, key: "in" },
                { icon: PinterestIcon, key: "pin" },
              ].map((item) => (
                <IconButton
                  key={item.key}
                  size="small"
                  sx={{
                    bgcolor: themeColors.primary,
                    color: "#FFFFFF",
                    borderRadius: "4px",
                    width: 36,
                    height: 36,
                    "&:hover": { bgcolor: themeColors.primaryHover },
                  }}
                >
                  <item.icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Colonne 2 : Nos Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 3, fontSize: 18 }}>
              Nos Services
            </Typography>

            <Stack spacing={1.5}>
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  underline="none"
                  href="#"
                  sx={{
                    color: "#CBD5E1",
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "color 0.2s",
                    "&:hover": { color: themeColors.primary },
                  }}
                >
                  <Box component="span" sx={{ color: themeColors.primary }}>—</Box>
                  {service}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Colonne 3 : Actualités / Articles récents */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 3, fontSize: 18 }}>
              Articles Récents
            </Typography>

            {recentPosts.map((post, idx) => (
              <Box key={idx} sx={{ mb: idx !== recentPosts.length - 1 ? 2.5 : 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.4,
                    cursor: "pointer",
                    "&:hover": { color: themeColors.primary },
                  }}
                >
                  {post.title}
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748B", mt: 0.5, display: "block" }}>
                  {post.date}
                </Typography>
                {idx !== recentPosts.length - 1 && (
                  <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
                )}
              </Box>
            ))}
          </Grid>

          {/* Colonne 4 : Contact Rapide */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 3, fontSize: 18 }}>
              Contact Rapide
            </Typography>

            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <HomeOutlinedIcon sx={{ color: themeColors.primary, fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}>
                    Adresse :
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#CBD5E1", fontSize: 13, mt: 0.3 }}>
                    Douala / Yaoundé, Cameroun
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <PhoneInTalkOutlinedIcon sx={{ color: themeColors.primary, fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}>
                    Téléphone :
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#CBD5E1", fontSize: 13, mt: 0.3 }}>
                    +237 6 99 63 38 82
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <PublicOutlinedIcon sx={{ color: themeColors.primary, fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}>
                    Email :
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#CBD5E1", fontSize: 13, mt: 0.3 }}>
                    contact@talem-construction-btp.com
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)", mb: 3 }} />

        {/* Bas de page / Copyright & MPERYX */}
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            flexDirection: { xs: "column", sm: "row" }, 
            gap: 2,
            textAlign: { xs: "center", sm: "left" } 
          }}
        >
          <Typography variant="body2" sx={{ color: "#CBD5E1", fontSize: 13 }}>
            Copyright © {new Date().getFullYear()} TC BTP. Tous droits réservés.
          </Typography>

          <Typography variant="body2" sx={{ color: "#CBD5E1", fontSize: 13 }}>
            Conçu et développé par{" "}
            <Link
              href="https://www.mperyx.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: themeColors.primary,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              MPERYX
            </Link>
          </Typography>
        </Box>
      </Container>

      {/* BOUTONS FLOTTANTS (WhatsApp à gauche, Retour en haut à droite) */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          left: 24,
          right: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        {/* Bouton WhatsApp Flottant (à gauche) */}
        <Fab
          component="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          sx={{
            bgcolor: "#25D366",
            color: "#FFFFFF",
            width: 56,
            height: 56,
            boxShadow: "0px 4px 14px rgba(37, 211, 102, 0.4)",
            pointerEvents: "auto",
            "&:hover": {
              bgcolor: "#20ba5a",
              transform: "scale(1.05)",
            },
            transition: "all 0.2s ease-in-out",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>

        {/* Bouton Retour en haut (à droite) */}
        <IconButton
          onClick={scrollToTop}
          aria-label="Retour en haut"
          sx={{
            bgcolor: themeColors.primary,
            color: "#FFFFFF",
            borderRadius: "4px",
            width: 40,
            height: 40,
            boxShadow: "0px 4px 10px rgba(217, 119, 6, 0.3)",
            pointerEvents: "auto",
            "&:hover": { bgcolor: themeColors.primaryHover, transform: "translateY(-2px)" },
            transition: "all 0.2s ease",
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;