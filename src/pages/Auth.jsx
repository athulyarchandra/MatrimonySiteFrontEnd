import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/auth.png'
import { registerAPI, loginAPI } from '../services/allAPI'


const Auth = ({ insideRegister }) => {
  const [isLogined, setIslogined] = useState(false)
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    username: "", email: "", password: ""
  })
  console.log(inputData);

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log("Inside handleRegister");
    if (inputData.username && inputData.email && inputData.password) {
      // alert("Api call")
      try {
        const result = await registerAPI(inputData)
        console.log(result);
        if (result.status == 200) {
          alert(`Welcome ${result.data?.username},PLease Login`)
          navigate('/login')
          setInputData({ username: "", email: "", password: "" })
        } else {
          if (result.response.status == 406) {
            alert(result.response.data)
            setInputData({ username: "", email: "", password: "" })

          }
        }

      } catch (err) {
        console.log(err);

      }
    } else {
      alert("Fill form the form")
    }

  }
  const handelLogin = async (e) => {
    e.preventDefault()
    if (inputData.email && inputData.password) {
      try {
        const result = await loginAPI(inputData)
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setIslogined(true)
          setTimeout(() => {
            setInputData({ username: "", email: "", password: "" })
            navigate('/')
            setIslogined(false)
          }, 2000);
        } else {
          if (result.response.status == 404) {
            alert(result.response.data)
          }
        }
      } catch (err) {
        console.log(err);

      }
    } else {
      alert("Please provide required details")
    }

  }

  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'rgb(245, 245, 245)' }} className=' d-flex justify-content-center align-items-center flex-wrap  p-5'>
        <div style={{ width: '900px', backgroundColor: 'white' }} className="row rounded p-2">
          <div style={{ backgroundColor: '#f2cd52', borderRadius: '5px' }} className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h1 style={{ fontSize: '50px' }} className='text-center'>Now</h1>
            <h1 style={{ fontSize: '50px' }} className='text-center'>Find your</h1>
            <h1 style={{ fontSize: '50px' }} className='text-center'>life</h1>
            <h1 style={{ fontSize: '50px' }} className='text-center'>partner</h1>
            <p style={{ fontSize: '25px', color: 'brown' }} className='text-center'>Easy and fast.</p>
            <img width={'300px'} src={loginImg} alt="No image" />
          </div>
          <div className="col-lg-6">
            <p> START FOR FREE</p>
            {insideRegister ?
              <h4> SIGN UP TO EverAfter</h4>
              :
              <h4> SIGN IN TO EverAfter</h4>
            }

            {insideRegister ?

              <span>Already a member? <Link to={'/login'}>Login</Link></span>
              :
              <span>New user? <Link to={'/register'}>Register</Link></span>
            }
            <hr />
            <Form style={{ lineHeight: '40px' }}>
              {insideRegister &&
                <><Form.Label controlId="floatingInputName">Name:</Form.Label><Form.Control value={inputData.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} type="text" placeholder="Enter your full name" /></>

              }
              <Form.Label>Email: </Form.Label>
              <Form.Control value={inputData.email} onChange={e => setInputData({ ...inputData, email: e.target.value })} type="email" placeholder="Enter email" />
              <Form.Label>Password: </Form.Label>
              <Form.Control value={inputData.password} onChange={e => setInputData({ ...inputData, password: e.target.value })} type="password" placeholder="Enter password" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" className="text-muted" label="Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings." />
              </Form.Group>
              {insideRegister ?
                <div>
                  <Button onClick={handleRegister} variant="primary" type="submit" className='mb-2'>
                    <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }} >REGISTER</Link>
                  </Button>
                </div>
                :
                <div>
                  <Button onClick={handelLogin} variant="primary" type="submit" className='mb-2'>
                    LOGIN
                    {isLogined &&
                      <Spinner style={{ fontSize: '10px', height: '15px', width: '15px' }} className='ms-3' animation="border" variant="warning" />
                    }
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