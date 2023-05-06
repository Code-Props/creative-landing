import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Stack, Typography } from '@mui/material';
import { revealVariants, textVariant } from '../utils/motion'
import { motion } from 'framer-motion';

const ContentDetails = () => {
    // get id prom url for example if you are navigated into website.com/post/3 we are gonna take that number 3 and use it for fetch only date we need from api on line 16
    const { id } = useParams()
    const [ data, setData ] = useState([])
    // set loading state to show loading and empty black screen or some other kind of problems so set it to false
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        // set loading to true for show loading text
        // make sure you position loading states same way because text is compiled top to bottom otherwise it will not work
        setLoading(true)
        // fetch data using axios and add our post id which we take from params (if you dont know what this means then you will redirecte on for example: http://localhost:3000/post/1 out id is that number 1 ) to fetch only data we want
        axios.get(`https://my-json-server.typicode.com/Achi00/start-fake-api/creative-landing/${id}`)
        .then(res => {
            // update state on line 12
            setData(res.data)
            // set loading to false to remove loading
            setLoading(false)
        })
        .catch(err => {
            // chatch and console log error
            console.log(err)
        })
    }, []) //because of [] this useEffect will run only once when page loads
    // destructure data for make code cleaner and dont write data.img, data.name and ect.
    const { img, img2, img3, img4, name, paragraph, paragraph2, paragraph3, header } = data

    
  return (
      <Box>
        {/* if loading is true like in line 18 show loading... if data is fetched and losding is false like in line 25 setLoading(false) show data */}
        {loading ? (<p>Loading...</p>) : (
        <Stack 
        // on this way we will make mui elements animateble by framer
        component={motion.div}
        // our custon animation
        variants={revealVariants}
        // by default it will be hidden
        initial="hidden"
        // if its on viewport, element will be visible
        whileInView="show"
        sx={{p: {xs: '1rem', md: '3rem', lg: '5rem' }}} direction="column" gap="100px">
            <Stack 
            component={motion.div}
            // for reminder in textVariant(1.2) 1.2 is delayed which is pass as prop in src/utils/motion.js in line 49
            variants={textVariant(1.1)}
            direction="column">
                <Stack direction={{lg: "row", md: "row", xs: 'column'}} justifyContent="space-between">
                <Stack direction="column">
                <Typography fontSize={35}>{name}</Typography>
                <img style={{padding: '1rem'}} src={img} width="200px" alt="logo" />
                </Stack>
                <p style={{fontWeight: '400', fontSize: '16px', lineHeight: '25px', padding: '2rem', width: '300px'}}>{header}</p>
                </Stack>
            </Stack>
            <Stack gap="50px" textAlign="center" color="#fff">
                <Stack p={5} direction='column' backgroundColor="#161A1D" borderRadius="35px">
                
                <img className='details-img' src={img2} alt="Image" />
                </Stack>
                <Stack p={5} direction='column' backgroundColor="#161A1D" borderRadius="35px">
                <p style={{fontWeight: '400', fontSize: '18px', lineHeight: '25px', padding: '2rem'}}>{paragraph}</p>
                <img className='details-img' src={img3} alt="Image" />
                </Stack>
                <Stack p={5} direction='column' backgroundColor="#161A1D" borderRadius="35px">
                <p style={{fontWeight: '400', fontSize: '18px', lineHeight: '25px', padding: '2rem'}}>{paragraph2}</p>
                <img className='details-img' src={img4} alt="Image" />
                <p style={{fontWeight: '400', fontSize: '18px', lineHeight: '25px', padding: '2rem'}}>{paragraph3}</p>
                </Stack>
            </Stack>
        </Stack>
        )}
    </Box>
  )
}

export default ContentDetails


// this page is done now go to src/pages/About.jsx