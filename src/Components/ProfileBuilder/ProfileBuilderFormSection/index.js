/*profileImg: req.body.profileImg,
follower: req.body.follower,
tiktok: req.body.tiktok,
moj: req.body.moj,
Reels: req.body.Reels,
description: req.body.description,
address: req.body.address
platform
skill
*/
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//import { InstagramLogin } from "@amraneze/react-instagram-login";

//import Facebook from "../img/facebook.png";
//import Github from "../img/github.png";
import { useDropzone } from "react-dropzone"
import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import {changeLoginSuccess} from '../../../actions/changeLoginSuccess'
import { useNavigate } from 'react-router-dom';


//import axios from 'axios';

//const axios = require('axios');


 


export const ProfileBuilderFormSection = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const nevigate = useNavigate();

   /* const responseInstagram = (response) => {
        console.warn(response);
      };*/
    

    const [files, setFiles] = useState([]);

    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(null);
    const [userDetails, setUserDetails] = React.useState();
    const [skills, setSkills] = React.useState([]);
    const [currentskill,setCurrentskill]= React.useState('');
    const [showcustom, setShowcustom] = React.useState(false);

    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        
          acceptedFiles.forEach((file) =>{
              setFiles(oldArray => [...oldArray,
                  Object.assign(file, {preview: URL.createObjectURL(file)})] )
              
              })
        
      },
    })
    const images = files.map((file) => (
      <div key={file.name}>
        <div>
          <img src={file.preview}  alt="preview" />
        </div>
      </div>
    ))

    function handleChange(e){
        const {name, value} = e.target;
        setUserDetails(userDetails => {
            return {
                ...userDetails,
                [name]: value
            }
        });
      }

      function handleAddCustom(){
          console.log(currentskill);
        setSkills(skills=>[...skills,currentskill]);
        setCurrentskill('');
        console.log(skills);
        setShowcustom(false);
      }
      const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };




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


      const getProfile = () => {
        fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            setProfile(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getProfile();
      console.log(profile);
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");


      },[]);

      








  return (
    <>{

      
      show&&
    
     
    <div class="container mt-100">
        <div class="row">
        <div class="col-lg-4">
        <div className="loginButton google" onClick={google}>
           
            Google
          </div>
          {
            profile&&
          <div>
            <p>{profile.displayName}</p>
                </div>
}
          <p>{user.user.name}</p><h2>Add Socials</h2></div>
    <div class="col-lg-8">
    
    {/*
<InstagramLogin
      clientId="375823624566243"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      redirectUri="https://localhost:3002/"
    >
     
      <span> Login with Instagram</span>
    </InstagramLogin>

   <p style={{color:"green"}}>Account Verified <FontAwesomeIcon icon={faCheck} size="1.5x" color="green" /></p>



    <p>dasddsfsdfsdfsdfsdfsf</p>



  



    
  */}



                                 <div class="mb-50 mb-50">
                                   <form>
                                 <label for="twitter" class="form-label"><h3>Twitter account</h3></label>
                                <input type="url" class="form-control" onChange={handleChange} placeholder="twitter.com/bestcreator" name="twitter" />
                                <p style={{color:"green"}}>Account Verified <FontAwesomeIcon icon={faCheck} size="1.5x" color="green" /></p>
                                <button type="button" class="btn btn-primary mt-10">Save</button>

                                </form>
                                <button type="button" class="btn btn-primary mt-10 mr-10">Verify</button>
                                 <button type="button" class="btn btn-primary mt-10">Get Follower Count</button>
                                 </div>





                                 <div class="mb-50 mb-50">
                                 <form>
                                 <label for="linkedin" class="form-label"><h3>LinkedIn account</h3></label>
                                <input type="url" class="form-control" onChange={handleChange} placeholder="linkedin.com/bestcreator" name="linkedin" />
                                <p style={{color:"green"}}>Account Verified <FontAwesomeIcon icon={faCheck} size="1.5x" color="green" /></p>
                                <button type="button" class="btn btn-primary mt-10">Save</button>
                                       </form>  
                                       <button type="button" class="btn btn-primary mt-10 mr-10">Verify</button>
                                 <button type="button" class="btn btn-primary mt-10">Get Follower Count</button>                     
                                 </div>

                                 <div class="mb-50 mb-50">
                                   <form>
                                 <label for="tiktok" class="form-label"><h3>Tiktok account</h3></label>
                                <input type="url" class="form-control" onChange={handleChange} placeholder="tiktok.com/bestcreator" name="tiktok" />
                                <p style={{color:"green"}}>Account Verified <FontAwesomeIcon icon={faCheck} size="1.5x" color="green" /></p>
                                <button type="button" class="btn btn-primary mt-10">Save</button>

                                </form>
                                <button type="button" class="btn btn-primary mt-10 mr-10">Verify</button>
                                 <button type="button" class="btn btn-primary mt-10">Get Follower Count</button>   
                                 </div>

                            

                                <div class="mb-50 mb-50">
                                  <form>
                                <label for="moj" class="form-label"><h3>Moj account</h3></label>
                                    <input type="url" class="form-control" onChange={handleChange} placeholder="moj.com/bestcreator" name="moj" />
                                    <p style={{color:"green"}}>Account Verified <FontAwesomeIcon icon={faCheck} size="1.5x" color="green" /></p>
                                    <button type="button" class="btn btn-primary mt-10">Save</button>

                                    </form>
                                <button type="button" class="btn btn-primary mt-10 mr-10">Verify</button>
                                 <button type="button" class="btn btn-primary mt-10">Get Follower Count</button>   
                                 </div>

                               


                             

                                <div class="mb-50 mb-50">
                                  <form>
                                <label for="reels" class="form-label"><h3>Reels account</h3></label>
                                    <input type="url" class="form-control" onChange={handleChange} placeholder="reels.com/creator" name="reels"  />
                                    <p style={{color:"green"}}>Account Verified <FontAwesomeIcon icon={faCheck} size="1.5x" color="green" /></p>
                                     <button type="button" class="btn btn-primary mt-10">Save</button>

                                    </form>
                                <button type="button" class="btn btn-primary mt-10 mr-10">Verify</button>
                                 <button type="button" class="btn btn-primary mt-10">Get Follower Count</button>   
                                 </div>

                                </div>
                                </div>




                                 <div class="row mb-100">
        <div class="col-lg-4"><h2>Add Skills</h2></div>
    <div class="col-lg-8">
    {skills.map((e)=>{
      return (
      <span style={{backgroundColor:"grey",height:"1.3rem",paddingRight:"2.5px",color:"white",borderRadius:"10%",marginRight:"5px"}}>{e}</span>
    );})}

    <button onClick={()=>{setShowcustom(!showcustom)}} >TOGGLE ADDSKILL PANEL</button>


                                                                
                                
                                                                {
                                                                    showcustom&&
                                                                  
                                                                   

                                                                <div className='add-new-skill'>
                                                                <label for="new-skill" class="form-label">New skill</label>
                                                                <input type="type" value={currentskill} onChange={(e)=>{setCurrentskill(e.target.value)}} class="form-control" placeholder="skill"/>
                                
                                                                <button onClick={handleAddCustom} >ADD NOW</button>
                                                                </div>
                                                                
                                                                
                                                            }




                              
                                

                                  <div class="mt-50">
                                 <label for="description" class="form-label"><h3>Add Description</h3></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Describe why a brand should hire you'></textarea>
                                </div>




                                </div>
                                </div>


                                <div class="row mb-100">
        <div class="col-lg-4"><h2>Add Photos</h2></div>
    <div class="col-lg-8">
           <form onSubmit={(e)=>{
          e.preventDefault();
         console.log(files)
          


      }}>
        
        <h3>Preview</h3>
        <div className="dropped-images">{images}</div>
         <div className="drop-area">
            <div className="drop-test" {...getRootProps()}>
             <input {...getInputProps()} />
             <div >Drop files here atleast 1</div>
           </div>
        </div>
        <button type="submit" class="btn btn-primary mt-10">Save</button>
        </form>
      </div>
</div>



                               
                               
                               
                               

{/*<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className='col-lg-6' style={{height:"500px",border:"soldid thin black",backgroundColor:"red"}}> 
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span><span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    <span className='col-lg-2' style={{height:"300px",border:"soldid thin black",backgroundColor:"yellow"}}>
        test skill
    </span>
    </div>*/}

    

        
        <button onClick={()=>{
           setUserDetails(userDetails => {
            return {
                ...userDetails,
                "testkey": "testvalue"
            }
        });
        
        console.log(userDetails)}}>get user details</button>
        </div>
        
   
      }</>
  )
}
