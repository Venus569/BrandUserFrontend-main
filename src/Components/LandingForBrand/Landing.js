/*
import '../assets/css/animate.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slick.css';
import '../assets/css/nice-select.css';
import '../assets/css/leaflet.css';
import '../assets/css/mapbox-gl.min.css';
import '../assets/css/bootstrap-datepicker.css';
import '../assets/css/ion.rangeSlider.min.css';
import '../assets/css/default.css';
import '../assets/css/style.css';
*/
import { InstagramFeedSection } from './InstagramFeedSection';
import { NavBar2 } from './Navbar2';
import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './Components/BlogSection/Search';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';
import { useSelector, useDispatch } from "react-redux"
import React from 'react';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { changeLoginSuccess } from '../../actions/changeLoginSuccess';

function BrandLanding() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

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
      <NavBar2 userdet={user.user}/>
      <BreadcrumbArea />
      <BlogSection />
      <InstagramFeedSection />
      <FooterSubscibeArea />
      </>
    }
    </>
  );
}

export default BrandLanding;
