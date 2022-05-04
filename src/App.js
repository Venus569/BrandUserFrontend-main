import Signup from "./Components/Signup/Signup"
import Landing from "./Components/Landing/Landing"
import Profile from "./Components/Profile/Profile"
import Videos from "./Components/VideosPage/Videos";
import Images from "./Components/ImagesPage/Images"
import BrandLanding from "./Components/LandingForBrand/Landing";
import { Route, Routes } from 'react-router-dom'
import { useEffect } from "react";

import BrandLogin from "./Components/BrandLogin/Login";
import BrandSignUp from "./Components/BrandSignup/SignUp";
//import Login from "./Components/Login/Login";//influencer login
import CreatorLogin from './Components/CreatorLogin/Login'
import CreatorSignup from "./Components/CreatorSignup/Login";
//import InfluSignup from "./Components/InfluSignup/Login";


const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/creator',
  
});







function App() {
  


  return (
    <Routes>
      <Route exact path="/" element={<h1>Hello World!!!</h1>}/>
      <Route path='creatorlogin' element={<CreatorLogin/>}/>
      <Route path='brandlogin' element={<BrandLogin/>}/>
      <Route path='creatorsignup' element={<CreatorSignup/>}/>
      <Route path='brandsignup' element={<BrandSignUp/>}/>
      
      <Route path='brandlanding' element={<BrandLanding/>}/>
      <Route path='home' element={<Landing/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='videos' element={<Videos/>}/>
      <Route path='images' element={<Images/>}/>


    </Routes>
  );
}

export default App;
