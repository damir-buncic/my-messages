import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardHeader } from "react-bootstrap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Card>
      <CardHeader>Options</CardHeader>
      <CardBody>Some options</CardBody>
    </Card>
  </StrictMode>
);
