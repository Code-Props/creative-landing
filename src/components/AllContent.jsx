import { Box, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import React, { useState } from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { revealVariants } from '../utils/motion'
import { motion } from 'framer-motion'

// {item} is from homepage on line 47 where we mapped over data which was passed through props from app.js file
const AllContent = ({ item }) => {
  // here we create state to check if card is hovered to create hover content reveal animation
    const [hover, setHover] = useState(false)
    // now we the destructuring assignment allows you to create three new variables (id, img, and name) from item 
    //  because of that you dont need to type for example: item.id, item.name and ect.
    const { id, img, name } = item
  return (
    <Card 
    component={motion.div}
    variants={revealVariants}
    initial="hidden"
    whileInView="show"
    // sx={{}} is same as react style={{}} but have more variation in built features for more visit mui docs
    // https://mui.com/material-ui/react-box/#the-sx-prop
    // width: {xs: 200, md: 400, lg: 600} here we are adjusting width for all devices
    sx={{ width: {xs: 200, md: 400, lg: 600}, height: 400, backgroundColor: '#161a1d', color: '#f2f2f2', borderRadius: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative'}}
    // check if mouse cursor is over the element
    onMouseOver={() => setHover(true)}
    // check if mouse cursor left the element
    onMouseOut={() => setHover(false)}
    >
      {/* if cursor is hovering over element we are showing icon which was imported from react-icons on line 3 */}
      {hover === true ? (
        <Box sx={{position: 'absolute', inset: '0', margin: '20px', width: '40px'}}>
          <BsFillArrowUpRightCircleFill size={40} />
        </Box>
      ) : 
      // if not return null
      (
        null  
      )}
      {/* content card imported from mui */}
      <CardContent
        sx={{
            transition: '0.3s ease-in-out',
            '&:hover': {
                scale: '1.1'
            }
        }}
      >
        {/* using card media to display image which is from our dummy api */}
        <CardMedia 
          sx={{height: {xs: 100, md: 180, lg: 250}}}
          component="img"
          width="auto"
          image={img}
          alt="card Image" 
        />
      </CardContent>
      <CardActions sx={{pb: '20px'}}>
        {/* from this button we are navigateing into ContentDetails.jsx page */}
        <Button
        href={`/post/${id}`}
        sx={{ backgroundColor: '#495057', color: '#f2f2f2', textAlign: 'center' }} 
        size="medium">{name}</Button>
      </CardActions>
    </Card>
  )
}

export default AllContent

// this page is done now go to src/components/ContentDetails.jsx