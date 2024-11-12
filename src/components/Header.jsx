import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoimg from '../assets/logo.png'



function NavScrollExample() {
  return (
    <Navbar expand="lg" className="" style={{ width:'100%', border:'none',backgroundColor:'rgba(0,0,0,0.1)', position:'fixed',zIndex:"1"}} >
      <Container fluid>
        <Navbar.Brand href="./">
          <img height={'50px'} src={logoimg} alt="" />
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
      </Container>
    </Navbar>
  )
}

export default NavScrollExample;