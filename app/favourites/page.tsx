"use client";
import React, { useState, FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getFavorites, setFavorites } from "../../utils/favoritesStorage";
import Section from "@/components/Section";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const Favorites: FC = () => {
  const theme = useTheme();
  const [favorites, setFavoritesState] = useState<Cocktail[]>(getFavorites());

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.idDrink !== id);
    setFavoritesState(updatedFavorites);
    setFavorites(updatedFavorites);
  };

  return (
    <Container>
      <Section
        title="Favourite Cocktails"
        sub="Check your selected favourite cocktails"
      >
        <Box marginTop={2}>
          {favorites.length > 0 ? (
            <Grid container spacing={2}>
              {favorites.map((cocktail) => (
                <Grid key={cocktail.idDrink} item md={4}>
                  <Card sx={{ marginBottom: 2, backgroundColor: grey[900] }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                    />
                    <CardContent sx={{ backgroundColor: grey[900] }}>
                      <Typography variant="h6">{cocktail.strDrink}</Typography>
                      <IconButton
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          color: theme.palette.primary.main,
                        }}
                        onClick={() => removeFavorite(cocktail.idDrink)}
                      >
                        <Typography variant="body1">
                          Remove from favorites
                        </Typography>
                        <FavoriteIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h6">
              There is no favourite cocktails added yet
            </Typography>
          )}
        </Box>
      </Section>
    </Container>
  );
};

export default Favorites;
