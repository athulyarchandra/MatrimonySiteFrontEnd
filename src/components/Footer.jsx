import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
<>
<hr />
<div id='footer' style={{ height: '300px' }} className='container-fluid mt-5'>
      <div className="row">
        <div className="col-lg-4">
          <div className='d-flex justify-content-between py-5 px-2'>
            <div style={{ width: '400px' }} className='intro'>
              <h5><i>Get In Touch</i></h5>
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>Phone: +92 (8800) 68 - 8960</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h2 style={{ color: 'brown' }} className='text-center'>EverAfter</h2>
          <p className='text-center'>Semper libero, sit amet blandit vel, rhoncus venenatis
            luctus pulvinar, hendrerit id, lorem.</p>
          <div className=''>
            <h5 className='text-center'>SOCIAL MEDIA  </h5>
            <div className='d-flex justify-content-center mt-3'>
              <p style={{ borderColor: 'none', cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-facebook-f"></i></p>
              <p style={{ borderColor: 'none', cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-instagram"></i></p>
              <p style={{ borderColor: 'none', cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-whatsapp"></i></p>
              <p style={{ borderColor: 'none', cursor: 'pointer' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-twitter"></i></p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex flex-column justify-content-center mt-3">
            <h5 className='text-center'>Contact Us</h5>
            <div className='d-flex flex-column'>
              <p className='text-center'>Working hours: <br />
              Monday to Friday 9am - 5pm</p>
             <div className="d-flex mx-1 mt-3">
             <input placeholder='Enter your email here' type="text" className='form-control' />
              <button style={{ backgroundColor: 'black', color: 'white' }} className='btn ms-2'><i className='fa-solid fa-arrow-right'></i></button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex align-items-center justify-content-center' >
        <p className='text-center '>Company name Site - Trusted by over thousands of Boys & Girls for successfull marriage. </p>
        <p style={{ backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className='btn'>Join with Us!!</p>
      </div>
      <p className='text-center pb-2'> Copyright &copy; 2023 Company.com All rights reserved.. Built with React.</p>
    </div>
</>
   
  )
}

export default Footer