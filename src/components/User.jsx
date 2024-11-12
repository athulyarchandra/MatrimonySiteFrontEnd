import React from 'react'
import { Link } from 'react-router-dom'
import addProfileImg from '../assets/profilepic.png'


const User = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">UserName</h3>
      </div>
      <div className='d-flex flex-column justify-content-start shadow rounded'>
        <label className='text-center' >
          <input type="file" style={{ display: 'none' }} />
          <img width={'200px'} height={'250px'} className='' src={addProfileImg} alt="no image" />
        </label>
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
            <Link to={'/userProfileEdit'} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
              <p><i class="fa-solid fa-gear px-2"></i>Settings</p>
            </Link>
          </div>
          <div className="mb-2 ">
            <Link to={'./dashboard'} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
              <p><i class="fa-solid fa-right-from-bracket px-2"></i>LogOut</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default User