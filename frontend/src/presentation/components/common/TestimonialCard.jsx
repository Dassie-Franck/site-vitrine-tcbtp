import { Box, Typography, Avatar, Stack, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export function TestimonialCard({ testimonial }) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        p: 4,
        height: "100%",
        textAlign: "center",
      }}
    >
      <FormatQuoteIcon sx={{ fontSize: 36, color: "primary.main", mb: 1 }} />

      <Typography sx={{ fontSize: 14.5, color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
        {testimonial.content}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Avatar src={testimonial.photo} alt={testimonial.authorName} sx={{ width: 50, height: 50 }} />
        <Box sx={{ textAlign: "left" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 15, color: "secondary.main" }}>
            {testimonial.authorName}
          </Typography>
          <Typography sx={{ fontSize: 13, color: "primary.main" }}>
            {testimonial.authorRole}
          </Typography>
        </Box>
      </Stack>

      <Rating value={testimonial.rating} readOnly size="small" sx={{ mt: 1.5 }} />
    </Box>
  );
}