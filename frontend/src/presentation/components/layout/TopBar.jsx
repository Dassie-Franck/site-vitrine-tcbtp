import React from "react";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

export function TopBar() {
  return (
    <Box
      sx={{
        background: `
          linear-gradient(
            135deg,
            #70450C 0%,
            #A96C12 18%,
            #E6A329 40%,
            #F0AD2B 55%,
            #D4911D 75%,
            #9A610F 100%
          )
        `,
        py: { xs: 0.5, sm: 0.8 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Bloc de gauche */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3.5 }}
            alignItems="center"
            sx={{
              flexWrap: "wrap",
              rowGap: 0.5,
            }}
          >
            {/* Email */}
            <Stack direction="row" spacing={0.5} alignItems="center">
              <EmailOutlinedIcon
                sx={{
                  fontSize: { xs: 13, sm: 16 },
                  color: "#FFFFFF",
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  fontSize: {
                    xs: "0.65rem",
                    sm: "0.75rem",
                    md: "0.82rem",
                  },
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                contact@talem-construction-btp.com
              </Typography>
            </Stack>

            {/* Adresse */}
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  fontSize: { xs: 13, sm: 16 },
                  color: "#FFFFFF",
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  fontSize: {
                    xs: "0.65rem",
                    sm: "0.82rem",
                  },
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                 Douala / Yaoundé, Cameroun.
              </Typography>
            </Stack>

            {/* Téléphone */}
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{
                display: { xs: "flex", sm: "flex" },
              }}
            >
              <PhoneIcon
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  color: "#FFFFFF",
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  fontSize: {
                    xs: "0.65rem",
                    sm: "0.82rem",
                  },
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                +237 6 99 63 38 82
              </Typography>
            </Stack>
          </Stack>

          {/* Bloc réseaux sociaux */}
          <Stack
            direction="row"
            spacing={{ xs: 0.5, md: 1 }}
            alignItems="center"
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <IconButton
              size="small"
              sx={{
                color: "#FFFFFF",
                p: 0.3,
              }}
            >
              <FacebookIcon
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                }}
              />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                color: "#FFFFFF",
                p: 0.3,
              }}
            >
              <TwitterIcon
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                }}
              />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                color: "#FFFFFF",
                p: 0.3,
              }}
            >
              <InstagramIcon
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                }}
              />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                color: "#FFFFFF",
                p: 0.3,
              }}
            >
              <LanguageIcon
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default TopBar;