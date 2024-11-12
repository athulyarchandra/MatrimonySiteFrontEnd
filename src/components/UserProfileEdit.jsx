import React from 'react'
import Form from 'react-bootstrap/Form';

const UserProfileEdit = () => {
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'rgb(245, 245, 245)' }} className='d-flex flex-column align-items-center justify-content-center  p-5'>
        <div  style={{ backgroundColor: 'white' }} className=' px-5 py-3 rounded'>
          <div style={{ width: '900px' }} className='mt-3'>
            <Form>
              <h5 style={{color:'brown'}}>BASIC INFO</h5>
              <h3>Edit my profile</h3>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='m-3'>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
                <Form.Label className='m-3'>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Label className='m-3'>Phone:</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='m-3'>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
              </Form.Group>
            </Form>
          </div>
          <div className='mb-4 mt-4'>
           <p style={{backgroundColor:'black'}} className='p-1'></p>
          </div>
          <div style={{ width: '900px' }} className='mt-5'>
            <h5 style={{color:'brown'}}>BASIC INFO</h5>
            <h3> ADVANCED BIO</h3>
            <hr />
            <div className="row ">
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select aria-label="Default select example">
                      <Form.Label className='m-3'>City:</Form.Label>
                      <option>Gender:</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </Form.Select>
                    <Form.Label className='m-3'>Date of birth:</Form.Label>
                    <Form.Control type="text" placeholder="00-00-0000" />
                    <Form.Label className='m-3'>Height:</Form.Label>
                    <Form.Control type="number" placeholder="Enter your height" />
                    <Form.Label className='m-3'>Fathers name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your father's name" />
                  </Form.Group>
                </Form>
              </div>
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='m-3'>City:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                    <Form.Label className='m-3'>Age:</Form.Label>
                    <Form.Control type="text" placeholder="00" />
                    <Form.Label className='m-3'>weight:</Form.Label>
                    <Form.Control type="number" placeholder="Enter your height" />
                    <Form.Label className='m-3'>Mothers name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mother's name" />
                  </Form.Group>
                </Form>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='m-3'>Address:</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
              </Form>
            </div>

          </div>
          <div className='mb-4 mt-4'>
           <p style={{backgroundColor:'black'}} className='p-1'></p>
          </div>
          <div style={{ width: '900px' }} className='mt-5'>
            <h5 style={{color:'brown'}}>Job details JOB DETAILS</h5>
            <h3> JOB AND EDUCATION</h3>
            <hr />
            <div>
              <Form>
                <Form.Select aria-label="Default select example">
                  <option>Job type:</option>
                  <option value="1">Business</option>
                  <option value="2">Employee</option>
                  <option value="3">Government</option>
                  <option value="3">Jobless</option>
                </Form.Select>
                <Form.Label className='m-3 mt-2'>Company name:</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Label className='m-3'>Degree:</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Label className='m-3'>School:</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Label className='m-3'>College:</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form>
            </div>
          </div>
          <div style={{ width: '900px' }} className='mt-5'>
            <h5 style={{color:'brown'}}>MEDIA</h5>
            <h3> SOCIAL MEDIA</h3>
            <hr />
            <div className="row ">
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='m-3'>WhatsApp:</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label className='m-3'>Instagram:</Form.Label>
                    <Form.Control type="number" placeholder="" />
                  </Form.Group>
                </Form>
              </div>
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='m-3'>Facebook:</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label className='m-3'>X:</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Form>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                </Form.Group>
                <Form.Label className='m-3'>Linkedin:</Form.Label>
                <Form.Control type="number" placeholder="Enter your height" />
              </Form>
            </div>
          </div>
          <div className='mb-4 mt-4'>
           <p style={{backgroundColor:'black'}} className='p-1'></p>
          </div>
          <div style={{ width: '900px' }} className='mt-5'>
            <h5 style={{color:'brown'}}>INTERESTS</h5>
            <h3>HOBBIES</h3>
            <hr />
            <div>
              <Form>
                <Form.Label className='m-3'>HOBBIES:</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form>
            </div>
          </div>
          <div style={{ width: '900px' }} className='mt-5d-flex flex-column align-items-center mt-3 '>
            <button style={{ width: '100%',backgroundColor:'green',color:'white' }} className='btn'>SUBMIT</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default UserProfileEdit