import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.png'
function Header() {
  return (
    <>
    <Navbar expand="lg" className="headbg" style={{zIndex:'10'}}>
    <Container>
      <Navbar.Brand href="#home"><img className='logoimg' src={Logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navlink">
          <Nav.Link id='homelk' href="#homelink">Home</Nav.Link>
          <Nav.Link id='work' href="#worklink">HOW IT WORKS</Nav.Link>
          <Nav.Link id='start' href="#startlink">START PLANNING</Nav.Link>
          <Nav.Link id='contact' href="#contactlink">CONTACT</Nav.Link>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header