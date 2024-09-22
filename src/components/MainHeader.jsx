import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { TiWorld } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "./ui/Avatar";
import avatar5 from "../assets/avatar5.png";
import { FaHome } from "react-icons/fa";

function MainHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <FaHome className="me-2 fs-4" />
          <span className="fs-4">Logo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link href="#">
              <TiWorld className="fs-4" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaUser className="fs-4" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaMessage className="fs-5" />
            </Nav.Link>
            <NavDropdown
              title={<IoMdNotifications className="fs-4" />}
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#">
                One new friend request
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                John Doe posted on your wall{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Jane likes your post</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <Avatar image={avatar5} width={"35px"} height={"35px"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
