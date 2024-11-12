import React from 'react'
import othersProfile from '../assets/othersProfile.png'
import { Link } from 'react-router-dom'


const Add = () => {
  return (
    <>
     
   <Link  to={'/profileDetails'} style={{cursor:'pointer',textDecoration:'none'}}>
       <div  style={{ position: 'relative' }}  >
          <img width={'200px'} src={othersProfile} alt="No image" />
          <div style={{ position: "absolute", marginBottom: '300px' }}  >
            <p>Name</p>
            <span>New york 22 Years old</span>
          </div>
        </div>
   </Link>


    </>
  )
}

export default Add