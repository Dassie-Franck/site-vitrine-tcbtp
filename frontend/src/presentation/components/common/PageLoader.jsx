import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Animation de pulsation douce
const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`;

export function PageLoader({ isLoading = true }) {
  if (!isLoading) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: `${pulse} 2s infinite ease-in-out`,
        }}
      >
        {/* Assurez-vous que votre logo est bien accessible (ex: dans le dossier public) */}
        <Box
          component="img"
          src="/assets/logo.png" 
          alt="TC BTP Logo"
          sx={{
            width: { xs: '140px', md: '180px' },
            height: 'auto',
            objectFit: 'contain',
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#64748B',
            mt: 1,
          }}
        >
          TC BTP CONSTRUCTION
        </Typography>
      </Box>
    </Box>
  );
}

export default PageLoader;