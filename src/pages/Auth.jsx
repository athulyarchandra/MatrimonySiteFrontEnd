import React from 'react'
import Button from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import loginImg from '../assets/auth.png'


const Auth = ({ insideRegister }) => {
  return (
    <>
      <div style={{ width: '100%',backgroundColor: 'rgb(245, 245, 245)' }} className=' d-flex justify-content-center align-items-center  p-5'>
        <div style={{ width: '900px',backgroundColor: 'white' }} className="row rounded p-2">
          <div style={{backgroundColor:'#f2cd52',borderRadius:'5px'}} className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h1 style={{fontSize:'50px'}} className='text-center'>Now</h1>
            <h1 style={{fontSize:'50px'}} className='text-center'>Find your</h1>
            <h1 style={{fontSize:'50px'}} className='text-center'>life</h1>
            <h1 style={{fontSize:'50px'}} className='text-center'>partner</h1>
            <p style={{fontSize:'25px', color:'brown'}} className='text-center'>Easy and fast.</p>
            <img width={'300px'} src={loginImg} alt="No image" />
          </div>
          <div className="col-lg-6">
            <p> START FOR FREE</p>
            {insideRegister ?
              <h4> SIGN UP TO EverAfter</h4>
              :
              <h4> SIGN IN TO EverAfter</h4>
            }
           
            { insideRegister?
              
              <span>Already a member? <Link to={'/login'}>Login</Link></span>
              :
              <span>New user? <Link to={'/register'}>Register</Link></span>
              } 
            <hr />
            <Form style={{lineHeight:'40px'}}>
              {insideRegister &&
                <><Form.Label controlId="floatingInputName">Name:</Form.Label><Form.Control type="text" placeholder="Enter your full name" /></>

              }
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" className="text-muted" label="Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings." />
              </Form.Group>
              {insideRegister ?
                <div>
                  <Button variant="primary" type="submit" className='mb-2'>
                    <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>REGISTER</Link>
                  </Button>
                </div> 
                :
                <div>
                <Button variant="primary" type="submit" className='mb-2'>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>LOGIN</Link>
                </Button>
              </div>
              }
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth