import { Image, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import avatar6 from "../assets/avatar6.png";

export default function FriendRequest() {
  return (
    <div className="bg-light p-3 mb-3">
      <p className>Friend Request</p>
      <Image src={avatar6} className="w-50" />
      <p className="mb-3">Jane Doe</p>
      <div className="d-flex gap-2">
        <Button variant="success" style={{ width: "100%", height: "45px" }}>
          <FaCheck />
        </Button>
        <Button variant="danger" style={{ width: "100%", height: "45px" }}>
          <IoMdClose />
        </Button>
      </div>
    </div>
  );
}
