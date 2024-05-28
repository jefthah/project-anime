import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Logo Without Background.png";

function Navigationbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#2D2C2C" }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" style={{ height: "80px" , marginRight: "20px"}} />
          <Navbar.Brand href="#" className="d-flex flex-column">
            <h2 style={{ color: "white", margin: 0 }}>MyListAnime</h2>
            <span style={{ color: "white", fontSize: "16px", textAlign: "center" }}>Anime Rating</span>
          </Navbar.Brand>
        </div>
        <Form className="d-flex align-items-center">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button style={{ backgroundColor: '#5A2E98', color: '#FFFFFF', fontWeight: 'bold', boxShadow: 'none', border: 'none', fontSize: '16px', padding: '10px 20px' }}>Search</Button>
        </Form>
        <Nav className="d-flex align-items-center" navbarScroll>
          <Nav.Link href="#action1" style={{ color: "white", marginRight: "20px", fontSize: "20px" }}>
            Anime
          </Nav.Link>
          <Nav.Link href="#action2" style={{ color: "white", marginRight: "20px", fontSize: "20px" }}>
            News
          </Nav.Link>
          <Nav.Link href="#action3" style={{ color: "white", fontSize: "20px" }}>
            Movies
          </Nav.Link>
        </Nav>
        <Button style={{ backgroundColor: '#5A2E98', color: '#FFFFFF', fontWeight: 'bold', boxShadow: 'none', border: 'none', fontSize: '22px', padding: '10px 30px' }}>Sign in</Button>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
