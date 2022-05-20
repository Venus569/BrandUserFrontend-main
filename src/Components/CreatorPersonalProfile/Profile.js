import BreadcrumbArea from './BreadcrumbArea'
import ProfileImageAreaBgWhite from './ProfileImageAreaBgWhite';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';
import { FooterWidgetArea } from './FooterWidgetArea';
import { InstagramFeedSection} from './InstagramFeedSection';
import { NavBar2 } from './Navbar2';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//import { Testcompo } from './Components/Testcompo';
/*
<link rel="shortcut icon" href="assets/img/favicon.ico" type="img/png" />
    <!--====== Animate Css ======-->
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <!--====== Bootstrap css ======-->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <!--====== Fontawesome css ======-->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
    <!--====== Flaticon css ======-->
    <link rel="stylesheet" href="assets/css/flaticon.css" />
    <link rel="stylesheet" href="assets/fonts/flaticon/flaticon-2.css" />

    <!--====== Magnific Popup css ======-->
    <link rel="stylesheet" href="assets/css/magnific-popup.css" />
    <!--====== Owl Carousel css ======-->
    <link rel="stylesheet" href="assets/css/slick.css" />
    <!--====== Nice Select ======-->
    <link rel="stylesheet" href="assets/css/nice-select.css" />
    <!--====== Mapbox ======-->
    <link rel="stylesheet" href="assets/css/leaflet.css" />
    <link rel="stylesheet" href="assets/css/mapbox-gl.min.css" />
    <!--====== Bootstrap Datepicker ======-->
    <link rel="stylesheet" href="assets/css/bootstrap-datepicker.css" />
    <!--====== Ion Rangeslider ======-->
    <link rel="stylesheet" href="assets/css/ion.rangeSlider.min.css" />
    <!--====== Default css ======-->
    <link rel="stylesheet" href="assets/css/default.css" />
    <!--====== Style css ======-->
    <link rel="stylesheet" href="assets/css/style.css" />*/

/*19-05

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
    import '../assets/css/style.css';*/
    
    import { useSelector, useDispatch } from "react-redux"
    import React from 'react';
    import { useEffect } from 'react';


function CreatorPersonalProfile() {
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
        <BreadcrumbArea/>
        <ProfileImageAreaBgWhite/>
        <BlogSection/>
        <InstagramFeedSection/>
        <FooterSubscibeArea/>
        <FooterWidgetArea/>
    </>
}</>
  );
}

export default CreatorPersonalProfile;
