import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import { BrandBar } from "../components/BrandBar";
import { DeviceList } from "../components/DeviceList";

export default function Store() {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>
        <Col md={8}>
          <BrandBar></BrandBar>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
}
