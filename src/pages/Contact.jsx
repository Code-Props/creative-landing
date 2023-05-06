import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { revealVariants, textVariant } from '../utils/motion'
import { motion } from 'framer-motion';
// logic is same import components add motion to every animating element and variants with props
const Contact = () => {
  return (
    <Box py="7rem"
    component={motion.div}
    variants={revealVariants}
    initial="hidden"
    whileInView="show"
    >
      {/*head text  */}
      <Stack direction="column" fontSize={45}>
        <motion.p variants={textVariant(1)} >Let's talk</motion.p>
        <motion.p variants={textVariant(1.2)} >Connect for make creative solutions</motion.p>
      </Stack>
      {/* animated links  */}
      <Stack direction="column">
      <motion.ul variants={textVariant(1.4)} >
        <li>
          <a href="#" className="link">
            <span className="word">
              <span className="char" data-char="Hello@codeprops.com">Hello@codeprops.com</span>
            </span>
          </a>
        </li>
      </motion.ul>
      <Stack direction="row">
      <motion.ul variants={textVariant(1.6)} >
        <li>
          <a href="#" className="media-link">
            <span className="word">
              <span className="char" data-char="twitter">
                Twitter
              </span>
                <BsFillArrowUpRightCircleFill className='icon' size={15}/>
            </span>
          </a>
        </li>
      </motion.ul>
      <motion.ul variants={textVariant(1.8)} >
        <li>
          <a href="#" className="media-link">
            <span className="word">
              <span className="char" data-char="dribble">
                Dribble
              </span>
                <BsFillArrowUpRightCircleFill className='icon' size={15}/>
            </span>
          </a>
        </li>
      </motion.ul>
      </Stack>
      </Stack>
      {/* location section */}
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Stack direction="column" fontSize={25}>
        <p>New York</p>
        <p style={{color: 'rgba(255,255,255, 0.5)'}}>2210 18th Street <br />New York NY, 80024</p>
      </Stack>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
      <Stack direction="column" display="flex" fontSize={25} width="50%">
        <p>We specialize in crafting exceptional digital experiences to help our clients achieve their business goals.</p>
        <Button
            sx={{ backgroundColor: '#fff', color: '#000', textAlign: 'center', width: {xs: 250, md: 200, lg: 300},
            border: '1px solid #fff', borderRadius: '25px', '&:hover': {backgroundColor: '#000', color: '#fff', border: '1px solid #fff' }}} 
            size="medium">Explore</Button>
      </Stack>
      </Box>
    </Box>
  )
}

export default Contact