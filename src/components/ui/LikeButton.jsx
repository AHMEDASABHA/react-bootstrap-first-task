import Button from "react-bootstrap/Button";
import { AiFillLike } from "react-icons/ai";

export default function LikeButton() {
  return (
    <>
      <Button
        variant="secondary"
        className="px-3 py-2 bg-secondary text-light mb-2"
      >
        <p className="d-inline me-2 fs-5">Like</p>
        <AiFillLike />
      </Button>{" "}
    </>
  );
}
