"use client";
import { Box, Button, Modal, useTheme } from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuListItems from "./MenuListItems";
import Logo from "./Logo";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const MenuList = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: 0,
    width: 300,
    height: '100vh',
    bgcolor: theme.palette.primary.main,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <MenuListItems />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Button variant="text" sx={{ padding: "1rem" }} onClick={handleOpen}>
          <MenuOutlinedIcon sx={{ color: theme.palette.text.primary }} />
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button variant="text" onClick={handleClose} sx={{position: 'absolute', top: '1rem', right: '1rem'}}><CloseOutlinedIcon sx={{color: theme.palette.text.primary}} /></Button>
          <Box sx={{mt: 10}}>
          <MenuListItems onClick={handleClose} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MenuList;
