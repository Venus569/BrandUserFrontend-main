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
import React from 'react'

export const ProfileBuilder = () => {


    const [userDetails, setUserDetails] = React.useState();
    const [skills, setSkills] = React.useState([]);
    const [currentskill,setCurrentskill]= React.useState('');
    const [showcustom, setShowcustom] = React.useState(false);


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

  return (
    <>
    
    <div class="container mt-100">
        <div class="row">
        <div class="col-lg-4">Add Socials</div>
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
    <form >
                                

                                <div class="mb-3">
                                 <label for="followers" class="form-label">Number of Followers</label>
                                <input type="number" class="form-control" onChange={handleChange}  placeholder="2000" name="followers" />
                                 </div>

                                 <div class="mb-3">
                                 <label for="tiktok" class="form-label">Tiktok account</label>
                                <input type="url" class="form-control" onChange={handleChange} placeholder="tiktok.com/bestcreator" name="tiktok" />
                                 </div>

                            

                                <div class="mb-3">
                                <label for="moj" class="form-label">Moj account</label>
                                    <input type="url" class="form-control" onChange={handleChange} placeholder="moj.com/bestcreator" name="moj" />
                                </div>


                             

                                <div class="mb-30">
                                <label for="reels" class="form-label">Reels Account</label>
                                    <input type="url" class="form-control" onChange={handleChange} placeholder="reels.com/creator" name="reels"  />
                                </div>
                                
                                

                                  <div class="mb-3">
                                 <label for="description" class="form-label">description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Describe why a brand should hire you'></textarea>
                                </div>
                               
                               
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                 <option selected>Open this select menu</option>
                                 <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>

                               

<div class="form-check form-switch">
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
</div>

    

        </form>
        </div>
        </div>
    </div>
    </>
  )
}
