import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Profiles from '../components/Profiles'
import { Link } from 'react-router-dom'
import landingimg1 from '../assets/birds.png'
import couple1 from '../assets/couple1.png'
import couple2 from '../assets/couple2.png'
import couplestory from '../assets/couplestory.png'
import storyimg1 from '../assets/storyimg1.png'
import storyimg2 from '../assets/storyimg2.png'
import storyimg3 from '../assets/storyimg3.png'
import storyimg4 from '../assets/storyimg4.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getHomeProfilesAPI } from '../services/allAPI'






const Home = () => {
  const [allHomeProfiles, setAllHomeProfiles] = useState([])
  useEffect(() => {
    getAllHomeProfiles()
  }, [])
  const getAllHomeProfiles = async () => {
    try {
      const result = await getHomeProfilesAPI()
      if (result.status == 200) {
        setAllHomeProfiles(result.data)
      } else {

      }
    } catch (err) {
      console.log(err);

    }
  }

  console.log(allHomeProfiles);

  return (
    <>
      <Header />
      <div id='homemain' style={{ minHeight: '100vh' }} className="d-flex justify-content-evenly align-items-center">
        <div>
          <img style={{ height: '150px' }} src={landingimg1} alt="" />
          <p className='fs-1'>CELEBRATE LOVE <br /> WITH EVERAFTER</p>
          {
            sessionStorage.getItem("token") ?
              <Link to={'/dashboard'}><p style={{ color: 'black', fontSize: '20px' }} className='btn border'>Explore!! Your future</p> </Link>
              :
              <Link to={'./login'}><p style={{ color: 'black', fontSize: '20px' }} className='btn border'>Register Now!! Find your perfect match</p> </Link>

          }</div>
        <div style={{ position: 'relative' }} className='d-flex flex-column align-items-center'>
          <img width={'600px'} src={couple1} alt="no image" />
          <img height={'300px'} style={{ marginRight: '500px', position: 'absolute', marginTop: '220px' }} className='' src={couple2} alt="no image" />
        </div>
      </div>
      <div>
      </div>
      <div className='d-flex flex-column align-items-center mt-3'>
        <img width={'200px'} src={landingimg1} alt="no image" />
        <h1>OUR LOVE STORY</h1>
        <p className='fs-6' style={{ color: 'brown' }}>WHERE IT ALL BEGINS</p>
        <p className='text-center p-2'>Lorem ipsum dolor sit amet consectetur adippti voluptates cumque voluptas. Sequi, natus magnam dolor nulla <br /> explicabo doloremque. Expedita labore aut mollitia delectuoluptates cumque voluptas. Seqs.</p>
        <div className='d-flex justify-content-around align-items-center'>
          <div>
            <h3 className='text-end'> SIMONA WILDE </h3>
            <p className='text-end'>Varius vel pharetra vel turpis nunc eget <br /> lorem dolor sed lorem esi deusit.</p>
            <div className='icons d-flex justify-content-evenly mt-3'>
              <a href="" style={{ textDecoration: 'none', color: 'black' }} target='_blank'><i class="fa-brands fa-vimeo-v"></i></a>
              <a href="" style={{ textDecoration: 'none', color: 'black' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
              <a href="" style={{ textDecoration: 'none', color: 'black' }} target='_blank'><i class="fa-brands fa-pinterest"></i></a>
            </div>
          </div>
          <img width={'500px'} src={couplestory} alt="" />
          <div className='ms-3'>
            <h3>JOEL COOPER </h3>
            <p>Varius vel pharetra vel turpis nunc eget <br /> lorem dolor sed lorem esi deusit.</p>
            <div className='icons d-flex justify-content-evenly mt-3'>
              <a href="" style={{ textDecoration: 'none', color: 'black' }} target='_blank'><i class="fa-brands fa-vimeo-v"></i></a>
              <a href="" style={{ textDecoration: 'none', color: 'black' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
              <a href="" style={{ textDecoration: 'none', color: 'black' }} target='_blank'><i class="fa-brands fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 text-center'>
        <h1>Explore Your Perfect Match</h1>
        <Container>
          <Row>
            <Col>
              <div className="d-flex">
                {
                  allHomeProfiles?.map(profile => (
                    <div className="me-5">
                      <Profiles displayData={profile} />
                    </div>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ width: '100%' }} className="d-flex flex-column justify-cotent-center align-items-centern mb-5">
        <h1 className='text-center'>LOVE STORY TIMELINE</h1>
        <span className='text-center' style={{ color: 'brown' }}>TAKE A LOOK AT OUR STORY</span>
        <div className='mt-5'>
          <div className='d-flex justify-content-evenly align-items-center'>
            <img src={storyimg1} alt="no image" />
            <img src={storyimg2} alt="no image" />
            <img src={storyimg3} alt="no image" />
            <img src={storyimg4} alt="no image" />
          </div>
          <div className='d-flex justify-content-center align-items-center ' style={{ width: '100%' }}>
            <div style={{ width: '25%', }} className='m-2'>
              <p className='p-1 border rounded' style={{ borderColor: 'brown' }}></p>
            </div>
            <i className="fa-solid fa-gem pb-2 m-2 fs-4" style={{ color: 'brown' }}></i>
            <div style={{ width: '25%', }} className='m-2'>
              <p className='p-1 border rounded' style={{ borderColor: 'brown' }}></p>
            </div>
            <div style={{ width: '25%', }} className='m-2'>
              <p className='p-1 border rounded' style={{ borderColor: 'brown' }}></p>
            </div>
            <i className="fa-solid fa-gem pb-2 m-2 fs-4" style={{ color: 'brown' }}></i>
            <div style={{ width: '25%', }} className='m-2'>
              <p className='p-1 border rounded' style={{ borderColor: 'brown' }}></p>
            </div>
          </div>
          <div className='d-flex justify-content-around align-items-center text-center'>
            <div className='d-flex flex-column justify-content-center align-items-center text-center px-4'>
              <h4>First Meeting</h4>
              <span style={{ color: 'brown' }}>A friend's party</span>
              <p >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center text-center px-4'>
              <h4>Our First kiss</h4>
              <span style={{ color: 'brown' }}>Lace Como, Italy</span>
              <p >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center text-center px-4'>
              <h4>First Meeting</h4>
              <span style={{ color: 'brown' }}>A friend's party</span>
              <p >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center text-center px-4'>
              <h4>First Meeting</h4>
              <span style={{ color: 'brown' }}>A friend's party</span>
              <p >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720431!2d76.30948096449141!3d10.008813464707437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1731344277970!5m2!1sen!2sin" style={{ width: "100%", height: "450px", border: 'none', backgroundColor: 'white' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Home