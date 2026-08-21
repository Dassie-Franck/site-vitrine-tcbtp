import { Box, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export function TeamMemberCard({ member }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          mb: 2,
          aspectRatio: "1 / 1.1",
        }}
      >
        <Box
          component="img"
          src={member.photo}
          alt={member.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: 17, color: "secondary.main" }}>
        {member.name}
      </Typography>
      <Typography sx={{ fontSize: 13, color: "primary.main", mb: 1 }}>
        {member.role}
      </Typography>
      <Stack direction="row" spacing={0.5} justifyContent="center">
        <IconButton size="small" sx={{ color: "secondary.main" }}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: "secondary.main" }}>
          <TwitterIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}