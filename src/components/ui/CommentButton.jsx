import Button from "react-bootstrap/Button";
import { BiSolidMessageRounded } from "react-icons/bi";
export default function CommentButton() {
  return (
    <>
      <Button
        variant="secondary"
        className="px-3 py-2 bg-secondary text-light mb-2"
      >
        <p className="d-inline me-2 fs-5">Comment</p>
        <BiSolidMessageRounded />
      </Button>{" "}
    </>
  );
}
