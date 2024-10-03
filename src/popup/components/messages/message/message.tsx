import React from "react";
import { Priority } from "../../../../common/types";
import { Badge, Button, Card, CardBody, CardHeader, CardText } from "react-bootstrap";
import { Props } from "./message.types";

function getPriorityColor(priority: Priority): string {
  if (priority == Priority.high) {
    return "danger";
  }
  if (priority == Priority.normal) {
    return "warning";
  }
  return "secondary";
}

export const Message: React.FC<Props> = ({ data, onRead }) => {
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <Badge bg={getPriorityColor(data.priority)}>{data.priority}</Badge>
        <Button size="sm" onClick={() => onRead(data.id)}>
          Mark as read
        </Button>
      </CardHeader>
      <CardBody>
        <CardText data-testid="message-content">{data.content}</CardText>
      </CardBody>
    </Card>
  );
};
