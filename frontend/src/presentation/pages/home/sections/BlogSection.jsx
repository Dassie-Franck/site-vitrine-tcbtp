import { Box, Container, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import { useBlogPosts } from "../../../hooks/useBlogPosts";
import { BlogPostCard } from "../../../components/common/BlogPostCard";
import { keyframes } from "@mui/system";

// Animation de type "PowerPoint" (apparition fluide depuis le bas)
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export function BlogSection() {
  const { data: posts, isLoading, isError, error } = useBlogPosts();

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        animation: `${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{ fontSize: 14, letterSpacing: 1, textTransform: "uppercase", color: "text.secondary", mb: 1 }}
          >
            Notre Blog
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, fontSize: { xs: 28, md: 34 }, color: "secondary.main", mb: 2 }}
          >
            Actualités & Conseils Construction
          </Typography>
          <Box sx={{ width: 70, height: 3, bgcolor: "primary.main", mx: "auto" }} />
        </Box>

        {isLoading && (
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress />
          </Box>
        )}

        {isError && <Alert severity="error">{error.message}</Alert>}

        {posts && (
          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={post.id}
                sx={{
                  // Effet de décalage en cascade (staggered) pour chaque carte du blog
                  animation: `${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 * (index + 1)}s forwards`,
                  opacity: 0, // Départ invisible avant que l'animation ne se lance
                }}
              >
                <BlogPostCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default BlogSection;