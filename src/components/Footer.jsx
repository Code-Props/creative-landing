import React from 'react'
import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// custom animation
import { revealVariants } from '../utils/motion'

// this is dummy data which we will map over them and display them on page 
// make sure its inside [] otherwise you will get error footerLinks.map() is not function
const footerLinks = ['Twitter', 'Instagram', 'Youtube', 'Teams', 'Linkedin', 'Github', 'Dribble']
const footerNavigation = ['Company', 'About Us', 'Careers', 'News', 'Contact', 'Blog', 'Help']

const Footer = () => {
  return (
    <Box 
    component={motion.div}
    variants={revealVariants}
    initial="hidden"
    whileInView="show"
    className="footer" p={{xs: "1rem", md: '2rem', lg: '5rem'}} fontSize={{xs: "8px", md: '15px', lg: '18px'}} display="flex" flexDirection={{xs: "row", md: 'row', lg: 'row' }}  justifyContent="space-between" alignItems="center">
            <Stack  textAlign="center" width="100px" mt="25px" direction="column" gap="10px">
                {/* here are above array texts with map it looks more clean and understandable */}
                {footerLinks.map((item, i) => (
                    <Link  key={i}>{item}</Link>
                ))}
            </Stack>
            <Stack direction="column">
                <p>• Brand Strategy</p>
                <p>• Research & Insights</p>
                <p>• Content Marketing</p>
                <p>• User Experience Research</p>
            </Stack>
            <Stack direction="column">
                <p>• Web Design</p>
                <p>• UX & UI Design</p>
                <p>• Brand Identity</p>
                <p>• Video Production</p>
            </Stack>
            <Stack  textAlign="center" width="100px" mt="25px" direction="column" gap="10px">
                {/* same here just mapping over array */}
                {footerNavigation.map((item, i) => (
                    <Link key={i}>{item}</Link>
                ))}
            </Stack>
    </Box>
  )
}

export default Footer