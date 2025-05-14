import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import city from '../assets/city.png'
import height from '../assets/height.png'
import job from '../assets/job.png'
import age from '../assets/age.png'
import othersProfile from '../assets/othersprofile.png'


const ProfileDetails = () => {
 
  return (
    <>
      <Header />
      <Container style={{paddingTop:'100px'}}>
        <Row >
          <Col xs={6}>
            <img height={'700px'} width={'600px'} className='img-fluid' src={othersProfile} alt="" />
          </Col>
          <Col xs={6}>
            <div>
              <h1>Angelina Jolie</h1>
              <p style={{ width: '200px' }} className='bg-success px-3 text-center rounded'> viewers</p>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)' }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                <img width={'80px'} src={city} alt="no image" />
                <p>CITY : </p>
                <p className=''>{userDetails?.city}</p>
              </div>
              <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)' }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                <img width={'80px'} src={age} alt="no image" />
                <p>AGE : </p>
                <p className=''>{userDetails?.age}</p>
              </div>
              <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)' }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                <img width={'80px'} src={height} alt="no image" />
                <p>HEIGHT : </p>
                <p className=''>00</p>
              </div>
              <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)' }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                <img width={'82px'} src={job} alt="no image" />
                <p>JOB : </p>
                <p className=''>XYZ</p>
              </div>
            </div>
            <div className='mt-5'>
              <h5>ABOUT</h5>
              <p style={{ lineHeight: '30px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <p style={{ lineHeight: '30px' }}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
            </div>
            <div>
              <p ><i style={{ borderColor: 'rgba(233, 233, 233, 0.899)' }} className="fa-solid fa-phone rounded mx-2 p-2 border"></i><span>Phone: </span>9188008960</p>
              <p ><i style={{ borderColor: 'rgba(233, 233, 233, 0.899)' }} className="fa-solid fa-envelope rounded mx-2 p-2 border"></i><span>Email: </span>angelinajoliewed@gmail.com</p>
              <p ><i style={{ borderColor: 'rgba(233, 233, 233, 0.899)' }} className="fa-solid fa-location-dot rounded mx-2 p-2 border"></i><span>Address: </span>28800 Orchard Lake Road, Suite 180 Farmington Hills, USA</p>
            </div>
            <div className='mt-5'>
              <h5> PERSONAL INFORMATION</h5>
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-lg-6">
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Name: </span>Angelina Jolie</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Fatheres name: </span>Fatheres name</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Family name: </span>Joney family</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Age: </span>24</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Date of birth: </span>03 Jan 1998</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Height: </span>167cm</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Weight: </span>65kg</p>
                </div>
                <div className="col-lg-6">
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Degree: </span>MSC Computer Science</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Religion: </span>Any</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Profession: </span>Working</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Company: </span>Google</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Position: </span>Web developer</p>
                  <p><i class="fa-solid fa-angle-right px-2"></i><span>Position: </span> Web developer</p>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <h5> HOBBIES</h5>
              <div className='d-flex flex-wrap mt-3'>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Modelling</a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Watching movies</a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Playing volleyball </a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Hangout with family </a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Travel</a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Reading Books</a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Music</a>
                <a style={{ textDecoration: 'none', color: 'black', backgroundColor: 'rgba(233, 233, 233, 0.899)' }} className=' px-3 text-center rounded mx-2 my-1'>Cooking Yoga</a>
              </div>
            </div>
            <div className='mt-5'>
              <h5>SOCIAL MEDIA  </h5>
              <div className='d-flex justify-content-start mt-3'>
                <p style={{ borderColor: 'rgba(233, 233, 233, 0.899)',cursor:'pointer' }} className='border px-3 py-1 mx-2 rounded'><i class="fa-brands fa-facebook-f"></i></p>
                <p style={{ borderColor: 'rgba(233, 233, 233, 0.899)',cursor:'pointer' }} className='border px-3 py-1 mx-2 rounded'><i class="fa-brands fa-instagram"></i></p>
                <p style={{ borderColor: 'rgba(233, 233, 233, 0.899)',cursor:'pointer' }} className='border px-3 py-1 mx-2 rounded'><i class="fa-brands fa-whatsapp"></i></p>
                <p style={{ borderColor: 'rgba(233, 233, 233, 0.899)',cursor:'pointer' }} className='border px-3 py-1 mx-2 rounded'><i class="fa-brands fa-twitter"></i></p>
              </div>
            </div>
            <div>
              {/* <h5>RELATED PROFILES </h5> */}
              {/* RelatedProfiles */}
            </div>

          </Col>
        </Row>
      </Container>


    </>
  )
}

export default ProfileDetails