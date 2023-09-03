import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import MenuList from './MenuList'

const Navigation = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{py: 2}}>
      <Toolbar sx={{justifyContent: {xs: 'space-between', md: 'center'}}}>
        <Logo />
        <MenuList />
      </Toolbar>
    </AppBar>
  )
}

export default Navigation