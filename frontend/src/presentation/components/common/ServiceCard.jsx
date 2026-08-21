import { Card, CardContent, Typography, Box } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

export function ServiceCard({ service }) {
  return (
    <Card sx={{ height: "100%", p: 2 }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <ConstructionIcon sx={{ fontSize: 40, color: "primary.main" }} />
        </Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}