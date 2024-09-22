import Accordion from "react-bootstrap/Accordion";
import { SiLoop } from "react-icons/si";
import { MdEvent } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { Image } from "react-bootstrap";
import forest from "../assets/forest.jpg";
import lights from "../assets/lights.jpg";
import mountains from "../assets/mountains.jpg";
import nature from "../assets/nature.jpg";
import snow from "../assets/snow.jpg";

export default function MAccordion() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <SiLoop className="text-dark me-3" />
            My Groups
          </Accordion.Header>
          <Accordion.Body>Some text..</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <MdEvent className="text-dark me-3" />
            My Events
          </Accordion.Header>
          <Accordion.Body>Some other text..</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <HiUserGroup className="text-dark me-3" />
            My Photos
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex gap-2">
              <div>
                <Image className="w-100 mb-2" src={forest} />
                <Image className="w-100 mb-2" src={snow} />
                <Image className="w-100 mb-2" src={nature} />
              </div>
              <div>
                <Image className="w-100 mb-2" src={lights} />
                <Image className="w-100 mb-2" src={mountains} />
                <Image className="w-100 mb-2" src={forest} />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
