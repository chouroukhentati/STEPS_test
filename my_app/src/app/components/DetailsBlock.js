import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function DetailsBlock({ Titre, Description, Auteur }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <Box
      width="80%"
      my={4}
      display="flex"
      alignItems="center"
      //sx={{ border: borderColor }}
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
  );
}
