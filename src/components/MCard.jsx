import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaPencilAlt, FaHome, FaBirthdayCake } from "react-icons/fa";
import avatar from "../assets/avatar3.png";

export default function MCard() {
  return (
    <Card style={{ width: "18rem" }} className="p-2 w-100 mb-4">
      <Card.Body>
        <Card.Title className="text-center">Profile image</Card.Title>
      </Card.Body>
      <div className="w-100 text-center mb-3">
        <Card.Img
          src={avatar}
          className="card-img-top text-center img-avatar w-25"
          roundedCircle
        />
      </div>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <FaPencilAlt className="text-secondary me-3" />
          Designer, UI
        </ListGroup.Item>
        <ListGroup.Item>
          <FaHome className="text-secondary me-3" />
          London, UK
        </ListGroup.Item>
        <ListGroup.Item>
          <FaBirthdayCake className="text-secondary me-3" />
          April 1, 1988
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
