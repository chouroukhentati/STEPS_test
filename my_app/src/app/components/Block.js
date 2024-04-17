import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Block({ Titre, Description, Auteur }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  let borderColor;

  if (like > dislike) {
    borderColor = "2px solid green";
  } else if (like < dislike) {
    borderColor = "2px solid red";
  } else {
    borderColor = "2px solid gray";
  }
  return (
    <Box
      height={200}
      width="80%"
      my={4}
      display="flex"
      alignItems="center"
      sx={{ border: borderColor }}
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
            <Typography
              variant="body1"
              style={{
                fontSize: "12px",

                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {Description}
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Link
              href={{
                pathname: `/pages/DetailsBlocks/${Titre}/${Description}/${Auteur}`,
              }}
            >
              {" "}
              plus de détails
              <ChevronRightIcon />
            </Link>
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
