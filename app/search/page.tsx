"use client";
import React, { useState, useEffect, ChangeEvent, FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  TextField,
  IconButton,
  Autocomplete,
  Grid,
  useTheme,
} from "@mui/material";
import { blue, grey, orange, red } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Section from "@/components/Section";
import { getFavorites, setFavorites } from "../../utils/favoritesStorage";

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const Search: FC = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [favorites, setFavoritesState] = useState<Cocktail[]>(getFavorites());
  const [cocktailNames, setCocktailNames] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => {
        const names = data.drinks.map((drink: Cocktail) => drink.strDrink);
        setCocktailNames(names);
      })
      .catch((error) => {
        console.error("Error fetching cocktail names:", error);
      });
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error searching for cocktails:", error);
    }
  };

  const toggleFavorite = (cocktail: Cocktail) => {
    if (favorites.some((fav) => fav.idDrink === cocktail.idDrink)) {
      const updatedFavorites = favorites.filter((fav) => fav.idDrink !== cocktail.idDrink);
      setFavoritesState(updatedFavorites);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, cocktail];
      setFavoritesState(updatedFavorites);
      setFavorites(updatedFavorites);
    }
  };
  

  return (
    <Container>
      <Section
        title="Search Cocktails"
        sub="Search for the best cocktail in the city"
      >
        <Box
          sx={{ display: { xs: "grid", sm: "flex" } }}
          alignItems="center"
          marginBottom={2}
        >
          <Autocomplete
            sx={{ flex: 2 }}
            freeSolo
            options={cocktailNames}
            value={searchTerm}
            onChange={(_, newValue) => setSearchTerm(newValue || "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for a cocktail"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Button
            sx={{ borderRadius: 0, mt: { xs: 2, sm: 0 } }}
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Grid container spacing={2} mt={4}>
          {cocktails.map((cocktail) => (
            <Grid key={cocktail.idDrink} item xs={12} sm={6} md={4}>
              <Card sx={{ marginBottom: 2, backgroundColor: grey[900] }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                />
                <CardContent sx={{ backgroundColor: grey[900] }}>
                  <Typography variant="h6" mb={2}>
                    {cocktail.strDrink}
                  </Typography>
                  <IconButton
                    disableRipple
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      color: favorites.some(
                        (fav) => fav.idDrink === cocktail.idDrink
                      )
                        ? theme.palette.primary.main
                        : grey[500],
                      padding: 0,
                    }}
                    onClick={() => toggleFavorite(cocktail)}
                  >
                    <Typography variant="body1">Add to favourite</Typography>
                    <FavoriteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Search;
