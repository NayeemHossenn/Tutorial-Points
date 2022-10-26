import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-5"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            Tutorial Points
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/courses" className="text-decoration-none">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Blog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Toggle Theme
            </Nav.Link>
          </Nav>
          <Nav.Link className="text-white">
            {user?.uid ? (
              <>
                <span>{user?.displayName}</span>
                <Button
                  onClick={handleLogOut}
                  variant="secondary"
                  className="m-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="me-2">
                  Login
                </Link>
                <Link to="/register" className="me-2">
                  Register
                </Link>
              </>
            )}
          </Nav.Link>
          <Nav.Link>
            {user?.photoURL ? (
              <Image
                style={{ height: "30px" }}
                roundedCircle
                src={user?.photoURL}
              ></Image>
            ) : (
              <FaUser className="text-white"></FaUser>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
