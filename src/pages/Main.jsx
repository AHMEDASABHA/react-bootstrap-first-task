import MainHeader from "../components/MainHeader";
import { Container, Row, Col } from "react-bootstrap";
import MCard from "../components/MCard";
import MAccordion from "../components/MAccordion";
import MToast from "../components/MToast";

import UpComing from "../components/UpComing";
import FriendRequest from "../components/FriendRequest";
import { FaBug } from "react-icons/fa";
import Posts from "../components/Posts";

export default function MainPage() {
  return (
    <>
      <MainHeader />
      <Container fluid>
        <Row className="p-4">
          {/* <Col xs md={1}></Col> */}
          <Col xs={12} md={3}>
            <MCard />
            <MAccordion />
            <MToast />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Posts />
          </Col>
          <Col xs={12} md={3} className="text-center ">
            <UpComing />
            <FriendRequest />
            <div className="mb-3 p-4 bg-light">ADS</div>
            <div className="mb-3 p-5 bg-light">
              <FaBug className="fs-1" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <MainFooter /> */}
    </>
  );
}
