import React from 'react'
import { Box, Button, Card, CardContent, Stack } from '@mui/material'
import { revealVariants, textVariant } from '../utils/motion'
import { AiFillGithub } from 'react-icons/ai';
import { SiSamsung } from 'react-icons/si';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { SiTesla } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  // here is nothing special just design responsive layout and add some framer motion animations like other pages
  return (
    <Box py="7rem"
    component={motion.div}
    variants={revealVariants}
    initial="hidden"
    whileInView="show"
    >
      {/* for reminder in textVariant(1.2) 1.2 is delayed which is pass as prop in src/utils/motion.js in line 49 */}
      <Stack direction="column" fontSize={45}>
        <motion.p variants={textVariant(1)}>About</motion.p>
        <motion.p variants={textVariant(1.2)}>We pride ourselves on partnering with founders to turn their ambitious visions into transformative brands.</motion.p>
        <Box display="flex" justifyContent="center" alignItems="center">
          <motion.img variants={textVariant(1.4)} src="https://www.creativeboom.com/uploads/articles/7b/7bae596a9d2d181fd8ac6ae9d6fa561ccf4a4a15_810.jpg" width="50%" alt="about" />
        </Box>
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
      <Stack direction="column" display="flex" fontSize={25} width="50%">
        <p>We specialize in crafting exceptional digital experiences to help our clients achieve their business goals.</p>
        <Button
            sx={{ backgroundColor: '#fff', color: '#000', textAlign: 'center', width: {xs: 150, md: 200, lg: 300},
            border: '1px solid #fff', borderRadius: '25px', '&:hover': {backgroundColor: '#000', color: '#fff', border: '1px solid #fff' }}} 
            size="medium">Explore</Button>
      </Stack>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Stack direction="column" display="flex" fontSize={25} width="50%">
        <p>2013, we have been creating designs that not only stand out, but also deliver results.</p>
        <Button
            sx={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', width: {xs: 150, md: 200, lg: 300},
            border: '1px solid #fff', borderRadius: '25px', '&:hover': {backgroundColor: '#fff', color: '#000' }}} 
            size="medium">Explore</Button>
      </Stack>
      </Box>
      <Box display="flex" mt="100px" flexWrap="wrap" gap="50px" alignItems="center" justifyContent="center">
        {/* card 1 */}
      <Card 
        component={motion.div}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        sx={{ width: {xs: 200, md: 400, lg: 600}, height: 400, backgroundColor: '#000', color:  '#f2f2f2', borderRadius: '35px', border: '1px solid #464646', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative'}}
        >
          <CardContent
            sx={{
                transition: '0.3s ease-in-out',
                '&:hover': {
                    scale: '1.1'
                }
            }}
          >
            <AiFillGithub size={250} />
          </CardContent>
        </Card>
        {/* card 2 */}
      <Card 
        component={motion.div}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        sx={{ width: {xs: 200, md: 400, lg: 600}, height: 400, backgroundColor: '#000', color:  '#f2f2f2', borderRadius: '35px', border: '1px solid #464646', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative'}}
        >
          <CardContent
            sx={{
                transition: '0.3s ease-in-out',
                '&:hover': {
                    scale: '1.1'
                }
            }}
          >
            <TfiMicrosoftAlt size={250} />
          </CardContent>
        </Card>
        {/* card 3 */}
      <Card 
        component={motion.div}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        sx={{ width: {xs: 200, md: 400, lg: 600}, height: 400, backgroundColor: '#000', color:  '#f2f2f2', borderRadius: '35px', border: '1px solid #464646', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative'}}
        >
          <CardContent
            sx={{
                transition: '0.3s ease-in-out',
                '&:hover': {
                    scale: '1.1'
                }
            }}
          >
            <SiSamsung size={250} />
          </CardContent>
        </Card>
        {/* card 4 */}
      <Card 
        component={motion.div}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        sx={{ width: {xs: 200, md: 400, lg: 600}, height: 400, backgroundColor: '#000', color:  '#f2f2f2', borderRadius: '35px', border: '1px solid #464646', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative'}}
        >
          <CardContent
            sx={{
                transition: '0.3s ease-in-out',
                // hover syntax looks like this in mui
                '&:hover': {
                    scale: '1.1'
                }
            }}
          >
            <SiTesla size={250} />
          </CardContent>
        </Card>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: '25px'}}>
      <Stack direction="column" display="flex" fontSize={25} alignItems="center" width="50%">
        <p>We believe that it is possible to live in a world where every product or service is designed with an easy-to-use experience in mind</p>
        <Button
            sx={{ backgroundColor: '#fff', color: '#000', textAlign: 'center', width: {xs: 150, md: 200, lg: 200},
            border: '1px solid #fff', borderRadius: '25px', '&:hover': {backgroundColor: '#000', color: '#fff' }}} 
            size="medium">Codeprops</Button>
      </Stack>
      </Box>
    </Box>
  )
}

export default About


// this page is done now go to src/pages/Contact.jsx