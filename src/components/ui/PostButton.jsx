import Button from "react-bootstrap/Button";
import { FaPencilAlt } from "react-icons/fa";

export default function PostButton(props) {
  return (
    <>
      <Button variant="secondary" className={props.className}>
        <p className="d-inline me-2 fs-5">Post</p>
        <FaPencilAlt />
      </Button>{" "}
    </>
  );
}
