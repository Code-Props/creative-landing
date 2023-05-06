import React from 'react'
import { Stack, Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
// custom animation. this will reveal navbar when it's in viewport
import { revealVariants } from '../utils/motion'
// our logo
// import logo from '../cp.png'

const Navbar = () => {
  return (
    <Box 
    component={motion.div}
    variants={revealVariants}
    initial="hidden"
    whileInView="show"
    sx={{display: 'flex', justifyContent: 'space-between'}}> 
          <Link to="/">
            {/* <img width={60} src={logo} alt="logo" /> */}
          </Link>
        <AiOutlineMenu size={30} style={{display: 'none'}}/> 
        <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: "0px", md: '25px'}} fontSize={22}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </Stack>
    </Box>
  )
}

export default Navbar