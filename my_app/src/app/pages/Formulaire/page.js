"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Formulaire() {
  const router = useRouter();

  return (
    <Grid container justifyContent="center">
      <Box
        width="80%"
        my={4}
        display="flex"
        alignItems="center"
        sx={{ border: "3px solid gray" }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 5, width: "50%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Titre" variant="standard" />
          <TextField id="standard-basic" label="Auteur" variant="standard" />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="standard"
          />
        </Box>
      </Box>
      <Button variant="contained" onClick={() => router.push(`/`)}>
        Ajouter ton article
      </Button>
    </Grid>
  );
}
