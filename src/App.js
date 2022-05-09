import Signup from "./Components/Signup/Signup"
import Landing from "./Components/Landing/Landing"
import Profile from "./Components/Profile/Profile"
import CreatorProfile from "./Components/CreatorProfile/Profile";
import Videos from "./Components/VideosPage/Videos";
import Images from "./Components/ImagesPage/Images"
import BrandLanding from "./Components/LandingForBrand/Landing";
import { Route, Routes } from 'react-router-dom'
import { useEffect,useState } from "react";


import { ProfileBuilder } from "./Components/ProfileBuilder";
import CreatorPersonalProfile from "./Components/CreatorPersonalProfile/Profile";
import BrandLogin from "./Components/BrandLogin/Login";
import BrandSignUp from "./Components/BrandSignup/SignUp";
//import Login from "./Components/Login/Login";//influencer login
import CreatorLogin from './Components/CreatorLogin/Login'
import CreatorSignup from "./Components/CreatorSignup/Signup";
//import InfluSignup from "./Components/InfluSignup/Login";
import Protected from './Components/Protected'


const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/creator',
  
});







function App() {
  
  const [isLoggedIn,setLoogy]=useState(true);


  return (
    <Routes>
      <Route path='brandlanding'
 element={
 <Protected>
 <BrandLanding />
 </Protected>
 }
    />

<Route path='creatorlanding'
 element={
 <Protected>
 <Landing />
 </Protected>
 }

 
    />

<Route path='creatorpersonalprofile'
 element={
 <Protected>
 <CreatorPersonalProfile/>
 </Protected>
 }

 
    />
      <Route exact path="/" element={<h1>Hello World!!!</h1>}/>
      <Route path='creatorlogin' element={<CreatorLogin/>}/>
      <Route path='brandlogin' element={<BrandLogin/>}/>
      <Route path='creatorsignup' element={<CreatorSignup/>}/>
      <Route path='brandsignup' element={<BrandSignUp/>}/>
      {/*<PrivateRoute component={B} path="/dashboard" exact />
     {/* <Route path='brandlanding' element={<BrandLanding/>}/>*/}
     
      <Route path='creatorprofile' element={<CreatorProfile/>}/>
      <Route path='videos' element={<Videos/>}/>
      <Route path='images' element={<Images/>}/>
      <Route path='profilebuilder' element={<ProfileBuilder/>}/>

    </Routes>
  );
}

export default App;
