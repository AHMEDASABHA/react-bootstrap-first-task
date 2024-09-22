import { Image, Button } from "react-bootstrap";
import nature from "../assets/nature.jpg";

export default function UpComing() {
  return (
    <div className="bg-light p-3 mb-3">
      <p className>Upcoming Events:</p>
      <Image src={nature} className="mb-3 w-100" />
      <p className="mb-3 fw-bold">Holiday</p>
      <p className="mb-3">Friday 15:00</p>
      <Button variant="secondary" className="w-100" style={{ height: "45px" }}>
        Info
      </Button>
    </div>
  );
}
