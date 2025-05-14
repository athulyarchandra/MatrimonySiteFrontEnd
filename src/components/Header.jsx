import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoimg1 from '../assets/logo.png'
import React, { useContext } from 'react';
import { tokenAuthContext } from '../contexts/AuthContextAPI';




const NavScrollExample = ({  logout })=> {
  const{isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const clearlogout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')

 
  }
  return (
    <Navbar expand="lg" className={isHomePage ? 'transparent-navbar' : 'solid-navbar'} style={{ width:'100%', border:'none',backgroundColor:'rgba(0,0,0,0.1)', position:'fixed',zIndex:"1"}} >
      <Container fluid className='d-flex-lg align-items-center justify-content-between'>
        <Navbar.Brand href="./">
          <img height={'50px'} src={logoimg1} alt="" />
          <span >EverAfter</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./profiles">Profiles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={clearlogout} variant="dark" title='logout'><span><i className="fa-solid fa-right-from-bracket d-flex-lg align-items-center justify-content-center'"></i></span></Button>
      </Container>
    </Navbar>
    
  )
}

export default NavScrollExample;