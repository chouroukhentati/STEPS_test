"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function DetailsBlocks() {
  const searchParams = useSearchParams();
  console.log("rrtr", searchParams);
  //const Titre = searchParams.get("Titre")[0].title;
  //const Description = searchParams.get("")[0].description;
  //const Auteur = searchParams.get("")[0].auteur;

  /*   const Titre = "Premier article";
  const Description =
    "C’est au xvie siècle, en particulier avec Francis Bacon (1561-1626), qu’est précisée l’idée que la science peut et doit s organiser en vue d une maîtrise de la nature et du développement des nations. En affirmant ainsi l’intérêt économique et politique du progrès scientifique, et la nécessité pour les gouvernants de ne pas mésestimer la valeur de leurs savants, Bacon pose les bases d une recherche scientifique institutionnalisée, encadrée par une politique scientifique participant à l’organisation des travaux des savants pour mieux servir le progrès économique et militaire de la nation. Dans son utopie de la Nouvelle Atlantide, Bacon imagine en particulier une « Maison de Salomon », institution préfigurant nos modernes établissements scientifiques, où sont rassemblés tous les moyens d une exploration scientifique du monde1. Cette Maison de Salomon inspirera la création de la Royal Society, en 16602.";
  const Auteur = "chourouk Hentati"; */

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <Grid container justifyContent="center">
      <Box
        width="80%"
        my={4}
        display="flex"
        alignItems="center"
        sx={{ border: "3px solid gray" }}
      >
        <Grid container direction="column" margin={2}>
          <Grid container justifyContent="flex-start" alignItems="center">
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {Titre}
            </p>
          </Grid>
          <Grid container justifyContent="center">
            <Grid container justifyContent="flex-start">
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                {Description}
              </p>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" alignItems="center">
            <p
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bolder",
              }}
            >
              {Auteur}
            </p>
          </Grid>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Button
              color="success"
              variant="text"
              onClick={() => setLike(like + 1)}
            >
              j'aime({like})
            </Button>
            <Button
              color="error"
              variant="text"
              onClick={() => setDislike(dislike + 1)}
            >
              j'aime pas({dislike})
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
