import { Card, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";

export function ProjectCard({ project }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="200"
        image={project.coverImage || "/assets/placeholder.jpg"}
        alt={project.title}
      />
      <CardContent>
        <Chip label={project.category} size="small" sx={{ mb: 1 }} />
        <Typography variant="h6" component="h3" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Client : {project.client}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}