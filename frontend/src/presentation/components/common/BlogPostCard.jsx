import { Box, Typography, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

export function BlogPostCard({ post }) {
  return (
    <Box sx={{ bgcolor: "white", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", height: "100%" }}>
      <Box sx={{ height: 200, overflow: "hidden" }}>
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <PersonIcon sx={{ fontSize: 15, color: "primary.main" }} />
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>{post.author}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <CalendarTodayIcon sx={{ fontSize: 14, color: "primary.main" }} />
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>{post.formattedDate}</Typography>
          </Stack>
        </Stack>
        <Typography sx={{ fontWeight: 700, fontSize: 17, color: "secondary.main", mb: 1.5, lineHeight: 1.4 }}>
          {post.title}
        </Typography>
        <Typography sx={{ fontSize: 13.5, color: "text.secondary", lineHeight: 1.7 }}>
          {post.excerpt}
        </Typography>
      </Box>
    </Box>
  );
}