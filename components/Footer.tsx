import { Box, Typography } from '@mui/material'
import React from 'react'
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box sx={{backgroundColor: grey[900], py: 5, display: 'flex', justifyContent: 'center'}}>
        <Typography variant='body1' component='p' sx={{opacity: .5}}>Copyrights @ Rajendar | Cocktail 2023</Typography>
    </Box>
  )
}

export default Footer