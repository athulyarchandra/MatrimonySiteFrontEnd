import { useEffect, useState } from 'react'
import Add from '../components/Add'
import Header from '../components/Header'
import User from '../components/User'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import addProfileImg from '../assets/profilePic.png';
import Form from 'react-bootstrap/Form';
import { addProfileAPI, allProfilesAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';


const Dashboard = () => {
  const [preview, setPreview] = useState("")
  const [existingImage, setExistingImage] = useState("")
  const values = [true,];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [allProfiles, setAllProfiles] = useState([])
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    getAllProfiles()
  }, [searchKey])
  const getAllProfiles = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const allProfilesResult = await allProfilesAPI(searchKey, reqHeader)
        if (allProfilesResult.status == 200) {
          setAllProfiles(allProfilesResult.data)
        }
      } catch (err) {
        console.log(err);

      }
    }
  }
  console.log(allProfiles);

  const handleClose = () => {
    setShow(false)
    setUserDetails({ username, email: "", phone: "", gender: "", dob: "", height: "", fatherName: "", city: "", age: "", weight: "", motherName: "", address: "", job: "", degree: "", school: "", collage: "", whatsApp: "", facebook: "", instagram: "", twitter: "", hobbies: "", profilePic: "" })
  };
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState("")
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", phone: "", gender: "", dob: "", height: "", fatherName: "", city: "", age: "", weight: "", motherName: "", address: "", job: "", degree: "", school: "", collage: "", whatsApp: "", facebook: "", instagram: "", twitter: "", hobbies: "", profilePic: ""
  })
  console.log(userDetails);
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    } else {
      setUsername("")
    }
  }, [])
  useEffect(() => {
    if (userDetails.profilePic) {
      setPreview(URL.createObjectURL(userDetails.profilePic))
    } else {
      setPreview("")
    }
  }, [userDetails.profilePic])

  const handleAddProfile = async () => {
    const { username, email, phone, gender, dob, height, fatherName, city, age, weight, motherName, address, job, degree, school, collage, whatsApp, facebook, instagram, twitter, hobbies, profilePic } = userDetails
    if (username && email && phone && gender && dob && height && fatherName && city && age && weight && motherName && address && job && degree && school && collage && whatsApp && facebook && instagram && twitter && hobbies && profilePic) {
      // alert("api call")
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("phone", phone)
      reqBody.append("gender", gender)
      reqBody.append("dob", dob)
      reqBody.append("height", height)
      reqBody.append("fatherName", fatherName)
      reqBody.append("city", city)
      reqBody.append("age", age)
      reqBody.append("weight", weight)
      reqBody.append("motherName", motherName)
      reqBody.append("address", address)
      reqBody.append("job", job)
      reqBody.append("degree", degree)
      reqBody.append("school", school)
      reqBody.append("collage", collage)
      reqBody.append("whatsApp", whatsApp)
      reqBody.append("facebook", facebook)
      reqBody.append("instagram", instagram)
      reqBody.append("twitter", twitter)
      reqBody.append("hobbies", hobbies)
      preview ? reqBody.append("profilePic", profilePic) : reqBody.append("profilePic", existingImage)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await addProfileAPI(reqBody, reqHeader)
          if (result.status == 200) {
            alert("Profile added successfully")
            handleClose()
          } else {
            alert(result.response.data)
          }
        } catch (err) {
          console.log(err);

        }

      }

    } else {
      alert("Please Provide all details")
    }
  }
  return (
    <>
      <Header insideDashboard={true} />
      <div style={{ paddingTop: '100px' }} className='container-fluid'>
        <h1 className='text-center text-lg-start'>Helloo <span className='text-warning'>{username}</span> 👋🏼,</h1>
        <div className="row mt-3">
          {/* Sidebar Section */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            {values.map((v, idx) => (
              <Button
                key={idx}
                className="me-2 mb-3 w-100"
                onClick={() => handleShow(v)}
              >
                Here you can add your profile
              </Button>
            ))}
            <User />
          </div>
          {/* Main Content Section */}
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className='d-flex justify-content-end mb-3'>
              <input
                onChange={e => setSearchKey(e.target.value)}
                style={{ maxWidth: '300px', width: '100%' }}
                type="text"
                placeholder='Search here'
                className='form-control rounded p-2'
              />
            </div>
            <div className='row'>
              {allProfiles?.length > 0 ? (
                allProfiles?.map(profile => (
                  <div className='col-lg-4 col-md-6 col-sm-12 mb-3' key={profile?._id}>
                    <Add displayData={profile} />
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                      <Modal.Header className='text-center d-flex justify-content-between'>
                        <Modal.Title className='text-center'>ADD YOUR DETAILS HERE</Modal.Title>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Header>
                      <Modal.Body>
                        <div style={{ width: '100%', backgroundColor: 'rgb(245, 245, 245)' }} className='d-flex flex-column align-items-center justify-content-center  p-5'>
                          <div style={{ backgroundColor: 'white' }} className=' px-5 py-3 rounded'>
                            <div style={{ width: '900px' }} className='mt-3'>
                              <div className='d-flex border mb-2 align-items-center justify-content-center'>
                                <label className='text-center' >
                                  <input onChange={e => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                                  {existingImage == "" ?

                                    <img width={'200px'} height={'250px'} className='p-2' src={preview ? preview : addProfileImg} alt="" />
                                    :
                                    <img width={'200px'} height={'250px'} className='p-2' src={preview ? preview : `${SERVER_URL}/uploads/${existingImage}`} alt="" />
                                  }
                                </label>
                              </div>
                              <Form>
                                <h5 style={{ color: 'brown' }}>BASIC INFO</h5>
                                <h3>Edit my profile</h3>
                                <hr />
                                <Form.Group className="mb-3" >
                                  <Form.Label className='m-3'>Name:</Form.Label>
                                  <Form.Control value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: (e.target.value) })} type="text" placeholder="Enter your full name" />
                                  <Form.Label className='m-3'>Email:</Form.Label>
                                  <Form.Control value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: (e.target.value) })} type="email" placeholder="Enter your email" />
                                  <Form.Label className='m-3'>Phone:</Form.Label>
                                  <Form.Control value={userDetails.phone} onChange={e => setUserDetails({ ...userDetails, phone: (e.target.value) })} type="number" placeholder="Enter phone number" />
                                </Form.Group>
                              </Form>
                            </div>
                            <div className='mb-4 mt-4'>
                              <p style={{ backgroundColor: 'black' }} className='p-1'></p>
                            </div>
                            <div style={{ width: '900px' }} className='mt-5'>
                              <h5 style={{ color: 'brown' }}>BASIC INFO</h5>
                              <h3> ADVANCED BIO</h3>
                              <hr />
                              <div className="row ">
                                <div className="col-lg-6">
                                  <Form>
                                    <Form.Group className="mb-3">
                                      <Form.Select value={userDetails.female || userDetails.male || userDetails.others} onClick={e => setUserDetails({ ...userDetails, gender: e.target.value })} aria-label="Default select example">
                                        <option disabled selected>Gender</option>
                                        <option >Male</option>
                                        <option >Female </option>
                                        <option >Othres</option>
                                      </Form.Select>
                                      <Form.Label className='m-3'>Date of birth:</Form.Label>
                                      <Form.Control value={userDetails.dob} onChange={e => setUserDetails({ ...userDetails, dob: (e.target.value) })} type="text" placeholder="00-00-0000" />
                                      <Form.Label className='m-3'>Height:</Form.Label>
                                      <Form.Control value={userDetails.height} onChange={e => setUserDetails({ ...userDetails, height: (e.target.value) })} type="number" placeholder="Enter your height" />
                                      <Form.Label className='m-3'>Fathers name:</Form.Label>
                                      <Form.Control value={userDetails.fatherName} onChange={e => setUserDetails({ ...userDetails, fatherName: (e.target.value) })} type="text" placeholder="Enter your father's name" />
                                    </Form.Group>
                                  </Form>
                                </div>
                                <div className="col-lg-6">
                                  <Form>
                                    <Form.Group className="mb-3" >
                                      <Form.Label className='m-3'>City:</Form.Label>
                                      <Form.Control value={userDetails.city} onChange={e => setUserDetails({ ...userDetails, city: (e.target.value) })} type="text" placeholder="Enter your city" />
                                      <Form.Label className='m-3'>Age:</Form.Label>
                                      <Form.Control value={userDetails.age} onChange={e => setUserDetails({ ...userDetails, age: (e.target.value) })} type="text" placeholder="00" />
                                      <Form.Label className='m-3'>weight:</Form.Label>
                                      <Form.Control value={userDetails.weight} onChange={e => setUserDetails({ ...userDetails, weight: (e.target.value) })} type="number" placeholder="Enter your weight" />
                                      <Form.Label className='m-3'>Mothers name:</Form.Label>
                                      <Form.Control value={userDetails.motherName} onChange={e => setUserDetails({ ...userDetails, motherName: (e.target.value) })} type="text" placeholder="Enter your mother's name" />
                                    </Form.Group>
                                  </Form>
                                </div>
                                <Form>
                                  <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label className='m-3'>Address:</Form.Label>
                                    <Form.Control value={userDetails.address} onChange={e => setUserDetails({ ...userDetails, address: (e.target.value) })} type="text" placeholder="Enter your address" />
                                  </Form.Group>
                                </Form>
                              </div>

                            </div>
                            <div className='mb-4 mt-4'>
                              <p style={{ backgroundColor: 'black' }} className='p-1'></p>
                            </div>
                            <div style={{ width: '900px' }} className='mt-5'>
                              <h5 style={{ color: 'brown' }}>Job details JOB DETAILS</h5>
                              <h3> JOB AND EDUCATION</h3>
                              <hr />
                              <div>
                                <Form>
                                  <Form.Select value={userDetails.business || userDetails.Selfemployee || userDetails.government || userDetails.jobless} onClick={e => setUserDetails({ ...userDetails, job: (e.target.value) })} aria-label="Default select example">
                                    <option disabled selected>Job type</option>
                                    <option >Business</option>
                                    <option >Self Employee</option>
                                    <option >Government</option>
                                    <option >Jobless</option>
                                  </Form.Select>
                                  <Form.Label className='m-3'>Degree:</Form.Label>
                                  <Form.Control value={userDetails.degree} onChange={e => setUserDetails({ ...userDetails, degree: (e.target.value) })} type="text" placeholder="" />
                                  <Form.Label className='m-3'>School:</Form.Label>
                                  <Form.Control value={userDetails.school} onChange={e => setUserDetails({ ...userDetails, school: (e.target.value) })} type="text" placeholder="" />
                                  <Form.Label className='m-3'>College:</Form.Label>
                                  <Form.Control value={userDetails.collage} onChange={e => setUserDetails({ ...userDetails, collage: (e.target.value) })} type="text" placeholder="" />
                                </Form>
                              </div>
                            </div>
                            <div style={{ width: '900px' }} className='mt-5'>
                              <h5 style={{ color: 'brown' }}>MEDIA</h5>
                              <h3> SOCIAL MEDIA</h3>
                              <hr />
                              <div className="row ">
                                <div className="col-lg-6">
                                  <Form>
                                    <Form.Group className="mb-3" >
                                      <Form.Label className='m-3'>WhatsApp:</Form.Label>
                                      <Form.Control value={userDetails.whatsApp} onChange={e => setUserDetails({ ...userDetails, whatsApp: (e.target.value) })} type="text" placeholder="" />
                                      <Form.Label className='m-3'>Instagram:</Form.Label>
                                      <Form.Control value={userDetails.instagram} onChange={e => setUserDetails({ ...userDetails, instagram: (e.target.value) })} type="text" placeholder="" />
                                    </Form.Group>
                                  </Form>
                                </div>
                                <div className="col-lg-6">
                                  <Form>
                                    <Form.Group className="mb-3">
                                      <Form.Label className='m-3'>Facebook:</Form.Label>
                                      <Form.Control value={userDetails.facebook} onChange={e => setUserDetails({ ...userDetails, facebook: (e.target.value) })} type="text" placeholder="" />
                                      <Form.Label className='m-3'>X:</Form.Label>
                                      <Form.Control value={userDetails.twitter} onChange={e => setUserDetails({ ...userDetails, twitter: (e.target.value) })} type="text" placeholder="" />
                                    </Form.Group>
                                  </Form>
                                </div>
                              </div>
                            </div>
                            <div className='mb-4 mt-4'>
                              <p style={{ backgroundColor: 'black' }} className='p-1'></p>
                            </div>
                            <div style={{ width: '900px' }} className='mt-5'>
                              <h5 style={{ color: 'brown' }}>INTERESTS</h5>
                              <h3>HOBBIES</h3>
                              <hr />
                              <div>
                                <Form>
                                  <Form.Label className='m-3'>HOBBIES:</Form.Label>
                                  <Form.Control value={userDetails.hobbies} onChange={e => setUserDetails({ ...userDetails, hobbies: (e.target.value) })} type="text" placeholder="" />
                                </Form>
                              </div>
                            </div>
                            <div style={{ width: '900px' }} className='mt-5d-flex flex-column align-items-center mt-3 '>
                              <button onClick={handleAddProfile} style={{ width: '100%', backgroundColor: 'green', color: 'white' }} className='btn'>SUBMIT</button>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>


                ))
              ) : (
                <div className="text-danger fw-bolder">There are no Profiles</div>
              )}
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard