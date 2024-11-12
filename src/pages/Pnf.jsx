import React from 'react'
import pnf from '../assets/404_1.gif'

const Pnf = () => {
  return (
    <>
    <div className='container-fluid p-2'>
      <div style={{height:'500px'}} className="d-flex flex-column justify-content-center align-items-center">
        <img width={'400px'} className="d-flex justify-content-center align-items-center" src={pnf} alt="404 ERROR" />
        <p className='fs-3 p-2'> The page you're looking for can't be found.</p>
        <a href='./' className='btn btn-primary'>Go Back To Home</a>
      </div>
    </div>
    </>
  )
}

export default Pnf