import { Stack, Box } from '@mui/system'
// this is card component which we will map over and display on the page
import AllContent from '../components/AllContent'
// this is custom animation of framer motion
import { staggerContainer, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

// data is from src/app.js and its data we fetched from fake api
const Home = ({ data }) => {
  return (
    // py = padding left and padding right 
    // px = padding top and padding bottom
    // the Box element is used for wrapping and stack is managing the layout of its immediate children along the vertical or horizontal axis
    <Box py="7rem" px="1rem">
        <Stack 
        // This sets the component to be animated as a motion.div component, which is a wrapper around a regular div component that provides animation capabilities.
        component={motion.div}
        // This sets the initial animation state of the component to "hidden". 
        initial="hidden"
        // This sets the animation state of the component while it is in view to "show".
        whileInView="show"
        // the animation should trigger only once (once: true) when the component enters the viewport, and the animation should start when the component is 25% visible (amount: 0.25).
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        direction="column" 
        gap="4rem">
          {/* add motion. to every component you want to animate with framer */}
        <motion.p 
        // This sets the animation variants for the component, in this case its custom and 1.1 is depay passed through props
        variants={textVariant(1.1)}        
        style={{ width: '40%', fontSize: '24px'}}>
        We specialize in crafting exceptional digital experiences to help our clients achieve their business goals.
        </motion.p>
        <motion.p 
        variants={textVariant(1.3)}      
        style={{ fontSize: '40px', fontWeight: '700'}}>
        Product Design Experience
        </motion.p>
        </Stack>
        {/* card container */}
        <Box 
        display="flex" 
        flexWrap="wrap" 
        gap="5rem" 
        justifyContent="space-around">
          {/* this data is from app.js where we fetched dummy data from api and map over here */}
          {/* This is the map() function, a built-in JavaScript array method, which iterates over each item in the data array and executes a callback function for each item. */}
            {data.map((item, i) => (
              // This is the callback function that gets executed for each item in the data array. in this case we have 4 object in array so we will get 4 components
              // in VS Code Ctrl + click to navigate into AllContent.jsx file. we pass item as props and i is the unique key prop to each rendered AllContent component
              <AllContent item={item} key={i} />
            ))}
        </Box>
    </Box>
  )
}

// is you wonder where item and i came from in line 45 
// item: This is the individual item in the data array that is currently being processed by the map
// i: This is the index of the current item in the data array. It is also passed as a parameter to the callback function, and you can use it within the function to keep track of the position of each item in the array.

// home page is done now go to src/components/AllContent.jsx

export default Home