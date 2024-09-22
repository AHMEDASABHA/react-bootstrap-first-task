import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Input() {
  const [value, setValue] = useState("Status: Feeling Blue");
  return (
    <div className="mb-3">
      <Form.Label htmlFor="status">Social Media template by w3.css</Form.Label>
      <Form.Control
        type="text"
        id="status"
        value={value}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
}
