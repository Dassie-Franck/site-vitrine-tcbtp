import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function PageHero({ title, backgroundImage }) {
  return (
    <Box>
      <Box
        sx={{
          height: { xs: 180, md: 260 },
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Breadcrumbs separator="»" sx={{ fontSize: 14, color: "text.secondary" }}>
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Accueil
          </Link>
          <Typography sx={{ fontSize: 14, textTransform: "uppercase", color: "text.secondary" }}>
            {title}
          </Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
}