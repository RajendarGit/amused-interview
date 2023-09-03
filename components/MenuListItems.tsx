"use client";
import React, { FC } from "react";
import { Button, styled, useTheme } from "@mui/material";
import Link from "next/link";

interface Props {
  onClick?: () => void;
}

const MenuItems = [
  { id: 1, name: "Home", link: "./" },
  { id: 2, name: "About Us", link: "/about-us" },
  { id: 3, name: "Search", link: "/search" },
  { id: 4, name: "Favourites", link: "/favourites" },
];

const MenuListWrap = styled("ul")(({ theme }) => ({
  display: "grid",
  gap: "2rem",
  listStyle: "none",
  fontSize: "1.2rem",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    gap: "1rem",
  },
}));

const MenuListItems: FC<Props> = ({ onClick }) => {
  const theme = useTheme();
  return (
    <MenuListWrap>
      {MenuItems.map((item) => (
        <li key={item.id}>
          <Button variant="text" onClick={onClick}>
            <Link
              href={item.link}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                letterSpacing: ".2rem",
              }}
            >
              {item.name}
            </Link>
          </Button>
        </li>
      ))}
    </MenuListWrap>
  );
};

export default MenuListItems;
