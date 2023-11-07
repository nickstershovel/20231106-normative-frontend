'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Pricing from "@/app/pricing/Pricing";
import {useGetPokemonByNameQuery} from "@/app/services/pokemon";

export default function StarredPage() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

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
        <div className="App">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data.species.name}</h3>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
          ) : null}
        </div>
      </Box>
    </Container>
  );
}