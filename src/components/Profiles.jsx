import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import userimg from '../assets/userimg.jpg' 

const Profiles = () => {
  return (
   <>
     <Link  to={'./dashboard'} style={{cursor:'pointer',textDecoration:'none'}}>
    <div className='d-flex align-items-center justify-content-center m-5'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ width: '100%', height: '300px' }} className='img-fluid' src={userimg} />
        <Card.Body>
          <Card.Title className='text-center'>Name</Card.Title>
          <div className='d-flex justify-content-start mt-3'>
            <p style={{ cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-facebook-f"></i></p>
            <p style={{ cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-instagram"></i></p>
            <p style={{ cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-whatsapp"></i></p>
            <p style={{ cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-twitter"></i></p>
          </div>
        </Card.Body>
      </Card>
    </div>
  </Link>
   </>
  )
}

export default Profiles