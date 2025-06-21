import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cityImg from '../assets/city.png'
import height from '../assets/height.png'
import profilePic from '../assets/picProfile.png'
import job from '../assets/job.png'
import ageImg from '../assets/age.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../services/serverURL'



const Add = ({ displayData }) => {
  const [username, setUsername] = useState("")
  const [city, setCity] = useState("")
  const [age, setAge] = useState("")
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username)
      setCity(JSON.parse(sessionStorage.getItem("user")).city)
      setAge(JSON.parse(sessionStorage.getItem("user")).age)

    } else {
      setUsername("")
    }
  }, [])

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div className='row'>
        <div className='col-lg-3 shadow' style={{ width: '330px', color: 'brown' }} >
          <div className='mb-2'>
            <img width={'100%'} height={'280px'} src={`${SERVER_URL}/uploads/${displayData?.profilePic}`} alt="No image" className='mt-2' />
            <div className='d-flex justify-content-between'>
              <div >
                <span>{displayData?.username} <br /> {displayData?.age} Years old</span><br />
                <span> {displayData?.city} </span>
              </div>
              <div className='mt-4'>
                {values.map((v, idx) => (
                  <Button key={idx} style={{ textDecoration: 'none', backgroundColor: 'none', border: 'none' }} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    <i className="fa-solid fa-eye"></i>
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                  </Button>
                ))}
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>{displayData?.username}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container className="pt-5">
                      <div className="text-center text-lg-center mb-2">
                        <h1>{displayData?.username}</h1>
                        <p className="bg-success text-white px-3 py-1 rounded d-inline-block">Viewers</p>

                      </div>
                      <Row className="align-items-center">
                        {/* Profile Picture Section */}
                        <Col xs={12} lg={6} className="text-center mb-4">
                          <img
                            src={`${SERVER_URL}/uploads/${displayData?.profilePic}`}
                            alt=""
                            className="img-fluid rounded"
                            style={{ maxHeight: '700px', width: '100%', objectFit: 'cover' }}
                          />
                      </Col>

                      {/* Profile Details Section */}
                      <Col xs={12} lg={6}>

                        {/* Info Boxes: Hidden for small and medium screens */}
                        <div className="d-none d-lg-flex flex-wrap justify-content-start gap-2">
                          <div style={{ width: '150px', height: '82px' }} className="info-box text-center p-1 border rounded">
                            <img width="25px" src={cityImg} alt="City" />
                            <p className='mb-2'>CITY: <span><p>{displayData?.city}</p></span></p>

                          </div>
                          <div style={{ width: '150px', height: '82px' }} className="info-box text-center p-1 border rounded">
                            <img width="25px" src={ageImg} alt="Age" />
                            <p className='mb-2'>AGE: <span><p>{displayData?.age}</p></span></p>

                          </div>
                          <div style={{ width: '150px', height: '82px' }} className="info-box text-center p-1 border rounded">
                            <img width="25px" src={height} alt="Height" />
                            <p className='mb-2'>HEIGHT: <span><p>{displayData?.height}</p></span></p>

                          </div>
                          <div style={{ width: '150px', height: '82px' }} className="info-box text-center p-1 border rounded">
                            <img width="25px" src={job} alt="Job" />
                            <p className='mb-2'>JOB: <span><p>{displayData?.job}</p></span></p>

                          </div>
                        </div>

                        {/* About Section */}
                        <div className="mt-5">
                          <h5>ABOUT</h5>
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, making it look like readable English.
                          </p>
                          <p>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                          </p>
                        </div>

                        {/* Contact Details */}
                        <div className="mt-4">
                          <p>
                            <i className="fa-solid fa-phone me-2"></i>
                            <strong>Phone:</strong> {displayData?.phone}
                          </p>
                          <p>
                            <i className="fa-solid fa-envelope me-2"></i>
                            <strong>Email:</strong> {displayData?.email}
                          </p>
                          <p>
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <strong>Address:</strong> {displayData?.address}
                          </p>
                        </div> {/* Contact Details */}
                        <div className='mt-4'>
                          <div className='d-flex'>
                          <p><i class="fa-solid fa-angle-right px-2"></i><span>Father: </span>{displayData?.fatherName}</p>
                            <p><i class="fa-solid fa-angle-right px-2"></i><span>Mother: </span>{displayData?.motherName}</p>
                            <p><i class="fa-solid fa-angle-right px-2"></i><span>Family: </span>{displayData?.address}</p>
                          
                             </div>
                          <div>
                          <p><i class="fa-solid fa-angle-right px-2"></i><span>Degree: </span>{displayData?.degree}</p>
                            <p><i class="fa-solid fa-angle-right px-2"></i><span>College: </span>{displayData?.collage}</p>
                            <p><i class="fa-solid fa-angle-right px-2"></i><span>School: </span>{displayData?.school}</p>
                         
                           </div>

                        </div>
                        {/* Hobbies Section */}
                        <div className="mt-5">
                          <h5>HOBBIES</h5>
                          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                            {displayData?.hobbies?.split(',').map((hobby, index) => (
                              <span key={index} className="badge bg-secondary p-2 rounded">
                                {hobby.trim()}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="mt-5">
                          <h5>SOCIAL MEDIA</h5>
                          <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                            <span className="border px-3 py-1 rounded"><i className="fa-brands fa-facebook-f"></i></span>
                            <span className="border px-3 py-1 rounded"><i className="fa-brands fa-instagram"></i></span>
                            <span className="border px-3 py-1 rounded"><i className="fa-brands fa-whatsapp"></i></span>
                            <span className="border px-3 py-1 rounded"><i className="fa-brands fa-twitter"></i></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>


            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Add