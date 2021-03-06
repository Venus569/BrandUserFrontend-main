

import { InstagramFeedSection } from './InstagramFeedSection';
import { NavBar2 } from './Navbar2';
//import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './Components/BlogSection/Search';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';
import { useNavigate } from 'react-router-dom';
import { changeLoginSuccess } from '../../actions/changeLoginSuccess';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux"
import React from 'react';
import { useEffect } from 'react';
function Landing() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const nevigate = useNavigate();


  const [show, setShow] = React.useState(false);

  useEffect(() => {
    console.log("userr effect");
    // Update the document title using the browser API
    if(!(user.user))
    { 
      var x=localStorage.getItem('userlogintoken');
     console.log("user token");
      console.log(x);
    if(!x)
    {
      nevigate('/creatorlogin');
    }
    else{
      var y=JSON.parse(x);
    dispatch(changeLoginSuccess(y));
    setShow(true);
  }
  }
  else
  setShow(true);
  },[]);



  return (
    <>{

    show&&
    <>
    
      <NavBar2 userdeta={user.user}/>
      <BlogSection />
      <InstagramFeedSection />
      <FooterSubscibeArea />
    </>
}</>
  );
}

export default Landing;
