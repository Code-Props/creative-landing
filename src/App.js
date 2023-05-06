import { Navbar, ContentDetails, Footer } from './components';
import { Home, Contact, About } from './pages';
import { Box } from '@mui/system'
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

// all folder have index.js file, thats because import everything there and then export it so then we need to import components like in line 1 everything will be in one line and it will look cleaner

function App() {
  // create state to update state and make sure you type useState([]) we need [] for map over it
  const [ data, setData ] = useState([])
  // fatch data using useEffect when page is loaded 
  useEffect(() => {
    // making an HTTP GET request to the URL 'https://my-json-server.typicode.com/Achi00/start-fake-api/creative-landing' using the Axios , the url is just dummy data, you can copy this link and see that its just array on objects, this is created using json placeholder to showcase website design and fill it with content
    // is you want your own data create new data.js file go to https://my-json-server.typicode.com/Achi00/start-fake-api/creative-landing copy it and edit texts and image urls then import it and without axios useEffecr or useState map over it
    axios.get('https://my-json-server.typicode.com/Achi00/start-fake-api/creative-landing')
    // this is promise that gets esolved when the HTTP request is successful.
    // The res parameter in the arrow function represents the response object received from the server. 
      .then(res => {
        // here we are passing data to state on line 10, so we can use, display or update data
        setData(res.data)
      })
      // here chatching if there is error and console logging it
      .catch(err => {
        console.log(err)
      })
  }, []) //empty array means that the effect will only run once, during the initial render of the component.
  return (
    // create wrapper to add padding in the left and right side
    <Box px={{xs: '1rem', lg: '4rem'}} py='2rem'>
      {/* this is navbar if you are using vs code just Ctrl + click and you will navigated to the file */}
      <Navbar />
      {/* The Routes component acts as a container for defining routes, and the Route components define individual routes with their corresponding paths and components to render. also make sure you wrap app in BrowserRouter go into index.js import { BrowserRouter } from 'react-router-dom' and wrap the app  */}
      <Routes>
        {/* This defines a route with a path of "/" for navigate to it we have Link component in navbar <Link to="/">Home</Link> same for all 4 */}
        {/* The data (data={data}) prop is also passed to the <Home> component with the value of the data state variable, which can be accessed and used within the <Home> component. */}
        <Route path="/" element={<Home data={data} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        {/* This defines a route with a dynamic path parameter :id, which allows for capturing a variable value from the URL. For example, if the URL is /post/123, the id parameter will be set to 123.*/}
        <Route path={`/post/:id`} element={<ContentDetails />}/>
      </Routes>
      <Footer />
    </Box>
    // now start reviewing pages with explanation to fast navigate in VS Code Ctrl + click on Home on line 34 <Route path="/" element={< |Home|  data={data} />}/>
  );
}

export default App;
