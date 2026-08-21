import { Container, Typography } from "@mui/material";
import { PageHero } from "../../components/common/PageHero";

export function QuotePage() {
  return (
    <>
      <PageHero title="Demande de Devis" backgroundImage="/assets/quote-hero.jpg" />
      <Container sx={{ py: 8 }}>
        <Typography variant="h3">Demande de Devis — à construire</Typography>
      </Container>
    </>
  );
}