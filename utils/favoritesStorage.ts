import {Cocktail} from '../app/search/page';

export const getFavorites = (): Cocktail[] => {
  const favoritesData = localStorage.getItem('favorites');
  return favoritesData ? JSON.parse(favoritesData) : [];
};

export const setFavorites = (favorites: Cocktail[]): void => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
