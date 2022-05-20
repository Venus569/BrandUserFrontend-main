import React from 'react'
import { NavBar2 } from './Navbar2';
import BreadcrumbArea from './BreadcrumbArea';
import { ProfileBuilderFormSection } from './ProfileBuilderFormSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { changeLoginSuccess } from '../../actions/changeLoginSuccess';
//import React from 'react';
import { useEffect } from 'react';

export const ProfileBuilder = () => {
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
      
      <BreadcrumbArea />
      <ProfileBuilderFormSection />
       <FooterSubscibeArea />
       <NavBar2 userdeta={user.user}/>
      </>
}</>
  )
}
