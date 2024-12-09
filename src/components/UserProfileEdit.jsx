import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import adddisplayDataImg from '../assets/profilePic.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import addProfileImage from '../assets/profilePic.png'
import SERVER_URL from '../services/serverURL';
import { editProfileApi } from '../services/allAPI';
import {editProfileResponseContext} from '../contexts/ContextAPI'


const UserdisplayDataEdit = ({ profile }) => {
    const {editProfileResponse,setEditProfileResponse} = useContext(editProfileResponseContext)
    const [show, setShow] = useState(false);
    const values = [true,];
    const [fullscreen, setFullscreen] = useState(true);
    const [preview, setPreview] = useState("")
    const [imageFileStatus, setImageFileStatus] = useState(false)
    const [profileDetails, setProfileDetails] = useState({
        id: profile._id, username: profile.username, email: profile.email, phone: profile.phone, gender: profile.gender, dob: profile.dob, height: profile.height, fatherName: profile.fatherName, city: profile.city, age: profile.age, weight: profile.weight, motherName: profile.motherName, address: profile.address, job: profile.job, degree: profile.degree, school: profile.school, collage: profile.collage, whatsApp: profile.whatsApp, facebook: profile.facebook, instagram: profile.instagram, twitter: profile.twitter, hobbies: profile.hobbies, profilePic: ""
    })
    console.log(profileDetails);
    useEffect(() => {
        if (profileDetails.profilePic.type == "image/png" || profileDetails.profilePic.type == "image/jpg" || profileDetails.profilePic.type == "image/jpeg") {
            setImageFileStatus(true)
            setPreview(URL.createObjectURL(profileDetails.profilePic))
        } else {
            setImageFileStatus(false)
            setPreview("")
            setProfileDetails({ ...profileDetails, profilePic: "" })
        }
    }, [profileDetails.profilePic])

    const handleShow = () => {
        setShow(true)
        setProfileDetails({ id: profile._id, username: profile.username, email: profile.email, phone: profile.phone, gender: profile.gender, dob: profile.dob, height: profile.height, fatherName: profile.fatherName, city: profile.city, age: profile.age, weight: profile.weight, motherName: profile.motherName, address: profile.address, job: profile.job, degree: profile.degree, school: profile.school, collage: profile.collage, whatsApp: profile.whatsApp, facebook: profile.facebook, instagram: profile.instagram, twitter: profile.twitter, hobbies: profile.hobbies, profilePic: "" })

    };
    const handleClose = () => {
        setProfileDetails({ id: profile._id, username: profile.username, email: profile.email, phone: profile.phone, gender: profile.gender, dob: profile.dob, height: profile.height, fatherName: profile.fatherName, city: profile.city, age: profile.age, weight: profile.weight, motherName: profile.motherName, address: profile.address, job: profile.job, degree: profile.degree, school: profile.school, collage: profile.collage, whatsApp: profile.whatsApp, facebook: profile.facebook, instagram: profile.instagram, twitter: profile.twitter, hobbies: profile.hobbies, profilePic: "" })
        setShow(false)
    };
    const handleUpdateProfile = async () => {
        const { username, email, phone, gender, dob, height, fatherName, city, age, weight, motherName, address, job, degree, school, collage, whatsApp, facebook, instagram, twitter, hobbies, profilePic,id } = profileDetails
        if (username && email && phone && gender && dob && height && fatherName && city && age && weight && motherName && address && job && degree && school && collage && whatsApp && facebook && instagram && twitter && hobbies) {
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
            preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",profile.profilePic)
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                  }
                  try {
                    const result = await editProfileApi(id,reqBody,reqHeader)
                    if(result.status==200){
                        alert("Profile updated Successfully")
                        handleClose()
                        setEditProfileResponse(result)
                    }else{

                    }
                  } catch (err) {
                    console.log(err);
                    
                  }
            }
            } else {
                alert("Please provide all details!!")
            }
        }

        return (
            <>
                <p onClick={handleShow} style={{ backgroundColor: 'red', width: '200px', cursor: 'pointer' }} className=' mx-5 p-2 text-center rounded'>EDIT THIS PROFILE</p>

                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header className='text-center d-flex justify-content-between'>
                        <Modal.Title className='text-center'>HERE YOU CAN EDIT YOUR PROFILE</Modal.Title>
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
                                            <input onChange={e => setProfileDetails({ ...profileDetails, profilePic: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                                            <img width={'200px'} height={'250px'} className='p-2' src={preview ? preview : `${SERVER_URL}/uploads/${profile.profilePic}`} alt="" />
                                        </label>
                                        {!imageFileStatus &&
                                            <div className='text-primary fw-bolder my-2'>*Upload only these file types jpeg/jpg/png</div>
                                        }
                                    </div>
                                    <Form>
                                        <h5 style={{ color: 'brown' }}>BASIC INFO</h5>
                                        <h3>Edit my profile</h3>
                                        <hr />
                                        <Form.Group className="mb-3" >
                                            <Form.Label className='m-3'>Name:</Form.Label>
                                            <Form.Control value={profileDetails.username} onChange={e => setProfileDetails({ ...profileDetails, username: (e.target.value) })} type="text" placeholder="Enter your full name" />
                                            <Form.Label className='m-3'>Email:</Form.Label>
                                            <Form.Control value={profileDetails.email} onChange={e => setProfileDetails({ ...profileDetails, email: (e.target.value) })} type="email" placeholder="Enter your email" />
                                            <Form.Label className='m-3'>Phone:</Form.Label>
                                            <Form.Control value={profileDetails.phone} onChange={e => setProfileDetails({ ...profileDetails, phone: (e.target.value) })} type="number" placeholder="Enter phone number" />
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
                                                    <Form.Select onClick={e => setProfileDetails({ ...profileDetails, gender: e.target.value })} aria-label="Default select example">
                                                        <option disabled selected>Gender</option>
                                                        <option value={profileDetails.male} >Male</option>
                                                        <option value={profileDetails.female} >Female </option>
                                                        <option value={profileDetails.others} >Othres</option>
                                                    </Form.Select>
                                                    <Form.Label className='m-3'>Date of birth:</Form.Label>
                                                    <Form.Control value={profileDetails.dob} onChange={e => setProfileDetails({ ...profileDetails, dob: (e.target.value) })} type="text" placeholder="00-00-0000" />
                                                    <Form.Label className='m-3'>Height:</Form.Label>
                                                    <Form.Control value={profileDetails.height} onChange={e => setProfileDetails({ ...profileDetails, height: (e.target.value) })} type="number" placeholder="Enter your height" />
                                                    <Form.Label className='m-3'>Fathers name:</Form.Label>
                                                    <Form.Control value={profileDetails.fatherName} onChange={e => setProfileDetails({ ...profileDetails, fatherName: (e.target.value) })} type="text" placeholder="Enter your father's name" />
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form>
                                                <Form.Group className="mb-3" >
                                                    <Form.Label className='m-3'>City:</Form.Label>
                                                    <Form.Control value={profileDetails.city} onChange={e => setProfileDetails({ ...profileDetails, city: (e.target.value) })} type="text" placeholder="Enter your city" />
                                                    <Form.Label className='m-3'>Age:</Form.Label>
                                                    <Form.Control value={profileDetails.age} onChange={e => setProfileDetails({ ...profileDetails, age: (e.target.value) })} type="text" placeholder="00" />
                                                    <Form.Label className='m-3'>weight:</Form.Label>
                                                    <Form.Control value={profileDetails.weight} onChange={e => setProfileDetails({ ...profileDetails, weight: (e.target.value) })} type="number" placeholder="Enter your height" />
                                                    <Form.Label className='m-3'>Mothers name:</Form.Label>
                                                    <Form.Control value={profileDetails.motherName} onChange={e => setProfileDetails({ ...profileDetails, motherName: (e.target.value) })} type="text" placeholder="Enter your mother's name" />
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                                <Form.Label className='m-3'>Address:</Form.Label>
                                                <Form.Control value={profileDetails.address} onChange={e => setProfileDetails({ ...profileDetails, address: (e.target.value) })} type="text" placeholder="Enter your address" />
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
                                            <Form.Select value={profileDetails.business || profile.Selfemployee || profile.government || profile.jobless} onClick={e => setProfileDetails({ ...profileDetails, job: (e.target.value) })} aria-label="Default select example">
                                                <option disabled selected>Job type</option>
                                                <option >Business</option>
                                                <option >Self Employee</option>
                                                <option >Government</option>
                                                <option >Jobless</option>
                                            </Form.Select>
                                            <Form.Label className='m-3'>Degree:</Form.Label>
                                            <Form.Control value={profileDetails.degree} onChange={e => setProfileDetails({ ...profileDetails, degree: (e.target.value) })} type="text" placeholder="" />
                                            <Form.Label className='m-3'>School:</Form.Label>
                                            <Form.Control value={profileDetails.school} onChange={e => setProfileDetails({ ...profileDetails, school: (e.target.value) })} type="text" placeholder="" />
                                            <Form.Label className='m-3'>College:</Form.Label>
                                            <Form.Control value={profileDetails.collage} onChange={e => setProfileDetails({ ...profileDetails, collage: (e.target.value) })} type="text" placeholder="" />
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
                                                    <Form.Control value={profileDetails.whatsApp} onChange={e => setProfileDetails({ ...profileDetails, whatsApp: (e.target.value) })} type="text" placeholder="" />
                                                    <Form.Label className='m-3'>Instagram:</Form.Label>
                                                    <Form.Control value={profileDetails.instagram} onChange={e => setProfileDetails({ ...profileDetails, instagram: (e.target.value) })} type="text" placeholder="" />
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className='m-3'>Facebook:</Form.Label>
                                                    <Form.Control value={profileDetails.facebook} onChange={e => setProfileDetails({ ...profileDetails, facebook: (e.target.value) })} type="text" placeholder="" />
                                                    <Form.Label className='m-3'>X:</Form.Label>
                                                    <Form.Control value={profileDetails.twitter} onChange={e => setProfileDetails({ ...profileDetails, twitter: (e.target.value) })} type="text" placeholder="" />
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
                                            <Form.Control value={profileDetails.hobbies} onChange={e => setProfileDetails({ ...profileDetails, hobbies: (e.target.value) })} type="text" placeholder="" />
                                        </Form>
                                    </div>
                                </div>
                                <div style={{ width: '900px' }} className='mt-5d-flex flex-column align-items-center mt-3 '>
                                    <button onClick={handleUpdateProfile} style={{ width: '100%', backgroundColor: 'green', color: 'white' }} className='btn'>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </>
        )
    }

    export default UserdisplayDataEdit