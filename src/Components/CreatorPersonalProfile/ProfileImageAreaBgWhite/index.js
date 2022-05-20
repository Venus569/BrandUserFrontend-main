import React from 'react'
import profileImage from '../../assets/img/influencers/profile.jpg';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

 

/*style="background-image: url('assets/img/bg/04.jpg');"*/


  
 

const ProfileImageAreaBgWhite = () => {
  const user = useSelector((state) => state.userReducer);
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <><div class="profile-image-area bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="social-profile">
          <div class="profile-image" style={{height:"150px",width:"150px",border:"solid thin black",backgroundColor:"white",borderRadius:"50%",display:"inline-block" }}>
            <img src={user.user.profileImg} alt="profile" ></img>
          </div>
          <div class="social-links">
            <a href="influencer-profile.html#"><i class="fab fa-facebook-f"></i></a>
            <a href="influencer-profile.html#"><i class="fab fa-twitter"></i></a>
            <a href="influencer-profile.html#"><i class="fab fa-behance"></i></a>
            <a href="influencer-profile.html#"><i class="fab fa-linkedin"></i></a>
            <a href="influencer-profile.html#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        </div>
        <div class="col-lg-6">
          <div class="activity-area">
            <ul>
              <li>
                <span>6</span>
                <span>Posts</span>
              </li>
              <li>
                <span>11</span>
                <span>Comments</span>
              </li>
              <li>
                <span>55k</span>
                <span>Views</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default ProfileImageAreaBgWhite;