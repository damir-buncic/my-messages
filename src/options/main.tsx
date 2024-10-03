import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Navbar, NavbarBrand, Row } from "react-bootstrap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="d-flex flex-column gap-2">
      <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
        <Container fluid>
          <NavbarBrand>Options</NavbarBrand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>SOME OPTIONS</Col>
        </Row>
      </Container>
    </div>
  </StrictMode>
);
