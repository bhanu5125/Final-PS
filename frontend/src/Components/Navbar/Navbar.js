import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css";
import logo from "../Navbar/brain_waves.jpg"
import "../Css/Navbar.css";
import user_icon from "../Navbar/user-circle.png";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'

function TopNavbar() {

  const navigate = useNavigate()
  const location = useLocation()

  const [propt, setpropert] = useState(localStorage.getItem("name")) 
  const [signup, isSignup] = useState(false)

  useEffect(() => { 
    setpropert(localStorage.getItem("name"))
    if (localStorage.getItem("name") !== null ){
      isSignup(true)
    }
    if (localStorage.getItem("name") === ''){
      isSignup(false)
    }
  }, [setpropert, location])

  //console.log(localStorage.getItem('properties').length)
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {
      if (location.pathname === '/Login') {
        setIsHidden(true);
      }
      else{
        setIsHidden(false)
      }
    }, [location]);
  

  function handleclick(){
    localStorage.clear()
    isSignup(false)
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="title" href="/">
          <img src={logo} className="App-logo" alt="logo" /> BRAIN WAVES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="Sides">
              Home
            </Nav.Link>
              {signup ? (
                <div hidden={isHidden} className="d-flex gap-1">
                  {/*<img hidden={isHidden} src={propt.picture} alt="pp" height={"30px"} style={{"borderRadius": "50%"}}></img>*/}
                  <Nav.Link hidden={isHidden} href="/Dashboard" className="Sides2">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link hidden={isHidden} href="/gamepage" className="Sides2">
                    Activities
                  </Nav.Link> 
                  {/*<h6 hidden={isHidden} style={{"paddingTop": "12px","color": "#1890F0", "fontFamily": "poppins", "fontWeight": "600"}}>{propt}</h6>*/}
                  <div className="user-icon-container">
                  <img
                    src={user_icon}
                    alt="User"
                    width="40"
                    height="40"
                    className="user-icon"
                  />
                  <div className="user-dropdown">
                    <h6>Welcome back,</h6>
                    <h5> {propt}</h5>
                    <button style={{"borderRadius":"20px", "height":"45px"}} onClick={handleclick}>
                      Logout
                    </button>
                  </div>
                </div>
                </div>
              ) : (
                <Nav.Link hidden={isHidden} href="/Login" className="Sides2">
                Login
                </Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
