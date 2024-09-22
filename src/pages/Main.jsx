import MainHeader from "../components/MainHeader";
import { Container, Row, Col } from "react-bootstrap";
import MCard from "../components/MCard";
import MAccordion from "../components/MAccordion";
import MToast from "../components/MToast";
import EnterPost from "../components/EnterPost";
// import Post from "../components/Post";
import avatar2 from "../assets/avatar2.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import forest from "../assets/forest.jpg";
import snow from "../assets/snow.jpg";
import UpComing from "../components/UpComing";
import FriendRequest from "../components/FriendRequest";
import { FaBug } from "react-icons/fa";

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
            <EnterPost />
            {/* <Post
              post={{
                name: "John Doe",
                avatarImg: avatar2,
                time: 1,
                post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                images: [
                  {
                    id: 1,
                    src: forest,
                    width: "50%",
                  },
                  {
                    id: 2,
                    src: snow,
                    width: "50%",
                  },
                ],
              }}
            /> */}
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
