"use client";
import React, { useState, useEffect, FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import Section from "./Section";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

const ProductList:FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(false);
  const [numCards, setNumCards] = useState(5);

  const fetchRandomCocktails = async () => {
    try {
      setLoading(true);
      const cocktailsArray: Cocktail[] = [...cocktails];
      for (let i = 0; i < 5; i++) {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        cocktailsArray.push(data.drinks[0]);
      }
      setCocktails(cocktailsArray);
      setLoading(false);
      setNumCards(numCards + 5);
    } catch (error) {
      console.error("Error fetching random cocktails:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCocktails();
  }, []);

  const gridCards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: '1rem',
  };

  return (
    <Container>
      <Section title="Cocktails" sub="The best cocktails in the city">
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <CircularProgress />
            <Typography variant="h6" component="p">
              Loading Cocktails...
            </Typography>
          </Box>
        ) : (
          <>
            <Box sx={gridCards}>
              {cocktails.slice(0, numCards).map((cocktail) => (
                <Card
                  key={cocktail.idDrink}
                  sx={{ backgroundColor: grey[900] }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                  />
                  <CardContent>
                    <Typography variant="h6" mb={1}>{cocktail.strDrink}</Typography>
                    <Typography variant="body2">
                      Category: {cocktail.strCategory}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
                <Button
                onClick={fetchRandomCocktails}
                variant="contained"
                color="primary"
                >
                Load more
                </Button>
            </Box>
          </>
        )}
      </Section>
    </Container>
  );
};

export default ProductList;
