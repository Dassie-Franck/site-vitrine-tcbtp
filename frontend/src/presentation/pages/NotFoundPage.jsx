import { Container, Typography } from "@mui/material";

export function NotFoundPage() {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h3">404</Typography>
      <Typography variant="body1">Page non trouvée</Typography>
    </Container>
  );
}