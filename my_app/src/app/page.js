"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Block from "@/app/components/Block";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function Blocks() {
  const articles = [
    {
      id: 1,
      title: "Premier article",
      description:
        "C’est au xvie siècle, en particulier avec Francis Bacon (1561-1626), qu’est précisée l’idée que la science peut et doit s organiser en vue d une maîtrise de la nature et du développement des nations. En affirmant ainsi l’intérêt économique et politique du progrès scientifique, et la nécessité pour les gouvernants de ne pas mésestimer la valeur de leurs savants, Bacon pose les bases d une recherche scientifique institutionnalisée, encadrée par une politique scientifique participant à l’organisation des travaux des savants pour mieux servir le progrès économique et militaire de la nation. Dans son utopie de la Nouvelle Atlantide, Bacon imagine en particulier une « Maison de Salomon », institution préfigurant nos modernes établissements scientifiques, où sont rassemblés tous les moyens d une exploration scientifique du monde1. Cette Maison de Salomon inspirera la création de la Royal Society, en 16602.",
      auteur: "chourouk Hentati",
    },
    {
      id: 2,
      title: "Deuxième article",
      description:
        "C’est au xvie siècle, en particulier avec Francis Bacon (1561-1626), qu’est précisée l’idée que la science peut et doit s organiser en vue d une maîtrise de la nature et du développement des nations. En affirmant ainsi l’intérêt économique et politique du progrès scientifique, et la nécessité pour les gouvernants de ne pas mésestimer la valeur de leurs savants, Bacon pose les bases d une recherche scientifique institutionnalisée, encadrée par une politique scientifique participant à l’organisation des travaux des savants pour mieux servir le progrès économique et militaire de la nation. Dans son utopie de la Nouvelle Atlantide, Bacon imagine en particulier une « Maison de Salomon », institution préfigurant nos modernes établissements scientifiques, où sont rassemblés tous les moyens d une exploration scientifique du monde1. Cette Maison de Salomon inspirera la création de la Royal Society, en 16602.",
      auteur: "mohamed.J",
    },
    {
      id: 3,
      title: "Troisiéme article",
      description:
        "C’est au xvie siècle, en particulier avec Francis Bacon (1561-1626), qu’est précisée l’idée que la science peut et doit s organiser en vue d une maîtrise de la nature et du développement des nations. En affirmant ainsi l’intérêt économique et politique du progrès scientifique, et la nécessité pour les gouvernants de ne pas mésestimer la valeur de leurs savants, Bacon pose les bases d une recherche scientifique institutionnalisée, encadrée par une politique scientifique participant à l’organisation des travaux des savants pour mieux servir le progrès économique et militaire de la nation. Dans son utopie de la Nouvelle Atlantide, Bacon imagine en particulier une « Maison de Salomon », institution préfigurant nos modernes établissements scientifiques, où sont rassemblés tous les moyens d une exploration scientifique du monde1. Cette Maison de Salomon inspirera la création de la Royal Society, en 16602.",
      auteur: "asma belHaj",
    },
  ];

  // Créer une fonction de recherche
  function searchArticles(searchTerm) {
    // Filtrer les articles en fonction du terme de recherche
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredArticles;
  }

  // Utilisation de la fonction de recherche
  const searchTerm = "deuxième"; // Terme de recherche saisi par l'utilisateur
  const searchResults = searchArticles(searchTerm);
  console.log(searchResults); // Affiche les résultats de la recherche

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="grey" position="static">
          <Toolbar>
            <SearchIcon />

            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => searchArticles(e.target.value)}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="80%"
        spacing={2}
        marginTop={5}
      >
        {articles.map((item, key) => {
          return (
            <Block
              Titre={item.title}
              Description={item.description}
              Auteur={item.auteur}
            />
          );
        })}
      </Grid>
    </div>
  );
}
