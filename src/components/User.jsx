import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import addProfileImg from '../assets/picProfile.png'
import SERVER_URL from '../services/serverURL'
import { userProfileUpdatingAPI } from '../services/allAPI'



const User = () => {
  const [preview, setPreview] = useState("")
  const [existingProfileImage, setExistingProfileImage] = useState("")
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: "", profilePic: ""
  })
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({
        ...userDetails, username: user.username, email: user.email, password: user.password
      })
      setExistingProfileImage(user.profilePic)
    }
  }, [])
  useEffect(()=>{
    if(userDetails.profilePic){
      setPreview(URL.createObjectURL(userDetails.profilePic))
    }else{
      setPreview("")
    }
   },[userDetails.profilePic])
  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear()
    navigate('/')
  }
  const handleProfileUpdate = async()=>{
    const {profilePic} = userDetails
    if(profilePic){
      const reqBody = new FormData()
      preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingProfileImage)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
           "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result =await userProfileUpdatingAPI(reqBody,reqHeader)
          if(result.status==200){
            alert("user Profile Updated successfully")
            sessionStorage.setItem("user",JSON.stringify(result.data))
          }else{
            console.log(result.response.data);
            
          }
        } catch (err) {
          console.log(err);
          
        }
      }
    }else{
      alert("Please upload image and click Update Profile Picture button")
    }
   }
  return (
    <>
      <div className='d-flex flex-column justify-content-start shadow rounded'style={{width:'300px'}}>
        
        <label className='text-center m-1' >
          <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} type="file" style={{ display: 'none' }} />
          {existingProfileImage == "" ?
            <img width={'100px'} height={'100px'} className='rounded-circle' src= {preview?preview:addProfileImg} alt="" />
            :
            <img width={'100px'} height={'100px'} className='rounded-circle' src={preview?preview:`${SERVER_URL}/uploads/${existingProfileImage}`} alt="" />
          }       
          </label>
          <button onClick={handleProfileUpdate} className='mx-4 my-1 btn border'>Update Profile Picture</button>

        <div className='ms-5 fs-5 mt-1 d-flex flex-column justify-content-start  '>
          <div className="mb-2 ">
            <Link to={'/dashboard'} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
              <p><i class="fa-solid fa-gauge px-2"></i>DashBoard</p>
            </Link>
          </div>
          <div className="mb-2 ">
            <Link to={'/userProfile'} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
              <p><i class="fa-solid fa-user px-2"></i>Profile</p>
            </Link>

          </div>
          <div className="mb-2 ">
            <Link to={'/plans'} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
              <p><i class="fa-solid fa-money-bill-1-wave px-2"></i>Plans</p>
            </Link>
          </div> 
          <div className="mb-2 ">
            <Link to={'/'} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
              <p onClick={logout}><i class="fa-solid fa-right-from-bracket px-2"></i>LogOut</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default User