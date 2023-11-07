import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Pricing from "@/app/pricing/Pricing";
import Button from "@mui/material/Button";
import axios from "axios";

export default function StarredPage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pricing />
      </Box>
    </Container>
  );
}
