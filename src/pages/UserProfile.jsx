import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import city from '../assets/city.png'
import profilePic from '../assets/profilepic.png'
import profilePic from '../assets/profilePic.png';
import height from '../assets/auth.png'
import job from '../assets/job.png'
import age from '../assets/age.png'
import UserProfileEdit from '../components/UserProfileEdit'
import { Link } from 'react-router-dom'
import { deleteProfileAPI, userDetailsAPI } from '../services/allAPI'
import {editProfileResponseContext} from '../contexts/ContextAPI'
import SERVER_URL from '../services/serverURL';



const UserProfile = () => {
    const {editProfileResponse,setEditProfileResponse} = useContext(editProfileResponseContext)
    const [userDetails, setUserDetails] = useState([])
    console.log(userDetails);
    useEffect(() => {
        getUserDetails()
    }, [editProfileResponse])
    const getUserDetails = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await userDetailsAPI(reqHeader)
                console.log(result);

                if (result.status == 200) {
                    setUserDetails(result.data)
                }
            } catch (err) {
                console.log(err);

            }
        }
    }
    const deleteProfile = async (id)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization": `Bearer ${token}`
              }
              try {
                await deleteProfileAPI(id,reqHeader)
                getUserDetails()
              } catch (err) {
                console.log(err);
                
              }
            }
    }
    return (
        <>
            <Header />

            <Container>
                {userDetails?.length > 0 ?
                    userDetails?.map(profile => (
                        <Row key={profile._id} >
                            <div className='d-flex flex-column justify-content-center' style={{ paddingTop: '100px' }}>
                                <h1 className='text-center'></h1>
                                <p className=' bg-success mx-5 p-2 text-center rounded'>0 Visited your profile</p>
                                <h3 className='text-center'>{profile.username}</h3>
                            </div>
                            <Col xs={9}>

                                <div className='d-flex justify-content-evenly'>
                                    <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)', lineHeight: "17px" }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                                        <img width={'80px'} className='mt-1' src={city} alt="no image" />
                                        <p className='mt-1 text-center'>CITY : <br /> {profile.city} </p>
                                        <p className=''></p>
                                    </div>
                                    <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)', lineHeight: "17px" }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                                        <img width={'79px'} className='mt-1' src={age} alt="no image" />
                                        <p className='mt-2 text-center'>AGE : <br /> {profile.age} </p>
                                        <p className=''></p>
                                    </div>
                                    <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)', lineHeight: "17px" }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                                        <img width={'80px'} className='mt-1' src={height} alt="no image" />
                                        <p className='mt-2 text-center'>HEIGHT : <br />  {profile.height} </p>
                                        <p className=''></p>
                                    </div>
                                    <div style={{ width: '150px', borderColor: 'rgba(233, 233, 233, 0.899)', lineHeight: "17px" }} className="d-flex flex-column justify-content-center align-items-center border  rounded">
                                        <img width={'88px'} className='mt-1' src={job} alt="no image" />
                                        <p className='mt-2 text-center'>JOB : <br />  {profile.job} </p>
                                        <p className=''></p>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h5>ABOUT</h5>
                                    <p style={{ lineHeight: '30px' }}>Hello! I'm {profile.username}, a {profile.job} based in {profile.city}. I consider myself a positive traits, (e.g., kind, ambitious, and family-oriented) individual who values (core values, e.g., honesty, respect, and strong relationships).In my free time, I enjoy {profile.hobbies}. My friends and family describe me as cheerful, and compassionate.</p>
                                    <p style={{ lineHeight: '30px' }}>I'm looking for a partner who shares my values and dreams of building a happy, supportive, and loving life together. Someone who is understanding, ambitious, and has a good sense of humor and believes mutual respect and companionship are the core of a relationship. <br />If this resonates with you, let's connect and explore what we could build together!.</p>
                                </div>
                                <div>
                                    <p ><i style={{ borderColor: 'rgba(233, 233, 233, 0.899)' }} className="fa-solid fa-phone rounded mx-2 p-2 border"></i><span className='me-1'>Phone: </span> {profile.phone}</p>
                                    <p ><i style={{ borderColor: 'rgba(233, 233, 233, 0.899)' }} className="fa-solid fa-envelope rounded mx-2 p-2 border"></i><span className='me-1'>Email: </span> {profile.email}</p>
                                    <p ><i style={{ borderColor: 'rgba(233, 233, 233, 0.899)' }} className="fa-solid fa-location-dot rounded mx-2 p-2 border"></i><span className='me-1'>Address: </span> {profile.address}</p>
                                </div>
                                <div className='mt-5'>
                                    <h5> PERSONAL INFORMATION</h5>
                                    <div className="row d-flex justify-content-center mt-3">
                                        <div className="col-lg-6">
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Name: </span> {profile.username}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Fathere's name: </span> {profile.fatherName}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Mother's name: </span> {profile.motherName}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Family name: </span> {profile.address}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Degree: </span> {profile.degree}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>School: </span> {profile.school}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>College: </span>  {profile.collage}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Job: </span>   {profile.job}</p>

                                        </div>
                                        <div className="col-lg-6">
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Date of birth: </span> {profile.dob}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Age: </span> {profile.age}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Height: </span> {profile.height}</p>
                                            <p><i className="fa-solid fa-angle-right px-2"></i><span className='me-1'>Weight: </span> {profile.weight}</p>

                                        </div>
                                    </div>
                                </div>

                                <div>

                                    {/* <h5>RELATED PROFILES </h5> */}
                                    {/* RelatedProfiles */}
                                </div>

                            </Col>
                            <Col xs={3}>
                                <div>
                                    <div className='text-center' >
                                        <img height={'100px'} width={'300px'} className='img-fluid' src={`${SERVER_URL}/uploads/${profile?.profilePic}`} alt="no image" />
                                    </div>
                                    <img alt="" />
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                    <div className="mt-5">
                                        <h5>HOBBIES</h5>
                                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                                            {profile?.hobbies?.split(',').map((hobby, index) => (
                                                <span key={index} className="badge bg-secondary p-2 rounded">
                                                    {hobby.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h5 >SOCIAL MEDIA  </h5>
                                    <div className='d-flex justify-content-start mt-3'>
                                        <Link to={profile.facebook} style={{ borderColor: 'rgba(233, 233, 233, 0.899)', cursor: 'pointer', color: 'black' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-facebook-f"></i></Link>
                                        <Link to={profile.instagram} style={{ borderColor: 'rgba(233, 233, 233, 0.899)', cursor: 'pointer', color: 'black' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-instagram"></i></Link>
                                        <Link to={profile.whatsApp} style={{ borderColor: 'rgba(233, 233, 233, 0.899)', cursor: 'pointer', color: 'black' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-whatsapp"></i></Link>
                                        <Link to={profile.twitter} style={{ borderColor: 'rgba(233, 233, 233, 0.899)', cursor: 'pointer', color: 'black' }} className='border px-3 py-1 mx-2 rounded'><i className="fa-brands fa-twitter"></i></Link>
                                    </div>
                                </div>
                            </Col>
                            <UserProfileEdit profile={profile} />
                            <p onClick={()=>deleteProfile(profile?._id)} style={{ backgroundColor: 'red', width: '200px', cursor: 'pointer' }} className=' mx-5 p-2 text-center rounded'>DELETE THIS PROFILE</p>
                        
                        </Row>
                    ))
                    :
                    <div className='tex-danger'>Ther is no profile</div>


                }

            </Container>

        </>
    )
}

export default UserProfile